import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import { ApexOptions } from "apexcharts";

// Add proper type definitions for chart data
interface Product {
    id?: string;
    name: string;
    price: number;
    marketPrice?: number;
    image?: string;
    [key: string]: any;
}

interface ChartExportData {
    products: Product[];
    type: 'priceComparison' | 'discount' | 'priceRange';
}

interface ProductDataItem {
    name: string;
    price?: number;
    marketPrice?: number;
    discount?: number;
}

// Simplified Excel export function focusing only on essential data
const exportChartToExcel = (chartData: any, chartName: string, fileName: string) => {
    try {
        // Create workbook and worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet([]);
        
        // Add title and timestamp
        XLSX.utils.sheet_add_aoa(worksheet, [
            [chartName.toUpperCase()],
            [`Xuất dữ liệu lúc: ${new Date().toLocaleString('vi-VN')}`],
            [""]
        ], { origin: "A1" });
        
        // For price comparison chart (Giá thực tế vs Giá thị trường)
        if (chartData.products && chartData.type === 'priceComparison') {
            // Add headers
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["STT", "Tên sản phẩm", "Giá thực tế", "Giá thị trường", "Giảm giá (%)"]
            ], { origin: "A4" });
            
            // Add product data
            chartData.products.forEach((product: any, idx: number) => {
                const discountPercent = product.marketPrice ? 
                    ((product.marketPrice - product.price) / product.marketPrice * 100).toFixed(2) : "0";
                
                XLSX.utils.sheet_add_aoa(worksheet, [[
                    idx + 1,
                    product.name,
                    product.price.toLocaleString('vi-VN'),
                    product.marketPrice.toLocaleString('vi-VN'),
                    `${discountPercent}%`
                ]], { origin: `A${idx + 5}` });
            });
        }
        // For discount chart
        else if (chartData.products && chartData.type === 'discount') {
            // Add headers
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["STT", "Tên sản phẩm", "Giá thực tế", "Giá thị trường", "Giảm giá (%)"]
            ], { origin: "A4" });
            
            // Sort products by discount percentage
            const sortedProducts = [...chartData.products].sort((a, b) => {
                const discountA = a.marketPrice ? (a.marketPrice - a.price) / a.marketPrice * 100 : 0;
                const discountB = b.marketPrice ? (b.marketPrice - b.price) / b.marketPrice * 100 : 0;
                return discountB - discountA;
            });
            
            // Add product data
            sortedProducts.forEach((product: any, idx: number) => {
                const discountPercent = product.marketPrice ? 
                    ((product.marketPrice - product.price) / product.marketPrice * 100).toFixed(2) : "0";
                
                XLSX.utils.sheet_add_aoa(worksheet, [[
                    idx + 1,
                    product.name,
                    product.price.toLocaleString('vi-VN'),
                    product.marketPrice.toLocaleString('vi-VN'),
                    `${discountPercent}%`
                ]], { origin: `A${idx + 5}` });
            });
        }
        // For price range chart
        else if (chartData.products && chartData.type === 'priceRange') {
            // Add headers
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["STT", "Tên sản phẩm", "Giá thực tế", "Giá thị trường", "Phạm vi giá"]
            ], { origin: "A4" });
            
            // Add product data
            chartData.products.forEach((product: any, idx: number) => {
                let priceRange = "";
                if (product.price < 100000) priceRange = "Dưới 100K";
                else if (product.price < 200000) priceRange = "100K - 200K";
                else if (product.price < 300000) priceRange = "200K - 300K";
                else if (product.price < 500000) priceRange = "300K - 500K";
                else if (product.price < 1000000) priceRange = "500K - 1M";
                else priceRange = "Trên 1M";
                
                XLSX.utils.sheet_add_aoa(worksheet, [[
                    idx + 1,
                    product.name,
                    product.price.toLocaleString('vi-VN'),
                    product.marketPrice ? product.marketPrice.toLocaleString('vi-VN') : "N/A",
                    priceRange
                ]], { origin: `A${idx + 5}` });
            });
        }
        // Fallback for other chart types
        else {
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["Không có dữ liệu sản phẩm"]
            ], { origin: "A4" });
        }
        
        // Set column widths
        worksheet['!cols'] = [
            { wch: 5 },   // STT
            { wch: 40 },  // Tên sản phẩm
            { wch: 15 },  // Giá thực tế
            { wch: 15 },  // Giá thị trường
            { wch: 15 }   // Giảm giá/Phạm vi giá
        ];
        
        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, chartName);
        
        // Generate Excel file and download
        XLSX.writeFile(workbook, fileName);
    } catch (error) {
        console.error('Error exporting chart to Excel:', error);
        alert('Có lỗi khi xuất Excel. Vui lòng thử lại sau.');
    }
};

const OrderStatisticsChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //Order Statistics
    const series = [{
        name: 'Pending',
        data: [17, 16, 19, 22, 24, 29, 25, 20, 25, 31, 28, 35,]
    }, {
        name: 'New Orders',
        data: [30, 24, 32, 27, 16, 22, 32, 21, 24, 20, 38, 28]
    }];
    var options: any = {
        chart: {
            type: 'line' as const,
            height: 310,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: chartColors,
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true,
            padding: {
                top: -20,
                right: 0,
            }
        },
        markers: {
            hover: {
                sizeOffset: 4
            }
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-purple-500", "bg-sky-500"]'
                id={chartId}
                className="apex-charts"
                type='line'
                height={310}
            />
        </React.Fragment>
    );
};

const SalesRevenueOverviewChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    console.log("chartColors",chartColors)

    //Sales Revenue Overview
    const series = [{
        name: 'Total Sales',
        data: [44, 55, 41, 67, 22, 43, 21, 49, 20, 41, 67, 22,]
    }, {
        name: 'Total Profit',
        data: [11, 17, 15, 15, 21, 14, 15, 13, 5, 15, 15, 21,]
    }];
    var options: any = {
        chart: {
            type: 'bar' as const,
            height: 300,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
        tooltip: {
            y: {
                formatter: function (val: any) {
                    return "$" + val + "k";
                }
            }
        },
        grid: {
            show: true,
            padding: {
                top: -20,
                right: -10,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
            },
        },
        colors: chartColors,
        fill: {
            opacity: 1
        },
        legend: {
            position: 'bottom',
        },
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500", "bg-custom-400", "bg-custom-300"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={300}
            />
        </React.Fragment>
    );
};

const TrafficResourcesChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //Traffic Resources Chart
    const series = [44, 34, 22];
    var options: any = {
        chart: {
            height: 222,
            type: 'radialBar' as const,
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w: any) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 875;
                        }
                    }
                }
            }
        },
        grid: {
            show: true,
            padding: {
                top: -8,
                bottom: -15,
                left: 0,
                right: 0,
            }
        },
        colors: chartColors,
        labels: ['Direct', 'Referrals', 'Search Engine'],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-sky-500", "bg-purple-500", "bg-green-500", "bg-yellow-500"]'
                id={chartId}
                className="apex-charts"
                type='radialBar'
                height={222}
            />
        </React.Fragment>
    );
};

const SalesMonthChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //Sales This Month Chart
    const series = [
        {
            type: 'rangeArea',
            name: 'Profit Range',

            data: [
                {
                    x: 'Mar',
                    y: [900, 2900]
                },
                {
                    x: 'Apr',
                    y: [1400, 2700]
                },
                {
                    x: 'May',
                    y: [2600, 3900]
                },
                {
                    x: 'Jun',
                    y: [500, 1700]
                },
                {
                    x: 'Jul',
                    y: [1900, 2300]
                },
                {
                    x: 'Aug',
                    y: [1000, 1500]
                }
            ]
        },

        {
            type: 'rangeArea',
            name: 'Expense Range',
            data: [
                {
                    x: 'Mar',
                    y: [3900, 4900]
                },
                {
                    x: 'Apr',
                    y: [3400, 3900]
                },
                {
                    x: 'May',
                    y: [5100, 5900]
                },
                {
                    x: 'Jun',
                    y: [5400, 6700]
                },
                {
                    x: 'Jul',
                    y: [4300, 4600]
                },
                {
                    x: 'Aug',
                    y: [2100, 2900]
                }
            ]
        },

        {
            type: 'line',
            name: 'Profit Median',
            data: [
                {
                    x: 'Mar',
                    y: 1900
                },
                {
                    x: 'Apr',
                    y: 2200
                },
                {
                    x: 'May',
                    y: 3000
                },
                {
                    x: 'Jun',
                    y: 1000
                },
                {
                    x: 'Jul',
                    y: 2100
                },
                {
                    x: 'Aug',
                    y: 1200
                },
                {
                    x: 'Sep',
                    y: 2250
                },
                {
                    x: 'Oct',
                    y: 2900
                }
            ]
        },
        {
            type: 'line',
            name: 'Expense Median',
            data: [
                {
                    x: 'Mar',
                    y: 4300
                },
                {
                    x: 'Apr',
                    y: 3700
                },
                {
                    x: 'May',
                    y: 5500
                },
                {
                    x: 'Jun',
                    y: 5900
                },
                {
                    x: 'Jul',
                    y: 4500
                },
                {
                    x: 'Aug',
                    y: 3500
                },
                {
                    x: 'Sep',
                    y: 2000
                },
                {
                    x: 'Oct',
                    y: 1800
                }
            ]
        }
    ];
    var options: any = {

        chart: {
            height: 285,
            type: 'rangeArea' as const,
            animations: {
                speed: 500
            },
            toolbar: {
                show: false,
            },
        },
        colors: chartColors,
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: [0.24, 0.24, 1, 1]
        },
        forecastDataPoints: {
            count: 2
        },
        yaxis: {
            show: false,
        },
        stroke: {
            curve: 'straight',
            width: [0, 0, 2, 2]
        },
        grid: {
            show: true,
            padding: {
                top: -8,
                left: 10,
                right: 0,
            }
        },
        legend: {
            show: true,
            customLegendItems: ['Team B', 'Team A'],
            inverseOrder: true
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-sky-100", "bg-orange-100", "bg-sky-500", "bg-orange-500"]'
                id={chartId}
                className="apex-charts"
                type='rangeArea'
                height={285}
            />
        </React.Fragment>
    );
};

const AudienceChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //Audience Chart
    const series = [{
        name: 'Male',
        data: [44, 55, 41, 67, 22, 43, 26]
    }, {
        name: 'Female',
        data: [13, 23, 20, 8, 13, 27, 41]
    }];
    var options: any = {
        chart: {
            type: 'bar' as const,
            height: 390,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 6,
                columnWidth: '44%',
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 600
                        }
                    }
                }
            },
        },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2023 GMT', '01/02/2023 GMT', '01/03/2023 GMT', '01/04/2023 GMT',
                '01/05/2023 GMT', '01/06/2023 GMT', '01/07/2023 GMT'
            ],
        },
        colors: chartColors,
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        fill: {
            opacity: 1
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-sky-500", "bg-orange-400", "bg-green-500", "bg-yellow-500"]'
                id={chartId}
                className="-mt-9 apex-charts"
                type='bar'
                height={390}
            />
        </React.Fragment>
    );
};

