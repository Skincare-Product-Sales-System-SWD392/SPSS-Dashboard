import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';
import { Dropdown } from 'Common/Components/Dropdown';
import TableContainer from 'Common/TableContainer';
import Flatpickr from "react-flatpickr";
import moment from "moment";
import Select from 'react-select';

// Icons
import { Search, Eye, Trash2, Plus, MoreHorizontal, FileEdit, CheckCircle, Loader, X, Download, SlidersHorizontal, ImagePlus } from 'lucide-react';
import Modal from 'Common/Components/Modal';
import DeleteModal from 'Common/DeleteModal';

// Images
import dummyImg from "assets/images/users/user-dummy-img.jpg";

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
} from 'slices/users/thunk';

import {
    getAllSkinTypes
} from 'slices/skintype/thunk';

import {
    getAllRoles
} from 'slices/role/thunk';

import { ToastContainer } from 'react-toastify';
import filterDataBySearch from 'Common/filterDataBySearch';
import { getFirebaseBackend } from 'helpers/firebase_helper';

// Status Component
const Status = ({ item }: any) => {
    switch (item) {
        case "Active":
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">
                    <CheckCircle className="size-3 ltr:mr-1 rtl:ml-1" /> {item}
                </span>
            );
        case "Inactive":
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-red-100 border-red-200 text-red-500 dark:bg-red-500/20 dark:border-red-500/20">
                    <X className="size-3 ltr:mr-1 rtl:ml-1" /> {item}
                </span>
            );
        default:
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-500/20">
                    <Loader className="size-3 ltr:mr-1 rtl:ml-1" /> {item}
                </span>
            );
    }
};

// Add this helper function to format phone numbers
const formatPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) return '';
    
    // Remove any non-digit characters
    const digits = phoneNumber.replace(/\D/g, '');
    
    // Format with spaces (adjust the pattern as needed for your specific format)
    // This creates groups of 3-3-4 digits with spaces between
    return digits.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')
        // If the pattern doesn't match exactly, just add spaces every 3-4 digits
        || digits.replace(/(\d{3,4})(?=\d)/g, '$1 ').trim();
};

