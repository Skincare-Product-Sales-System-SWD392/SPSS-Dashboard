import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'slices/store';
import { NewProductsPriceRangeChart, NewProductsDiscountChart } from './Charts';
import { fetchNewProducts } from 'slices/dashboard/reducer';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';

const NewProductsAnalysis = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { newProducts, loading, error } = useSelector((state: RootState) => state.dashboard);
    
    useEffect(() => {
        // Fetch new products directly in this component to ensure data is loaded
        dispatch(fetchNewProducts({ pageNumber: 1, pageSize: 10 }))
            .unwrap()
            .then(data => console.log('New products loaded:', data))
            .catch(err => console.error('Error loading new products:', err));
    }, [dispatch]);
    
    // Function to export price range data to Excel
    const exportPriceRangeToExcel = () => {
        if (!newProducts || newProducts.length === 0) return;
        
        try {
            // Create workbook and worksheet
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.aoa_to_sheet([]);
            
            // Add title and timestamp
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["PHÂN TÍCH SẢN PHẨM MỚI THEO PHẠM VI GIÁ"],
                [`Xuất dữ liệu lúc: ${new Date().toLocaleString('vi-VN')}`],
                [""]
            ], { origin: "A1" });
            
            // Group products by price range
            const priceRanges = [
                { range: "Dưới 100K", min: 0, max: 100000, count: 0 },
                { range: "100K - 200K", min: 100000, max: 200000, count: 0 },
                { range: "200K - 300K", min: 200000, max: 300000, count: 0 },
                { range: "300K - 500K", min: 300000, max: 500000, count: 0 },
                { range: "500K - 1M", min: 500000, max: 1000000, count: 0 },
                { range: "Trên 1M", min: 1000000, max: Infinity, count: 0 }
            ];
            
            // Count products in each range
            newProducts.forEach(product => {
                const price = product.price || 0;
                const range = priceRanges.find(r => price >= r.min && price < r.max);
                if (range) range.count++;
            });
            
            // Add headers
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["STT", "Phạm vi giá", "Số lượng sản phẩm", "Tỷ lệ (%)"]
            ], { origin: "A4" });
            
            // Calculate total for percentage
            const totalProducts = newProducts.length;
            
            // Add data rows
            priceRanges.forEach((range, index) => {
                const percentage = (range.count / totalProducts * 100).toFixed(2);
                
                XLSX.utils.sheet_add_aoa(worksheet, [[
                    index + 1,
                    range.range,
                    range.count,
                    `${percentage}%`
                ]], { origin: `A${index + 5}` });
            });
            
            // Add product details section
            const startRow = priceRanges.length + 7;
            
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["DANH SÁCH SẢN PHẨM MỚI"]
            ], { origin: `A${startRow}` });
            
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["STT", "Tên sản phẩm", "Giá thị trường", "Giá bán", "Giảm giá (%)", "Mã sản phẩm"]
            ], { origin: `A${startRow + 2}` });
            
            // Add product rows
            newProducts.forEach((product, index) => {
                const discountPercent = product.marketPrice ? 
                    ((product.marketPrice - product.price) / product.marketPrice * 100).toFixed(2) : "0.00";
                
                XLSX.utils.sheet_add_aoa(worksheet, [[
                    index + 1,
                    product.name,
                    product.marketPrice ? product.marketPrice.toLocaleString('vi-VN') : "N/A",
                    product.price.toLocaleString('vi-VN'),
                    `${discountPercent}%`,
                    product.id
                ]], { origin: `A${startRow + 3 + index}` });
            });
            
            // Set column widths
            worksheet['!cols'] = [
                { wch: 5 },   // STT
                { wch: 40 },  // Tên sản phẩm/Phạm vi giá
                { wch: 15 },  // Giá thị trường/Số lượng
                { wch: 15 },  // Giá bán/Tỷ lệ
                { wch: 15 },  // Giảm giá
                { wch: 20 }   // Mã sản phẩm
            ];
            
            // Add the worksheet to the workbook
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Phân tích giá sản phẩm mới');
            
            // Generate Excel file and download
            XLSX.writeFile(workbook, 'phan_tich_gia_san_pham_moi.xlsx');
            
        } catch (error) {
            console.error('Error exporting to Excel:', error);
            alert('Có lỗi khi xuất Excel. Vui lòng thử lại sau.');
        }
    };
    
    // Function to export discount data to Excel
    const exportDiscountToExcel = () => {
        if (!newProducts || newProducts.length === 0) return;
        
        try {
            // Create workbook and worksheet
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.aoa_to_sheet([]);
            
            // Add title and timestamp
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["PHÂN TÍCH SẢN PHẨM MỚI GIẢM GIÁ NHIỀU NHẤT"],
                [`Xuất dữ liệu lúc: ${new Date().toLocaleString('vi-VN')}`],
                [""]
            ], { origin: "A1" });
            
            // Calculate discount for each product
            const productsWithDiscount = newProducts
                .filter(product => product.marketPrice && product.marketPrice > product.price)
                .map(product => {
                    const discountPercent = ((product.marketPrice - product.price) / product.marketPrice * 100);
                    return {
                        ...product,
                        discountPercent
                    };
                })
                .sort((a, b) => b.discountPercent - a.discountPercent)
                .slice(0, 10); // Top 10 discounted products
            
            // Add headers
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["STT", "Tên sản phẩm", "Giá thị trường", "Giá bán", "Giảm giá (%)", "Mã sản phẩm"]
            ], { origin: "A4" });
            
            // Add data rows
            productsWithDiscount.forEach((product, index) => {
                XLSX.utils.sheet_add_aoa(worksheet, [[
                    index + 1,
                    product.name,
                    product.marketPrice.toLocaleString('vi-VN'),
                    product.price.toLocaleString('vi-VN'),
                    `${product.discountPercent.toFixed(2)}%`,
                    product.id
                ]], { origin: `A${index + 5}` });
            });
            
            // Set column widths
            worksheet['!cols'] = [
                { wch: 5 },   // STT
                { wch: 40 },  // Tên sản phẩm
                { wch: 15 },  // Giá thị trường
                { wch: 15 },  // Giá bán
                { wch: 15 },  // Giảm giá
                { wch: 20 }   // Mã sản phẩm
            ];
            
            // Add the worksheet to the workbook
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sản phẩm mới giảm giá');
            
            // Generate Excel file and download
            XLSX.writeFile(workbook, 'san_pham_moi_giam_gia.xlsx');
            
        } catch (error) {
            console.error('Error exporting to Excel:', error);
            alert('Có lỗi khi xuất Excel. Vui lòng thử lại sau.');
        }
    };
    
    return (
        <React.Fragment>
            <div className="col-span-12">
                <h5 className="mb-4 text-16">Phân tích sản phẩm mới</h5>
            </div>
            <div className="col-span-12 card lg:col-span-6">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Sản phẩm mới theo phạm vi giá</h6>
                        {!loading && !error && newProducts && newProducts.length > 0 && (
                            <button 
                                onClick={exportPriceRangeToExcel}
                                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-custom-500 border border-transparent rounded-md hover:bg-custom-600 focus:outline-none"
                            >
                                <Download className="size-5 mr-2" />
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
                            <p>Lỗi tải sản phẩm: {error}</p>
                            <button 
                                className="mt-2 px-4 py-2 bg-primary-500 text-white rounded"
                                onClick={() => dispatch(fetchNewProducts({ pageNumber: 1, pageSize: 10 }))}
                            >
                                Thử lại
                            </button>
                        </div>
                    ) : newProducts && newProducts.length > 0 ? (
                        <NewProductsPriceRangeChart chartId="newProductsPriceRangeChart" products={newProducts} />
                    ) : (
                        <div className="text-center py-4">
                            <p>Không có dữ liệu sản phẩm mới</p>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="col-span-12 card lg:col-span-6">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Sản phẩm mới giảm giá nhiều nhất</h6>
                        {!loading && !error && newProducts && newProducts.length > 0 && (
                            <button 
                                onClick={exportDiscountToExcel}
                                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-custom-500 border border-transparent rounded-md hover:bg-custom-600 focus:outline-none"
                            >
                                <Download className="size-5 mr-2" />
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
                            <p>Lỗi tải sản phẩm: {error}</p>
                            <button 
                                className="mt-2 px-4 py-2 bg-primary-500 text-white rounded"
                                onClick={() => dispatch(fetchNewProducts({ pageNumber: 1, pageSize: 10 }))}
                            >
                                Thử lại
                            </button>
                        </div>
                    ) : newProducts && newProducts.length > 0 ? (
                        <NewProductsDiscountChart chartId="newProductsDiscountChart" products={newProducts} />
                    ) : (
                        <div className="text-center py-4">
                            <p>Không có dữ liệu sản phẩm mới</p>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default NewProductsAnalysis; 