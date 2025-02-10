import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const HorizontalBoxPlot = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    //Horizontal BoxPlot
    const series = [
        {
            data: [
                {
                    x: 'Category A',
                    y: [54, 66, 69, 75, 88]
                },
                {
                    x: 'Category B',
                    y: [43, 65, 69, 76, 81]
                },
                {
                    x: 'Category C',
                    y: [31, 39, 45, 51, 59]
                },
                {
                    x: 'Category D',
                    y: [39, 46, 55, 65, 71]
                },
                {
                    x: 'Category E',
                    y: [29, 31, 35, 39, 44]
                },
                {
                    x: 'Category F',
                    y: [41, 49, 58, 61, 67]
                },
                {
                    x: 'Category G',
                    y: [54, 59, 66, 71, 88]
                }
            ]
        }
    ];
    var options : any = {
        chart: {
            type: 'boxPlot',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%'
            },
            boxPlot: {
                colors: {
                    upper: chartColors[0],
                    lower: chartColors[1]
                }
            }
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-slate-50", "bg-slate-200"]'
                id={chartId}
                className="apex-charts"
                type='boxPlot'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    HorizontalBoxPlot
};