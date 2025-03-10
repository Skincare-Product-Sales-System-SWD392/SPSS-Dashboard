import React, { useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Flatpickr from 'react-flatpickr';
import TableContainer from 'Common/TableContainer';
import { Link } from 'react-router-dom';

// Icons
import { Search, MoreHorizontal, Eye, FileEdit, Trash2, Plus } from 'lucide-react';

import { Dropdown } from 'Common/Components/Dropdown';

import DeleteModal from 'Common/DeleteModal';

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import {
    getEmployeeSalary as onGetEmployeeSalary,
    deleteEmployeeSalary as onDeleteEmployeeSalary
} from 'slices/thunk';
import { ToastContainer } from 'react-toastify';
import filterDataBySearch from 'Common/filterDataBySearch';

const EmployeeSalary = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.HRManagment,
        (state) => ({
            dataList: state.employeeSalarylist
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();

    // Get Data
    useEffect(() => {
        dispatch(onGetEmployeeSalary());
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
            dispatch(onDeleteEmployeeSalary(eventData.id));
            setDeleteModal(false);
        }
    };

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['employeeId', 'joiningDate', 'name', 'designation', 'emailId', 'phoneNumber', 'salary', 'bonus'];
        filterDataBySearch(dataList, search, keysToSearch, setData);
    };

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
            header: "Joining Date",
            accessorKey: "joiningDate",
            enableColumnFilter: false
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
            enableColumnFilter: false,
        },
        {
            header: "Email Id",
            accessorKey: "emailId",
            enableColumnFilter: false,
        },
        {
            header: "Phone Number",
            accessorKey: "phoneNumber",
            enableColumnFilter: false,
        },
        {
            header: "Salary",
            accessorKey: "salary",
            enableColumnFilter: false,
        },
        {
            header: "Bonus",
            accessorKey: "bonus",
            enableColumnFilter: false,
        },
        {
            header: "Action",
            enableColumnFilter: false,
            enableSorting: false,
            cell: (cell: any) => (
                <React.Fragment>
                    <div className='flex items-center gap-2'>
                        <Link to="/apps-hr-payroll-payslip" className="px-2 py-1.5 text-xs text-white btn bg-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:border-sky-600 active:ring active:ring-sky-100 dark:ring-sky-400/20">Generate Slip</Link>
                        <Dropdown className="relative dropdown">
                            <Dropdown.Trigger id="employeeAction1" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                                <MoreHorizontal className="size-3" />
                            </Dropdown.Trigger>
                            <Dropdown.Content placement={cell.row.index ? "top-end" : "right-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="employeeAction1">
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/pages-account"><Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Overview</span></Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-hr-payroll-create-payslip"><FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span></Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
                                        const data = cell.row.original;
                                        onClickDelete(data);
                                    }}><Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span></Link>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </React.Fragment>
            ),
        }
    ], []
    );

    return (
        <React.Fragment>
            <BreadCrumb title='Employee Salary' pageTitle='Payroll' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="card">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-5 2xl:grid-cols-12">
                        <div className="2xl:col-span-5">
                            <h5 className="mb-1">$78,564.00 <small className="font-normal text-slate-500 dark:text-zink-200">/ year</small></h5>
                            <p className="text-slate-500 dark:text-zink-200">Average Base Salary (USD)</p>
                            <div className="mt-6 mb-4">
                                <div className="flex w-full h-10 rounded-md bg-slate-200 dark:bg-zink-600">
                                    <div className="flex items-center justify-center h-10 text-white bg-custom-500 ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md" style={{ width: "20%" }}>20%</div>
                                    <div className="flex items-center justify-center h-10 text-white bg-green-500 ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md" style={{ width: "15%" }}>15%</div>
                                    <div className="flex items-center justify-center h-10 text-white bg-purple-500 ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md" style={{ width: "35%" }}>35%</div>
                                    <div className="flex items-center justify-center h-10 text-white bg-orange-500 ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md" style={{ width: "30%" }}>30%</div>
                                </div>
                            </div>
                            <p>The average salary for all employees is $78,564.</p>
                        </div>
                        <div className="2xl:col-span-5 2xl:col-start-8">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <tbody>
                                        <tr >
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent">Base Salary</td>
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">$45,932</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent">Bonus</td>
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">$16,000</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent">Profit Sharing</td>
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">$2.5k to 4.5k</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent">Total Pay</td>
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">$78,564.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" id="employeeTable">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-4 mb-5 lg:grid-cols-12 xl:grid-cols-12">
                        <div className="lg:col-span-3 xl:col-span-3">
                            <div className="relative">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                        </div>
                        <div className="lg:col-span-3 xl:col-span-2">
                            <Flatpickr
                                id="dateRangeFilterInput"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                options={{
                                    dateFormat: "d M, Y"
                                }}
                                placeholder='Select Date'
                            />
                        </div>
                        <div className="lg:col-start-10 lg:col-span-3 xl:col-span-2 xl:col-start-11">
                            <div className="lg:ltr:text-right lg:rtl:text-left">
                                <Link to="/apps-hr-payroll-create-payslip" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Plus className="inline-block size-4" /> <span className="align-middle">Create Salary</span></Link>
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
                            theadclassName="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600"
                            thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500"
                            tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                            PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
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
        </React.Fragment>
    );
};

export default EmployeeSalary;
