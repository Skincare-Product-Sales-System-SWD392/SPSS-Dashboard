import React from 'react';
import { TotalEmployeeChart } from './Charts';
import CountUp from 'react-countup';
import ApplicationReceived from './ApplicationReceived';

const Widgets = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 md:order-3 lg:col-span-6 2xl:col-span-3 card">
                <div className="card-body">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 md:col-span-9">
                            <p className="text-slate-500 dark:text-slate-200">Total Employee</p>
                            <h5 className="mt-3 mb-4">
                                <CountUp end={615} className="counter-value" />
                            </h5>
                        </div>
                        <div className="col-span-4 md:col-span-3">
                            <TotalEmployeeChart chartId="totalEmployee" dataChartColor='["bg-custom-500"]' series={[10]} />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <p className="text-slate-500 dark:text-slate-200 grow"><span className="font-medium text-green-500">15%</span> Increase</p>
                        <p className="text-slate-500 dark:text-slate-200">This Month</p>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:order-4 lg:col-span-6 2xl:col-span-3 card">
                <div className="card-body">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 md:col-span-9">
                            <p className="text-slate-500 dark:text-slate-200">Total Application</p>
                            <h5 className="mt-3 mb-4">  <CountUp end={174} className="counter-value" /></h5>
                        </div>
                        <div className="col-span-4 md:col-span-3">
                            <TotalEmployeeChart chartId="totalApplication" dataChartColor='["bg-purple-500"]' series={[60]} />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <p className="text-slate-500 dark:text-slate-200 grow"><span className="font-medium text-green-500">26%</span> Increase</p>
                        <p className="text-slate-500 dark:text-slate-200">This Month</p>
                    </div>
                </div>
            </div>

            <ApplicationReceived />

            <div className="col-span-12 md:order-5 2xl:order-6 lg:col-span-6 2xl:col-span-3 card">
                <div className="card-body">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 md:col-span-9">
                            <p className="text-slate-500 dark:text-slate-200">Hired Candidates</p>
                            <h5 className="mt-3 mb-4"> <CountUp end={64} className="counter-value" /></h5>
                        </div>
                        <div className="col-span-4 md:col-span-3">
                            <TotalEmployeeChart chartId="hiredCandidates" dataChartColor='["bg-green-500"]' series={[25]} />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <p className="text-slate-500 dark:text-slate-200 grow"><span className="font-medium text-red-500">05%</span> Increase</p>
                        <p className="text-slate-500 dark:text-slate-200">This Month</p>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:order-6 2xl:order-7 lg:col-span-6 2xl:col-span-3 card">
                <div className="card-body">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 md:col-span-9">
                            <p className="text-slate-500 dark:text-slate-200">Rejected Candidates</p>
                            <h5 className="mt-3 mb-4"><CountUp end={110} className="counter-value" /></h5>
                        </div>
                        <div className="col-span-4 md:col-span-3">
                            <TotalEmployeeChart chartId="rejectedCandidates" dataChartColor='["bg-red-500"]' series={[75]} />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <p className="text-slate-500 dark:text-slate-200 grow"><span className="font-medium text-red-500">16%</span> Increase</p>
                        <p className="text-slate-500 dark:text-slate-200">This Month</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets;
