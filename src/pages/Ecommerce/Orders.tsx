import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import CountUp from 'react-countup';
import Flatpickr from "react-flatpickr";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import DeleteModal from "Common/DeleteModal";
import Modal from "Common/Components/Modal";
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import * as Yup from "yup";
import { useFormik } from "formik";
import {
    getAllOrders,
    addOrder,
    updateOrder,
    deleteOrder
} from 'slices/order/thunk';
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";
import { Search, Plus, MoreHorizontal, Trash2, Eye, FileEdit, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Orders = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    // Updated selector to work with the new order reducer structure
    const orderSelector = createSelector(
        (state: any) => state.order,
        (order) => ({
            orders: order?.orders?.data?.items || [],
            pageCount: order?.orders?.data?.totalPages || 0,
            totalCount: order?.orders?.data?.totalCount || 0,
            pageNumber: order?.orders?.data?.pageNumber || 1,
            loading: order?.loading || false,
            error: order?.error || null,
        })
    );

    const { orders, pageCount, loading } = useSelector(orderSelector);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();
    const [refreshFlag, setRefreshFlag] = useState(false);

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Get Data with pagination
    useEffect(() => {
        // Don't fetch if current page is greater than page count and pageCount exists
        if (pageCount && currentPage > pageCount) {
            setCurrentPage(1); // Reset to first page
            return;
        }
        
        // Add some console logging to debug
        console.log("Fetching orders for page:", currentPage);
        dispatch(getAllOrders({ page: currentPage, pageSize }));
    }, [dispatch, currentPage, refreshFlag, pageCount]);

    // Update local data when orders change
    useEffect(() => {
        console.log("Orders data updated:", orders);
        if (orders && orders.length > 0) {
            setData(orders);
        } else if (currentPage > 1 && orders.length === 0) {
            // If no data and not on first page, go back one page
            setCurrentPage(prev => prev - 1);
        }
    }, [orders, currentPage]);

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

    // Handle Delete
    const handleDelete = () => {
        if (eventData) {
            dispatch(deleteOrder(eventData.id))
                .then(() => {
                    setDeleteModal(false);
                    setRefreshFlag(prev => !prev); // Trigger data refresh after deletion
                });
        }
    };

    // View Order Details
    const handleViewOrder = (orderId: string) => {
        console.log("Navigating to order overview with ID:", orderId);
        navigate(`/apps-ecommerce-order-overview?id=${orderId}`);
    };

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
            status: (eventData && eventData.status) || '',
            orderTotal: (eventData && eventData.orderTotal) || '',
            createdTime: (eventData && eventData.createdTime) || '',
        },
        validationSchema: Yup.object({
            status: Yup.string().required("Please Enter Status"),
            orderTotal: Yup.number().required("Please Enter Amount"),
            createdTime: Yup.string().required("Please Enter Date"),
        }),

        onSubmit: (values) => {
            if (isEdit) {
                const updateData = {
                    id: eventData ? eventData.id : 0,
                    data: values,
                };
                // update order using the new function
                dispatch(updateOrder(updateData))
                    .then(() => {
                        setRefreshFlag(prev => !prev);
                    });
            } else {
                const newData = {
                    ...values,
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                };
                // save new order using the new function
                dispatch(addOrder(newData))
                    .then(() => {
                        setRefreshFlag(prev => !prev);
                    });
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
        const keysToSearch = ['id', 'status', 'orderTotal'];
        filterDataBySearch(data, search, keysToSearch, setData);
    };

    const [activeTab, setActiveTab] = useState("1");

    const toggleTab = (tab: any, type: any) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
            let filteredOrders = orders;
            if (type !== "all") {
                filteredOrders = orders.filter((order: any) => order.status === type);
            }
            setData(filteredOrders);
        }
    };

    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    // Format date
    const formatDate = (dateString: string) => {
        return moment(dateString).format('DD MMM, YYYY');
    };

    // Status component
    const Status = ({ item }: any) => {
        switch (item) {
            case "Delivered":
                return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">{item}</span>);
            case "Shipping":
                return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-purple-100 border-purple-200 text-purple-500 dark:bg-purple-500/20 dark:border-purple-500/20">{item}</span>);
            case "Pending":
                return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-500/20">{item}</span>);
            case "Cancelled":
                return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-red-100 border-red-200 text-red-500 dark:bg-red-500/20 dark:border-red-500/20">{item}</span>);
            case "Awaiting Payment":
                return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20">{item}</span>);
            case "Return":
                return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-zink-200">{item}</span>);
            case "Processing":
                return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">{item}</span>);
            default:
                return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">{item}</span>);
        }
    };

    // columns
    const columns = useMemo(() => [
        {
            id: 'orderId',
            Header: "Order ID",
            accessor: "id",
            Cell: (cell: any) => (
                <Link to="#!" onClick={() => handleViewOrder(cell.value)} className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
                    #{cell.value.substring(0, 8)}
                </Link>
            ),
        },
        {
            id: 'orderDate',
            Header: "Order Date",
            accessor: "createdTime",
            Cell: (cell: any) => (
                formatDate(cell.value)
            ),
        },
        {
            id: 'products',
            Header: "Products",
            accessor: "orderDetails",
            Cell: (cell: any) => (
                <div className="flex flex-col gap-2">
                    {cell.value.map((product: any, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                            <img src={product.productImage} alt={product.productName} className="h-10 w-10 object-cover rounded" />
                            <div className="truncate max-w-[200px]">
                                {product.productName}
                            </div>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            id: 'amount',
            Header: "Amount",
            accessor: "orderTotal",
            Cell: (cell: any) => (
                formatCurrency(cell.value)
            ),
        },
        {
            id: 'status',
            Header: "Status",
            accessor: "status",
            Cell: (cell: any) => (
                <Status item={cell.value} />
            ),
        },
        {
            id: 'action',
            Header: "Action",
            Cell: (cell: any) => (
                <Dropdown className="relative">
                    <Dropdown.Trigger id={`orderAction${cell.row.index}`} data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                        <MoreHorizontal className="size-3" />
                    </Dropdown.Trigger>
                    <Dropdown.Content placement={cell.row.index > 5 ? "top-end" : "bottom-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby={`orderAction${cell.row.index}`}>
                        <li>
                            <Link 
                                to={`/apps-ecommerce-order-overview?id=${cell.value}`} 
                                className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            >
                                <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="#!" 
                                onClick={() => handleDropdownAction("edit", cell.value)}
                                className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-50 dark:focus:bg-zink-500 dark:focus:text-zink-50"
                            >
                                <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="#!" 
                                onClick={() => handleDropdownAction("delete", cell.value)}
                                className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-50 dark:focus:bg-zink-500 dark:focus:text-zink-50"
                            >
                                <Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span>
                            </Link>
                        </li>
                    </Dropdown.Content>
                </Dropdown>
            ),
        }
    ], [orders]);

    // Also update the dropdown in the table
    const handleDropdownAction = (action: string, order: any) => {
        if (action === "overview") {
            console.log("Overview action for order:", order.id);
            navigate(`/apps-ecommerce-order-overview?id=${order.id}`);
        } else if (action === "edit") {
            handleUpdateDataClick(order);
        } else if (action === "delete") {
            onClickDelete(order);
        }
    };

    // Function to export orders as PDF
    const exportOrdersToPDF = () => {
        // Initialize jsPDF with UTF-8 support
        const doc = new jsPDF('landscape');
        
        // Add a Unicode font that supports Vietnamese
        // This uses the default font but ensures proper encoding
        doc.addFont('https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf', 'Roboto', 'normal');
        doc.setFont('Roboto');
        
        // Add title
        doc.setFontSize(18);
        doc.text('Orders List', 14, 22);
        
        // Add date
        doc.setFontSize(10);
        doc.text(`Generated on: ${new Date().toLocaleString('vi-VN')}`, 14, 30);
        
        // Define the columns for the table
        const tableColumn = ["Order ID", "Date", "Products", "Amount", "Status"];
        
        // Define the rows for the table - encode Vietnamese text properly
        const tableRows = data.map((order: any) => [
            `#${order.id.substring(0, 8)}`,
            formatDate(order.createdTime),
            // Handle Vietnamese characters in product names
            order.orderDetails?.map((product: any) => product.productName).join(", "),
            formatCurrency(order.orderTotal),
            order.status
        ]);
        
        // Generate the PDF table with Unicode support
        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 35,
            styles: {
                fontSize: 9,
                cellPadding: 3,
                lineColor: [0, 0, 0],
                lineWidth: 0.1,
                font: 'Roboto', // Use the Unicode-compatible font
            },
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: 255,
                fontStyle: 'bold',
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245]
            },
            // Handle long text in the products column
            columnStyles: {
                2: { cellWidth: 'auto' }
            },
            margin: { top: 35 },
            // Add this to properly handle Unicode characters
            didDrawCell: (data) => {
                // This helps with rendering complex characters
            },
        });
        
        // Save the PDF with a Vietnamese-friendly name
        doc.save(`danh-sach-don-hang-${new Date().toISOString().split('T')[0]}.pdf`);
    };

    return (
        <React.Fragment>
            <BreadCrumb title='Order Lists' pageTitle='Ecommerce' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="card" id="ordersTable">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <div className="relative">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={filterSearchData} />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                        </div>
                        <div className="xl:col-span-9">
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="btn-group">
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'all' ? 'bg-custom-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('all', 'all')}
                                    >
                                        All
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Processing' ? 'bg-green-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Processing', 'Processing')}
                                    >
                                        Processing
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Awaiting Payment' ? 'bg-sky-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Awaiting Payment', 'Awaiting Payment')}
                                    >
                                        Awaiting Payment
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Pending' ? 'bg-yellow-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Pending', 'Pending')}
                                    >
                                        Pending
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Shipping' ? 'bg-purple-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Shipping', 'Shipping')}
                                    >
                                        Shipping
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Delivered' ? 'bg-green-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Delivered', 'Delivered')}
                                    >
                                        Delivered
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Cancelled' ? 'bg-red-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Cancelled', 'Cancelled')}
                                    >
                                        Cancelled
                                    </button>
                                </div>
                                <div className="ms-auto flex gap-2">
                                    <button 
                                        type="button" 
                                        className="text-white btn bg-green-500 border-green-500 hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/20"
                                        onClick={exportOrdersToPDF}
                                        disabled={!data || data.length === 0}
                                    >
                                        <Download className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" />
                                        <span className="align-middle">Export PDF</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div id="table-loading-state" className="flex items-center justify-center h-80">
                            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-white bg-custom-500 rounded-full animate-pulse">Loading...</div>
                        </div>
                    ) : data && data.length > 0 ? (
                        <>
                            <div className="mt-5 overflow-x-auto">
                                <table className="w-full whitespace-nowrap">
                                    <thead className="bg-slate-100 dark:bg-zink-600">
                                        <tr>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Order ID</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Order Date</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Products</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Amount</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Status</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((order: any, index: number) => (
                                            <tr key={index}>
                                                <td className="px-6 py-3 border-y border-slate-200">
                                                    <Link to="#!" onClick={() => handleViewOrder(order.id)} className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
                                                        #{order.id.substring(0, 8)}
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-3 border-y border-slate-200">{formatDate(order.createdTime)}</td>
                                                <td className="px-6 py-3 border-y border-slate-200">
                                                    {order.orderDetails && order.orderDetails.map((product: any, idx: number) => (
                                                        <div key={idx} className="flex items-center gap-2 mb-1">
                                                            {product.productImage && (
                                                                <img src={product.productImage} alt={product.productName} className="h-10 w-10 object-cover rounded" />
                                                            )}
                                                            <div className="truncate max-w-[200px]">
                                                                {product.productName}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </td>
                                                <td className="px-6 py-3 border-y border-slate-200">{formatCurrency(order.orderTotal)}</td>
                                                <td className="px-6 py-3 border-y border-slate-200">
                                                    <Status item={order.status} />
                                                </td>
                                                <td className="px-6 py-3 border-y border-slate-200">
                                                    <Dropdown className="relative">
                                                        <Dropdown.Trigger id={`orderAction${index}`} data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                                                            <MoreHorizontal className="size-3" />
                                                        </Dropdown.Trigger>
                                                        <Dropdown.Content placement={index > 5 ? "top-end" : "bottom-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby={`orderAction${index}`}>
                                                            <li>
                                                                <Link 
                                                                    to={`/apps-ecommerce-order-overview?id=${order.id}`} 
                                                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                                                >
                                                                    <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Overview</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    to="#!" 
                                                                    onClick={() => handleDropdownAction("edit", order)}
                                                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-50 dark:focus:bg-zink-500 dark:focus:text-zink-50"
                                                                >
                                                                    <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    to="#!" 
                                                                    onClick={() => handleDropdownAction("delete", order)}
                                                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-50 dark:focus:bg-zink-500 dark:focus:text-zink-50"
                                                                >
                                                                    <Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span>
                                                                </Link>
                                                            </li>
                                                        </Dropdown.Content>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="flex items-center justify-between mt-5">
                                <div>
                                    <p className="text-sm text-slate-500">Showing page {currentPage} of {pageCount || 1}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        className="px-3 py-1 text-sm text-slate-500 bg-slate-100 rounded-md disabled:opacity-50"
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                    <button 
                                        className="px-3 py-1 text-sm text-white bg-custom-500 rounded-md disabled:opacity-50"
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount || 1))}
                                        disabled={currentPage === pageCount}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="noresult py-6 text-center">
                            <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                            <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                            <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 299+ orders We did not find any orders for you search.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Order Modal */}
            <Modal show={show} onHide={toggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!isEdit ? "Edit Order" : "Add Order"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <label htmlFor="orderId" className="inline-block mb-2 text-base font-medium">Order ID</label>
                                <input type="text" id="orderId" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" disabled value={eventData?.id || ""} required />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="orderDateInput" className="inline-block mb-2 text-base font-medium">Order Date</label>
                                <Flatpickr
                                    id="orderDateInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Select date' name='createdTime'
                                    onChange={(date: any) => validation.setFieldValue("createdTime", moment(date[0]).format("YYYY-MM-DDTHH:mm:ss"))}
                                    value={validation.values.createdTime || ''}
                                />
                                {validation.touched.createdTime && validation.errors.createdTime ? (
                                    <p className="text-red-400">{validation.errors.createdTime}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="statusSelect" className="inline-block mb-2 text-base font-medium">Status</label>
                                <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices data-choices-search-false id="statusSelect"
                                    name="status"
                                    onChange={validation.handleChange}
                                    value={validation.values.status || ""}
                                >
                                    <option value="Processing">Processing</option>
                                    <option value="Awaiting Payment">Awaiting Payment</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Shipping">Shipping</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Return">Return</option>
                                </select>
                                {validation.touched.status && validation.errors.status ? (
                                    <p className="text-red-400">{validation.errors.status}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="amountInput" className="inline-block mb-2 text-base font-medium">Amount</label>
                                <input type="number" id="amountInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter amount"
                                    name="orderTotal"
                                    onChange={validation.handleChange}
                                    value={validation.values.orderTotal || ""}
                                />
                                {validation.touched.orderTotal && validation.errors.orderTotal ? (
                                    <p className="text-red-400">{validation.errors.orderTotal}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button type="reset" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Cancel</button>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!isEdit ? "Update" : "Add Order"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Orders;