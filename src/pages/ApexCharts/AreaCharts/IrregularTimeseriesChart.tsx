import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import moment from "moment";
import { dataSeries } from "../Series";

const IrregularTimeseriesChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    let ts1: number = 1388534400000; // replace with the actual initial timestamp
    let ts2: number = 1388620800000; // replace with the actual initial timestamp
    let ts3: number = 1389052800000; // replace with the actual initial timestamp
    const dataSet: [number, number][][] = [[], [], []];

    for (let i = 0; i < 12; i++) {
        ts1 = ts1 + 86400000;
        const innerArr: [number, number] = [ts1, dataSeries[2][i].value];
        dataSet[0].push(innerArr);
    }

    for (let i = 0; i < 18; i++) {
        ts2 = ts2 + 86400000;
        const innerArr: [number, number] = [ts2, dataSeries[1][i].value];
        dataSet[1].push(innerArr);
    }

    for (let i = 0; i < 12; i++) {
        ts3 = ts3 + 86400000;
        const innerArr: [number, number] = [ts3, dataSeries[0][i].value];
        dataSet[2].push(innerArr);
    }

    const series = [{
        name: 'PRODUCT A',
        data: dataSet[0]
    }, {
        name: 'PRODUCT B',
        data: dataSet[1]
    }, {
        name: 'PRODUCT C',
        data: dataSet[2]
    }];
    var options: any = {
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        colors: chartColors,
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#8e8da4',
                },
                offsetX: 0,
                formatter: function (val: any) {
                    return (val / 1000000).toFixed(2);
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            }
        },
        xaxis: {
            type: 'datetime',
            tickAmount: 8,
            min: new Date("01/01/2014").getTime(),
            max: new Date("01/20/2014").getTime(),
            labels: {
                rotate: -15,
                rotateAlways: true,
                formatter: function (val: any, timestamp: any) {
                    return moment(new Date(timestamp)).format("DD MMM YYYY");
                }
            }
        },
        title: {
            text: 'Irregular Data in Time Series',
            align: 'left',
            offsetX: 14
        },
        tooltip: {
            shared: true
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetX: -10
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-purple-500", "bg-green-500"]'
                id={chartId}
                className="apex-charts"
                type='area'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    IrregularTimeseriesChart
};