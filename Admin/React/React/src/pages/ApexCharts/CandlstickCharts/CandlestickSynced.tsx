import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import { seriesData1, seriesDataLinear } from "../Series";

const CandlestickSynced = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //Candlestick Synced with Brush Chart (Combo)
    const series = [{
        data: seriesData1
    }];
    var options : any = {
        chart: {
            type: 'candlestick',
            height: 200,
            id: 'candles',
            toolbar: {
                autoSelected: 'pan',
                show: false
            },
            zoom: {
                enabled: false
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: chartColors[0],
                    downward: chartColors[1],
                }
            }
        },
        xaxis: {
            type: 'datetime'
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-sky-500", "bg-orange-500"]'
                id={chartId}
                className="apex-charts"
                type='candlestick'
                height={200}
            />
        </React.Fragment>
    );
};


const ComboCandlestick = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    const series = [{
        name: 'volume',
        data: seriesDataLinear
    }];
    var optionsBar : any = {
        chart: {
            height: 140,
            type: 'bar',
            brush: {
                enabled: true,
                target: 'candles'
            },
            selection: {
                enabled: true,
                xaxis: {
                    min: new Date('20 Jan 2017').getTime(),
                    max: new Date('10 Dec 2017').getTime()
                },
                fill: {
                    color: '#ccc',
                    opacity: 0.4
                },
                stroke: {
                    color: '#0D47A1',
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
                colors: {
                    ranges: [{
                        from: -1000,
                        to: 0,
                        color: chartColors[0]
                    }, {
                        from: 1,
                        to: 10000,
                        color: chartColors[1]
                    }],
    
                },
            }
        },
        stroke: {
            width: 0
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                offsetX: 13
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={optionsBar}
                series={series || []}
                data-chart-colors='["bg-yellow-500", "bg-red-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={140}
            />
        </React.Fragment>
    );
};

export {
    CandlestickSynced,
    ComboCandlestick
};