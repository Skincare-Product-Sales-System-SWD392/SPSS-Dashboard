import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Eye, Download } from 'lucide-react';
import axios from 'axios';
import * as XLSX from 'xlsx';

// Define the CanceledOrder interface
interface CanceledOrder {
  orderId: string;
  userId: string;
  username: string;
  fullname: string;
  total: number;
  refundTime: string;
  refundReason: string;
  refundRate: number;
  refundAmount: number;
}

const CanceledOrders = () => {
    // Local state to manage the data
    const [orders, setOrders] = useState<CanceledOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data directly in the component
    useEffect(() => {
        const fetchCanceledOrders = async () => {
            try {
                setLoading(true);
                console.log('Fetching canceled orders...');
                
                const response = await axios.get('http://localhost:5041/api/orders/canceled-orders');
                console.log('Raw API Response:', response);
                console.log('API Response data:', response.data);
                
                // More lenient check for valid data
                if (response.data) {
                    if (response.data.success && Array.isArray(response.data.data)) {
                        console.log('Found data array in response.data.data:', response.data.data);
                        setOrders(response.data.data);
                    } else if (Array.isArray(response.data)) {
                        console.log('Response data is directly an array:', response.data);
                        setOrders(response.data);
                    } else if (response.data.data && typeof response.data.data === 'object') {
                        console.log('Response data is an object:', response.data.data);
                        setOrders([response.data.data]);
                    } else {
                        console.error('Could not find valid data array in response:', response.data);
                        setError('Invalid response format - could not find data array');
                    }
                } else {
                    setError('Empty response from API');
                    console.error('Empty response from API');
                }
            } catch (err: any) {
                setError(err.message || 'Failed to fetch canceled orders');
                console.error('Error fetching canceled orders:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCanceledOrders();
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
        // Create a new workbook
        const workbook = XLSX.utils.book_new();
        
        // Format the data for Excel
        const excelData = orders.map((order, index) => ({
            'STT': index + 1,
            'Mã đơn hàng': order.orderId,
            'Mã khách hàng': order.userId,
            'Tên đăng nhập': order.username,
            'Họ và tên': order.fullname,
            'Tổng tiền đơn hàng': formatCurrency(order.total),
            'Thời gian hoàn tiền': formatDate(order.refundTime),
            'Lý do hủy đơn': order.refundReason,
            'Tỷ lệ hoàn tiền (%)': order.refundRate,
            'Số tiền hoàn trả': formatCurrency(order.refundAmount)
        }));
        
        // Create a worksheet
        const worksheet = XLSX.utils.json_to_sheet(excelData);
        
        // Set column widths for better readability
        const columnWidths = [
            { wch: 5 },  // STT
            { wch: 40 }, // Mã đơn hàng
            { wch: 40 }, // Mã khách hàng
            { wch: 15 }, // Tên đăng nhập
            { wch: 25 }, // Họ và tên
            { wch: 15 }, // Tổng tiền đơn hàng
            { wch: 20 }, // Thời gian hoàn tiền
            { wch: 30 }, // Lý do hủy đơn
            { wch: 20 }, // Tỷ lệ hoàn tiền
            { wch: 15 }  // Số tiền hoàn trả
        ];
        worksheet['!cols'] = columnWidths;
        
        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Đơn hàng bị hủy');
        
        // Generate Excel file and trigger download
        const currentDate = moment().format('DDMMYYYY_HHmmss');
        XLSX.writeFile(workbook, `Danh_sach_don_hang_bi_huy_${currentDate}.xlsx`);
    };

    console.log('Rendering component with:', { loading, error, ordersLength: orders.length });

    return (
        <div className="card">
            <div className="card-body">
                <div className="flex justify-between items-center mb-4">
                    <h6 className="text-15">Đơn hàng bị hủy gần đây</h6>
                    
                    {orders.length > 0 && (
                        <button 
                            onClick={exportToExcel}
                            className="flex items-center px-3 py-1.5 text-sm bg-custom-500 text-white rounded hover:bg-custom-600 transition-colors"
                        >
                            <Download className="size-4 mr-1" />
                            Xuất Excel
                        </button>
                    )}
                </div>
                
                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin size-6 border-2 border-slate-200 rounded-full border-t-custom-500"></div>
                    </div>
                ) : error ? (
                    <div className="text-center py-4 text-red-500">
                        <p>Lỗi tải dữ liệu: {error}</p>
                        <button 
                            className="mt-2 px-4 py-2 bg-custom-500 text-white rounded"
                            onClick={() => window.location.reload()}
                        >
                            Thử lại
                        </button>
                    </div>
                ) : orders.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="text-left bg-slate-100">
                                <tr>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200">Mã đơn</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200">Khách hàng</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200">Tổng tiền</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200">Thời gian hoàn tiền</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200">Lý do hủy</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200">Chi tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={order.orderId} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-3.5 py-2.5 border-y border-slate-200">
                                            <span className="font-medium text-slate-800">
                                                {order.orderId.substring(0, 8)}...
                                            </span>
                                        </td>
                                        <td className="px-3.5 py-2.5 border-y border-slate-200">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-slate-800">{order.fullname}</span>
                                                <span className="text-xs text-slate-500">@{order.username}</span>
                                            </div>
                                        </td>
                                        <td className="px-3.5 py-2.5 border-y border-slate-200">
                                            <span className="font-medium text-slate-800">
                                                {formatCurrency(order.total)}
                                            </span>
                                        </td>
                                        <td className="px-3.5 py-2.5 border-y border-slate-200">
                                            <span className="text-slate-800">
                                                {formatDate(order.refundTime)}
                                            </span>
                                        </td>
                                        <td className="px-3.5 py-2.5 border-y border-slate-200">
                                            <span className="text-slate-800">
                                                {order.refundReason}
                                            </span>
                                        </td>
                                        <td className="px-3.5 py-2.5 border-y border-slate-200">
                                            <Link 
                                                to={`/apps-ecommerce-order-overview?id=${order.orderId}`} 
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
                    <div className="text-center py-10 bg-slate-50 rounded-md">
                        <p className="text-slate-500">Không có đơn hàng bị hủy</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CanceledOrders;