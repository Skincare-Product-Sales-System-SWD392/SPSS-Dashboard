import useChartColors from 'Common/useChartColors';
import React from 'react'
import { seriesData } from '../Series';
import ReactApexChart from 'react-apexcharts';

import logo from 'assets/images/logo-sm.png';

const AnnotationLine = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [{
        data: seriesData.monthDataSeries1.prices
    }];
    var options : any = {
        chart: {
            height: 350,
            type: 'line',
            id: 'areachart-2'
        },
        annotations: {
            yaxis: [{
                y: 8200,
                borderColor: '#00E396',
                label: {
                    borderColor: '#00E396',
                    style: {
                        color: '#fff',
                        background: '#00E396',
                    },
                    text: 'Support',
                }
            }, {
                y: 8600,
                y2: 9000,
                borderColor: '#000',
                fillColor: '#FEB019',
                opacity: 0.2,
                label: {
                    borderColor: '#333',
                    style: {
                        fontSize: '10px',
                        color: '#333',
                        background: '#FEB019',
                    },
                    text: 'Y-axis range',
                }
            }],
            xaxis: [{
                x: new Date('23 Nov 2017').getTime(),
                strokeDashArray: 0,
                borderColor: '#775DD0',
                label: {
                    borderColor: '#775DD0',
                    style: {
                        color: '#fff',
                        background: '#775DD0',
                    },
                    text: 'Anno Test',
                }
            }, {
                x: new Date('26 Nov 2017').getTime(),
                x2: new Date('28 Nov 2017').getTime(),
                fillColor: '#B3F7CA',
                opacity: 0.4,
                label: {
                    borderColor: '#B3F7CA',
                    style: {
                        fontSize: '10px',
                        color: '#fff',
                        background: '#00E396',
                    },
                    offsetY: -10,
                    text: 'X-axis range',
                }
            }],
            points: [{
                x: new Date('01 Dec 2017').getTime(),
                y: 8607.55,
                marker: {
                    size: 8,
                    fillColor: '#fff',
                    strokeColor: 'red',
                    radius: 2,
                    cssClass: 'apexcharts-custom-class'
                },
                label: {
                    borderColor: '#FF4560',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#FF4560',
                    },

                    text: 'Point Annotation',
                }
            }, {
                x: new Date('08 Dec 2017').getTime(),
                y: 9340.85,
                marker: {
                    size: 0
                },
                image: {
                    path: logo,
                }
            }]
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            padding: {
                right: 30,
                left: 20
            }
        },
        colors: chartColors,
        title: {
            text: 'Line with Annotations',
            align: 'left'
        },
        labels: seriesData.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500"]'
                id={chartId}
                className="apex-charts"
                type='line'
                height={350}
            />
        </React.Fragment>
    )
}

export default AnnotationLine