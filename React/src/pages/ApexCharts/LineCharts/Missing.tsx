import useChartColors from 'Common/useChartColors';
import React from 'react'
import ReactApexChart from 'react-apexcharts'

const Missing = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [{
        name: 'Peter',
        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
    }, {
        name: 'Johnny',
        data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
    }, {
        name: 'David',
        data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    }];
    var options : any = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            animations: {
                enabled: false
            }
        },
        colors: chartColors,
        stroke: {
            width: [5, 5, 4],
            curve: 'straight'
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        title: {
            text: 'Missing data (null values)'
        },
        xaxis: {
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-green-500", "bg-sky-500", "bg-yellow-500"]'
                id={chartId}
                className="apex-charts"
                type='line'
                height={350}
            />
        </React.Fragment>
    )
}

export default Missing