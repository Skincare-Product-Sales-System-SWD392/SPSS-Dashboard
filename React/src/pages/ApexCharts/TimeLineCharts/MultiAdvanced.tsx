import useChartColors from 'Common/useChartColors';
import moment from 'moment';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

const MultiSeries = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [
        {
            name: 'Bob',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Joe',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-19').getTime()
                    ]
                }
            ]
        }
    ];
    var options : any = {
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val : any) {
                var a = moment(val[0])
                var b = moment(val[1])
                var diff = b.diff(a, 'days')
                return diff + (diff > 1 ? ' days' : ' day')
            }
        },
        colors: chartColors,
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        xaxis: {
            type: 'datetime'
        },
        legend: {
            position: 'top'
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
                height={350}
                type="rangeBar"
            />
        </React.Fragment>
    );
};

const Advancedranges = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [
        {
            name: 'Bob',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-01').getTime(),
                        new Date('2019-03-03').getTime()
                    ],
                }
            ]
        },
        {
            name: 'Joe',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-16').getTime()
                    ],
                    goals: [
                        {
                            name: 'Break',
                            value: new Date('2019-03-10').getTime(),
                            strokeColor: '#CD2F2A'
                        }
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-20').getTime(),
                        new Date('2019-03-22').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Dan',
            data: [
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-17').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-09').getTime()
                    ],
                    goals: [
                        {
                            name: 'Break',
                            value: new Date('2019-03-07').getTime(),
                            strokeColor: '#CD2F2A'
                        }
                    ]
                },
            ]
        }
    ];
    var options : any = {
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%'
            }
        },
        xaxis: {
            type: 'datetime'
        },
        stroke: {
            width: 1
        },
        fill: {
            type: 'solid',
            opacity: 0.6
        },
        colors: chartColors,
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-orange-500", "bg-green-500"]'
                id={chartId}
                className="apex-charts"
                height={350}
                type="rangeBar"
            />
        </React.Fragment>
    );
};

export { MultiSeries, Advancedranges }