import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import TableContainer from 'Common/TableContainer';
import { Dropdown } from 'Common/Components/Dropdown';
import { Link } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import moment from "moment";
import Select from 'react-select';

// Icons
import { Search, MoreHorizontal, FileEdit, Trash2, Plus } from 'lucide-react';

import DeleteModal from 'Common/DeleteModal';
import Modal from 'Common/Components/Modal';

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import {
    getEstimates as onGetEstimates,
    addEstimates as onAddEstimates,
    updateEstimates as onUpdateEstimates,
    deleteEstimates as onDeleteEstimates
} from 'slices/thunk';
import { ToastContainer } from 'react-toastify';

const Estimates = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.HRManagment,
        (state) => ({
            dataList: state.estimateslist
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Get Data
    useEffect(() => {
        dispatch(onGetEstimates());
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
            dispatch(onDeleteEstimates(eventData.id));
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
            estimateNumber: (eventData && eventData.estimateNumber) || '',
            clientName: (eventData && eventData.clientName) || '',
            estimateBy: (eventData && eventData.estimateBy) || '',
            estimateDate: (eventData && eventData.estimateDate) || '',
            expiryDate: (eventData && eventData.expiryDate) || '',
            amount: (eventData && eventData.amount) || '',
            status: (eventData && eventData.status) || '',
        },
        validationSchema: Yup.object({
            clientName: Yup.string().required("Please Enter Name"),
            estimateBy: Yup.string().required("Please Enter Estimate By"),
            estimateDate: Yup.string().required("Please Enter Estimate Date"),
            expiryDate: Yup.string().required("Please Enter Date"),
            amount: Yup.string().required("Please Enter Amount"),
            status: Yup.string().required("Please Enter Status")
        }),

        onSubmit: (values) => {
            if (isEdit) {
                const updateData = {
                    id: eventData ? eventData.id : 0,
                    ...values,
                };
                // update user
                dispatch(onUpdateEstimates(updateData));
            } else {
                const newData = {
                    ...values,
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    estimateNumber: "#TWE200154" + (Math.floor(Math.random() * (30 - 20)) + 20).toString()
                };
                // save new user
                dispatch(onAddEstimates(newData));
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
        } else {
            setShow(true);
            setEventData("");
            validation.resetForm();
        }
    }, [show, validation]);

    // columns

    const Status = ({ item }: any) => {
        switch (item) {
            case "Accepted":
                return (<span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">{item}</span>);
            case "Declined":
                return (<span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">{item}</span>);
            case "Expired":
                return (<span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20 dark:border-transparent">{item}</span>);
            default:
                return (<span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">{item}</span>);
        }
    };

    const columns = useMemo(() => [
        {
            header: "Estimate Number",
            accessorKey: "estimateNumber",
            enableColumnFilter: false,
            enableSorting: false,
            cell: (cell: any) => (
                <>
                    <Link to="#!" className="transition-all duration-150 ease-linear order_id text-custom-500 hover:text-custom-600">{cell.getValue()}</Link>
                </>
            ),
        },
        {
            header: "Client Name",
            accessorKey: "clientName",
            enableColumnFilter: false
        },
        {
            header: "Estimate By",
            accessorKey: "estimateBy",
            enableColumnFilter: false,
        },
        {
            header: "Estimate Date",
            accessorKey: "estimateDate",
            enableColumnFilter: false,
        },
        {
            header: "Expiry Date",
            accessorKey: "expiryDate",
            enableColumnFilter: false,
        },
        {
            header: "Amount",
            accessorKey: "amount",
            enableColumnFilter: false,
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
                    <Dropdown.Trigger id="estimateAction4" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                        <MoreHorizontal className="size-3" />
                    </Dropdown.Trigger>
                    <Dropdown.Content placement={cell.row.index ? "top-end" : "right-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="estimateAction4">
                        <li>
                            <Link data-modal-target="addEstimateModal" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
                                const data = cell.row.original;
                                handleUpdateDataClick(data);
                            }}>
                                <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span></Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
                                const data = cell.row.original;
                                onClickDelete(data);
                            }}><Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span></Link>
                        </li>
                    </Dropdown.Content>
                </Dropdown>
            ),
        }
    ], []
    );

    const options = [
        { value: 'Accepted', label: 'Accepted' },
        { value: 'Declined', label: 'Declined' },
        { value: 'Expired', label: 'Expired' },
    ];

    return (
        <React.Fragment>
            <BreadCrumb title='Estimates' pageTitle='Sales' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="card" id="ordersTable">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-4 mb-5 lg:grid-cols-2 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <div className="relative">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                        </div>
                        <div className="xl:col-span-2">
                            <Select
                                className="border-slate-200 focus:outline-none focus:border-custom-500"
                                options={options}
                                isSearchable={false} // To disable search
                                name="statusFilterSelect"
                                id="statusFilterSelect"
                            />
                        </div>
                        <div className="xl:col-span-2">
                            <Flatpickr
                                id="dateRangeFilterInput"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                options={{
                                    dateFormat: "d M, Y",
                                    mode: "range",
                                }}
                                placeholder='Select date'
                            />
                        </div>
                        <div className="xl:col-span-2 xl:col-start-11">
                            <div className="lg:ltr:text-right lg:rtl:text-left">
                                <Link to="#!" data-modal-target="addEstimateModal" type="buton" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={toggle}>
                                    <Plus className="inline-block size-4" /> <span className="align-middle">Add Estimate</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {data && data.length > 0 ?
                        <TableContainer
                            isPagination={true}
                            columns={(columns || [])}
                            data={(data || [])}
                            customPageSize={6}
                            divclassName="-mx-5 overflow-x-auto"
                            tableclassName="w-full whitespace-nowrap"
                            theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                            thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500"
                            tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                            PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 5+ Departments We did not find any Departments for you search.</p>
                            </div>
                        </div>)}
                </div>
            </div>

            {/* Estimates Modal */}
            <Modal show={show} onHide={toggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!isEdit ? "Edit Estimate" : "Add Estimate"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <label htmlFor="estimateInput" className="inline-block mb-2 text-base font-medium">Estimate Number</label>
                                <input type="text" id="estimateInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Estimate Number" disabled
                                    value={validation.values.estimateNumber || "#TWE20015420"}
                                />
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="clientNameInput" className="inline-block mb-2 text-base font-medium">Client Name</label>
                                <input type="text" id="clientNameInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Client name"
                                    name="clientName"
                                    onChange={validation.handleChange}
                                    value={validation.values.clientName || ""}
                                />
                                {validation.touched.clientName && validation.errors.clientName ? (
                                    <p className="text-red-400">{validation.errors.clientName}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="estimateBySelect" className="inline-block mb-2 text-base font-medium">Estimate By</label>
                                <select className="form-input border-slate-200 focus:outline-none focus:border-custom-500" data-choices data-choices-search-false id="estimateBySelect"
                                    name="estimateBy"
                                    onChange={validation.handleChange}
                                    value={validation.values.estimateBy || ""}
                                >
                                    <option value="">Select</option>
                                    <option value="HR">HR</option>
                                    <option value="Admin">Admin</option>
                                </select>
                                {validation.touched.estimateBy && validation.errors.estimateBy ? (
                                    <p className="text-red-400">{validation.errors.estimateBy}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="estimateDateInput" className="inline-block mb-2 text-base font-medium">Estimate Date</label>
                                <Flatpickr
                                    id="estimateDateInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Select date'
                                    name='estimateDate'
                                    onChange={(date: any) => validation.setFieldValue("estimateDate", moment(date[0]).format("DD MMMM ,YYYY"))}
                                    value={validation.values.estimateDate || ''}
                                />
                                {validation.touched.estimateDate && validation.errors.estimateDate ? (
                                    <p className="text-red-400">{validation.errors.estimateDate}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="expiryDateInput" className="inline-block mb-2 text-base font-medium">Expiry Date</label>
                                <Flatpickr
                                    id="expiryDateInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Select date'
                                    name='expiryDate'
                                    onChange={(date: any) => validation.setFieldValue("expiryDate", moment(date[0]).format("DD MMMM ,YYYY"))}
                                    value={validation.values.expiryDate || ''}
                                />
                                {validation.touched.expiryDate && validation.errors.expiryDate ? (
                                    <p className="text-red-400">{validation.errors.expiryDate}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="amountInput" className="inline-block mb-2 text-base font-medium">Amount</label>
                                <input type="text" id="amountInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="$00.00"
                                    name="amount"
                                    onChange={validation.handleChange}
                                    value={validation.values.amount || ""}
                                />
                                {validation.touched.amount && validation.errors.amount ? (
                                    <p className="text-red-400">{validation.errors.amount}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="statusSelect" className="inline-block mb-2 text-base font-medium">Status</label>
                                <select className="form-input border-slate-200 focus:outline-none focus:border-custom-500" data-choices data-choices-search-false id="statusSelect"
                                    name="status"
                                    onChange={validation.handleChange}
                                    value={validation.values.status || ""}
                                >
                                    <option value="">Select</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Declined">Declined</option>
                                    <option value="Expired">Expired</option>
                                </select>
                                {validation.touched.status && validation.errors.status ? (
                                    <p className="text-red-400">{validation.errors.status}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button type="reset" data-modal-close="addEstimateModal" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Cancel</button>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!isEdit ? "Update" : "Add Estimate"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Estimates;
