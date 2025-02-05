import React from 'react';
import { ApplicationReceivedChart } from './Charts';

const ApplicationReceived = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 md:order-7 2xl:order-5 lg:col-span-12 2xl:col-span-6 2xl:row-span-2 card">
                <div className="card-body">
                    <div className="flex items-center gap-2 MB-3">
                        <h6 className="mb-0 text-15 grow">Application Received</h6>
                        <div className="relative flex items-center gap-2 dropdown shrink-0">
                            <button type="button" className="flex items-center justify-center size-8 p-0 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">All</button>
                            <button type="button" className="flex items-center justify-center size-8 p-0 text-xs transition-all duration-200 ease-linear text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:ring active:ring-sky-100 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:active:bg-sky-500 dark:active:text-white dark:ring-sky-400/20">1M</button>
                            <button type="button" className="flex items-center justify-center size-8 p-0 text-xs transition-all duration-200 ease-linear text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:ring active:ring-sky-100 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:active:bg-sky-500 dark:active:text-white dark:ring-sky-400/20">6M</button>
                            <button type="button" className="flex items-center justify-center size-8 p-0 text-xs transition-all duration-200 ease-linear text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:ring active:ring-sky-100 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:active:bg-sky-500 dark:active:text-white dark:ring-sky-400/20">1Y</button>
                        </div>
                    </div>
                    <ApplicationReceivedChart chartId="applicationReceivedChart" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default ApplicationReceived;
