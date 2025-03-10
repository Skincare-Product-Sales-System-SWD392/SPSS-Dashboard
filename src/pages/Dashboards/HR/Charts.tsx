import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const TotalEmployeeChart = ({ chartId, dataChartColor, series }: any) => {

    const chartColors = useChartColors(chartId);
    //  Total Employee
    var options: any = {
        chart: {
            height: 110,
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '50%',
                },
                track: {
                    margin: 2,
                },
                dataLabels: {
                    show: false
                }
            }
        },
        grid: {
            padding: {
                top: -15,
                bottom: -15
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Total Employee'],
        colors: chartColors
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors={dataChartColor}
                id={chartId}
                className="grow apex-charts"
                type='radialBar'
                height={110}
            />
        </React.Fragment>
    );
};

const ApplicationReceivedChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    //  Total Employee
    const series = [{
        name: 'Total Application',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Hired Candidates',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }];
    var options: any = {
        chart: {
            height: 315,
            type: 'line',
            stacked: false,
            margin: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: [2, 2],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },

        fill: {
            opacity: [0.03, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        colors: chartColors,
        markers: {
            size: 0
        },
        grid: {
            padding: {
                top: -15,
                right: 0,
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y : any) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500", "bg-green-500"]'
                id={chartId}
                className="apex-charts"
                type='line'
                height={315}
            />
        </React.Fragment>
    );
};

const TotalProjectsChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    //  Total Employee
    const series = [{
        name: 'New',
        data: [44, 55, 41, 67, 22, 43, 14, 55, 41,]
    }, {
        name: 'Pending',
        data: [13, 23, 20, 8, 13, 27, 8, 20, 8,]
    }, {
        name: 'Completed',
        data: [11, 17, 15, 15, 21, 14, 24, 11, 17,]
    }, {
        name: 'Rejected',
        data: [21, 7, 25, 13, 22, 8, 13, 7, 25,]
    }];
    var options: any = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            zoom: {
                enabled: true
            },
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 2,
                columnWidth: '25%',
            },
        },
        grid: {
            padding: {
                top: -15,
                bottom: 5,
                right: 0,
            }
        },
        xaxis: {
            categories: ['01', '02', '03', '04',
                '05', '06', '07', '08', '09'
            ],
        },
        dataLabels: {
            enabled: false
        },
        colors: chartColors,
        legend: {
            position: 'bottom',
        },
        fill: {
            opacity: 1
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500", "bg-yellow-500", "bg-green-400", "bg-red-400"]'
                id={chartId}
                className="-ml-2 apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    TotalEmployeeChart,
    ApplicationReceivedChart,
    TotalProjectsChart
};