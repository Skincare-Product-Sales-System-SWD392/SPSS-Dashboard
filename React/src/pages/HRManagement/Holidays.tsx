import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Flatpickr from "react-flatpickr";
import moment from "moment";

// Icons
import { Search, Plus, Trash2, Pencil } from 'lucide-react';
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
    getHolidays as onGetHolidays,
    addHolidays as onAddHolidays,
    updateHolidays as onUpdateHolidays,
    deleteHolidays as onDeleteHolidays
} from 'slices/thunk';
import { ToastContainer } from 'react-toastify';

const Holidays = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.HRManagment,
        (state) => ({
            dataList: state.holidayslist
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Get Data
    useEffect(() => {
        dispatch(onGetHolidays());
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
            dispatch(onDeleteHolidays(eventData.id));
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
            day: (eventData && eventData.day) || '',
            date: (eventData && eventData.date) || '',
            holidayName: (eventData && eventData.holidayName) || '',
            type: (eventData && eventData.type) || ''
        },
        validationSchema: Yup.object({
            // day: Yup.string().required("Please Enter Day"),
            date: Yup.string().required("Please Enter Date"),
            holidayName: Yup.string().required("Please Enter Holiday Name"),
            type: Yup.string().required("Please Enter type")
        }),

        onSubmit: (values) => {
            if (isEdit) {
                const updateData = {
                    id: eventData ? eventData.id : 0,
                    ...values,
                };
                // update user
                dispatch(onUpdateHolidays(updateData));
            } else {
                const newData = {
                    ...values,
                    id: dataList.length + 1,
                    day: moment(values.date).format('dddd'),
                };
                // save new user
                dispatch(onAddHolidays(newData));
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
            header: "#",
            accessorKey: "id",
            enableColumnFilter: false,
        },
        {
            header: "Day",
            accessorKey: "day",
            enableColumnFilter: false
        },
        {
            header: "Date",
            accessorKey: "date",
            enableColumnFilter: false,
        },
        {
            header: "Holiday Name",
            accessorKey: "holidayName",
            enableColumnFilter: false,
        },
        {
            header: "Type",
            accessorKey: "type",
            enableColumnFilter: false,
        },
        {
            header: "Action",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <div className="flex gap-2">
                    <Link to="#!" data-modal-target="addHolidayModal" className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 text-slate-500 hover:text-custom-500 hover:bg-custom-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-custom-500/20 dark:hover:text-custom-500" onClick={() => {
                        const data = cell.row.original;
                        handleUpdateDataClick(data);
                    }}>
                        <Pencil className="size-4" /></Link>
                    <Link to="#!" className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 text-slate-500 hover:text-red-500 hover:bg-red-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:text-red-500 dark:hover:bg-red-500/20" onClick={() => {
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
            <BreadCrumb title='Holidays' pageTitle='HR Management' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="card" id="ordersTable">
                <div className="card-body">
                    <div className="flex items-center gap-3 mb-4">
                        <h6 className="text-15 grow">Holidays 2024</h6>
                        <div className="shrink-0">
                            <Link to="#!" data-modal-target="addHolidayModal" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={toggle}>
                                <Plus className="inline-block size-4" /> <span className="align-middle">Add Holiday</span>
                            </Link>
                        </div>
                    </div>
                    {data && data.length > 0 ?
                        <TableContainer
                            isPagination={true}
                            columns={(columns || [])}
                            data={(data || [])}
                            customPageSize={10}
                            divclassName="overflow-x-auto"
                            tableclassName="w-full whitespace-nowrap"
                            theadclassName="ltr:text-left rtl:text-right"
                            thclassName="px-3.5 py-2.5 font-semibold border border-slate-200 dark:border-zink-500"
                            tdclassName="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"
                            PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 10+ Holidays We did not find any Holidays for you search.</p>
                            </div>
                        </div>)}
                </div>
            </div>

            {/* Holiday Modal */}

            <Modal show={show} onHide={toggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!isEdit ? "Edit Holiday" : "Add Holiday"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <label htmlFor="typeSelect" className="inline-block mb-2 text-base font-medium">Type</label>
                                <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices data-choices-search-false id="typeSelect"
                                    name="type"
                                    onChange={validation.handleChange}
                                    value={validation.values.type || ""}
                                >
                                    <option value="Restricted Holiday">Restricted Holiday</option>
                                    <option value="Gazetted Holiday">Gazetted Holiday</option>
                                    <option value="Observance">Observance</option>
                                    <option value="Season">Season</option>
                                </select>
                                {validation.touched.type && validation.errors.type ? (
                                    <p className="text-red-400">{validation.errors.type}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="holidayInput" className="inline-block mb-2 text-base font-medium">Holiday Name</label>
                                <input type="text" id="holidayInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Holiday name"
                                    name="holidayName"
                                    onChange={validation.handleChange}
                                    value={validation.values.holidayName || ""}
                                />
                                {validation.touched.holidayName && validation.errors.holidayName ? (
                                    <p className="text-red-400">{validation.errors.holidayName}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="holidayDateInput" className="inline-block mb-2 text-base font-medium">Date</label>
                                <Flatpickr
                                    id="holidayDateInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Select date' name='date'
                                    onChange={(date: any) => validation.setFieldValue("date", moment(date[0]).format("DD MMM"))}
                                    value={validation.values.date || ''}
                                />
                                {validation.touched.date && validation.errors.date ? (
                                    <p className="text-red-400">{validation.errors.date}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button type="reset" data-modal-close="addHolidayModal" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Cancel</button>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!isEdit ? "Update" : "Add Holiday"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Holidays;