const ProductPriceComparisonChart = ({ chartId, products }: { chartId: string, products: Product[] }) => {
    const chartColors = useChartColors(chartId);
    
    // Process data for the chart - limit product name length and format properly
    const productData = products.slice(0, 5).map((product: Product) => ({
        name: product.name.length > 15 ? product.name.substring(0, 15) + '...' : product.name,
        marketPrice: product.marketPrice || 0,
        price: product.price || 0
    }));
    
    const series = [
        {
            name: 'Giá thực tế',
            data: productData.map((item: ProductDataItem) => item.price ?? 0)
        },
        {
            name: 'Giá thị trường',
            data: productData.map((item: ProductDataItem) => item.marketPrice ?? 0)
        }
    ];
    
    const options = {
        chart: {
            type: 'bar' as const,
            height: 260,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: productData.map((item: ProductDataItem) => item.name),
            labels: {
                style: {
                    fontSize: '11px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                }
            }
        },
        yaxis: {
            title: {
                text: 'Giá (K)',
                style: {
                    fontSize: '11px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                }
            },
            labels: {
                formatter: function(val: number) {
                    return val.toLocaleString('vi-VN') + "K";
                }
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val: number) {
                    return val.toLocaleString('vi-VN') + "K"
                }
            }
        },
        legend: {
            position: 'top',
            fontSize: '11px',
        },
        colors: chartColors
    };
    
    // Function to handle export
    const handleExport = () => {
        exportChartToExcel(
            { 
                products: products, 
                type: 'priceComparison' 
            }, 
            'Phân tích giá sản phẩm', 
            'phan_tich_gia_san_pham.xlsx'
        );
    };
    
    return (
        <React.Fragment>
            <div className="relative">
                <div className="absolute top-0 right-0 z-10 p-2" style={{ marginTop: "-42px", position:"absolute" }}>
                    <button 
                        onClick={handleExport}
                        className="flex items-center px-4 py-2 text-sm font-medium text-white bg-custom-500 border border-transparent rounded-md hover:bg-custom-600 focus:outline-none"
                    >
                        <Download className="size-4 mr-1.5" />
                        Xuất Excel
                    </button>
                </div>
                <ReactApexChart
                    options={options as ApexOptions}
                    series={series}
                    data-chart-colors='["bg-custom-500", "bg-green-500"]'
                    id={chartId}
                    className="apex-charts"
                    type='bar'
                    height={280}
                />
            </div>
        </React.Fragment>
    );
};

const ProductCategoryChart = ({ chartId, products }: { chartId: string, products: any[] }) => {
    const chartColors = useChartColors(chartId);
    
    // For this example, we'll simulate categories by grouping products by first word
    const categoryCounts: Record<string, number> = {};
    
    products.forEach(product => {
        // Extract first word as a simple category simulation
        const firstWord = product.name.split(' ')[0];
        if (categoryCounts[firstWord]) {
            categoryCounts[firstWord]++;
        } else {
            categoryCounts[firstWord] = 1;
        }
    });
    
    const categories = Object.keys(categoryCounts);
    const counts = Object.values(categoryCounts);
    
    // Product Category Chart
    const series = counts;
    
    const options: any = {
        chart: {
            type: 'pie' as const,
            height: 350,
        },
        labels: categories,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        colors: chartColors,
        title: {
            text: 'Phân loại sản phẩm',
            align: 'center',
            style: {
                fontSize: '16px',
                fontWeight: 'bold'
            }
        }
    };
    
    // Function to handle export
    const handleExport = () => {
        exportChartToExcel(series, 'Phân loại sản phẩm', 'phan_loai_san_pham.xlsx');
    };
    
    return (
        <React.Fragment>
            <div className="relative">
                <div className="absolute top-0 right-0 z-10 p-2" style={{ marginBottom: "1000px" }}>
                    <button 
                        onClick={handleExport}
                        className="flex items-center px-5 py-2.5 text-sm font-medium text-white bg-custom-500 border border-transparent rounded-md hover:bg-custom-600 focus:outline-none"
                    >
                        <Download className="size-5 mr-2" />
                        Xuất Excel
                    </button>
                </div>
                <ReactApexChart
                    options={options}
                    series={series}
                    data-chart-colors='["bg-sky-500", "bg-purple-500", "bg-green-500", "bg-yellow-500", "bg-red-500", "bg-blue-500"]'
                    id={chartId}
                    className="apex-charts"
                    type='pie'
                    height={350}
                />
            </div>
        </React.Fragment>
    );
};

const PriceDiscountChart = ({ chartId, products }: any) => {
    const chartColors = useChartColors(chartId);
    
    // Calculate discount percentages
    const productData = products.slice(0, 6).map((product: Product) => {
        const discountPercent = product.marketPrice ? 
            ((product.marketPrice - product.price) / product.marketPrice * 100).toFixed(1) :
            '0.0';
        return {
            name: product.name.substring(0, 12) + '...',
            discount: parseFloat(discountPercent)
        };
    }).sort((a: ProductDataItem, b: ProductDataItem) => (b.discount || 0) - (a.discount || 0)); // Sort by discount percentage
    
    // Price Discount Chart
    const series = [{
        name: 'Phần trăm giảm giá',
        data: productData.map((item: ProductDataItem) => item.discount ?? 0)
    }];
    
    const options: any = {
        chart: {
            type: 'bar' as const,
            height: 360,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(val: number) {
                return val.toFixed(1) + '%';
            },
            style: {
                fontSize: '11px',
                colors: ['#fff']
            }
        },
        xaxis: {
            categories: productData.map((item: ProductDataItem) => item.name),
            labels: {
                formatter: function(val: number) {
                    // Return just the numeric value without the percentage symbol
                    return val.toFixed(1);
                },
                style: {
                    fontSize: '11px',
                }
            }
        },
        colors: chartColors
    };
    
    // Function to handle export
    const handleExport = () => {
        exportChartToExcel(
            { 
                products: products, 
                type: 'discount' 
            }, 
            'Phân tích giảm giá sản phẩm', 
            'phan_tich_giam_gia.xlsx'
        );
    };
    
    return (
        <React.Fragment>
            <div className="relative">
                <div className="absolute top-0 right-0 z-10 p-2" style={{ marginTop: "-45px" , position:"absolute" }}>
                    <button 
                        onClick={handleExport}
                        className="flex items-center px-4 py-2 text-sm font-medium text-white bg-custom-500 border border-transparent rounded-md hover:bg-custom-600 focus:outline-none"
                    >
                        <Download className="size-4 mr-1.5" />
                        Xuất Excel
                    </button>
                </div>
                <ReactApexChart
                    options={options}
                    series={series}
                    data-chart-colors='["bg-green-500"]'
                    id={chartId}
                    className="apex-charts"
                    type='bar'
                    height={300}
                />
            </div>
        </React.Fragment>
    );
};

const TopDiscountedProductsChart = ({ chartId, products }: { chartId: string, products: any[] }) => {
    const chartColors = useChartColors(chartId);
    
    // Calculate discount percentages
    const productData = products.slice(0, 5).map(product => {
        const discountPercent = ((product.marketPrice - product.price) / product.marketPrice * 100).toFixed(1);
        return {
            name: product.name.substring(0, 18) + (product.name.length > 18 ? '...' : ''),
            discount: parseFloat(discountPercent)
        };
    }).sort((a, b) => b.discount - a.discount); // Sort by discount percentage
    
    // Top Discounted Products Chart
    const series = [{
        name: 'Discount %',
        data: productData.map(item => item.discount)
    }];
    
    const options: any = {
        chart: {
            type: 'bar' as const,
            height: 350,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(val: number) {
                return val.toFixed(1) + '%';
            },
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        xaxis: {
            categories: productData.map(item => item.name),
            labels: {
                formatter: function(val: number) {
                    // Return just the numeric value without the percentage symbol
                    return val.toFixed(1);
                }
            }
        },
        yaxis: {
            title: {
                text: undefined
            }
        },
        colors: chartColors
    };
    
    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                data-chart-colors='["bg-green-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

const NewProductsPriceRangeChart = ({ chartId, products }: { chartId: string, products: Product[] }) => {
    const chartColors = useChartColors(chartId);
    
    // Group products by price ranges
    const priceRanges = {
        '0-300K': 0,
        '300K-400K': 0,
        '400K-500K': 0,
        '500K+': 0
    };
    
    products.forEach(product => {
        if (product.price < 300000) {
            priceRanges['0-300K']++;
        } else if (product.price < 400000) {
            priceRanges['300K-400K']++;
        } else if (product.price < 500000) {
            priceRanges['400K-500K']++;
        } else {
            priceRanges['500K+']++;
        }
    });
    
    // New Products Price Range Chart
    const series = Object.values(priceRanges);
    
    const options: any = {
        chart: {
            type: 'donut' as const,
            height: 350,
        },
        labels: Object.keys(priceRanges),
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        colors: chartColors,
        title: {
            text: 'Sản phẩm mới theo phạm vi giá',
            align: 'center',
            style: {
                fontSize: '16px',
                fontWeight: 'bold'
            }
        }
    };
    
    // Function to handle export
    const handleExport = () => {
        exportChartToExcel(
            { 
                products: products, 
                type: 'priceRange' 
            }, 
            'Sản phẩm mới theo phạm vi giá', 
            'san_pham_moi_theo_gia.xlsx'
        );
    };
    
    return (
        <React.Fragment>
            <div className="relative">
                <div className="absolute top-0 right-0 z-10 p-2" style={{ marginTop: "-15px" }}>
                    {/* <button 
                        onClick={handleExport}
                        className="flex items-center px-5 py-2.5 text-sm font-medium text-white bg-custom-500 border border-transparent rounded-md hover:bg-custom-600 focus:outline-none"
                    >
                        <Download className="size-5 mr-2" />
                        Xuất Excel
                    </button> */}
                </div>
                <ReactApexChart
                    options={options}
                    series={series}
                    data-chart-colors='["bg-sky-500", "bg-purple-500", "bg-green-500", "bg-yellow-500"]'
                    id={chartId}
                    className="apex-charts"
                    type='donut'
                    height={350}
                />
            </div>
        </React.Fragment>
    );
};

const NewProductsDiscountChart = ({ chartId, products }: { chartId: string, products: Product[] }) => {
    const chartColors = useChartColors(chartId);
    
    // Calculate discount percentages
    const productData: ProductDataItem[] = products.slice(0, 5).map(product => {
        const discountPercent = ((product.marketPrice || 0) - product.price) / (product.marketPrice || 1) * 100;
        return {
            name: product.name.substring(0, 18) + (product.name.length > 18 ? '...' : ''),
            discount: parseFloat(discountPercent.toFixed(1))
        };
    }).sort((a, b) => (b.discount || 0) - (a.discount || 0)); // Sort by discount percentage
    
    // Top Discounted Products Chart
    const series = [{
        name: 'Giảm giá %',
        data: productData.map(item => item.discount ?? 0)
    }];
    
    const options: any = {
        chart: {
            type: 'bar' as const,
            height: 350,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(val: number) {
                return val.toFixed(1) + '%';
            },
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        xaxis: {
            categories: productData.map(item => item.name),
            labels: {
                formatter: function(val: number) {
                    // Return just the numeric value without the percentage symbol
                    return val.toFixed(1);
                }
            }
        },
        yaxis: {
            title: {
                text: undefined
            }
        },
        colors: chartColors
    };
    
    // Function to handle export
    const handleExport = () => {
        exportChartToExcel(
            { 
                products: products, 
                type: 'discount' 
            } as ChartExportData, 
            'Sản phẩm mới giảm giá nhiều nhất', 
            'san_pham_moi_giam_gia.xlsx'
        );
    };
    
    return (
        <React.Fragment>
            <div className="relative">
                <div className="absolute top-0 right-0 z-10 p-2" style={{ marginTop: "-15px" }}>
                    {/* <button 
                        onClick={handleExport}
                        className="flex items-center px-5 py-2.5 text-sm font-medium text-white bg-custom-500 border border-transparent rounded-md hover:bg-custom-600 focus:outline-none"
                    >
                        <Download className="size-5 mr-2" />
                        Xuất Excel
                    </button> */}
                </div>
                <ReactApexChart
                    options={options}
                    series={series}
                    data-chart-colors='["bg-green-500"]'
                    id={chartId}
                    className="apex-charts"
                    type='bar'
                    height={350}
                />
            </div>
        </React.Fragment>
    );
};

export {
    OrderStatisticsChart,
    SalesRevenueOverviewChart,
    TrafficResourcesChart,
    SalesMonthChart,
    AudienceChart,
    ProductPriceComparisonChart,
    ProductCategoryChart,
    PriceDiscountChart,
    TopDiscountedProductsChart,
    NewProductsPriceRangeChart,
    NewProductsDiscountChart
};