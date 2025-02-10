import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import moment from "moment";

const ColumnGroupLabel = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    const series = [{
        name: "sales",
        data: [{
            x: '2019/01/01',
            y: 400
        }, {
            x: '2019/04/01',
            y: 430
        }, {
            x: '2019/07/01',
            y: 448
        }, {
            x: '2019/10/01',
            y: 470
        }, {
            x: '2020/01/01',
            y: 540
        }, {
            x: '2020/04/01',
            y: 580
        }, {
            x: '2020/07/01',
            y: 690
        }, {
            x: '2020/10/01',
            y: 690
        }]
    }];
    var options : any = {
        chart: {
            type: 'bar',
            height: 350
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function (val : any) {
                    return "Q" + moment(val).quarter()
                }
            },
            group: {
                style: {
                    fontSize: '10px',
                    fontWeight: 700
                },
                groups: [
                    { title: '2019', cols: 4 },
                    { title: '2020', cols: 4 }
                ]
            }
        },
        colors: chartColors,
        tooltip: {
            x: {
                formatter: function (val : any) {
                    return "Q" + moment(val).quarter() + " " + moment(val).format("YYYY")
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
                data-chart-colors='["bg-custom-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    ColumnGroupLabel
};