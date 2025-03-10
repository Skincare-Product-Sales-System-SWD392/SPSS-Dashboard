import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { BasicAreaChart } from './BasicAreaChart';
import { SplineChart } from './SplineChart';
import { DatetimeChart } from './DatetimeChart';
import { NegativeValuesChart } from './NegativeValuesChart';
import { GithubStyleChart } from './GithubStyleChart';

//import images
import user2 from "assets/images/users/user-2.jpg";
import { AreaYearsChart } from './AreaYearsChart';
import { StackedChart } from './StackedChart';
import { IrregularTimeseriesChart } from './IrregularTimeseriesChart';
import { MissingValuesChart } from './MissingValuesChart';
import { Link } from 'react-router-dom';

const AreaCharts = () => {
    return (
        <>
            <BreadCrumb title='Area Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicAreaChart chartId="basicArea" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Spline Chart</h6>
                        <SplineChart chartId="splineChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Datetime X-Axis</h6>
                        <div className="flex flex-wrap gap-2 toolbar align-items-start justify-content-center">
                            <button type="button" className="px-2 py-1.5 text-xs text-custom-500 btn bg-custom-100 hover:text-white hover:bg-custom-600 focus:text-white focus:bg-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:ring active:ring-custom-100 dark:bg-custom-500/20 dark:text-custom-500 dark:hover:bg-custom-500 dark:hover:text-white dark:focus:bg-custom-500 dark:focus:text-white dark:active:bg-custom-500 dark:active:text-white dark:ring-custom-400/20 [&.active]:bg-custom-500 [&.active]:text-white" id="one_month">
                                1M
                            </button>
                            <button type="button" className="px-2 py-1.5 text-xs text-custom-500 btn bg-custom-100 hover:text-white hover:bg-custom-600 focus:text-white focus:bg-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:ring active:ring-custom-100 dark:bg-custom-500/20 dark:text-custom-500 dark:hover:bg-custom-500 dark:hover:text-white dark:focus:bg-custom-500 dark:focus:text-white dark:active:bg-custom-500 dark:active:text-white dark:ring-custom-400/20 [&.active]:bg-custom-500 [&.active]:text-white" id="six_months">
                                6M
                            </button>
                            <button type="button" className="px-2 py-1.5 text-xs text-custom-500 btn bg-custom-100 hover:text-white hover:bg-custom-600 focus:text-white focus:bg-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:ring active:ring-custom-100 dark:bg-custom-500/20 dark:text-custom-500 dark:hover:bg-custom-500 dark:hover:text-white dark:focus:bg-custom-500 dark:focus:text-white dark:active:bg-custom-500 dark:active:text-white dark:ring-custom-400/20 active [&.active]:bg-custom-500 [&.active]:text-white" id="one_year">
                                1Y
                            </button>
                            <button type="button" className="px-2 py-1.5 text-xs text-custom-500 btn bg-custom-100 hover:text-white hover:bg-custom-600 focus:text-white focus:bg-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:ring active:ring-custom-100 dark:bg-custom-500/20 dark:text-custom-500 dark:hover:bg-custom-500 dark:hover:text-white dark:focus:bg-custom-500 dark:focus:text-white dark:active:bg-custom-500 dark:active:text-white dark:ring-custom-400/20 [&.active]:bg-custom-500 [&.active]:text-white" id="ytd">
                                YTD
                            </button>
                            <button type="button" className="px-2 py-1.5 text-xs text-custom-500 btn bg-custom-100 hover:text-white hover:bg-custom-600 focus:text-white focus:bg-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:ring active:ring-custom-100 dark:bg-custom-500/20 dark:text-custom-500 dark:hover:bg-custom-500 dark:hover:text-white dark:focus:bg-custom-500 dark:focus:text-white dark:active:bg-custom-500 dark:active:text-white dark:ring-custom-400/20 [&.active]:bg-custom-500 [&.active]:text-white" id="all">
                                ALL
                            </button>
                        </div>
                        <DatetimeChart chartId="dateTimeChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Area with Negative Values Chart</h6>
                        <NegativeValuesChart chartId="chartNegativeValues" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Github Style</h6>
                        <div>
                            <div className="bg-slate-100 dark:bg-zink-600">
                                <GithubStyleChart chartId="areaMonthsChart" />
                            </div>

                            <div className="flex items-center my-3 github-style">
                                <div className="mr-2 shrink-0">
                                    <img className="size-10 rounded" src={user2} data-hovercard-user-id="634573" alt="" />
                                </div>
                                <div className="grow">
                                    <Link to="#" className="font-medium text-15 text-slate-800 dark:text-zink-50">Themesdesign</Link>
                                    <div className="text-sm cmeta text-slate-500 dark:text-zink-200">
                                        <span className="font-medium commits text-slate-800 dark:text-zink-50"></span> commits
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-100 dark:bg-zink-600">
                                <AreaYearsChart chartId="areaYearsChart" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Stacked Chart</h6>
                        <StackedChart chartId="chartStacked" /> 
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Irregular Timeseries Chart</h6>
                        <IrregularTimeseriesChart chartId="chartIrregular" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Missing / Null Values</h6>
                        <MissingValuesChart chartId="chartMissingNullValues" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AreaCharts;
