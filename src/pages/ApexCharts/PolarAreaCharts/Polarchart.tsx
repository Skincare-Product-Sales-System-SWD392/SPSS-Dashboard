import useChartColors from 'Common/useChartColors';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

const BasicPolar = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];
    var options: any = {
        chart: {
            height: 350,
            type: 'polarArea',
        },
        stroke: {
            colors: ['#fff']
        },
        colors: chartColors,
        fill: {
            opacity: 0.8
        },
        legend: {
            position: 'bottom'
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-300", "bg-orange-300", "bg-green-300", "bg-yellow-300", "bg-purple-300", "bg-slate-300", "bg-red-300", "bg-emerald-200","bg-pink-200"]'
                id={chartId}
                className="apex-charts"
                height={350}
                type="polarArea"
            />
        </React.Fragment>
    );
};

const MonochromeChart = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [42, 47, 52, 58, 65];
    var options: any = {
        chart: {
            height: 350,
            type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                color: chartColors[0] || "#3B82F6",
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500"]'
                id={chartId}
                className="apex-charts"
                height={350}
                type="polarArea"
            />
        </React.Fragment>
    );
};

export { BasicPolar, MonochromeChart }