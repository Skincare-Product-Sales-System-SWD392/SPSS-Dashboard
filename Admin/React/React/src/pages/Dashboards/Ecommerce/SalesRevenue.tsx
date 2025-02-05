import React from 'react';
import { BarChart, CalendarRange, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';
import { SalesRevenueOverviewChart } from './Charts';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";

const SalesRevenue = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card 2xl:col-span-8">
                <div className="card-body">
                    <div className="flex flex-col gap-4 mb-4 md:mb-3 md:items-center md:flex-row">
                        <h6 className="grow text-15">Sales Revenue Overview</h6>
                        <div className="relative">
                            <CalendarRange className="absolute size-4 ltr:left-3 rtl:right-3 top-3 text-slate-500 dark:text-zink-200"></CalendarRange>
                            <Flatpickr
                                className="ltr:pl-10 rtl:pr-10 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                options={{
                                    dateFormat: "d M, Y",
                                    mode: "range",
                                }}
                                placeholder='Select Date'
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mb-3">
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center size-12 rounded-md text-sky-500 bg-sky-50 shrink-0 dark:bg-sky-500/10">
                                    <BarChart />
                                </div>
                                <div className="grow">
                                    <p className="mb-1 text-slate-500 dark:text-zink-200">Total Sales</p>
                                    <h5 className="text-15">$
                                    <CountUp end={1517.36} decimals={2}  className="counter-value" />k</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center size-12 text-green-500 rounded-md bg-green-50 shrink-0 dark:bg-green-500/10">
                                    <TrendingUp />
                                </div>
                                <div className="grow">
                                    <p className="mb-1 text-slate-500 dark:text-zink-200">Total Profit</p>
                                    <h5 className="text-15">$<CountUp end={746.84} decimals={2} className="counter-value" />k</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SalesRevenueOverviewChart chartId="salesRevenueOverview" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default SalesRevenue;
