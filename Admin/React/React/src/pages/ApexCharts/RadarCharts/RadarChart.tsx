import useChartColors from 'Common/useChartColors';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

const SimpleRadar = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }];
    var options: any = {
        chart: {
            height: 350,
            type: 'radar',
        },
        colors: chartColors,
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-300", "bg-custom-300"]'
                id={chartId}
                className="apex-charts"
                height={350}
                type="radar"
            />
        </React.Fragment>
    );
};

const RadarMultipleSeries = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }];
    var options: any = {
        chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            }
        },
        stroke: {
            width: 2
        },
        colors: chartColors,
        fill: {
            opacity: 0.1
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-green-500", "bg-yellow-500"]'
                id={chartId}
                className="apex-charts"
                height={350}
                type="radar"
            />
        </React.Fragment>
    );
};

const RadarWithPolygonfill = ({ chartId }: any) => {
    // const chartColors = useChartColors(chartId);
    const series = [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }];
    var options: any = {
        chart: {
            height: 350,
            type: 'radar',
        },
        dataLabels: {
            enabled: true
        },
        plotOptions: {
            radar: {
                size: 140,
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        // colors: getChartColorsArray("basicRadar"),
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#FF4560',
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: function (val: any) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val: any, i: any) {
                    if (i % 2 === 0) {
                        return val
                    } else {
                        return ''
                    }
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
                data-chart-colors='["bg-red-500", "bg-slate-200", "bg-white"]'
                id={chartId}
                className="apex-charts"
                height={350}
                type="radar"
            />
        </React.Fragment>
    );
};

export { SimpleRadar, RadarMultipleSeries, RadarWithPolygonfill }