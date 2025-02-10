import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import { Dropdown } from 'Common/Components/Dropdown';
import TableContainer from 'Common/TableContainer';
import Flatpickr from "react-flatpickr";
import moment from "moment";

// icons
import { Search, Plus, MoreHorizontal, Trash2, Eye, FileEdit, BadgeCheck, Home, UserRound, CalendarDays, Clapperboard, ShoppingCart, Settings } from 'lucide-react';

// Images
import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";
import avatar4 from "assets/images/users/avatar-4.png";
import avatar5 from "assets/images/users/avatar-5.png";
import avatar6 from "assets/images/users/avatar-6.png";
import avatar7 from "assets/images/users/avatar-7.png";
import avatar8 from "assets/images/users/avatar-8.png";
import avatar9 from "assets/images/users/avatar-9.png";
import avatar10 from "assets/images/users/avatar-10.png";

import adwords from "assets/images/brand/adwords.png";
import twitter from "assets/images/brand/twitter.png";
import meta from "assets/images/brand/meta.png";
import figma from "assets/images/brand/figma.png";

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
    getSocialEvent as onGetSocialEvent,
    addSocialEvent as onAddSocialEvent,
    updateSocialEvent as onUpdateSocialEvent,
    deleteSocialEvent as onDeleteSocialEvent
} from 'slices/thunk';
import { ToastContainer } from 'react-toastify';
import filterDataBySearch from 'Common/filterDataBySearch';

