import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";

// icons
import { Search, Plus, Heart, MoreHorizontal, Eye, FileEdit, Trash2, UploadCloud } from 'lucide-react';
import { Dropdown } from "Common/Components/Dropdown";
import { Link } from "react-router-dom";
import DeleteModal from "Common/DeleteModal";
import Modal from "Common/Components/Modal";

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import {
    getSellers as onGetSellers,
    addSellers as onAddSellers,
    updateSellers as onUpdateSellers,
    deleteSellers as onDeleteSellers
} from 'slices/thunk';
import Dropzone from "react-dropzone";
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";
import Pagination from "Common/Pagination";

const Sellers = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.Ecommerce,
        (state) => ({
            dataList: state.sellers
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Get Data
    useEffect(() => {
        dispatch(onGetSellers());
    }, [dispatch]);

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
            dispatch(onDeleteSellers(eventData.id));
            setDeleteModal(false);
        }
    };

    // Update Data
    const handleUpdateDataClick = (ele: any) => {
        setEventData({ ...ele });
        setSelectfiles({ priview: ele.logo, path: ele.companyName });
        setIsEdit(true);
        setShow(true);
    };

    // validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            logo: (eventData && eventData.logo) || '',
            companyName: (eventData && eventData.companyName) || '',
            name: (eventData && eventData.name) || '',
            sales: (eventData && eventData.sales) || '',
            products: (eventData && eventData.products) || '',
            revenue: (eventData && eventData.revenue) || ''
        },
        validationSchema: Yup.object({
            logo: Yup.string().required("Please Add Logo"),
            companyName: Yup.string().required("Please Enter Name"),
            name: Yup.string().required("Please Enter Name"),
        }),

        onSubmit: (values) => {
            if (isEdit) {
                const updateData = {
                    id: eventData ? eventData.id : 0,
                    ...values,
                    logo: values.logo.priview,
                };
                // update user
                dispatch(onUpdateSellers(updateData));
            } else {
                const newData = {
                    ...values,
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    logo: values.logo.priview,
                    sales: "9.2k",
                    products: "67",
                    revenue: "$746.1k",
                };
                // save new user
                dispatch(onAddSellers(newData));
            }
            toggle();
        },
    });

    // 
    const toggle = useCallback(() => {
        if (show) {
            setShow(false);
            setEventData("");
            setSelectfiles("");
            setIsEdit(false);
        } else {
            setShow(true);
            setEventData("");
            setSelectfiles("");
            validation.resetForm();
        }
    }, [show, validation]);

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['name', 'companyName'];
        filterDataBySearch(dataList, search, keysToSearch, setData);
    };

    // columns

    const btnFav = (ele: any) => {

        if (ele.closest("a").classList.contains("active")) {
            ele.closest("a").classList.remove("active");
        } else {
            ele.closest("a").classList.add("active");
        }
    };

    // Dropzone
    const [selectfiles, setSelectfiles] = useState<any>();

    const handleAcceptfiles = (files: any) => {
        const newImages = files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
            });
        });
        setSelectfiles(newImages[0]);
    };

    // Pagination
    const [currentPage, setCurrentPage] = useState<any>(1);

    const perPageData = 8;
    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;
    const currentdata = useMemo(() => dataList?.slice(indexOfFirst, indexOfLast), [dataList, indexOfFirst, indexOfLast]);

    useEffect(() => {
        setData(currentdata);
    }, [currentdata]);

    return (
        <React.Fragment>
            <BreadCrumb title='Sellers' pageTitle='Ecommerce' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <form action="#!" className="mb-5">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                    <div className="relative lg:col-span-3">
                        <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                        <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                    </div>
                    <div className="ltr:lg:text-right rtl:lg:text-left lg:col-span-3 lg:col-start-10">
                        <button data-modal-target="addSellerModal" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={toggle}>
                            <Plus className="inline-block size-4" /> <span className="align-middle">Add Seller</span>
                        </button>
                    </div>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-12 gap-x-5">
                {(data || []).map((item: any, key: number) => (<div className="2xl:col-span-3" key={key}>
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="grow">
                                    <Link to="#!" className={`group/item toggle-button ${item.isFav && "active"}`} onClick={(e) => btnFav(e.target)}>
                                        <Heart className="size-5 text-slate-500 dark:text-zink-200 fill-slate-200 dark:fill-zink-500 transition-all duration-150 ease-linear group-[.active]/item:text-yellow-500 dark:group-[.active]/item:text-yellow-500 group-[.active]/item:fill-yellow-200 dark:group-[.active]/item:fill-yellow-500/20 group-hover/item:text-yellow-500 dark:group-hover/item:text-yellow-500 group-hover/item:fill-yellow-200 dark:group-hover/item:fill-yellow-500/20" />
                                    </Link>
                                </div>
                                <Dropdown className="relative dropdown shrink-0">
                                    <Dropdown.Trigger id="sellersAction1" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                                        <MoreHorizontal className="size-3" />
                                    </Dropdown.Trigger>
                                    <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="sellersAction1">
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><Eye className="inline-block size-3 mr-1" /> <span className="align-middle">Overview</span></Link>
                                        </li>
                                        <li>
                                            <Link data-modal-target="addSellerModal" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
                                                handleUpdateDataClick(item);
                                            }}>
                                                <FileEdit className="inline-block size-3 mr-1" /> <span className="align-middle">Edit</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => onClickDelete(item)}><Trash2 className="inline-block size-3 mr-1" /> <span className="align-middle">Delete</span></Link>
                                        </li>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                            <div className="flex items-center justify-center size-16 mx-auto rounded-full bg-slate-100 outline outline-slate-100 outline-offset-1 dark:bg-zink-600 dark:outline-zink-600">
                                <img src={item.logo} alt="" className="h-10 rounded-full" />
                            </div>

                            <div className="mt-4 mb-6 text-center">
                                <h6 className="text-16"><Link to="#!">{item.companyName}</Link></h6>
                                <p className="text-slate-500 dark:text-zink-200">{item.name}</p>
                            </div>
                            <div className="grid grid-cols-1 gap-5 text-center divide-y md:divide-y-0 md:divide-x sm:grid-cols-3 2xl:grid-cols-12 divide-slate-200 divide-dashed dark:divide-zink-500 rtl:divide-x-reverse">
                                <div className="p-2 2xl:col-span-4">
                                    <h6 className="mb-1">{item.sales}</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Sales</p>
                                </div>
                                <div className="p-2 2xl:col-span-4">
                                    <h6 className="mb-1">{item.products}</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Product</p>
                                </div>
                                <div className="p-2 2xl:col-span-4">
                                    <h6 className="mb-1">{item.revenue}</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Revenue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
            <Pagination
                perPageData={perPageData}
                data={dataList}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                currentdata={currentdata}
            />

            {/* Seller Modal */}

            <Modal show={show} onHide={toggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-5 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!isEdit ? "Edit Seller" : "Add Seller"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="mb-3">
                            <label htmlFor="companyLogo" className="inline-block mb-2 text-base font-medium">Company Logo</label>
                            <Dropzone
                                onDrop={(acceptfiles: any) => {
                                    handleAcceptfiles(acceptfiles);
                                    validation.setFieldValue("logo", acceptfiles[0]);
                                }}
                            >
                                {({ getRootProps }: any) => (
                                    <div className="flex items-center justify-center bg-white border border-dashed rounded-md cursor-pointer dropzone border-slate-200 dropzone2 dark:bg-zink-600 dark:border-zink-500">
                                        <div className="w-full py-5 text-lg text-center dz-message needsclick" {...getRootProps()} >
                                            <div className="mb-3">
                                                <UploadCloud className="block size-12 mx-auto text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500" />
                                            </div>
                                            <h5 className="mb-0 font-normal text-slate-500 dark:text-zink-200 text-15">Drag and drop your logo or <Link to="#!">browse</Link> your logo</h5>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>

                            {validation.touched.logo && validation.errors.logo ? (
                                <p className="text-red-400">{validation.errors.logo}</p>
                            ) : null}

                            <ul className="flex flex-wrap mb-0 gap-x-5" id="dropzone-preview2">
                                {
                                    selectfiles && (
                                        <li className="mt-5" id="dropzone-preview-list2">
                                            <div className="border rounded border-slate-200 dark:border-zink-500">
                                                <div className="p-2 text-center">
                                                    <div>
                                                        <div className="p-2 mx-auto rounded-md size-14 bg-slate-100 dark:bg-zink-600">
                                                            <img className="block w-full h-full rounded-md" src={selectfiles.priview} alt={selectfiles.name} />
                                                        </div>
                                                    </div>
                                                    <div className="pt-3">
                                                        <h5 className="mb-1 text-15" data-dz-name>{selectfiles.path}</h5>
                                                        <p className="mb-0 text-slate-500 dark:text-zink-200" data-dz-size>{selectfiles.formattedSize}</p>
                                                        <strong className="error text-danger" data-dz-errormessage></strong>
                                                    </div>
                                                    <div className="mt-2">
                                                        <button data-dz-remove className="px-2 py-1.5 text-xs text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20" onClick={() => {
                                                            setSelectfiles(''); validation.setFieldValue("logo", null);
                                                        }}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="companyNameInput" className="inline-block mb-2 text-base font-medium">Company Name</label>
                            <input type="text" id="companyNameInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Seller name"
                                name="companyName"
                                onChange={validation.handleChange}
                                value={validation.values.companyName || ""}
                            />
                            {validation.touched.companyName && validation.errors.companyName ? (
                                <p className="text-red-400">{validation.errors.companyName}</p>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ownerName" className="inline-block mb-2 text-base font-medium">Owner Name</label>
                            <input type="text" id="ownerName" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Owner name"
                                name="name"
                                onChange={validation.handleChange}
                                value={validation.values.name || ""}
                            />
                            {validation.touched.name && validation.errors.name ? (
                                <p className="text-red-400">{validation.errors.name}</p>
                            ) : null}
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button type="reset" data-modal-close="addSellerModal" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Cancel</button>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!isEdit ? "Update" : "Add Seller"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Sellers;