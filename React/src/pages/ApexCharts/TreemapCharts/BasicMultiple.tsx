import useChartColors from 'Common/useChartColors';
import React from 'react'
import ReactApexChart from 'react-apexcharts'

const BasicTime = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

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
        colors: chartColors,
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
                height={350}
                type="treemap"
            />
        </React.Fragment>
    );
};

const MultipleSeries = ({ chartId }: any) => {

    const series = [
        {
            name: 'Desktops',
            data: [
                {
                    x: 'ABC',
                    y: 10
                },
                {
                    x: 'DEF',
                    y: 60
                },
                {
                    x: 'XYZ',
                    y: 41
                }
            ]
        },
        {
            name: 'Mobile',
            data: [
                {
                    x: 'ABCD',
                    y: 10
                },
                {
                    x: 'DEFG',
                    y: 20
                },
                {
                    x: 'WXYZ',
                    y: 51
                },
                {
                    x: 'PQR',
                    y: 30
                },
                {
                    x: 'MNO',
                    y: 20
                },
                {
                    x: 'CDE',
                    y: 30
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
            text: 'Multi-dimensional Treemap',
            align: 'center'
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

export { BasicTime, MultipleSeries };