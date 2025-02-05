import React, { useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Flatpickr from 'react-flatpickr';
import CountUp from 'react-countup';

// Icons
import { Search, Check, X, UsersRound, UserRoundX, UserRoundCheck, Briefcase, CalendarRange } from 'lucide-react';
import TableContainer from 'Common/TableContainer';
import { Link } from 'react-router-dom';
import Modal from 'Common/Components/Modal';

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { getMainAttendance as onGetMainAttendance } from 'slices/thunk';
import filterDataBySearch from 'Common/filterDataBySearch';

const MainAttendance = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.HRManagment,
        (state) => ({
            dataList: state.mainAttendancelist
        })
    );

    const { dataList } = useSelector(selectDataList);
    const [data, setData] = useState<any>([]);

    // Get Data
    useEffect(() => {
        dispatch(onGetMainAttendance());
    }, [dispatch]);

    useEffect(() => {
        setData(dataList);
    }, [dataList]);


    const [show, setShow] = useState<boolean>(false);

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['employeeName'];
        filterDataBySearch(dataList, search, keysToSearch, setData);
    };

    const Attendance = ({ item }: any) => {
        switch (item) {
            case true:
                return (<Link to="#!" className="text-green-500 transition-all duration-200 ease-linear hover:text-green-600" onClick={() => setShow(true)}><Check className="size-4" /></Link>);
            case false:
                return (<X className="size-4 text-red-500" />);
            default:
                return (<React.Fragment>-</React.Fragment>);
        }
    };

    const columns = useMemo(() => [
        {
            header: "Employee Name",
            accessorKey: "employeeName",
            enableColumnFilter: false
        },
        {
            header: "01",
            accessorKey: "Day1",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "02",
            accessorKey: "Day2",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "03",
            accessorKey: "Day3",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "04",
            accessorKey: "Day4",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "05",
            accessorKey: "Day5",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "06",
            accessorKey: "Day6",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "07",
            accessorKey: "Day7",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "08",
            accessorKey: "Day8",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "09",
            accessorKey: "Day9",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "10",
            accessorKey: "Day10",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "11",
            accessorKey: "Day11",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "12",
            accessorKey: "Day12",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "13",
            accessorKey: "Day13",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "14",
            accessorKey: "Day14",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "15",
            accessorKey: "Day15",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "16",
            accessorKey: "Day16",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "17",
            accessorKey: "Day17",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "18",
            accessorKey: "Day18",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "19",
            accessorKey: "Day19",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "20",
            accessorKey: "Day20",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "21",
            accessorKey: "Day21",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "22",
            accessorKey: "Day22",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "23",
            accessorKey: "Day23",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "24",
            accessorKey: "Day24",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "25",
            accessorKey: "Day25",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "26",
            accessorKey: "Day26",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "27",
            accessorKey: "Day27",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "28",
            accessorKey: "Day28",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "29",
            accessorKey: "Day29",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        },
        {
            header: "30",
            accessorKey: "Day30",
            enableSorting: false,
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Attendance item={cell.getValue()} />
            )
        }
    ], []
    );

    return (
        <React.Fragment>
            <BreadCrumb title='Main Attendance' pageTitle='Attendance' />
            <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-12">
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="flex items-center gap-4 card-body">
                            <div className="flex items-center justify-center size-12 rounded-md text-sky-500 bg-sky-100 text-15 dark:bg-sky-500/20 shrink-0"><UsersRound /></div>
                            <div className="overflow-hidden grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={43} className="counter-value" />
                                </h5>
                                <p className="truncate text-slate-500 dark:text-zink-200">Total Employee</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="flex items-center gap-4 card-body">
                            <div className="flex items-center justify-center size-12 text-red-500 bg-red-100 rounded-md text-15 dark:bg-red-500/20 shrink-0"><UserRoundX /></div>
                            <div className="overflow-hidden grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={6} className="counter-value" />
                                </h5>
                                <p className="truncate text-slate-500 dark:text-zink-200">Absent Employee (Today)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="flex items-center gap-4 card-body">
                            <div className="flex items-center justify-center size-12 text-green-500 bg-green-100 rounded-md text-15 dark:bg-green-500/20 shrink-0"><UserRoundCheck /></div>
                            <div className="overflow-hidden grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={32} className="counter-value" />
                                </h5>
                                <p className="truncate text-slate-500 dark:text-zink-200">Present Employee (Today)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="flex items-center gap-4 card-body">
                            <div className="flex items-center justify-center size-12 rounded-md text-custom-500 bg-custom-100 text-15 dark:bg-custom-500/20 shrink-0"><Briefcase /></div>
                            <div className="overflow-hidden grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={22} className="counter-value" />
                                </h5>
                                <p className="truncate text-slate-500 dark:text-zink-200">Working Days (Current Month)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-5 mb-5 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <div className="relative">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                        </div>
                        <div className="xl:col-span-2 xl:col-start-11">
                            <div className="relative">
                                <CalendarRange className="absolute size-4 ltr:left-3 rtl:right-3 top-3 text-slate-500 dark:text-zink-200" />
                                <Flatpickr
                                    className="ltr:pl-10 rtl:pr-10 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y",
                                        mode: "range",
                                    }}
                                    placeholder='Select date'
                                />
                            </div>
                        </div>
                    </div>
                    {data && data.length > 0 ?
                        <TableContainer
                            isPagination={false}
                            columns={(columns || [])}
                            data={(data || [])}
                            customPageSize={10}
                            divclassName="overflow-x-auto"
                            tableclassName="w-full whitespace-nowrap"
                            theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                            thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
                            tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 10+ Attendance We did not find any Attendance for you search.</p>
                            </div>
                        </div>)}
                </div>
            </div>

            {/* Main Attendance Modal */}

            <Modal show={show} onHide={() => setShow(!show)} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-300/20"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">Attendance Info (05 June, 2023)</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <div className="rounded-md bg-slate-100 dark:bg-zink-500/50">
                        <div className="p-3">
                            <p className="mb-1 text-slate-500 dark:text-zink-200">Check In Date & Time</p>
                            <h6>Monday, 05 June, 2023 <b>08:29 AM</b></h6>
                        </div>
                        <div className="p-5">
                            <div className="flex items-center justify-center size-24 mx-auto bg-white rounded-full dark:bg-zink-600 text-16 outline outline-white dark:outline-zink-600 outline-offset-4">
                                <b>08:15</b> <small className="ltr:ml-1 rtl:mr-1">Hrs</small>
                            </div>
                        </div>
                        <div className="p-3">
                            <p className="mb-1 text-slate-500 dark:text-zink-200">Check Out Date & Time</p>
                            <h6>Monday, 05 June, 2023 <b>06:11 AM</b></h6>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default MainAttendance;
