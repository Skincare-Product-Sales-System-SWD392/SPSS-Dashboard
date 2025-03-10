import React from 'react';
import useChartColors from 'Common/useChartColors';
import ReactApexChart from 'react-apexcharts';

const Grouprow = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [
        // George Washington
        {
            name: 'George Washington',
            data: [
                {
                    x: 'President',
                    y: [
                        new Date(1789, 3, 30).getTime(),
                        new Date(1797, 2, 4).getTime()
                    ]
                },
            ]
        },
        // John Adams
        {
            name: 'John Adams',
            data: [
                {
                    x: 'President',
                    y: [
                        new Date(1797, 2, 4).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Vice President',
                    y: [
                        new Date(1789, 3, 21).getTime(),
                        new Date(1797, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Thomas Jefferson
        {
            name: 'Thomas Jefferson',
            data: [
                {
                    x: 'President',
                    y: [
                        new Date(1801, 2, 4).getTime(),
                        new Date(1809, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Vice President',
                    y: [
                        new Date(1797, 2, 4).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1790, 2, 22).getTime(),
                        new Date(1793, 11, 31).getTime()
                    ]
                }
            ]
        },
        // Aaron Burr
        {
            name: 'Aaron Burr',
            data: [
                {
                    x: 'Vice President',
                    y: [
                        new Date(1801, 2, 4).getTime(),
                        new Date(1805, 2, 4).getTime()
                    ]
                }
            ]
        },
        // George Clinton
        {
            name: 'George Clinton',
            data: [
                {
                    x: 'Vice President',
                    y: [
                        new Date(1805, 2, 4).getTime(),
                        new Date(1812, 3, 20).getTime()
                    ]
                }
            ]
        },
        // John Jay
        {
            name: 'John Jay',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1789, 8, 25).getTime(),
                        new Date(1790, 2, 22).getTime()
                    ]
                }
            ]
        },
        // Edmund Randolph
        {
            name: 'Edmund Randolph',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1794, 0, 2).getTime(),
                        new Date(1795, 7, 20).getTime()
                    ]
                }
            ]
        },
        // Timothy Pickering
        {
            name: 'Timothy Pickering',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1795, 7, 20).getTime(),
                        new Date(1800, 4, 12).getTime()
                    ]
                }
            ]
        },
        // Charles Lee
        {
            name: 'Charles Lee',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1800, 4, 13).getTime(),
                        new Date(1800, 5, 5).getTime()
                    ]
                }
            ]
        },
        // John Marshall
        {
            name: 'John Marshall',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1800, 5, 13).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Levi Lincoln
        {
            name: 'Levi Lincoln',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1801, 2, 5).getTime(),
                        new Date(1801, 4, 1).getTime()
                    ]
                }
            ]
        },
        // James Madison
        {
            name: 'James Madison',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1801, 4, 2).getTime(),
                        new Date(1809, 2, 3).getTime()
                    ]
                }
            ]
        },
    ];
    var options: any = {
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
                rangeBarGroupRows: true
            }
        },
        colors: chartColors,
        fill: {
            type: 'solid'
        },
        xaxis: {
            type: 'datetime'
        },
        legend: {
            position: 'right'
        },
        tooltip: {
            custom: function (opts: any) {
                // const fromYear = new Date(opts.y1).getFullYear()
                // const toYear = new Date(opts.y2).getFullYear()
                // const values = opts.ctx.rangeBar.getTooltipValues(opts)

                return (
                    ''
                );
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-yellow-500", "bg-green-500", "bg-sky-500", "bg-purple-500", "bg-red-500", "bg-slate-500", "bg-orange-500", "bg-green-200","bg-pink-500", "bg-custom-200", "bg-red-300"]'
                id={chartId}
                className="apex-charts"
                height={350}
                type="rangeBar"
            />
        </React.Fragment>
    );
};

const Dumbbell = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [
        {
            data: [
                {
                    x: 'Operations',
                    y: [2800, 4500]
                },
                {
                    x: 'Customer Success',
                    y: [3200, 4100]
                },
                {
                    x: 'Engineering',
                    y: [2950, 7800]
                },
                {
                    x: 'Marketing',
                    y: [3000, 4600]
                },
                {
                    x: 'Product',
                    y: [3500, 4100]
                },
                {
                    x: 'Data Science',
                    y: [4500, 6500]
                },
                {
                    x: 'Sales',
                    y: [4100, 5600]
                }
            ]
        }
    ];
    var options: any = {
        chart: {
            height: 350,
            type: 'rangeBar',
            zoom: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                isDumbbell: true,
                dumbbellColors: [[chartColors[0], chartColors[1]]]
            }
        },
        title: {
            text: 'Paygap Disparity'
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'left',
            customLegendItems: ['Female', 'Male']
        },
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: [chartColors[1]],
                inverseColors: false,
                stops: [0, 100]
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
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

export { Grouprow, Dumbbell };