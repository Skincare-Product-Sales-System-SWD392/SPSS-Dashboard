import React, { useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Flatpickr from 'react-flatpickr';
import TableContainer from 'Common/TableContainer';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Select from 'react-select';

// Icons
import { Search, Check, X, Clock, XOctagon, RefreshCw } from 'lucide-react';

// Image
import user3 from "assets/images/users/user-3.jpg";

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { getAttendance as onGetAttendance } from 'slices/thunk';
import filterDataBySearch from 'Common/filterDataBySearch';

const AttendanceHR = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.HRManagment,
        (state) => ({
            dataList: state.attendancelist
        })
    );

    const { dataList } = useSelector(selectDataList);
    const [data, setData] = useState<any>([]);

    // Get Data
    useEffect(() => {
        dispatch(onGetAttendance());
    }, [dispatch]);

    useEffect(() => {
        setData(dataList);
    }, [dataList]);

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['day', 'date', 'checkIn', 'checkOut', 'mealBreak', 'workHours', 'overtime'];
        filterDataBySearch(dataList, search, keysToSearch, setData);
    };

    const columns = useMemo(() => [
        {
            header: "Date",
            accessorKey: "date",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <React.Fragment>
                    {cell.getValue()} <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-slate-400 text-slate-500 dark:bg-zink-700 dark:border-zink-400 dark:text-zink-200 ltr:ml-1 rtl:mr-1 align-middle">{cell.row.original.day}</span>
                </React.Fragment>
            ),
        },
        {
            header: "Check In",
            accessorKey: "checkIn",
            enableColumnFilter: false
        },
        {
            header: "Check Out",
            accessorKey: "checkOut",
            enableColumnFilter: false,
        },
        {
            header: "Meal Break",
            accessorKey: "mealBreak",
            enableColumnFilter: false,
        },
        {
            header: "Work Hours",
            accessorKey: "workHours",
            enableColumnFilter: false,
        },
        {
            header: "Overtime",
            accessorKey: "overtime",
            enableColumnFilter: false,
        },
        {
            header: "Action",
            enableColumnFilter: false,
            enableSorting: false,
            cell: (cell: any) => (
                <div className="flex gap-2">
                    <Link to="#!" className="flex items-center justify-center size-8 text-green-500 transition-all duration-200 ease-linear bg-green-100 rounded-md hover:text-white hover:bg-green-500 dark:bg-green-500/20 dark:hover:bg-green-500"><Check className="size-4" /></Link>
                    <Link to="#!" className="flex items-center justify-center size-8 text-red-500 transition-all duration-200 ease-linear bg-red-100 rounded-md hover:text-white hover:bg-red-500 dark:bg-red-500/20 dark:hover:bg-red-500"><X className="size-4" /></Link>
                </div>
            ),
        }
    ], []
    );

    const options = [
        { value: '', label: 'Select Employee' },
        { value: 'Willie Torres', label: 'Willie Torres' },
        { value: 'Patricia Garcia', label: 'Patricia Garcia' },
        { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
        { value: 'Thomas Hatfield', label: 'Thomas Hatfield' },
        { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
        { value: 'Nancy Reynolds', label: 'Nancy Reynolds' },
        { value: 'Holly Kavanaugh', label: 'Holly Kavanaugh' },
        { value: 'Jonas Frederiksen', label: 'Jonas Frederiksen' },
    ];

    return (
        <React.Fragment>
            <BreadCrumb title='Attendance' pageTitle='Attendance' />
            <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-x-5">
                <div className="lg:col-span-12 xl:col-span-3 xl:row-span-2">
                    <div className="mb-5">
                        <label htmlFor="deliveryStatusSelect" className="inline-block mb-2 text-base font-medium">Select Employee</label>
                        <Select
                            className="border-slate-200 focus:outline-none focus:border-custom-500"
                            options={options}
                            isSearchable={false} // To disable search
                            name="deliveryStatusSelect"
                            id="deliveryStatusSelect"
                        />
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="size-20 mx-auto rounded-full bg-slate-100 dark:bg-zink-600">
                                    <img src={user3} alt="" className="h-20 rounded-full" />
                                </div>
                                <h6 className="mt-3 mb-1 text-16"><Link to="#!">Willie Torres</Link></h6>
                                <p className="text-slate-500 dark:text-zink-200">Product Designer</p>
                            </div>
                            <div className="mt-5 overflow-x-auto">
                                <table className="w-full mb-0">
                                    <tbody>
                                        <tr >
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Employee ID</td>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">#TWE1001501</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Experience</td>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">3 Year</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Joining Date</td>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">05 Feb, 2020</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Total Hours (Years)</td>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">953.8 Hrs</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Total Hours</td>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">218.4 Hrs</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Regular Hours</td>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">172 Hrs</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Overtime</td>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">24 Hrs</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Holiday</td>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">22.40 Hrs</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4 xl:col-span-3">
                    <div className="card">
                        <div className="flex items-center gap-4 card-body">
                            <div className="flex items-center justify-center size-12 rounded-md text-sky-500 bg-sky-100 text-15 dark:bg-sky-500/20 shrink-0"><Clock /></div>
                            <div className="grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={187} className="counter-value" />
                                </h5>
                                <p className="text-slate-500 dark:text-zink-200">Approved Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4 xl:col-span-3">
                    <div className="card">
                        <div className="flex items-center gap-4 card-body">
                            <div className="flex items-center justify-center size-12 text-red-500 bg-red-100 rounded-md text-15 dark:bg-red-500/20 shrink-0"><XOctagon /></div>
                            <div className="grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={19} className="counter-value" />
                                </h5>
                                <p className="text-slate-500 dark:text-zink-200">Rejected Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4 xl:col-span-3">
                    <div className="card">
                        <div className="flex items-center gap-4 card-body">
                            <div className="flex items-center justify-center size-12 text-yellow-500 bg-yellow-100 rounded-md text-15 dark:bg-yellow-500/20 shrink-0"><RefreshCw /></div>
                            <div className="grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={32} className="counter-value" />
                                </h5>
                                <p className="text-slate-500 dark:text-zink-200">Pending Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-9 lg:col-span-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="grid grid-cols-1 gap-4 mb-5 lg:grid-cols-2 xl:grid-cols-12">
                                <div className="xl:col-span-3">
                                    <div className="relative">
                                        <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                        <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                                    </div>
                                </div>
                                <div className="xl:col-span-3">
                                    <div>
                                        <Flatpickr
                                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                            options={{
                                                dateFormat: "d M, Y",
                                                mode: "range",
                                            }}
                                            placeholder='Select date'
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 text-right lg:col-span-2 xl:col-span-4 xl:col-start-10">
                                    <Link to="#!" type="button" className="text-red-500 bg-white border-red-500 border-dashed btn hover:text-red-500 hover:bg-red-50 hover:border-red-600 focus:text-red-600 focus:bg-red-50 focus:border-red-600 active:text-red-600 active:bg-red-50 active:border-red-600 dark:bg-zink-700 dark:ring-red-400/20 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20 dark:active:bg-red-800/20">Rejecte All</Link>
                                    <Link to="#!" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Approve All</Link>
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
                                    theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                                    thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
                                    tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                                    PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
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
                </div>
            </div>
        </React.Fragment>
    );
};

export default AttendanceHR;
