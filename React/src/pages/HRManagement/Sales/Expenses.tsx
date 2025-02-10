import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import TableContainer from 'Common/TableContainer';
import Flatpickr from 'react-flatpickr';
import { Dropdown } from 'Common/Components/Dropdown';
import moment from "moment";

// Icons
import { Search, MoreHorizontal, FileEdit, Trash2, Plus } from 'lucide-react';

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
    getExpenses as onGetExpenses,
    addExpenses as onAddExpenses,
    updateExpenses as onUpdateExpenses,
    deleteExpenses as onDeleteExpenses
} from 'slices/thunk';
import { ToastContainer } from 'react-toastify';

const Expenses = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.HRManagment,
        (state) => ({
            dataList: state.expenseslist
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Get Data
    useEffect(() => {
        dispatch(onGetExpenses());
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
            dispatch(onDeleteExpenses(eventData.id));
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
            purchaseDate: (eventData && eventData.purchaseDate) || '',
            item: (eventData && eventData.item) || '',
            purchasedBy: (eventData && eventData.purchasedBy) || '',
            paidBy: (eventData && eventData.paidBy) || '',
            amount: (eventData && eventData.amount) || ''
        },
        validationSchema: Yup.object({
            purchaseDate: Yup.string().required("Please Enter Date"),
            item: Yup.string().required("Please Enter Item"),
            purchasedBy: Yup.string().required("Please Enter Purchased By"),
            paidBy: Yup.string().required("Please Enter Paid By"),
            amount: Yup.string().required("Please Enter Amount"),
        }),

        onSubmit: (values) => {
            if (isEdit) {
                const updateUser = {
                    id: eventData ? eventData.id : 0,
                    ...values,
                };
                // update user
                dispatch(onUpdateExpenses(updateUser));
            } else {
                const newUser = {
                    ...values,
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    userId: "#TW15000" + (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                };
                // save new user
                dispatch(onAddExpenses(newUser));
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

    const columns = useMemo(() => [
        {
            header: "Purchase Date",
            accessorKey: "purchaseDate",
            enableColumnFilter: false
        },
        {
            header: "Item",
            accessorKey: "item",
            enableColumnFilter: false,
        },
        {
            header: "Purchased By",
            accessorKey: "purchasedBy",
            enableColumnFilter: false,
        },
        {
            header: "Paid By",
            accessorKey: "paidBy",
            enableColumnFilter: false,
        },
        {
            header: "Amount",
            accessorKey: "amount",
            enableColumnFilter: false,
        },
        {
            header: "Action",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <Dropdown className="relative">
                    <Dropdown.Trigger id="ExpensesAction1" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                        <MoreHorizontal className="size-3" />
                    </Dropdown.Trigger>
                    <Dropdown.Content placement={cell.row.index ? "top-end" : "right-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="ExpensesAction1">
                        <li>
                            <Link data-modal-target="addExpensesModal" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
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

    return (
        <React.Fragment>
            <BreadCrumb title='Expenses' pageTitle='Sales' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="card" id="ordersTable">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-4 mb-5 lg:grid-cols-3 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <div className="relative">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
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
                                <Link to="#!" data-modal-target="addExpensesModal" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={toggle}>
                                    <Plus className="inline-block size-4" /> <span className="align-middle">Add Expense</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {data && data.length > 0 ?
                        <TableContainer
                            isPagination={true}
                            columns={(columns || [])}
                            data={(data || [])}
                            customPageSize={10}
                            divclassName="-mx-5 overflow-x-auto"
                            tableclassName="w-full whitespace-nowrap"
                            theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                            thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b dark:border-zink-500"
                            tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                            PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 10+ Expenses We did not find any Expenses for you search.</p>
                            </div>
                        </div>)}
                </div>
            </div>


            {/* Expenses Modal */}
            <Modal show={show} onHide={toggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-300/20"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!isEdit ? "Edit Expense" : "Add Expense"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <label htmlFor="PurchaseInput" className="inline-block mb-2 text-base font-medium">Purchase Date</label>
                                <Flatpickr
                                    id="PurchaseInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Select date'
                                    name='purchaseDate'
                                    onChange={(date: any) => validation.setFieldValue("purchaseDate", moment(date[0]).format("DD MMMM ,YYYY"))}
                                    value={validation.values.purchaseDate || ''}
                                />
                                {validation.touched.purchaseDate && validation.errors.purchaseDate ? (
                                    <p className="text-red-400">{validation.errors.purchaseDate}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="purchasedByInput" className="inline-block mb-2 text-base font-medium">Purchased By</label>
                                <input type="text" id="purchasedByInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Purchased by"
                                    name="purchasedBy"
                                    onChange={validation.handleChange}
                                    value={validation.values.purchasedBy || ""}
                                />
                                {validation.touched.purchasedBy && validation.errors.purchasedBy ? (
                                    <p className="text-red-400">{validation.errors.purchasedBy}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="paidByInput" className="inline-block mb-2 text-base font-medium">Paid By</label>
                                <input type="text" id="paidByInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Paid by"
                                    name="paidBy"
                                    onChange={validation.handleChange}
                                    value={validation.values.paidBy || ""}
                                />
                                {validation.touched.paidBy && validation.errors.paidBy ? (
                                    <p className="text-red-400">{validation.errors.paidBy}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="itemInput" className="inline-block mb-2 text-base font-medium">Item</label>
                                <input type="text" id="itemInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Item Title"
                                    name="item"
                                    onChange={validation.handleChange}
                                    value={validation.values.item || ""}
                                />
                                {validation.touched.item && validation.errors.item ? (
                                    <p className="text-red-400">{validation.errors.item}</p>
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
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button type="reset" data-modal-close="addExpensesModal" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Cancel</button>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!isEdit ? "Update" : "Add Expense"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Expenses;
