import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Eye, Download } from 'lucide-react';
import axios from 'axios';
import * as XLSX from 'xlsx';

// Define an interface for the order type
interface Order {
  id: string;
  status: string;
  orderTotal: number;
  cancelReasonId: string | null;
  createdTime: string;
  paymentMethodId: string;
  orderDetails: Array<{
    productId: string;
    productItemId: string;
    productImage: string;
    productName: string;
    variationOptionValues: string[];
    quantity: number;
    price: number;
    isReviewable: boolean;
  }>;
}

// Define the API response interface
interface PendingOrdersResponse {
  items: Order[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

const PendingOrders = () => {
    const [pendingOrders, setPendingOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        // Directly fetch data from the API
        const fetchPendingOrders = async () => {
            try {
                setLoading(true);
                
                // Use fetch instead of axios to avoid potential issues
                const response = await fetch('http://localhost:5041/api/dashboards/top-pending?topCount=10');
                const data = await response.json();
                
                console.log('API response using fetch:', data);
                
                if (data && data.items && Array.isArray(data.items)) {
                    console.log('Found items in response:', data.items);
                    setPendingOrders(data.items);
                } else {
                    console.error('Unexpected API response format:', data);
                    setPendingOrders([]);
                }
            } catch (error) {
                console.error('Error fetching pending orders:', error);
                setPendingOrders([]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchPendingOrders();
    }, []);
    
    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('vi-VN', { 
            style: 'currency', 
            currency: 'VND',
            maximumFractionDigits: 0
        }).format(amount);
    };
    
    // Format date
    const formatDate = (dateString: string) => {
        return moment(dateString).format('DD/MM/YYYY HH:mm');
    };
    
    // Export to Excel function
    const exportToExcel = () => {
        if (!pendingOrders || pendingOrders.length === 0) return;
        
        try {
            // Create workbook and worksheet
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.aoa_to_sheet([]);
            
            // Add title and timestamp
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["BÁO CÁO ĐƠN HÀNG ĐANG XỬ LÝ"],
                [`Xuất dữ liệu lúc: ${new Date().toLocaleString('vi-VN')}`],
                [""]
            ], { origin: "A1" });
            
            // Add headers
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["STT", "Mã đơn", "Ngày tạo", "Sản phẩm", "Số lượng SP", "Tổng tiền", "Trạng thái"]
            ], { origin: "A4" });
            
            // Set column widths
            worksheet['!cols'] = [
                { wch: 5 },   // STT
                { wch: 15 },  // Mã đơn
                { wch: 20 },  // Ngày tạo
                { wch: 40 },  // Sản phẩm
                { wch: 12 },  // Số lượng SP
                { wch: 15 },  // Tổng tiền
                { wch: 15 }   // Trạng thái
            ];
            
            // Add data rows
            for (let i = 0; i < pendingOrders.length; i++) {
                const order = pendingOrders[i];
                const rowIndex = i + 5; // Start from row 5 (after headers)
                
                const productName = order.orderDetails && order.orderDetails.length > 0 
                    ? order.orderDetails[0].productName 
                    : 'Không có sản phẩm';
                    
                const productCount = order.orderDetails ? order.orderDetails.length : 0;
                
                XLSX.utils.sheet_add_aoa(worksheet, [[
                    i + 1,
                    order.id,
                    formatDate(order.createdTime),
                    productName,
                    productCount,
                    order.orderTotal.toLocaleString('vi-VN'),
                    "Đang xử lý"
                ]], { origin: `A${rowIndex}` });
            }
            
            // Add the worksheet to the workbook
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Đơn hàng đang xử lý');
            
            // Generate Excel file and download
            XLSX.writeFile(workbook, 'don_hang_dang_xu_ly.xlsx');
            
        } catch (error) {
            console.error('Error exporting to Excel:', error);
            alert('Có lỗi khi xuất Excel. Vui lòng thử lại sau.');
        }
    };
    
    console.log('Pending orders state:', pendingOrders);
    console.log('Pending orders length:', pendingOrders?.length || 0);
    
    return (
        <React.Fragment>
            <div className="col-span-12 lg:col-span-6 2xl:col-span-8 card">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Đơn hàng đang xử lý</h6>
                        {!loading && pendingOrders && pendingOrders.length > 0 && (
                            <button 
                                onClick={exportToExcel}
                                className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-custom-500 border border-transparent rounded-md hover:bg-custom-600 focus:outline-none"
                            >
                                <Download className="size-4 mr-1.5" />
                                Xuất Excel
                            </button>
                        )}
                    </div>
                    
                    {loading ? (
                        <div className="flex justify-center py-10">
                            <div className="animate-spin size-6 border-2 border-slate-200 dark:border-zink-500 rounded-full border-t-custom-500 dark:border-t-custom-500"></div>
                        </div>
                    ) : pendingOrders && pendingOrders.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                                <thead className="text-left bg-slate-100 dark:bg-zink-600">
                                    <tr>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Mã đơn</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Ngày tạo</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Sản phẩm</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Tổng tiền</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendingOrders.map((order, index) => (
                                        <tr 
                                            key={order.id} 
                                            className={`${index % 2 === 0 ? "bg-white dark:bg-zink-700" : "bg-slate-50 dark:bg-zink-600"} hover:bg-slate-100 dark:hover:bg-zink-500 transition-colors duration-200`}
                                        >
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                <span className="text-slate-800 dark:text-zink-50">{order.id.substring(0, 8)}...</span>
                                            </td>
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                {formatDate(order.createdTime)}
                                            </td>
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                {order.orderDetails && order.orderDetails.length > 0 ? (
                                                    <div className="flex items-center">
                                                        <img 
                                                            src={order.orderDetails[0].productImage} 
                                                            alt={order.orderDetails[0].productName}
                                                            className="size-8 rounded mr-2 object-cover"
                                                        />
                                                        <span className="text-slate-800 dark:text-zink-50 truncate max-w-[200px]">
                                                            {order.orderDetails[0].productName}
                                                            {order.orderDetails.length > 1 ? ` +${order.orderDetails.length - 1}` : ''}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-slate-500 dark:text-zink-200">Không có sản phẩm</span>
                                                )}
                                            </td>
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                <span className="font-medium text-custom-500">{formatCurrency(order.orderTotal)}</span>
                                            </td>
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                <Link 
                                                    to={`/apps-ecommerce-order-overview?id=${order.id}`} 
                                                    className="inline-flex items-center text-custom-500 hover:underline"
                                                >
                                                    <Eye className="size-4 mr-1" />
                                                    Xem
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-10 bg-slate-50 dark:bg-zink-600 rounded-md">
                            <p className="text-slate-500 dark:text-zink-200">Không có đơn hàng đang xử lý</p>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default PendingOrders; 