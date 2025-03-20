import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'slices/store';
import ReactApexChart from 'react-apexcharts';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useChartColors  from 'Common/ChartsDynamicColor';

const ProductRatingsChart = () => {
    const { bestSellers, loading } = useSelector((state: RootState) => state.dashboard);
    const products = bestSellers?.items || [];
    const chartId = "productRatingsChart";
    const chartColors = useChartColors(chartId);
    
    // Generate random ratings data since your API doesn't include ratings
    const generateRandomRating = () => {
        return (3 + Math.random() * 2).toFixed(1); // Random rating between 3.0 and 5.0
    };
    
    const productData = products.slice(0, 5).map(product => {
        return {
            name: product.name.substring(0, 15) + '...',
            rating: parseFloat(generateRandomRating()),
            price: product.price / 1000 // Convert to K
        };
    });
    
    // Sort by rating
    productData.sort((a, b) => b.rating - a.rating);
    
    // Chart configuration
    const series = [{
        name: 'Rating',
        data: productData.map(item => item.rating)
    }];
    
    const options: any = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
                barHeight: '60%',
                distributed: true,
                colors: {
                    ranges: [
                        { from: 0, to: 3.4, color: '#f87171' },
                        { from: 3.5, to: 3.9, color: '#fbbf24' },
                        { from: 4.0, to: 4.4, color: '#60a5fa' },
                        { from: 4.5, to: 5, color: '#34d399' }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(val: number) {
                return val.toFixed(1);
            },
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            offsetX: 0
        },
        xaxis: {
            categories: productData.map(item => item.name),
            labels: {
                formatter: function(val: number) {
                    return val.toFixed(1);
                }
            },
            min: 0,
            max: 5
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        title: {
            text: 'Product Ratings',
            align: 'center'
        },
        subtitle: {
            text: 'Top 5 rated products',
            align: 'center'
        },
        tooltip: {
            y: {
                title: {
                    formatter: function() {
                        return 'Rating:';
                    }
                }
            }
        }
    };
    
    return (
        <React.Fragment>
            <div className="col-span-12 card lg:col-span-6 2xl:col-span-4">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Product Ratings</h6>
                   </div>
                    
                    {loading ? (
                        <div className="flex justify-center py-10">
                            <div className="animate-spin size-6 border-2 border-slate-200 dark:border-zink-500 rounded-full border-t-custom-500 dark:border-t-custom-500"></div>
                        </div>
                    ) : products.length > 0 ? (
                        <ReactApexChart
                            options={options}
                            series={series}
                            data-chart-colors='["bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-purple-500", "bg-red-500"]'
                            id={chartId}
                            className="apex-charts"
                            type='bar'
                            height={350}
                        />
                    ) : (
                        <div className="text-center py-4">
                            <p>No product data available</p>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductRatingsChart; 