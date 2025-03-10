import React, { useMemo, useState } from 'react';
import TableContainer from 'Common/TableContainer';
import { Link } from 'react-router-dom';
import { EmployeePerformanceData } from 'Common/data';

// Icons
import { Search, Trash2, Pencil } from 'lucide-react';
import filterDataBySearch from 'Common/filterDataBySearch';

const EmployeePerformance = () => {

    const [data, setData] = useState(EmployeePerformanceData);

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['employeeId', 'name', 'email', 'designation', 'performance'];
        filterDataBySearch(EmployeePerformanceData, search, keysToSearch, setData);
    };

    const columns = useMemo(() => [
        {
            header: (<input id="productsCheckAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" />),
            enableColumnFilter: false,
            enableSorting: true,
            id: "checkAll",
            cell: (cell: any) => {
                return (<input id={cell.row.original.id} className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" />);
            }
        },
        {
            header: "ID",
            accessorKey: "employeeId",
            enableColumnFilter: false,
            enableSorting: false,
            cell: (cell: any) => (
                <>
                    <Link to="#">{cell.getValue()}</Link>
                </>
            ),
        },
        {
            header: "Name",
            accessorKey: "name",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <div className="flex gap-2">
                    <div className="size-10 bg-green-100 rounded-full dark:bg-green-500/20 shrink-0">
                        <img src={cell.row.original.img} alt="" className="h-10 rounded-full" />
                    </div>
                    <div className="grow">
                        <h6>{cell.getValue()}</h6>
                        <p className="text-slate-500 dark:text-zink-200">{cell.row.original.email}</p>
                    </div>
                </div>
            ),
        },
        {
            header: "Designation",
            accessorKey: "designation",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Performance",
            accessorKey: "performance",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <span className={`${cell.getValue() === "Good" ? "text-green-500" : "text-red-500"}`}>
                    {cell.getValue()}
                </span>
            ),
        },
        {
            header: "Status",
            accessorKey: "isActive",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                cell.getValue() ?
                    <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">Active</span> :
                    <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-zink-200">Disabled</span>
            ),
        },
        {
            header: "Action",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <div className="flex gap-2">
                    <Link to="#" className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 dark:bg-zink-600 dark:text-zink-200 text-slate-500 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/20"><Pencil className="size-4" /></Link>
                    <Link to="#" className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 dark:bg-zink-600 dark:text-zink-200 text-slate-500 hover:text-red-500 dark:hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-500/20"><Trash2 className="size-4" /></Link>
                </div>
            ),
        }
    ], []
    );

    return (
        <React.Fragment>
            <div className="col-span-12 md:order-8 2xl:col-span-9 card">
                <div className="card-body">
                    <div className="grid items-center grid-cols-1 gap-3 mb-5 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <h6 className="text-15">Employee Performance</h6>
                        </div>
                        <div className="xl:col-span-4 xl:col-start-10">
                            <div className="flex gap-3">
                                <div className="relative grow">
                                    <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                    <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                                </div>
                                <button type="button" className="bg-white border-dashed shrink-0 text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20"><i className="align-baseline ltr:pr-1 rtl:pl-1 ri-download-2-line"></i> Export</button>
                            </div>
                        </div>
                    </div>
                    <TableContainer
                        isPagination={true}
                        columns={(columns || [])}
                        data={(data || [])}
                        customPageSize={5}
                        divclassName="-mx-5 overflow-x-auto"
                        tableclassName="w-full whitespace-nowrap"
                        theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                        thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500 w-10"
                        tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default EmployeePerformance;
