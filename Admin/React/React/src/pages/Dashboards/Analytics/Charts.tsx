import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

//import images 
import logoSm from "assets/images/logo-sm.png";

const PerspectiveChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    const series = [
        {
            data: [
                {
                    x: 'React',
                    y: 218
                },
                {
                    x: 'TailwindCSS',
                    y: 187
                },
                {
                    x: 'Angular',
                    y: 134
                },
                {
                    x: 'Vue Js',
                    y: 55
                },
                {
                    x: 'Laravel',
                    y: 99
                },
                {
                    x: 'PHP',
                    y: 34
                },
                {
                    x: 'ASP.Net',
                    y: 86
                },
                {
                    x: 'Django',
                    y: 30
                },
                {
                    x: 'CI',
                    y: 44
                }
            ]
        }
    ];
    var options: any = {

        legend: {
            show: false
        },
        chart: {
            height: 270,
            type: 'treemap',
            toolbar: {
                show: false,
            }
        },
        grid: {
            show: false,
            padding: {
                top: -15,
                bottom: 0,
                right: -20
            },
        },
        colors: chartColors,
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500"]'
                id="platformPerspective"
                className="apex-charts"
                type='treemap'
                height={270}
            />
        </React.Fragment>
    );
};

const LocationChart = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);
    const series = [{
        name: "Response Times",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];
    var options: any = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            margin: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            width: 2,
            dashArray: 0,
        },
        dataLabels: {
            enabled: false
        },
        colors: chartColors,
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-red-500"]'
                id="responseTimes"
                className="apex-charts"
                type='line'
                height={350}
            />
        </React.Fragment>
    );
};

const InteractionChart = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);
    const series = [{
        name: 'Viewers',
        data: [20, 13, 19, 23, 29, 42, 33, 29, 37, 46, 40, 49]
    },
        // {
        //     name: 'Followers',
        //     data: [10, 18, 13, 23, 33, 39, 30, 21, 36, 42, 39, 46]
        // }
    ];

    var options: any = {

        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },

        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'bottom',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        stroke: {
            show: true,
            width: 4,
            colors: ['transparent']
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: -10
            },
        },
        colors: chartColors
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500", "bg-purple-500"]'
                id="pagesInteraction"
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

const UserDeviceChart = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);
    //User Devices
    const series = [{
        name: 'Desktop',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Mobile',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Others',
        data: [44, 76, 78, 13, 43, 10],
    }];
    var options: any = {
        chart: {
            height: 240,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            },
            toolbar: {
                show: false,
            }
        },
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.1
        },
        markers: {
            size: 0
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }],
        colors: chartColors,
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        },
        xaxis: {
            categories: ['2018', '2019', '2020', '2021', '2022', '2023']
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500", "bg-green-500", "bg-orange-500"]'
                id="userDeviceCharts"
                className="apex-charts"
                type='radar'
                height={240}
            />
        </React.Fragment>
    );
};

const SatisfactionChart = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);
    //Satisfaction Rate
    const series = [95.33];
    var options: any = {
        chart: {
            type: 'radialBar',
            height: 450,
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                },
                hollow: {
                    size: '60%',
                    margin: 0,
                    image: logoSm,
                    imageWidth: 36,
                    imageHeight: 36,
                    imageClipped: false,
                    imageOffsetY: -60,
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -5,
                        fontSize: '22px',
                        fontWeight: '600'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        colors: chartColors,
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Average Results'],
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500"]'
                id="satisfactionRate"
                className="apex-charts"
                type='radialBar'
                height={450}
            />
        </React.Fragment>
    );
};

const DailyVisitChart = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);
    //Daily Visit Insights
    const series = [
        {
            name: 'Male',
            data: [55, 41, 67, 22, 43, 21, 33, 45]
        },
        {
            name: 'Female',
            data: [55, 41, 67, 22, 43, 21, 33, 45]
        }
    ];
    var options: any = {
        annotations: {
            points: [{
                x: 'Bananas',
                seriesIndex: 0,
                label: {
                    // borderColor: getChartColorsArray("dailyVisitInsightsChart")[1],
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        // background: getChartColorsArray("dailyVisitInsightsChart")[1],
                    },
                    text: 'Bananas are good',
                }
            }]
        },
        colors: chartColors,
        chart: {
            height: 238,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '70%',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2
        },
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tickPlacement: 'on'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                top: -10,
                right: -10,
                left: -10
            }
        },
        yaxis: {
            show: false,
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-green-500", "bg-purple-500"]'
                id="dailyVisitInsightsChart"
                className="apex-charts"
                type='bar'
                height={238}
            />
        </React.Fragment>
    );
};

const ReportChart = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);
    // Line with Data Labels
    const series = [
        {
            name: "Income - 2023",
            data: [28, 29, 33, 36, 32]
        },
        {
            name: "Expense - 2023",
            data: [20, 17, 21, 29, 23]
        }
    ];
    var options: any = {
        chart: {
            height: 235,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: chartColors,
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth',
            size: 2,
        },
        markers: {
            size: 1
        },
        yaxis: {
            show: false
        },
        xaxis: {
            categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: -25,
            }
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500", "bg-green-500"]'
                id="lineWithDataLabel"
                className="apex-charts"
                type='line'
                height={235}
            />
        </React.Fragment>
    );
};

const SubscriptionChart = ({ chartId }: any) => {
    const chartColors = useChartColors(chartId);
    //Subscription Distribution
    const series = [44, 55, 41, 17, 15];
    var options: any = {
        labels: ['Beginner', 'Intermediate', 'Enterprise', 'VIP', 'Professional'],
        chart: {
            height: 270,
            type: 'donut',

        },
        plotOptions: {
            pie: {
                startAngle: -90,
                donut: {
                    size: '75%'
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        colors: chartColors,
        legend: {
            position: 'bottom',
            formatter: function (val: any, opts: any) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex];
            }
        },
        // legend: {

        // }

    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]'
                id="subscriptionDistribution"
                className="apex-charts"
                type='donut'
                height={270}
            />
        </React.Fragment>
    );
};

export {
    PerspectiveChart,
    LocationChart,
    InteractionChart,
    UserDeviceChart,
    SatisfactionChart,
    DailyVisitChart,
    ReportChart,
    SubscriptionChart
};