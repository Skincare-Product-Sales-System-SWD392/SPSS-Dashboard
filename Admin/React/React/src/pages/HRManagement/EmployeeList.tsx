import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Flatpickr from "react-flatpickr";
import moment from "moment";

// Icons
import { Search, Plus, Trash2, Eye, Pencil, ImagePlus } from 'lucide-react';

import dummyImg from "assets/images/users/user-dummy-img.jpg";

import TableContainer from 'Common/TableContainer';
import { Link } from 'react-router-dom';

import DeleteModal from 'Common/DeleteModal';
import Modal from 'Common/Components/Modal';

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import {
    getEmployee as onGetEmployee,
    addEmployee as onAddEmployee,
    updateEmployee as onUpdateEmployee,
    deleteEmployee as onDeleteEmployee
} from 'slices/thunk';
import { ToastContainer } from 'react-toastify';

const EmployeeList = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.HRManagment,
        (state) => ({
            dataList: state.employeelist
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Image
    const [selectedImage, setSelectedImage] = useState<any>();

    const handleImageChange = (event: any) => {
        const fileInput = event.target;
        if (fileInput.files && fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = (e: any) => {
                validation.setFieldValue('img', e.target.result);
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Get Data
    useEffect(() => {
        dispatch(onGetEmployee());
    }, [dispatch]);

    useEffect(() => {
        setData(dataList);
    }, [dataList]);

    // Delete Modal
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    // Delete Data
    const onClickDelete = (cell: any) => {
        setDeleteModal(true);
        if (cell.id) {
            setEventData(cell);
        }
    };

    const handleDelete = () => {
        if (eventData) {
            dispatch(onDeleteEmployee(eventData.id));
            setDeleteModal(false);
        }
    };
    // 

    // Update Data
    const handleUpdateDataClick = (ele: any) => {
        setEventData({ ...ele });
        setIsEdit(true);
        setShow(true);
    };

    // validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            employeeId: (eventData && eventData.employeeId) || '',
            name: (eventData && eventData.name) || '',
            img: (eventData && eventData.img) || '',
            designation: (eventData && eventData.designation) || '',
            email: (eventData && eventData.email) || '',
            phone: (eventData && eventData.phone) || '',
            location: (eventData && eventData.location) || '',
            experience: (eventData && eventData.experience) || '',
            joinDate: (eventData && eventData.joinDate) || ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Name"),
            img: Yup.string().required("Please Add Image"),
            designation: Yup.string().required("Please Enter Designation"),
            email: Yup.string().required("Please Enter Email"),
            phone: Yup.string().required("Please Enter Phone"),
            location: Yup.string().required("Please Enter Location"),
            experience: Yup.string().required("Please Enter Experience"),
            joinDate: Yup.string().required("Please Enter Date")
        }),

        onSubmit: (values) => {
            if (isEdit) {
                const updateData = {
                    id: eventData ? eventData.id : 0,
                    ...values,
                };
                // update user
                dispatch(onUpdateEmployee(updateData));
            } else {
                const newData = {
                    ...values,
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    employeeId: "#TWE1001" + (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    experience: values.experience + " year"
                };
                // save new user
                dispatch(onAddEmployee(newData));
            }
            toggle();
        },
    });

    // 
    const toggle = useCallback(() => {
        if (show) {
            setShow(false);
            setEventData("");
            setIsEdit(false);
            setSelectedImage("");
        } else {
            setShow(true);
            setEventData("");
            setSelectedImage("");
            validation.resetForm();
        }
    }, [show, validation]);

    // columns
    const columns = useMemo(() => [
        {
            header: "Employee ID",
            accessorKey: "employeeId",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Link to="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">{cell.getValue()}</Link>
            ),
        },
        {
            header: "Name",
            accessorKey: "name",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Link to="#!" className="flex items-center gap-3">
                    <div className="size-6 rounded-full shrink-0 bg-slate-100">
                        <img src={cell.row.original.img} alt="" className="h-6 rounded-full" />
                    </div>
                    <h6 className="grow">{cell.getValue()}</h6>
                </Link>
            ),
        },
        {
            header: "Designation",
            accessorKey: "designation",
            enableColumnFilter: false
        },
        {
            header: "Email Id",
            accessorKey: "email",
            enableColumnFilter: false,
        },
        {
            header: "Phone Number",
            accessorKey: "phone",
            enableColumnFilter: false,
        },
        {
            header: "Location",
            accessorKey: "location",
            enableColumnFilter: false,
        },
        {
            header: "Experience",
            accessorKey: "experience",
            enableColumnFilter: false,
        },
        {
            header: "Joining Date",
            accessorKey: "joinDate",
            enableColumnFilter: false,
        },
        {
            header: "Action",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <div className="flex gap-3">
                    <Link className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 text-slate-500 hover:text-custom-500 hover:bg-custom-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-custom-500/20 dark:hover:text-custom-500" to="/pages-account"><Eye className="inline-block size-3" /> </Link>
                    <Link to="#!" data-modal-target="addEmployeeModal" className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md edit-item-btn bg-slate-100 text-slate-500 hover:text-custom-500 hover:bg-custom-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-custom-500/20 dark:hover:text-custom-500" onClick={() => {
                        const data = cell.row.original;
                        handleUpdateDataClick(data);
                    }}>
                        <Pencil className="size-4" /></Link>
                    <Link to="#!" className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md remove-item-btn bg-slate-100 text-slate-500 hover:text-custom-500 hover:bg-custom-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-custom-500/20 dark:hover:text-custom-500" onClick={() => {
                        const data = cell.row.original;
                        onClickDelete(data);
                    }}><Trash2 className="size-4" /></Link>
                </div>
            ),
        }
    ], []
    );

    return (
        <React.Fragment>
            <BreadCrumb title='Employee List' pageTitle='HR Management' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="card" id="employeeTable">
                <div className="card-body">
                    <div className="flex items-center gap-3 mb-4">
                        <h6 className="text-15 grow">Employee (<b className="total-Employs">{data.length}</b>)</h6>
                        <div className="shrink-0">
                            <Link to="#!" data-modal-target="addEmployeeModal" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 add-employee" onClick={toggle}>
                                <Plus className="inline-block size-4" /> <span className="align-middle">Add Employee</span>
                            </Link>
                        </div>
                    </div>
                    {data && data.length > 0 ?
                        <TableContainer
                            isPagination={true}
                            columns={(columns || [])}
                            data={(data || [])}
                            customPageSize={7}
                            divclassName="-mx-5 overflow-x-auto"
                            tableclassName="w-full whitespace-nowrap"
                            theadclassName="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600"
                            thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500"
                            tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                            PaginationClassName="flex flex-col items-center gap-4 px-4 mt-4 md:flex-row"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 299+ Employee We did not find any Employee for you search.</p>
                            </div>
                        </div>)}
                </div>
            </div>

            {/* Employee Modal */}
            <Modal show={show} onHide={toggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!isEdit ? "Edit Employee" : "Add Employee"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form className="create-form" id="create-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                        }}
                    >
                        <input type="hidden" value="" name="id" id="id" />
                        <input type="hidden" value="add" name="action" id="action" />
                        <input type="hidden" id="id-field" />
                        <div id="alert-error-msg" className="hidden px-4 py-3 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-500/20"></div>
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <div className="relative size-24 mx-auto mb-4 rounded-full shadow-md bg-slate-100 profile-user dark:bg-zink-500">
                                    <img src={selectedImage || validation.values.img || dummyImg} alt="" className="object-cover w-full h-full rounded-full user-profile-image" />
                                    <div className="absolute bottom-0 flex items-center justify-center size-8 rounded-full ltr:right-0 rtl:left-0 profile-photo-edit">
                                        <input
                                            id="profile-img-file-input"
                                            name="profile-img-file-input"
                                            type="file"
                                            accept="image/*"
                                            className="hidden profile-img-file-input"
                                            onChange={handleImageChange} />
                                        <label htmlFor="profile-img-file-input" className="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit">
                                            <ImagePlus className="size-4 text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500" />
                                        </label>
                                    </div>
                                </div>
                                {validation.touched.img && validation.errors.img ? (
                                    <p className="text-red-400">{validation.errors.img}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="employeeId" className="inline-block mb-2 text-base font-medium">Employee ID</label>
                                <input type="text" id="employeeId" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    value={validation.values.employeeId || "#TWE1001557"} disabled />
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="employeeInput" className="inline-block mb-2 text-base font-medium">Name</label>
                                <input type="text" id="employeeInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Employee name"
                                    name="name"
                                    onChange={validation.handleChange}
                                    value={validation.values.name || ""}
                                />
                                {validation.touched.name && validation.errors.name ? (
                                    <p className="text-red-400">{validation.errors.name}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="emailInput" className="inline-block mb-2 text-base font-medium">Email</label>
                                <input type="text" id="emailInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="example@tailwick.com"
                                    name="email"
                                    onChange={validation.handleChange}
                                    value={validation.values.email || ""}
                                />
                                {validation.touched.email && validation.errors.email ? (
                                    <p className="text-red-400">{validation.errors.email}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="phoneNumberInput" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                                <input type="text" id="phoneNumberInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter phone number"
                                    name="phone"
                                    onChange={validation.handleChange}
                                    value={validation.values.phone || ""}
                                />
                                {validation.touched.phone && validation.errors.phone ? (
                                    <p className="text-red-400">{validation.errors.phone}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="locationInput" className="inline-block mb-2 text-base font-medium">Location</label>
                                <input type="text" id="locationInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter location"
                                    name="location"
                                    onChange={validation.handleChange}
                                    value={validation.values.location || ""}
                                />
                                {validation.touched.location && validation.errors.location ? (
                                    <p className="text-red-400">{validation.errors.location}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="joiningDateInput" className="inline-block mb-2 text-base font-medium">Joining Date</label>
                                <Flatpickr
                                    id="joiningDateInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Select date'
                                    name='joinDate'
                                    onChange={(date: any) => validation.setFieldValue("joinDate", moment(date[0]).format("DD MMMM ,YYYY"))}
                                    value={validation.values.joinDate || ''}
                                />
                                {validation.touched.joinDate && validation.errors.joinDate ? (
                                    <p className="text-red-400">{validation.errors.joinDate}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="experienceInput" className="inline-block mb-2 text-base font-medium">Experience</label>
                                <input type="number" id="experienceInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="0.0"
                                    name="experience"
                                    onChange={validation.handleChange}
                                    value={validation.values.experience || ""}
                                />
                                {validation.touched.experience && validation.errors.experience ? (
                                    <p className="text-red-400">{validation.errors.experience}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="designationSelect" className="inline-block mb-2 text-base font-medium">Designation</label>
                                <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices data-choices-search-false id="typeSelect"
                                    name="designation"
                                    onChange={validation.handleChange}
                                    value={validation.values.designation || ""}
                                >
                                    <option value="Angular Developer">Angular Developer</option>
                                    <option value="React Developer">React Developer</option>
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="Web Designer">Web Designer</option>
                                    <option value="Team Leader">Team Leader</option>
                                    <option value="VueJs Developer">VueJs Developer</option>
                                    <option value="NodeJS Developer">NodeJS Developer</option>
                                    <option value="ASP.Net Developer">ASP.Net Developer</option>
                                    <option value="UI / UX Designer">UI / UX Designer</option>
                                </select>
                                {validation.touched.designation && validation.errors.designation ? (
                                    <p className="text-red-400">{validation.errors.designation}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button type="reset" id="close-modal" data-modal-close="addEmployeeModal" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Cancel</button>
                            <button type="submit" id="addNew" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!isEdit ? "Update" : "Add Employee"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    );
};

export default EmployeeList;
