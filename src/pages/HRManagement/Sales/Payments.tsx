import React, { useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import TableContainer from 'Common/TableContainer';
import Select from 'react-select';
// Icons
import { Search } from 'lucide-react';

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import {
    getPayments as onGetPayments
} from 'slices/thunk';

const Payments = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.HRManagment,
        (state) => ({
            dataList: state.paymentslist
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);

    // Get Data
    useEffect(() => {
        dispatch(onGetPayments());
    }, [dispatch]);

    useEffect(() => {
        setData(dataList);
    }, [dataList]);

    const Status = ({ item }: any) => {
        switch (item) {
            case "Paid":
                return (<span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                    <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full bg-green-500 inline-block"></span> {item}
                </span>);
            case "Pending":
                return (<span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">
                    <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full bg-yellow-500 inline-block"></span> {item}
                </span>);
            case "Failed":
                return (<span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
                    <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full bg-red-500 inline-block"></span> {item}
                </span>);
            default:
                return (<span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                    <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full bg-green-500 inline-block"></span> {item}
                </span>);
        }
    };

    const columns = useMemo(() => [
        {
            header: "Payment ID",
            accessorKey: "paymentId",
            enableColumnFilter: false,
            enableSorting: false,
            cell: (cell: any) => (
                <>
                    <Link to="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">{cell.getValue()}</Link>
                </>
            ),
        },
        {
            header: "Membership Plan",
            accessorKey: "membershipPlan",
            enableColumnFilter: false
        },
        {
            header: "Date",
            accessorKey: "date",
            enableColumnFilter: false,
        },
        {
            header: "Payment Type",
            accessorKey: "paymentType",
            enableColumnFilter: false,
        },
        {
            header: "Username",
            accessorKey: "username",
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
        }
    ], []
    );

    const options = [
        { value: 'Paid', label: 'Paid' },
        { value: 'Pending', label: 'Pending' },
        { value: 'Failed', label: 'Failed' },
    ];

    return (
        <React.Fragment>
            <BreadCrumb title='Payments' pageTitle='Sales' />
            <div className="card" id="ordersTable">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-4 mb-5 xl:grid-cols-12">
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
                            <Select
                                className="border-slate-200 focus:outline-none focus:border-custom-500"
                                options={options}
                                isSearchable={false} // To disable search
                                name="statusFilterSelect"
                                id="statusFilterSelect"
                            />
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
                            thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500"
                            tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                            PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 10+ Payments We did not find any Payments for you search.</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Payments;
