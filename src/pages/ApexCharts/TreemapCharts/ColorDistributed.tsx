import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ColorRange = ({ chartId }: any) => {

    const series = [
        {
            data: [
                {
                    x: 'INTC',
                    y: 1.2
                },
                {
                    x: 'GS',
                    y: 0.4
                },
                {
                    x: 'CVX',
                    y: -1.4
                },
                {
                    x: 'GE',
                    y: 2.7
                },
                {
                    x: 'CAT',
                    y: -0.3
                },
                {
                    x: 'RTX',
                    y: 5.1
                },
                {
                    x: 'CSCO',
                    y: -2.3
                },
                {
                    x: 'JNJ',
                    y: 2.1
                },
                {
                    x: 'PG',
                    y: 0.3
                },
                {
                    x: 'TRV',
                    y: 0.12
                },
                {
                    x: 'MMM',
                    y: -2.31
                },
                {
                    x: 'NKE',
                    y: 3.98
                },
                {
                    x: 'IYT',
                    y: 1.67
                }
            ]
        }
    ];
    var options : any = {
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap'
        },
        title: {
            text: 'Treemap with Color scale'
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '12px',
            },
            formatter: function (text : any, op : any) {
                return [text, op.value]
            },
            offsetY: -4
        },
        plotOptions: {
            treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: true,
                colorScale: {
                    ranges: [
                        {
                            from: -6,
                            to: 0,
                            color: '#CD363A'
                        },
                        {
                            from: 0.001,
                            to: 6,
                            color: '#52B12C'
                        }
                    ]
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
                id={chartId}
                className="apex-charts"
                height={350}
                type="treemap"
            />
        </React.Fragment>
    );
};

const DistributedChart = ({ chartId }: any) => {

    const series = [
        {
            data: [
                {
                    x: 'New Delhi',
                    y: 218
                },
                {
                    x: 'Kolkata',
                    y: 149
                },
                {
                    x: 'Mumbai',
                    y: 184
                },
                {
                    x: 'Ahmedabad',
                    y: 55
                },
                {
                    x: 'Bangaluru',
                    y: 84
                },
                {
                    x: 'Pune',
                    y: 31
                },
                {
                    x: 'Chennai',
                    y: 70
                },
                {
                    x: 'Jaipur',
                    y: 30
                },
                {
                    x: 'Surat',
                    y: 44
                },
                {
                    x: 'Hyderabad',
                    y: 68
                },
                {
                    x: 'Lucknow',
                    y: 28
                },
                {
                    x: 'Indore',
                    y: 19
                },
                {
                    x: 'Kanpur',
                    y: 29
                }
            ]
        }
    ];
    var options : any = {
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap'
        },
        title: {
            text: 'Distibuted Treemap (different color for each cell)',
            align: 'center'
        },
        colors: [
            '#3B93A5',
            '#F7B844',
            '#ADD8C7',
            '#EC3C65',
            '#CDD7B6',
            '#C1F666',
            '#D43F97',
            '#1E5D8C',
            '#421243',
            '#7F94B0',
            '#EF6537',
            '#C0ADDB'
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        }
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
                type="treemap"
            />
        </React.Fragment>
    );
}

export { ColorRange, DistributedChart }