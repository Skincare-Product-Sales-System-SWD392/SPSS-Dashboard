import useChartColors from 'Common/useChartColors';
import React from 'react'
import ReactApexChart from 'react-apexcharts'

const SimpleRadial = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [80];
    var options : any = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        colors: chartColors,
        labels: ['Themesdesign'],
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
                type="radialBar"
            />
        </React.Fragment>
    );
};

const MultipleRadial = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [44, 55, 67, 83];
    var options : any = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w : any) {
                            return 249
                        }
                    }
                }
            }
        },
        colors: chartColors,
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500"]'
                id={chartId}
                className="apex-charts"
                height={350}
                type="radialBar"
            />
        </React.Fragment>
    );
}

export { SimpleRadial, MultipleRadial }