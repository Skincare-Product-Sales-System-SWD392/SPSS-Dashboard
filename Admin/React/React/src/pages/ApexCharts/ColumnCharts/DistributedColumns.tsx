import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const DistributedColumns = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //Distributed Columns
    const series = [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
    }];
    var options : any = {
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart : any, w : any, e : any) {
                    // console.log(chart, w, e)
                }
            }
        },
        colors: chartColors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['John', 'Doe'],
                ['Joe', 'Smith'],
                ['Jake', 'Williams'],
                'Amber',
                ['Peter', 'Brown'],
                ['Mary', 'Evans'],
                ['David', 'Wilson'],
                ['Lily', 'Roberts'],
            ],
            labels: {
                style: {
                    colors: chartColors,
                    fontSize: '12px'
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
                data-chart-colors='["bg-custom-500", "bg-yellow-500", "bg-green-500", "bg-orange-500", "bg-sky-500", "bg-purple-500", "bg-red-500", "bg-emerald-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    DistributedColumns
};