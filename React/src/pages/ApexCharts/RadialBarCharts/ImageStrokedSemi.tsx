import useChartColors from 'Common/useChartColors';
import React from 'react'
import ReactApexChart from 'react-apexcharts'

import small2 from "assets/images/small/img-2.jpg"
import logosm from "assets/images/logo-sm.png"

const ImageRadial = ({ chartId }: any) => {

    const series = [67];
    var options : any = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '70%',
                    image: logosm,
                    imageWidth: 64,
                    imageHeight: 64,
                    imageClipped: false
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 70,
                        fontSize: '22px'
                    }
                }
            }
        },
        fill: {
            type: 'image',
            image: {
                src: [small2],
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Volatility'],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                id={chartId}
                className="apex-charts"
                height={350}
                type="radialBar"
            />
        </React.Fragment>
    );
};

const StrokedChart = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [67];
    var options : any = {
        chart: {
            height: 350,
            type: 'radialBar',
            offsetY: -10
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val : any) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        colors: chartColors,
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Median Ratio'],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                id={chartId}
                className="apex-charts"
                height={350}
                data-chart-colors='["bg-purple-500"]'
                type="radialBar"
            />
        </React.Fragment>
    );
};

const SemiRadial = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [76];
    var options : any = {
        chart: {
            type: 'radialBar',
            height: 350,
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        colors: chartColors,
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['Average Results'],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                id={chartId}
                className="apex-charts"
                height={350}
                data-chart-colors='["bg-custom-500"]'
                type="radialBar"
            />
        </React.Fragment>
    );
};

export { ImageRadial, StrokedChart, SemiRadial }