const Account = () => {
    const dispatch = useDispatch<any>();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [viewMode, setViewMode] = useState(false);

    const selectUserData = createSelector(
        (state: any) => state.User,
        (user) => ({
            users: user?.users?.data?.items || [],
            totalCount: user?.users?.data?.totalCount || 0,
            pageNumber: user?.users?.data?.pageNumber || 1,
            pageSize: user?.users?.data?.pageSize || 10,
            totalPages: user?.users?.data?.totalPages || 1,
            loading: user?.loading || false
        })
    );

    const selectSkinTypeData = createSelector(
        (state: any) => state.SkinType,
        (skinType) => ({
            skinTypes: skinType?.skinTypes?.data?.items || []
        })
    );

    const selectRoleData = createSelector(
        (state: any) => state.Role,
        (role) => ({
            roles: role?.roles?.data?.items || []
        })
    );

    const { users, totalCount, pageNumber, pageSize: apiPageSize, totalPages, loading } = useSelector(selectUserData);
    const { skinTypes } = useSelector(selectSkinTypeData);
    const { roles } = useSelector(selectRoleData);
    
    const [filteredUsers, setFilteredUsers] = useState<any>([]);
    const [userData, setUserData] = useState<any>();

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const [filters, setFilters] = useState({
        search: '',
        status: 'All',
        skinType: 'All',
        role: 'All'
    });

    // Add state for the file
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedImage, setSelectedImage] = useState<any>();

    // Toggle Modal
    const toggle = useCallback(() => {
        if (show) {
            setShow(false);
            setUserData(null);
            setIsEdit(false);
            setViewMode(false);
            setSelectedImage(null);
        } else {
            setShow(true);
            setUserData(null);
            setIsEdit(false);
            setViewMode(false);
            setSelectedImage(null);
        }
    }, [show]);

    // Get Data
    useEffect(() => {
        dispatch(getAllUsers({ page: currentPage, pageSize: pageSize }));
        dispatch(getAllSkinTypes({ page: 1, pageSize: 100 }));
        dispatch(getAllRoles({ page: 1, pageSize: 100 }));
    }, [dispatch, currentPage, pageSize]);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    // Delete Modal
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    // Delete Data
    const onClickDelete = (cell: any) => {
        setDeleteModal(true);
        if (cell.userId) {
            setUserData(cell);
        }
    };

    const handleDelete = () => {
        if (userData) {
            dispatch(deleteUser(userData.userId))
                .then((response: any) => {
                    // Check if the delete was successful
                    if (response && response.meta && response.meta.requestStatus === 'fulfilled') {
                        // Refresh the data after successful deletion
                        dispatch(getAllUsers({ page: currentPage, pageSize: pageSize }));
                        setDeleteModal(false);
                    }
                });
        }
    };

    // Update Data
    const handleUpdateDataClick = (ele: any) => {
        setUserData({ ...ele });
        setIsEdit(true);
        setViewMode(false);
        setShow(true);
    };

    // View Data
    const handleViewDataClick = (ele: any) => {
        setUserData({ ...ele });
        setViewMode(true);
        setIsEdit(true);
        setShow(true);
    };

    // Get skin type name by ID
    const getSkinTypeName = (skinTypeId: string | null) => {
        if (!skinTypeId) return 'None';
        const skinType = skinTypes.find((type: any) => type.id === skinTypeId);
        return skinType ? skinType.name : 'N/A';
    };

    // Get role name by ID
    const getRoleName = (roleId: string) => {
        const role = roles.find((r: any) => r.roleId === roleId);
        return role ? role.roleName : 'N/A';
    };

    // Update the handleImageChange function
    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (e: any) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Enhanced filter function that handles multiple filter criteria
    const applyFilters = useCallback(() => {
        let result = [...users];
        
        // Text search filter - enhanced to search across more fields including skin type and role names
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            result = result.filter((item: any) => {
                // Basic fields search
                const basicFieldsMatch = ['userName', 'surName', 'lastName', 'emailAddress', 'phoneNumber'].some(key => 
                    (item[key] || '').toString().toLowerCase().includes(searchTerm)
                );
                
                // Skin type name search
                const skinTypeName = getSkinTypeName(item.skinTypeId).toLowerCase();
                const skinTypeMatch = skinTypeName.includes(searchTerm);
                
                // Role name search
                const roleName = getRoleName(item.roleId).toLowerCase();
                const roleMatch = roleName.includes(searchTerm);
                
                // Status search
                const statusMatch = (item.status || '').toLowerCase().includes(searchTerm);
                
                return basicFieldsMatch || skinTypeMatch || roleMatch || statusMatch;
            });
        }
        
        // Status filter
        if (filters.status !== 'All') {
            result = result.filter((user: any) => user.status === filters.status);
        }
        
        // Skin type filter
        if (filters.skinType !== 'All') {
            result = result.filter((user: any) => user.skinTypeId === filters.skinType);
        }
        
        // Role filter
        if (filters.role !== 'All') {
            result = result.filter((user: any) => user.roleId === filters.role);
        }
        
        setFilteredUsers(result);
    }, [users, filters, getSkinTypeName, getRoleName]);
    
    // Apply filters whenever filters or users change
    useEffect(() => {
        applyFilters();
    }, [applyFilters, users]);
    
    // Handle search input change
    const handleSearchChange = (e: any) => {
        setFilters(prev => ({ ...prev, search: e.target.value }));
    };
    
    // Handle status filter change
    const handleStatusChange = (selectedOption: any) => {
        setFilters(prev => ({ ...prev, status: selectedOption.value }));
    };
    
    // Handle skin type filter change
    const handleSkinTypeChange = (selectedOption: any) => {
        setFilters(prev => ({ ...prev, skinType: selectedOption.value }));
    };
    
    // Handle role filter change
    const handleRoleChange = (selectedOption: any) => {
        setFilters(prev => ({ ...prev, role: selectedOption.value }));
    };

    // Update the validation onSubmit function
    const validation: any = useFormik({
        enableReinitialize: true,
        initialValues: {
            avatarUrl: (userData && userData.avatarUrl) || '',
            userName: (userData && userData.userName) || '',
            surName: (userData && userData.surName) || '',
            lastName: (userData && userData.lastName) || '',
            emailAddress: (userData && userData.emailAddress) || '',
            phoneNumber: (userData && userData.phoneNumber) || '',
            password: (userData && userData.password) || '',
            status: (userData && userData.status) || 'Active',
            skinTypeId: (userData && userData.skinTypeId) || '',
            roleId: (userData && userData.roleId) || '',
        },
        validationSchema: Yup.object({
            userName: Yup.string().required("Please Enter Username"),
            surName: Yup.string().required("Please Enter Surname"),
            lastName: Yup.string().required("Please Enter Last Name"),
            emailAddress: Yup.string().email("Invalid email format").required("Please Enter Email"),
            phoneNumber: Yup.string().required("Please Enter Phone Number"),
            password: Yup.string().required("Please Enter Password"),
            status: Yup.string().required("Please Select Status"),
            roleId: Yup.string().required("Please Select Role")
        }),
        onSubmit: async (values) => {
            try {
                let avatarUrl = values.avatarUrl;
                
                // Upload image to Firebase if a new file is selected
                if (selectedFile) {
                    const firebaseBackend = getFirebaseBackend();
                    avatarUrl = await firebaseBackend.uploadFile(selectedFile, "SPSS/User-Image");
                }
                
                // Format the phone number and handle skinTypeId
                const formattedValues = {
                    ...values,
                    phoneNumber: values.phoneNumber.replace(/\s/g, ''),
                    skinTypeId: values.skinTypeId === '' ? null : values.skinTypeId
                };
                
                if (isEdit) {
                    const updateUserData = {
                        id: userData ? userData.userId : '',
                        data: {
                            ...formattedValues,
                            avatarUrl: avatarUrl
                        },
                    };
                    
                    // Dispatch update and then refresh data
                    dispatch(updateUser(updateUserData))
                        .then((response: any) => {
                            if (response && response.meta && response.meta.requestStatus === 'fulfilled') {
                                // Refresh the data after successful update
                                dispatch(getAllUsers({ page: currentPage, pageSize: pageSize }));
                            }
                        });
                } else {
                    const newUser = {
                        ...formattedValues,
                        avatarUrl: avatarUrl
                    };
                    
                    // Dispatch add and then refresh data
                    dispatch(addUser(newUser))
                        .then((response: any) => {
                            if (response && response.meta && response.meta.requestStatus === 'fulfilled') {
                                // Refresh the data after successful add
                                dispatch(getAllUsers({ page: currentPage, pageSize: pageSize }));
                            }
                        });
                }
                toggle();
            } catch (error) {
                console.error("Error uploading image:", error);
                // You might want to show an error toast here
            }
        },
    });

    // Table columns
    const columns = useMemo(() => [
        {
            header: "Name",
            accessorKey: "userName",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-10 font-medium rounded-full shrink-0 bg-slate-200 text-slate-800 dark:text-zink-50 dark:bg-zink-600">
                        {cell.row.original.avatarUrl ? 
                            <img src={cell.row.original.avatarUrl} alt="" className="h-10 w-10 rounded-full object-cover" /> : 
                            (cell.getValue().charAt(0).toUpperCase())}
                    </div>
                    <div className="grow">
                        <h6 className="mb-1"><Link to="#!" className="name">{cell.getValue()}</Link></h6>
                        <p className="text-slate-500 dark:text-zink-200">{`${cell.row.original.surName} ${cell.row.original.lastName}`}</p>
                    </div>
                </div>
            ),
        },
        {
            header: "Email",
            accessorKey: "emailAddress",
            enableColumnFilter: false,
        },
        {
            header: "Phone Number",
            accessorKey: "phoneNumber",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <span>{formatPhoneNumber(cell.getValue())}</span>
            ),
        },
        {
            header: "Skin Type",
            accessorKey: "skinTypeId",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <span>{getSkinTypeName(cell.getValue())}</span>
            ),
        },
        {
            header: "Role",
            accessorKey: "roleId",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <span>{cell.getValue() ? getRoleName(cell.getValue()) : 'N/A'}</span>
            ),
        },
        {
            header: "Status",
            accessorKey: "status",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <Status item={cell.getValue()} />
            ),
        },
        {
            header: "Action",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <Dropdown className="relative">
                    <Dropdown.Trigger className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="usersAction1">
                        <MoreHorizontal className="size-3" />
                    </Dropdown.Trigger>
                    <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby="usersAction1">
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
                                const userData = cell.row.original;
                                handleViewDataClick(userData);
                            }}><Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Overview</span></Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"
                                onClick={() => {
                                    const data = cell.row.original;
                                    handleUpdateDataClick(data);
                                }}>
                                <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span></Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
                                const userData = cell.row.original;
                                onClickDelete(userData);
                            }}><Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span></Link>
                        </li>
                    </Dropdown.Content>
                </Dropdown>
            ),
        }
    ], [skinTypes, roles]);

    // Prepare options for dropdowns
    const statusOptions = [
        { value: 'All', label: 'All Status' },
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' },
    ];
    
    const skinTypeOptions = useMemo(() => [
        { value: 'All', label: 'All Skin Types' },
        ...skinTypes.map((type: any) => ({ 
            value: type.id, 
            label: type.name 
        }))
    ], [skinTypes]);
    
    const roleOptions = useMemo(() => [
        { value: 'All', label: 'All Roles' },
        ...roles.map((role: any) => ({ 
            value: role.roleId, 
            label: role.roleName 
        }))
    ], [roles]);

    // Handle pagination
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // In your component, add this console log
    useEffect(() => {
        console.log("Current Redux State:", {
            users,
            totalCount,
            pageNumber,
            pageSize,
            totalPages,
            loading
        });
    }, [users, totalCount, pageNumber, pageSize, totalPages, loading]);

    return (
        <React.Fragment>
            <div className="page-content">
                <BreadCrumb title="Account" pageTitle="User" />
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                    <div className="xl:col-span-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <h6 className="text-15 grow">Account Details</h6>
                                    <div className="flex gap-2">
                                        <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={toggle}>
                                            <Plus className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Add Account</span>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="!py-3.5 card-body border-y border-dashed border-slate-200 dark:border-zink-500 bg-white">
                                    <form action="#!">
                                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                                            <div className="relative xl:col-span-3">
                                                <input 
                                                    type="text" 
                                                    className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                                    placeholder="Search for name, email, phone number etc..." 
                                                    autoComplete="off" 
                                                    onChange={handleSearchChange} 
                                                />
                                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                                            </div>
                                            <div className="xl:col-span-3">
                                                <Select
                                                    className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                    options={statusOptions}
                                                    isSearchable={false}
                                                    defaultValue={statusOptions[0]}
                                                    onChange={handleStatusChange}
                                                    id="status-filter"
                                                />
                                            </div>
                                            <div className="xl:col-span-3">
                                                <Select
                                                    className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                    options={skinTypeOptions}
                                                    isSearchable={true}
                                                    defaultValue={skinTypeOptions[0]}
                                                    onChange={handleSkinTypeChange}
                                                    id="skin-type-filter"
                                                />
                                            </div>
                                            <div className="xl:col-span-3">
                                                <Select
                                                    className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                    options={roleOptions}
                                                    isSearchable={true}
                                                    defaultValue={roleOptions[0]}
                                                    onChange={handleRoleChange}
                                                    id="role-filter"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                                <div className="overflow-x-auto">
                                    <TableContainer
                                        isPagination={true}
                                        columns={columns}
                                        data={filteredUsers || []}
                                        customPageSize={pageSize}
                                        divclassName={"overflow-x-auto"}
                                        tableclassName={"w-full whitespace-nowrap"}
                                        theadclassName={"bg-white ltr:text-left rtl:text-right"}
                                        trclassName={"border-y border-slate-200 dark:border-zink-500"}
                                        thclassName={"px-3.5 py-2.5 font-semibold border-y border-slate-200 dark:border-zink-500"}
                                        tdclassName={"px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"}
                                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                                        currentPage={currentPage}
                                        pageCount={totalPages}
                                        onPageChange={(page: number) => setCurrentPage(page)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />

            {/* User Modal */}
            <Modal show={show} onHide={toggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{isEdit ? (viewMode ? "View Account" : "Edit Account") : "Add Account"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="mb-3">
                            <div className="relative size-24 mx-auto mb-4 rounded-full shadow-md bg-slate-100 dark:bg-zink-500">
                                <img src={selectedImage || validation.values.avatarUrl || dummyImg} alt="" className="size-full rounded-full" />
                                {!viewMode && (
                                    <div className="absolute bottom-0 ltr:right-0 rtl:left-0 flex items-center justify-center size-8 rounded-full cursor-pointer bg-slate-100 dark:bg-zink-600">
                                        <input type="file" className="absolute inset-0 size-full opacity-0 cursor-pointer" onChange={handleImageChange} />
                                        <ImagePlus className="size-4 text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-600" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                            <div className="xl:col-span-6">
                                <label htmlFor="userName" className="inline-block mb-2 text-base font-medium">
                                    Username <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="userName"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter username"
                                    onChange={validation.handleChange}
                                    value={validation.values.userName || ""}
                                    disabled={viewMode}
                                />
                                {validation.touched.userName && validation.errors.userName ? (
                                    <p className="text-red-500">{validation.errors.userName}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="surName" className="inline-block mb-2 text-base font-medium">
                                    Surname <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="surName"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter surname"
                                    onChange={validation.handleChange}
                                    value={validation.values.surName || ""}
                                    disabled={viewMode}
                                />
                                {validation.touched.surName && validation.errors.surName ? (
                                    <p className="text-red-500">{validation.errors.surName}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="lastName" className="inline-block mb-2 text-base font-medium">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter last name"
                                    onChange={validation.handleChange}
                                    value={validation.values.lastName || ""}
                                    disabled={viewMode}
                                />
                                {validation.touched.lastName && validation.errors.lastName ? (
                                    <p className="text-red-500">{validation.errors.lastName}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="emailAddress" className="inline-block mb-2 text-base font-medium">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="emailAddress"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter email"
                                    onChange={validation.handleChange}
                                    value={validation.values.emailAddress || ""}
                                    disabled={viewMode}
                                />
                                {validation.touched.emailAddress && validation.errors.emailAddress ? (
                                    <p className="text-red-500">{validation.errors.emailAddress}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="phoneNumber" className="inline-block mb-2 text-base font-medium">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter phone number"
                                    onChange={validation.handleChange}
                                    value={validation.values.phoneNumber || ""}
                                    disabled={viewMode}
                                />
                                {validation.touched.phoneNumber && validation.errors.phoneNumber ? (
                                    <p className="text-red-500">{validation.errors.phoneNumber}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="password" className="inline-block mb-2 text-base font-medium">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter password"
                                    onChange={validation.handleChange}
                                    value={validation.values.password || ""}
                                    disabled={viewMode}
                                />
                                {validation.touched.password && validation.errors.password ? (
                                    <p className="text-red-500">{validation.errors.password}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="status" className="inline-block mb-2 text-base font-medium">
                                    Status <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="status"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    onChange={validation.handleChange}
                                    value={validation.values.status || "Active"}
                                    disabled={viewMode}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                                {validation.touched.status && validation.errors.status ? (
                                    <p className="text-red-500">{validation.errors.status}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="skinTypeId" className="inline-block mb-2 text-base font-medium">
                                    Skin Type
                                </label>
                                <select
                                    id="skinTypeId"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    onChange={validation.handleChange}
                                    value={validation.values.skinTypeId || ""}
                                    disabled={viewMode}
                                >
                                    <option value="">None</option>
                                    {skinTypes.map((type: any) => (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="roleId" className="inline-block mb-2 text-base font-medium">
                                    Role <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="roleId"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    onChange={validation.handleChange}
                                    value={validation.values.roleId || ""}
                                    disabled={viewMode}
                                >
                                    <option value="">Select Role</option>
                                    {roles.map((role: any) => (
                                        <option key={role.roleId} value={role.roleId}>{role.roleName}</option>
                                    ))}
                                </select>
                                {validation.touched.roleId && validation.errors.roleId ? (
                                    <p className="text-red-500">{validation.errors.roleId}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                type="button"
                                className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
                                onClick={toggle}
                            >
                                Cancel
                            </button>
                            {!viewMode && (
                                <button
                                    type="submit"
                                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                >
                                    {isEdit ? "Update" : "Add"}
                                </button>
                            )}
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Account;