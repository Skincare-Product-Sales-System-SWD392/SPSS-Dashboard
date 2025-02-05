import React, { useMemo, useState } from 'react';
import TableContainer from 'Common/TableContainer';
import { ProductOrdersData } from "Common/data";
import { Link } from 'react-router-dom';
import { MoreHorizontal, Search, Eye, FileEdit, Trash2 } from 'lucide-react';
import { Dropdown } from 'Common/Components/Dropdown';
import filterDataBySearch from 'Common/filterDataBySearch';

const ProductsOrders = () => {

    const [data, setData] = useState(ProductOrdersData);

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['orderId', 'customerName', 'location', 'orderDate', 'payments', 'quantity', 'status'];
        filterDataBySearch(ProductOrdersData, search, keysToSearch, setData);
    };

    const columns = useMemo(() => [
        {
            header: "#",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Order Id",
            accessorKey: "orderId",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <>
                    <Link to="/apps-ecommerce-order-overview">{cell.row.original.orderId}</Link>
                </>
            ),
        },
        {
            header: "Customer Name",
            accessorKey: "customerName",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Location",
            accessorKey: "location",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Order Date",
            accessorKey: "orderDate",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Payments",
            accessorKey: "payments",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Quantity",
            accessorKey: "quantity",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Price",
            accessorKey: "price",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Total Amount",
            accessorKey: "totalAmount",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Status",
            accessorKey: "status",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <>
                    {cell.row.original.status === "Delivered" ? (
                        <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">
                            {cell.row.original.status}
                        </span>
                    ) : cell.row.original.status === "Shipping" ? (
                        <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-purple-100 border-purple-200 text-purple-500 dark:bg-purple-500/20 dark:border-purple-500/20">
                            {cell.row.original.status}
                        </span>
                    ) : cell.row.original.status === "New" ? (
                        <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20">
                            {cell.row.original.status}
                        </span>
                    ) : (
                        <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-500/20">
                            {cell.row.original.status}
                        </span>
                    )
                    }

                </>
            ),
        },
        {
            header: "Action",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <>
                    <Dropdown className="relative">
                        <Dropdown.Trigger id="orderAction5" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                            <MoreHorizontal className="size-3"></MoreHorizontal></Dropdown.Trigger>
                        <Dropdown.Content placement={cell.row.index ? "top-end" : "right-end"}  className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="orderAction5">
                            <li>
                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-ecommerce-order-overview"><Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1"/> <span className="align-middle">Overview</span></Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1"/> <span className="align-middle">Edit</span></Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1"/> <span className="align-middle">Delete</span></Link>
                            </li>
                        </Dropdown.Content>
                    </Dropdown>

                </>
            ),
        }
    ], []
    );

    return (
        <React.Fragment>
            <div className="col-span-12 card 2xl:col-span-12">
                <div className="card-body">
                    <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
                        <div className="2xl:col-span-3">
                            <h6 className="text-15">Products Orders</h6>
                        </div>
                        <div className="2xl:col-span-3 2xl:col-start-10">
                            <div className="flex gap-3">
                                <div className="relative grow">
                                    <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                    <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"></Search>
                                </div>
                                <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><i className="align-baseline ltr:pr-1 rtl:pl-1 ri-download-2-line"></i> Export</button>
                            </div>
                        </div>
                    </div>
                    <TableContainer
                        isPagination={true}
                        columns={(columns || [])}
                        data={(data || [])}
                        customPageSize={7}
                        divclassName="overflow-x-auto"
                        tableclassName="w-full whitespace-nowrap"
                        theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                        thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500"
                        tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductsOrders;
