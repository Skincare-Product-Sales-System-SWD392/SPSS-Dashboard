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
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { toast } from 'react-hot-toast';

const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

const formatCurrency = (amount: number) => {
    if (!amount && amount !== 0) return '';
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
};

const getStatusLabel = (status: string) => {
    switch (status) {
        case 'Processing':
            return 'Đang xử lý';
        case 'Awaiting Payment':
            return 'Chờ thanh toán';
        case 'Pending':
            return 'Đang chờ';
        case 'Shipping':
            return 'Đang giao';
        case 'Delivered':
            return 'Đã giao';
        case 'Cancelled':
            return 'Đã hủy';
        case 'Return':
            return 'Trả hàng';
        default:
            return status;
    }
};

// Add this Status component definition before the Orders component
const Status = ({ item }: { item: string }) => {
    let statusClass = "";
    
    switch (item) {
        case "Processing":
            statusClass = "bg-yellow-100 text-yellow-500 border-yellow-200 dark:bg-yellow-500/20 dark:border-yellow-500/20";
            break;
        case "Awaiting Payment":
            statusClass = "bg-sky-100 text-sky-500 border-sky-200 dark:bg-sky-500/20 dark:border-sky-500/20";
            break;
        case "Pending":
            statusClass = "bg-orange-100 text-orange-500 border-orange-200 dark:bg-orange-500/20 dark:border-orange-500/20";
            break;
        case "Shipping":
            statusClass = "bg-purple-100 text-purple-500 border-purple-200 dark:bg-purple-500/20 dark:border-purple-500/20";
            break;
        case "Delivered":
            statusClass = "bg-green-100 text-green-500 border-green-200 dark:bg-green-500/20 dark:border-green-500/20";
            break;
        case "Cancelled":
            statusClass = "bg-red-100 text-red-500 border-red-200 dark:bg-red-500/20 dark:border-red-500/20";
            break;
        case "Return":
            statusClass = "bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-500/20 dark:border-slate-500/20";
            break;
        default:
            statusClass = "bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-500/20 dark:border-slate-500/20";
    }
    
    return (
        <span className={`px-2.5 py-0.5 text-xs inline-block font-medium rounded border ${statusClass}`}>
            {getStatusLabel(item)}
        </span>
    );
};

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
        const search = e.target.value.toLowerCase();
        if (search) {
            // Filter data based on multiple fields, with proper type checking
            const filteredData = orders.filter((item: any) => {
                // Check order ID (substring to match the displayed format)
                if (item.id && item.id.substring(0, 8).toLowerCase().includes(search)) {
                    return true;
                }
                
                // Check order date
                if (item.createdTime) {
                    const formattedDate = formatDate(item.createdTime).toLowerCase();
                    if (formattedDate.includes(search)) {
                        return true;
                    }
                }
                
                // Check product names
                if (item.orderDetails && Array.isArray(item.orderDetails)) {
                    const hasMatchingProduct = item.orderDetails.some((product: any) => 
                        product.productName && 
                        product.productName.toLowerCase().includes(search)
                    );
                    if (hasMatchingProduct) return true;
                }
                
                // Check order total
                if (typeof item.orderTotal === 'number') {
                    const totalAsString = item.orderTotal.toString();
                    if (totalAsString.includes(search)) {
                        return true;
                    }
                    
                    // Also check formatted currency
                    const formattedTotal = formatCurrency(item.orderTotal).toLowerCase();
                    if (formattedTotal.includes(search)) {
                        return true;
                    }
                }
                
                // Check status
                if (item.status && item.status.toLowerCase().includes(search)) {
                    return true;
                }
                
                return false;
            });
            setData(filteredData);
        } else {
            setData(orders);
        }
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

    // Replace the exportOrdersToExcel function with this improved version
    const exportOrdersToExcel = () => {
        // Show loading indicator
        const loadingToast = toast.loading("Đang xuất dữ liệu đơn hàng...");
        
        if (data.length === 0) {
            toast.error("Không có dữ liệu đơn hàng để xuất");
            toast.dismiss(loadingToast);
            return;
        }
        
        try {
            // Create workbook and worksheet
            const workbook = XLSX.utils.book_new();
            
            // Define columns for the Excel file with detailed information
            const columns = [
                "Mã Đơn Hàng",
                "Ngày Đặt",
                "Tên Khách Hàng",
                "Số Điện Thoại",
                "Địa Chỉ",
                "Sản Phẩm",
                "Số Lượng",
                "Đơn Giá",
                "Tổng Tiền",
                "Phương Thức Thanh Toán",
                "Trạng Thái",
                "Ghi Chú"
            ];
            
            // Format data for Excel with detailed information
            const excelData = data.map((order: any) => {
                // Format products as a list
                const products = order.orderDetails?.map((product: any) => 
                    product.productName
                ).join("\n") || "";
                
                // Format quantities
                const quantities = order.orderDetails?.map((product: any) => 
                    product.quantity
                ).join("\n") || "";
                
                // Format prices
                const prices = order.orderDetails?.map((product: any) => 
                    formatCurrency(product.price)
                ).join("\n") || "";
                
                // Format address
                const address = [
                    order.address?.addressLine1,
                    order.address?.addressLine2,
                    order.address?.city,
                    order.address?.province,
                    order.address?.countryName
                ].filter(Boolean).join(", ");
                
                // Get payment method
                const paymentMethod = order.paymentMethodId === "COD" ? 
                    "Thanh toán khi nhận hàng" : 
                    order.paymentMethodId || "N/A";
                
                return [
                    `#${order.id.substring(0, 8)}`,
                    formatDate(order.createdTime),
                    order.address?.customerName || "N/A",
                    order.address?.phoneNumber || "N/A",
                    address,
                    products,
                    quantities,
                    prices,
                    formatCurrency(order.orderTotal),
                    paymentMethod,
                    getStatusLabel(order.status),
                    ""  // Empty notes column for users to add comments
                ];
            });
            
            // Add header row
            const wsData = [columns, ...excelData];
            
            // Create worksheet
            const worksheet = XLSX.utils.aoa_to_sheet(wsData);
            
            // Set column widths for better readability
            const colWidths = [
                { wch: 15 },  // Order ID
                { wch: 15 },  // Date
                { wch: 20 },  // Customer Name
                { wch: 15 },  // Phone
                { wch: 40 },  // Address
                { wch: 40 },  // Products
                { wch: 10 },  // Quantities
                { wch: 15 },  // Prices
                { wch: 15 },  // Total Amount
                { wch: 20 },  // Payment Method
                { wch: 15 },  // Status
                { wch: 20 },  // Notes
            ];
            worksheet['!cols'] = colWidths;
            
            // Apply styles to header row (bold, background color)
            // Note: XLSX-Style would be needed for full styling support
            // This is a basic approach that works with xlsx
            const range = XLSX.utils.decode_range(worksheet['!ref'] || "A1");
            for (let col = range.s.c; col <= range.e.c; col++) {
                const cellRef = XLSX.utils.encode_cell({ r: 0, c: col });
                if (!worksheet[cellRef]) worksheet[cellRef] = {};
                worksheet[cellRef].s = {
                    font: { bold: true, color: { rgb: "FFFFFF" } },
                    fill: { fgColor: { rgb: "4F81BD" } },
                    alignment: { horizontal: "center", vertical: "center" }
                };
            }
            
            // Add the worksheet to the workbook
            XLSX.utils.book_append_sheet(workbook, worksheet, "Danh Sách Đơn Hàng");
            
            // Generate Excel file
            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            
            // Get current date for filename
            const currentDate = new Date().toISOString().split('T')[0];
            const pageInfo = `trang-${currentPage}`;
            
            // Save the file
            saveAs(excelBlob, `danh-sach-don-hang-${pageInfo}-${currentDate}.xlsx`);
            
            // Show success message
            toast.success(`Xuất Excel thành công! (${data.length} đơn hàng)`);
        } catch (error) {
            console.error("Error exporting to Excel:", error);
            toast.error("Có lỗi khi xuất dữ liệu Excel");
        } finally {
            toast.dismiss(loadingToast);
        }
    };

    return (
        <React.Fragment>
            <BreadCrumb title='Danh Sách Đơn Hàng' pageTitle='Thương Mại Điện Tử' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="card" id="ordersTable">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <div className="relative">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Tìm kiếm..." autoComplete="off" onChange={filterSearchData} />
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
                                        Tất Cả
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Processing' ? 'bg-green-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Processing', 'Processing')}
                                    >
                                        Đang Xử Lý
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Awaiting Payment' ? 'bg-sky-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Awaiting Payment', 'Awaiting Payment')}
                                    >
                                        Chờ Thanh Toán
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Pending' ? 'bg-yellow-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Pending', 'Pending')}
                                    >
                                        Đang Chờ
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Shipping' ? 'bg-purple-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Shipping', 'Shipping')}
                                    >
                                        Đang Giao
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Delivered' ? 'bg-green-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Delivered', 'Delivered')}
                                    >
                                        Đã Giao
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn border-slate-200 dark:border-zink-500 ${activeTab === 'Cancelled' ? 'bg-red-500 text-white' : 'bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200'}`}
                                        onClick={() => toggleTab('Cancelled', 'Cancelled')}
                                    >
                                        Đã Hủy
                                    </button>
                                </div>
                                <div className="ms-auto flex gap-2">
                                    <button 
                                        type="button" 
                                        className="text-white btn bg-green-500 border-green-500 hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/20"
                                        onClick={exportOrdersToExcel}
                                    >
                                        <Download className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" />
                                        <span className="align-middle">Xuất Excel</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div id="table-loading-state" className="flex items-center justify-center h-80">
                            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-white bg-custom-500 rounded-full animate-pulse">Đang tải...</div>
                        </div>
                    ) : data && data.length > 0 ? (
                        <>
                            <div className="mt-5 overflow-x-auto">
                                <table className="w-full whitespace-nowrap">
                                    <thead className="bg-slate-100 dark:bg-zink-600">
                                        <tr>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Mã Đơn Hàng</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Ngày Đặt</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Sản Phẩm</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200 text-right">Tổng Tiền</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200 text-center">Trạng Thái</th>
                                            <th className="px-6 py-3 font-semibold text-slate-500 border-b border-slate-200">Thao Tác</th>
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
                                                    <div className="max-h-[120px] overflow-y-auto custom-scrollbar pr-2">
                                                        {order.orderDetails && order.orderDetails.length > 0 ? (
                                                            order.orderDetails.map((product: any, idx: number) => (
                                                                <div key={idx} className="flex items-center gap-2 mb-2 last:mb-0">
                                                                    {product.productImage && (
                                                                        <img 
                                                                            src={product.productImage} 
                                                                            alt={product.productName} 
                                                                            className="h-10 w-10 object-cover rounded flex-shrink-0" 
                                                                        />
                                                                    )}
                                                                    <div className="truncate max-w-[180px] text-sm">
                                                                        {product.productName}
                                                                    </div>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <span className="text-slate-400 text-sm italic">Không có sản phẩm</span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 border-y border-slate-200 text-right">{formatCurrency(order.orderTotal)}</td>
                                                <td className="px-6 py-3 border-y border-slate-200 text-center">
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
                                                                    <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Xem Chi Tiết</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    to="#!" 
                                                                    onClick={() => handleDropdownAction("edit", order)}
                                                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-50 dark:focus:bg-zink-500 dark:focus:text-zink-50"
                                                                >
                                                                    <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Chỉnh Sửa</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    to="#!" 
                                                                    onClick={() => handleDropdownAction("delete", order)}
                                                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-50 dark:focus:bg-zink-500 dark:focus:text-zink-50"
                                                                >
                                                                    <Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Xóa</span>
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
                            
                            <div className="flex flex-col items-center gap-4 mt-5 md:flex-row">
                                <div className="text-slate-500 dark:text-zink-200">
                                    Hiển thị <span className="font-semibold">{((currentPage - 1) * pageSize) + 1}</span> đến{" "}
                                    <span className="font-semibold">
                                        {Math.min(currentPage * pageSize, data.length)}
                                    </span>{" "}
                                    trong tổng số <span className="font-semibold">{data.length}</span> kết quả
                                </div>
                                <ul className="flex flex-wrap items-center gap-2 pagination grow justify-end">
                                    <li>
                                        <Link
                                            to="#"
                                            className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:ring focus:ring-custom-500/20 dark:focus:ring-custom-500/20 active:bg-custom-50 dark:active:bg-custom-500/10 active:text-custom-500 dark:active:text-custom-500 active:border-custom-500 dark:active:border-custom-500 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage > 1) setCurrentPage(prev => prev - 1);
                                            }}
                                        >
                                            Trước
                                        </Link>
                                    </li>
                                    {Array.from({ length: pageCount || 1 }).map((_, index) => (
                                        <li key={index}>
                                            <Link
                                                to="#"
                                                className={`inline-flex items-center justify-center size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 hover:text-custom-500 dark:hover:text-custom-500 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:ring focus:ring-custom-500/20 dark:focus:ring-custom-500/20 active:bg-custom-50 dark:active:bg-custom-500/10 active:text-custom-500 dark:active:text-custom-500 active:border-custom-500 dark:active:border-custom-500 ${currentPage === index + 1 ? "bg-custom-50 dark:bg-custom-500/10 text-custom-500 dark:text-custom-500 border-custom-500 dark:border-custom-500" : "bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200"}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setCurrentPage(index + 1);
                                                }}
                                            >
                                                {index + 1}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link
                                            to="#"
                                            className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:ring focus:ring-custom-500/20 dark:focus:ring-custom-500/20 active:bg-custom-50 dark:active:bg-custom-500/10 active:text-custom-500 dark:active:text-custom-500 active:border-custom-500 dark:active:border-custom-500 ${currentPage === pageCount ? "opacity-50 cursor-not-allowed" : ""}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage < pageCount) setCurrentPage(prev => prev + 1);
                                            }}
                                        >
                                            Tiếp
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className="noresult py-6 text-center">
                            <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                            <h5 className="mt-2 mb-1">Xin lỗi! Không tìm thấy kết quả</h5>
                            <p className="mb-0 text-slate-500 dark:text-zink-200">Chúng tôi đã tìm kiếm hơn 299+ đơn hàng nhưng không tìm thấy đơn hàng nào phù hợp với tìm kiếm của bạn.</p>
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
                    <Modal.Title className="text-16">{!!isEdit ? "Chỉnh Sửa Đơn Hàng" : "Thêm Đơn Hàng"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <label htmlFor="orderId" className="inline-block mb-2 text-base font-medium">Mã Đơn Hàng</label>
                                <input type="text" id="orderId" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" disabled value={eventData?.id || ""} required />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="orderDateInput" className="inline-block mb-2 text-base font-medium">Ngày Đặt Hàng</label>
                                <Flatpickr
                                    id="orderDateInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Chọn ngày' name='createdTime'
                                    onChange={(date: any) => validation.setFieldValue("createdTime", moment(date[0]).format("YYYY-MM-DDTHH:mm:ss"))}
                                    value={validation.values.createdTime || ''}
                                />
                                {validation.touched.createdTime && validation.errors.createdTime ? (
                                    <p className="text-red-400">{validation.errors.createdTime}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="statusSelect" className="inline-block mb-2 text-base font-medium">Trạng Thái</label>
                                <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices data-choices-search-false id="statusSelect"
                                    name="status"
                                    onChange={validation.handleChange}
                                    value={validation.values.status || ""}
                                >
                                    <option value="Processing">Đang Xử Lý</option>
                                    <option value="Awaiting Payment">Chờ Thanh Toán</option>
                                    <option value="Pending">Đang Chờ</option>
                                    <option value="Shipping">Đang Giao</option>
                                    <option value="Delivered">Đã Giao</option>
                                    <option value="Cancelled">Đã Hủy</option>
                                    <option value="Return">Trả Hàng</option>
                                </select>
                                {validation.touched.status && validation.errors.status ? (
                                    <p className="text-red-400">{validation.errors.status}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="amountInput" className="inline-block mb-2 text-base font-medium">Tổng Tiền</label>
                                <input type="number" id="amountInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Nhập số tiền"
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
                            <button type="reset" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Hủy</button>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!isEdit ? "Cập Nhật" : "Thêm Đơn Hàng"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Orders;