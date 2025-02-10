import React from 'react';
import { Widget2Chart, WidgetChart } from './Charts';
import CountUp from 'react-countup';
import { widgetsData, widgetsData2 } from 'Common/data';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Widget {
    id: number;
    icon: React.ReactNode;
    price: number;
    name: string;
    description: string;
    chartId: string;
    chartColor: string;
    decimals: number;
    suffix: string;
    series: any;
}

const Widgets: React.FC = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card 2xl:col-span-12">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-5 divide-y md:divide-x md:divide-y-0 md:grid-cols-2 2xl:grid-cols-4 rtl:divide-x-reverse divide-slate-200 dark:divide-zink-500">
                        {(widgetsData || []).map((item: Widget, key: number) => (
                            <div key={key} className="py-5 first:pt-0 md:first:pt-5 md:last:pb-5 last:pb-0 md:px-5 md:ltr:first:pl-0 md:rtl:first:pr-0 md:ltr:last:pr-0 md:rtl:last:pl-0">
                                <div className="flex mb-4">
                                    <div className="w-36 shrink-0">
                                        <p className="mb-6 uppercase text-slate-500 dark:text-zink-200">
                                            {item.icon}{" "}
                                            <span className="align-middle">{item.name}</span>
                                        </p>
                                        <h5 className="mb-0">
                                            <CountUp end={item.price} decimals={item.decimals} suffix={item.suffix} className="counter-value" />
                                        </h5>
                                    </div>
                                    <WidgetChart series={item.series} chartId={item.chartId} DataChartColor={item.chartColor} />
                                </div>
                                <p className="text-slate-500 dark:text-zink-200">{item.description} (Monthly)</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {(widgetsData2 || []).map((item, key) => (
                <div key={key} className="col-span-12 card md:col-span-6 2xl:col-span-3">
                    <div className="card-body">
                        <Link to="#!" data-tooltip="default" data-tooltip-content="Taking the number of delivered emails and dividing it by the total number of emails sent" className="ltr:float-right rtl:float-left text-slate-500 dark:text-zink-200">
                            <Info className="size-4"></Info></Link>
                        <p className="mb-3 text-slate-500 dark:text-zink-200">{item.title}</p>
                        <h5 className="mb-4">
                            <CountUp end={item.percentage} decimals={item.decimals} className="counter-value" />
                            %</h5>

                        <Widget2Chart series={item.series} chartId={item.chartId} DataChartColor={item.dataChartColor} />
                    </div>
                </div>
            ))}

        </React.Fragment>
    );
};

export default Widgets;
