import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import { seriesData } from "../Series";

const BasicAreaChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    const series: any = [{
        name: "STOCK ABC",
        data: seriesData.monthDataSeries1.prices
    }];

    var options: any = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },

        title: {
            text: 'Fundamental Analysis of Stocks',
            align: 'left'
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        subtitle: {
            text: 'Price Movements',
            align: 'left'
        },
        colors: chartColors,
        labels: seriesData.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left'
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
                type='area'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    BasicAreaChart
};