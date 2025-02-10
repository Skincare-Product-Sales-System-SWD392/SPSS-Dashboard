import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import { githubdata } from "../Series";

const AreaYearsChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    const series = [{
        name: 'commits',
        data: githubdata.series
    }];
    var optionsYears : any = {
        chart: {
            height: 150,
            type: 'area',
            toolbar: {
                autoSelected: 'selection',
            },
            brush: {
                enabled: true,
                target: 'chartyear'
            },
            selection: {
                enabled: true,
                xaxis: {
                    min: new Date('26 Jan 2014').getTime(),
                    max: new Date('29 Mar 2015').getTime()
                }
            },
        },
        colors: chartColors,
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0,
            curve: 'smooth'
        },
        fill: {
            opacity: 1,
            type: 'solid'
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={optionsYears}
                series={series || []}
                data-chart-colors='["bg-custom-500"]'
                id={chartId}
                className="apex-charts"
                type='area'
                height={150}
            />
        </React.Fragment>
    );
};

export {
    AreaYearsChart
};