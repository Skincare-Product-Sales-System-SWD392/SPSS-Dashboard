import React from "react";
import ReactApexChart from "react-apexcharts";
// import useChartColors from "Common/useChartColors";

const ReversedBarChart = ({ chartId }: any) => {

    //Reversed Bar Chart
    var options: any = {
        chart: {
            type: 'bar',
            height: 350
        },
        annotations: {
            xaxis: [{
                x: 500,
                borderColor: '#00E396',
                label: {
                    borderColor: '#00E396',
                    style: {
                        color: '#fff',
                        background: '#00E396',
                    },
                    text: 'X annotation',
                }
            }],
            yaxis: [{
                y: 'July',
                y2: 'September',
                label: {
                    text: 'Y annotation'
                }
            }]
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        xaxis: {
            categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
        },
        // colors: chartColors,
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        yaxis: {
            reversed: true,
            axisTicks: {
                show: true
            }
        }
    };
    const series = [{
        data: [400, 430, 448, 470, 540, 580, 690]
    }];

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500"]'
                // id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment >
    );
};

export {
    ReversedBarChart
};