import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import { githubdata } from "../Series";

const GithubStyleChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //Github
    const series = [{
        name: 'commits',
        data: githubdata.series
    }];
    var options : any = {
        chart: {
            id: 'chartyear',
            type: 'area',
            height: 130,
            toolbar: {
                show: false,
                autoSelected: 'pan'
            },
            events: {
                mounted: function (chart: any) {
                    var commitsEl: any = document.querySelector('.cmeta span.commits');
                    var commits = chart.getSeriesTotalXRange(chart.w.globals.minX, chart.w.globals.maxX);

                    commitsEl.innerHTML = commits;
                },
                updated: function (chart: any) {
                    var commitsEl: any = document.querySelector('.cmeta span.commits');
                    var commits = chart.getSeriesTotalXRange(chart.w.globals.minX, chart.w.globals.maxX);

                    commitsEl.innerHTML = commits;
                }
            }
        },
        colors: chartColors,
        stroke: {
            width: 0,
            curve: 'smooth'
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1,
            type: 'solid'
        },
        yaxis: {
            show: false,
            tickAmount: 3,
        },
        xaxis: {
            type: 'datetime',
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-orange-500"]'
                id={chartId}
                className="apex-charts"
                type='area'
                height={130}
            />
        </React.Fragment>
    );
};

export {
    GithubStyleChart
};