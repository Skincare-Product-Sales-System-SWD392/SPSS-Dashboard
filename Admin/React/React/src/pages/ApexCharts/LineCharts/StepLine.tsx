import useChartColors from 'Common/useChartColors';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

const StepLine = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);

    const series = [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }];
    var options : any = {
        chart: {
            type: 'line',
            height: 350
        },
        stroke: {
            curve: 'stepline',
        },
        colors: chartColors,
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Stepline Chart',
            align: 'left'
        },
        markers: {
            hover: {
                sizeOffset: 4
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-yellow-500"]'
                id={chartId}
                className="apex-charts"
                type='line'
                height={350}
            />
        </React.Fragment>
    )
}

export default StepLine