const Event = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.Social,
        (state) => ({
            dataList: state.event
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Get Data
    useEffect(() => {
        dispatch(onGetSocialEvent());
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
            dispatch(onDeleteSocialEvent(eventData.id));
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
            eventName: (eventData && eventData.eventName) || '',
            startDate: (eventData && eventData.startDate) || '',
            endDate: (eventData && eventData.endDate) || '',
            numberRegistered: (eventData && eventData.numberRegistered) || '',
            total: (eventData && eventData.total) || '',
            status: (eventData && eventData.status) || ''
        },
        validationSchema: Yup.object({
            eventName: Yup.string().required("Please Enter Event Name"),
            startDate: Yup.string().required("Please Enter Date"),
            endDate: Yup.string().required("Please Enter Date"),
            numberRegistered: Yup.string().required("Please Enter Number"),
            total: Yup.string().required("Please Enter Total"),
            status: Yup.string().required("Please Enter Status")
        }),

        onSubmit: (values) => {
            if (isEdit) {
                const updateUser = {
                    id: eventData ? eventData.id : 0,
                    ...values,
                };
                // update user
                dispatch(onUpdateSocialEvent(updateUser));
            } else {
                const newUser = {
                    ...values,
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                };
                // save new user
                dispatch(onAddSocialEvent(newUser));
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

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['eventName', 'startDate', 'endDate', 'numberRegistered', 'total', 'status'];
        filterDataBySearch(dataList, search, keysToSearch, setData);
    };

    // columns

    const Status = ({ item }: any) => {
        switch (item) {
            case "Ongoing":
                return (<span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">{item}</span>);
            case "Draft":
                return (<span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-custom-100 border-custom-200 text-custom-500 dark:bg-custom-500/20 dark:border-custom-500/20">{item}</span>);
            case "Closed":
                return (<span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-red-100 border-red-200 text-red-500 dark:bg-red-500/20 dark:border-red-500/20">{item}</span>);
            default:
                return (<span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">{item}</span>);
        }
    };

    const columns = useMemo(() => [
        {
            header: "Event Name",
            accessorKey: "eventName",
            enableColumnFilter: false,
        },
        {
            header: "Start Date",
            accessorKey: "startDate",
            enableColumnFilter: false
        },
        {
            header: "End Date",
            accessorKey: "endDate",
            enableColumnFilter: false,
        },
        {
            header: "Number Registered",
            accessorKey: "numberRegistered",
            enableColumnFilter: false,
        },
        {
            header: "Total",
            accessorKey: "total",
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
                    <Dropdown.Trigger className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="eventAction3" data-bs-toggle="dropdown">
                        <MoreHorizontal className="size-3" />
                    </Dropdown.Trigger>
                    <Dropdown.Content placement={cell.row.index ? "top-end" : "right-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby="eventAction3">
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Overview</span></Link>
                        </li>
                        <li>
                            <Link data-modal-target="eventModal" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
                                const data = cell.row.original;
                                handleUpdateDataClick(data);
                            }}>
                                <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span></Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
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
            <BreadCrumb title='Event' pageTitle='Social Media' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="rounded-full bg-slate-100 dark:bg-zink-600 shrink-0">
                                    <img src={avatar1} alt="" className="rounded-full h-14" />
                                </div>
                                <div className="grow">
                                    <h6 className="mb-1 text-15">Paula Keenan <BadgeCheck className="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-sky-500/20" /></h6>
                                    <p className="text-slate-500 dark:text-zink-200">@paulak145</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 text-center divide-y sm:divide-y-0 sm:divide-x sm:grid-cols-3 divide-slate-200 dark:divide-zink-500 divide-dashed rtl:divide-x-reverse">
                                <div className="py-3 sm:py-0 sm:px-3">
                                    <h6>489</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Posts</p>
                                </div>
                                <div className="py-3 sm:py-0 sm:px-3">
                                    <h6>4.6k</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Follower</p>
                                </div>
                                <div className="py-3 sm:py-0 sm:px-3">
                                    <h6>159</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Following</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <ul className="flex flex-col w-full gap-2 mb-4 text-sm font-medium shrink-0 nav-tabs">
                                <li className="group grow">
                                    <Link to="/dashboards-social" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Home className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Feed</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/apps-social-friends" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><UserRound className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Friends</span></Link>
                                </li>
                                <li className="group grow active">
                                    <Link to="/apps-social-event" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><CalendarDays className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Event</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/apps-social-video" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Clapperboard className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Watch Video</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/apps-social-marketplace" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><ShoppingCart className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Marketplace</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/pages-account-settings" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Settings className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Settings</span></Link>
                                </li>
                            </ul>
                            <p className="mb-4 text-slate-500 dark:text-zink-200">Suggestion Pages</p>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={adwords} alt="" className="h-5" />
                                        <h6>Harmonious Team</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={twitter} alt="" className="h-5" />
                                        <h6>Twitter</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={meta} alt="" className="h-5" />
                                        <h6>Design Stack</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={figma} alt="" className="h-5" />
                                        <h6>UI / UX Community</h6>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Active Friends</h6>
                            <div className="flex flex-wrap items-center gap-3">
                                <Link to="#!" className="relative">
                                    <img src={avatar2} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar3} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar4} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar5} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar6} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar7} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar8} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar9} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar10} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative flex items-center justify-center size-10 rounded-full bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                                    5+
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-9" id="eventList">
                    <div className="grid items-center grid-cols-1 gap-4 mb-4 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <h6 className="mb-0 text-15">Upcoming Events</h6>
                        </div>
                        <div className="flex gap-2 xl:col-span-4 xl:col-start-9">
                            <div className="relative grow">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                            <button data-modal-target="eventModal" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={toggle}>
                                <Plus className="inline-block size-4" /> <span className="align-middle">Add Event</span>
                            </button>
                        </div>
                    </div>
                    <div className="px-4 py-3 mb-4 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50">
                        <span className="font-bold">Join us for the upcoming event:</span> Community Clean-Up Day on October 15, 2023 <Link to="#!" className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-green-100 border-transparent text-green-500 hover:bg-green-200 dark:bg-green-400/20 dark:hover:bg-green-400/30 dark:border-transparent ltr:ml-1 rtl:mr-1">Register Now</Link>
                    </div>

                    {data && data.length > 0 ?
                        <TableContainer
                            isPagination={false}
                            columns={(columns || [])}
                            data={(data || [])}
                            customPageSize={10}
                            divclassName="overflow-x-auto"
                            tableclassName="w-full border-separate table-custom border-spacing-y-2 whitespace-nowrap"
                            theadclassName="ltr:text-left rtl:text-right relative bg-white rounded-md after:absolute ltr:after:border-l-2 rtl:after:border-r-2 ltr:after:left-0 rtl:after:right-0 after:top-0 after:bottom-0 after:border-transparent dark:bg-zink-700"
                            trclassName="relative bg-white rounded-md after:absolute ltr:after:border-l-2 rtl:after:border-r-2 ltr:after:left-0 rtl:after:right-0 after:top-0 after:bottom-0 after:border-transparent dark:bg-zink-700"
                            thclassName="px-3.5 py-2.5 font-semibold sort"
                            tdclassName="px-3.5 py-2.5"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 299+ Events We did not find any Events for you search.</p>
                            </div>
                        </div>)}

                    <div className="flex justify-center mt-3 mb-5">
                        <button type="button" className="flex items-center text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                            <svg className="size-4 ltr:mr-2 rtl:ml-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Load More
                        </button>
                    </div>
                </div>
            </div>

            {/* Event Modal */}
            <Modal show={show} onHide={toggle} id="defaultModal" modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!isEdit ? "Edit Event" : "Create Event"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="mb-4">
                            <label htmlFor="eventTitle" className="inline-block mb-2 text-base font-medium">Event Name</label>
                            <input type="text" id="eventTitle" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Event title"
                                name="eventName"
                                onChange={validation.handleChange}
                                value={validation.values.eventName || ""}
                            />
                            {validation.touched.eventName && validation.errors.eventName ? (
                                <p className="text-red-400">{validation.errors.eventName}</p>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="eventDateInput" className="inline-block mb-2 text-base font-medium">Start Date</label>
                            <Flatpickr
                                id="eventDateInput"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 flatpickr-input"
                                options={{
                                    dateFormat: "d M, Y"
                                }}
                                name="startDate"
                                placeholder='Select date'
                                onChange={(date: any) => validation.setFieldValue("startDate", moment(date[0]).format("DD MMMM ,YYYY"))}
                                value={validation.values.startDate || ''}
                            />
                            {validation.touched.startDate && validation.errors.startDate ? (
                                <p className="text-red-400">{validation.errors.startDate}</p>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="eventTimeInput" className="inline-block mb-2 text-base font-medium">End Date</label>
                            <Flatpickr
                                id="eventDateInput"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 flatpickr-input"
                                options={{
                                    dateFormat: "d M, Y"
                                }}
                                name="endDate"
                                placeholder='Select date'
                                onChange={(date: any) => validation.setFieldValue("endDate", moment(date[0]).format("DD MMMM ,YYYY"))}
                                value={validation.values.endDate || ''}
                            />
                            {validation.touched.endDate && validation.errors.endDate ? (
                                <p className="text-red-400">{validation.errors.endDate}</p>
                            ) : null}

                        </div>
                        <div className="mb-4">
                            <label htmlFor="numberRegistered" className="inline-block mb-2 text-base font-medium">Registered Number</label>
                            <input className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="numberRegistered" type="text" placeholder="0"
                                name="numberRegistered"
                                onChange={validation.handleChange}
                                value={validation.values.numberRegistered || ""}
                            />
                            {validation.touched.numberRegistered && validation.errors.numberRegistered ? (
                                <p className="text-red-400">{validation.errors.numberRegistered}</p>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="totalSeat" className="inline-block mb-2 text-base font-medium">Total Seat</label>
                            <input className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="totalSeat" type="text" placeholder="0"
                                name="total"
                                onChange={validation.handleChange}
                                value={validation.values.total || ""}
                            />
                            {validation.touched.total && validation.errors.total ? (
                                <p className="text-red-400">{validation.errors.total}</p>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="statusSelect" className="inline-block mb-2 text-base font-medium">Status</label>
                            <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="statusSelect" data-choices data-choices-search-false
                                name="status"
                                onChange={validation.handleChange}
                                value={validation.values.status || ""}
                            >
                                <option value="">Select</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Draft">Draft</option>
                                <option value="Closed">Closed</option>
                            </select>
                            {validation.touched.status && validation.errors.status ? (
                                <p className="text-red-400">{validation.errors.status}</p>
                            ) : null}
                        </div>
                        <div className="text-right">
                            <button type="submit" className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!isEdit ? "Update" : "Create Event"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Event;
