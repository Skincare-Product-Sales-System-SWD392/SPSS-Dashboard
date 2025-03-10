import React from "react";
import useChartColors from "Common/useChartColors";
import ReactApexChart from "react-apexcharts";

const BasicLine = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];

    var options: any = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            margin: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        colors: chartColors,
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
                type='line'
                height={350}
            />
        </React.Fragment>
    );
};

const DataLabelLine = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);
    const series = [
        {
            name: "High - 2013",
            data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
            name: "Low - 2013",
            data: [12, 11, 14, 18, 17, 13, 13]
        }
    ];
    var dataLabelOptions: any = {
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: chartColors,
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Temperature'
            },
            min: 5,
            max: 40
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={dataLabelOptions}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-green-500"]'
                id={chartId}
                className="apex-charts"
                type='line'
                height={350}
            />
        </React.Fragment>
    )
}

export { BasicLine, DataLabelLine }