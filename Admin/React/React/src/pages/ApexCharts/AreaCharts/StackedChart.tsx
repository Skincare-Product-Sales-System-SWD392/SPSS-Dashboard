import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const StackedChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    var generateDayWiseTimeSeries = function (baseval : any, count : any, yrange : any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }
    
    const series = [
        {
            name: 'South',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'North',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 20
            })
        },
        {
            name: 'Central',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 15
            })
        }
    ];
    var options : any = {
        chart: {
            type: 'area',
            height: 350,
            stacked: true,
            events: {
                selection: function (chart : any, e : any) {
                    console.log(new Date(e.xaxis.min))
                }
            },
        },
        colors: chartColors,
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            }
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
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-yellow-500", "bg-slate-200"]'
                id={chartId}
                className="apex-charts"
                type='area'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    StackedChart
};