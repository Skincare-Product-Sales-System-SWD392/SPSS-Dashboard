import React from "react";
import ReactApexChart from "react-apexcharts";

//import images
import img1 from "assets/images/small/img-1.jpg";

const BarwithImages = ({ chartId }: any) => {

    //Bar with Images
    const series = [{
        name: 'coins',
        data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12,
            11, 12, 13, 14, 16, 14, 15, 17, 19, 21
        ]
    }];
    var options : any = {
        chart: {
            type: 'bar',
            height: 350,
            animations: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '100%',

            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            colors: ["#fff"],
            width: 0.2
        },
        labels: Array.apply(null).map(function (el, index) {
            return index + 1;
        }),
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            },
            title: {
                text: 'Weight',
            },
        },
        grid: {
            position: 'back'
        },
        title: {
            text: 'Paths filled by clipped image',
            align: 'right',
            offsetY: 30
        },
        fill: {
            type: 'image',
            opacity: 0.87,
            image: {
                src: [img1],
                width: 466,
                height: 406
            }
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    BarwithImages
};