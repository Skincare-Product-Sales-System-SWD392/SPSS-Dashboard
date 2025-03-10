import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const BoxplotScatterChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    //Boxplot-Scatter
    const series = [
        {
            name: 'box',
            type: 'boxPlot',
            data: [
                {
                    x: new Date('2017-01-01').getTime(),
                    y: [54, 66, 69, 75, 88]
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: [43, 65, 69, 76, 81]
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: [31, 39, 45, 51, 59]
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: [39, 46, 55, 65, 71]
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: [29, 31, 35, 39, 44]
                }
            ]
        },
        {
            name: 'outliers',
            type: 'scatter',
            data: [
                {
                    x: new Date('2017-01-01').getTime(),
                    y: 32
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: 25
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: 64
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 27
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 78
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: 15
                }
            ]
        }
    ];
    var options : any = {
        chart: {
            type: 'boxPlot',
            height: 350
        },
        plotOptions: {
            boxPlot: {
                colors: {
                    upper: chartColors[0],
                    lower: chartColors[1]
                }
            }
        },
        xaxis: {
            type: 'datetime',
            tooltip: {
                formatter: function (val : any) {
                    return new Date(val).getFullYear();
                }
            }
        },
        tooltip: {
            shared: false,
            intersect: true
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-green-500"]'
                id={chartId}
                className="apex-charts"
                type='boxPlot'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    BoxplotScatterChart
};