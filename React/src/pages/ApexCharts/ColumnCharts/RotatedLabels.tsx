import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const RotatedLabels = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    const series = [{
        name: 'Servings',
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }];
    var options : any = {
        annotations: {
            points: [{
                x: 'Bananas',
                seriesIndex: 0,
                label: {
                    borderColor: chartColors[1],
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: chartColors[1],
                    },
                    text: 'Bananas are good',
                }
            }]
        },
        colors: chartColors,
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2
        },
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
                'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
            ],
            tickPlacement: 'on'
        },
        yaxis: {
            title: {
                text: 'Servings',
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-red-500", "bg-custom-500"]' 
                id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    RotatedLabels
};