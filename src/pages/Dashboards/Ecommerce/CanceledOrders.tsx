import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'slices/store';
import { fetchCanceledOrders } from 'slices/dashboard/reducer';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Eye, Download } from 'lucide-react';
import * as XLSX from 'xlsx';

const CanceledOrders = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { canceledOrders, loading, error } = useSelector((state: RootState) => state.dashboard);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Add console logs to debug
        console.log('CanceledOrders component mounted');
        
        dispatch(fetchCanceledOrders({ pageNumber: 1, pageSize: 10 }))
            .unwrap()
            .then(data => {
                console.log('Canceled orders loaded successfully:', data);
                setIsLoaded(true);
            })
            .catch(err => {
                console.error('Error loading canceled orders:', err);
                setIsLoaded(true);
            });
    }, [dispatch]);
    
    // Debug logs
    useEffect(() => {
        console.log('Current canceledOrders state:', canceledOrders);
        console.log('Loading state:', loading);
        console.log('Error state:', error);
    }, [canceledOrders, loading, error]);
    
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
        if (!canceledOrders || canceledOrders.length === 0) return;
        
        try {
            // Create workbook and worksheet
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.aoa_to_sheet([]);
            
            // Add title and timestamp
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["BÁO CÁO ĐƠN HÀNG BỊ HỦY"],
                [`Xuất dữ liệu lúc: ${new Date().toLocaleString('vi-VN')}`],
                [""]
            ], { origin: "A1" });
            
            // Add headers
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["STT", "Mã đơn", "Khách hàng", "Tổng tiền", "Thời gian hoàn tiền", "Lý do hủy", "Tỷ lệ hoàn tiền", "Số tiền hoàn"]
            ], { origin: "A4" });
            
            // Add data rows
            canceledOrders.forEach((order, index) => {
                const rowIndex = index + 5;
                
                XLSX.utils.sheet_add_aoa(worksheet, [[
                    index + 1,
                    order.orderId,
                    order.fullname,
                    order.total.toLocaleString('vi-VN'),
                    formatDate(order.refundTime),
                    order.refundReason,
                    `${order.refundRate}%`,
                    order.refundAmount.toLocaleString('vi-VN')
                ]], { origin: `A${rowIndex}` });
            });
            
            // Set column widths
            worksheet['!cols'] = [
                { wch: 5 },    // STT
                { wch: 40 },   // Mã đơn
                { wch: 25 },   // Khách hàng
                { wch: 15 },   // Tổng tiền
                { wch: 20 },   // Thời gian hoàn tiền
                { wch: 30 },   // Lý do hủy
                { wch: 15 },   // Tỷ lệ hoàn tiền
                { wch: 15 }    // Số tiền hoàn
            ];
            
            // Add the worksheet to the workbook
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Đơn hàng bị hủy');
            
            // Generate Excel file and download
            XLSX.writeFile(workbook, 'don_hang_bi_huy.xlsx');
            
        } catch (error) {
            console.error('Error exporting to Excel:', error);
            alert('Có lỗi khi xuất Excel. Vui lòng thử lại sau.');
        }
    };
    
    return (
        <React.Fragment>
            <div className="col-span-12 card">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Đơn hàng bị hủy gần đây</h6>
                        {!loading && canceledOrders && canceledOrders.length > 0 && (
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
                    ) : error ? (
                        <div className="text-center py-4 text-red-500">
                            <p>Lỗi tải dữ liệu: {error}</p>
                            <button 
                                className="mt-2 px-4 py-2 bg-primary-500 text-white rounded"
                                onClick={() => dispatch(fetchCanceledOrders({ pageNumber: 1, pageSize: 10 }))}
                            >
                                Thử lại
                            </button>
                        </div>
                    ) : isLoaded && (!canceledOrders || canceledOrders.length === 0) ? (
                        <div className="text-center py-10 bg-slate-50 dark:bg-zink-600 rounded-md">
                            <p className="text-slate-500 dark:text-zink-200">Không có đơn hàng bị hủy</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                                <thead className="text-left bg-slate-100 dark:bg-zink-600">
                                    <tr>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Mã đơn</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Khách hàng</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Tổng tiền</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Lý do hủy</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Thời gian hoàn tiền</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {canceledOrders && canceledOrders.map((order, index) => (
                                        <tr 
                                            key={order.orderId} 
                                            className={`${index % 2 === 0 ? "bg-white dark:bg-zink-700" : "bg-slate-50 dark:bg-zink-600"} hover:bg-slate-100 dark:hover:bg-zink-500 transition-colors duration-200`}
                                        >
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                <span className="text-slate-800 dark:text-zink-50">{order.orderId.substring(0, 8)}...</span>
                                            </td>
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                <div className="flex items-center">
                                                    <span className="text-slate-800 dark:text-zink-50">{order.fullname}</span>
                                                    <span className="text-slate-500 dark:text-zink-200 ml-1">({order.username})</span>
                                                </div>
                                            </td>
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                <span className="font-medium text-custom-500">{formatCurrency(order.total)}</span>
                                            </td>
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                <span className="text-slate-800 dark:text-zink-50">{order.refundReason}</span>
                                            </td>
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                                                <span className="text-slate-800 dark:text-zink-50">{formatDate(order.refundTime)}</span>
                                            </td>
                                            <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
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
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default CanceledOrders;