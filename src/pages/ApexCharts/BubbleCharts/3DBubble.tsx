import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const Bubble3DChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    // Bubble Charts Generate Data
    function generateData(baseval: any, count: any, yrange: any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

    //3D Bubble
    const series = [{
        name: 'Product1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    }];
    var options : any = {
        chart: {
            height: 350,
            type: 'bubble',
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        colors: chartColors,
        xaxis: {
            tickAmount: 12,
            type: 'datetime',
            labels: {
                rotate: 0,
            }
        },
        yaxis: {
            max: 70
        },
        theme: {
            palette: 'palette2'
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-sky-500", "bg-yellow-500", "bg-red-500", "bg-purple-500"]'
                id={chartId}
                className="apex-charts"
                type='bubble'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    Bubble3DChart
};