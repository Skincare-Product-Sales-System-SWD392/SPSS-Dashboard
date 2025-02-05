import React from "react";
import useChartColors from "Common/useChartColors";
import ReactApexChart from "react-apexcharts";

const RecentStatistics = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    const series = [{
        name: 'Following',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 87, 72]
    }, {
        name: 'Followers',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 105, 91]
    }];
    var options: any = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: chartColors,
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
            opacity: 1
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-purple-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
}

export default RecentStatistics;