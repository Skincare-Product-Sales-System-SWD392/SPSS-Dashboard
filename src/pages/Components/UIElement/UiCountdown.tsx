import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Clock4, Download, Monitor, Smile } from "lucide-react";
import CountUp from 'react-countup';

const UiCountdown = () => {

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title='Countdown' pageTitle='UI Elements' />

                <div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Basic Examples</h6>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                                <div className="text-center">
                                    <h4 className="mb-2 fs-4xl"><CountUp className="counter-value" end={745} /></h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Working Hours</p>
                                </div>
                                <div className="text-center text-custom-500">
                                    <h4 className="mb-2 fs-4xl "><CountUp className="counter-value" end={365} /></h4>
                                    <p className="mb-0 text-custom-500">Completed Projects</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="mb-2 fs-4xl"><CountUp className="counter-value" end={4645} /></h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Happy Users & Clients</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="mb-2 fs-4xl"><CountUp className="counter-value" end={130} /></h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Awards Received</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Counter with Symbols</h6>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                                <div className="text-center">
                                    <h4 className="mb-2 fs-4xl">$<CountUp end={674.3} decimals={1} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Total Earnings</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="mb-2 fs-4xl"><CountUp end={54.41} decimals={2} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Total Orders</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="mb-2 fs-4xl"><CountUp end={4645} /></h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Customers</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="mb-2 fs-4xl">$<CountUp end={165.89} decimals={2} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">My Balance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Counter with Grid</h6>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                                <div className="px-3 py-6 text-center border rounded-md border-slate-200 dark:border-zink-500">
                                    <h4 className="mb-2 fs-4xl">$<CountUp className="counter-value" end={674.3} decimals={2} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Total Earnings</p>
                                </div>
                                <div className="px-3 py-6 text-center border rounded-md border-slate-200 dark:border-zink-500">
                                    <h4 className="mb-2 fs-4xl"><CountUp className="counter-value" end={54.41} decimals={2} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Total Orders</p>
                                </div>
                                <div className="px-3 py-6 text-center border rounded-md border-slate-200 dark:border-zink-500">
                                    <h4 className="mb-2 fs-4xl"><CountUp className="counter-value" end={4645} /></h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Customers</p>
                                </div>
                                <div className="px-3 py-6 text-center border rounded-md border-slate-200 dark:border-zink-500">
                                    <h4 className="mb-2 fs-4xl">$<CountUp className="counter-value" end={165.89} decimals={2} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">My Balance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-zink-50">Counter with Icons</h6>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                                <div className="px-3 py-6 text-center border rounded-md dark:border-zink-500 border-slate-200">
                                    <div className="flex items-center justify-center size-12 mx-auto mb-4 rounded-md text-15 bg-custom-50 dark:bg-custom-500/20">
                                        <Smile className="text-custom-500 fill-custom-200 dark:fill-custom-500/30"></Smile></div>
                                    <h4 className="mb-2 fs-4xl"><CountUp className="counter-value" end={8000} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Happy Clients</p>
                                </div>
                                <div className="px-3 py-6 text-center border rounded-md dark:border-zink-500 border-slate-200">
                                    <div className="flex items-center justify-center size-12 mx-auto mb-4 rounded-md text-15 bg-red-50 dark:bg-red-500/20">
                                        <Download className="text-red-500 fill-red-200 dark:fill-red-500/30"></Download></div>
                                    <h4 className="mb-2 fs-4xl"><CountUp className="counter-value" end={3000} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Downloads</p>
                                </div>
                                <div className="px-3 py-6 text-center border rounded-md dark:border-zink-500 border-slate-200">
                                    <div className="flex items-center justify-center size-12 mx-auto mb-4 rounded-md text-15 bg-green-50 dark:bg-green-500/20">
                                        <Monitor className="text-green-500 fill-green-200 dark:fill-green-500/30"></Monitor></div>
                                    <h4 className="mb-2 fs-4xl"><CountUp className="counter-value" end={4645} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Project Completed</p>
                                </div>
                                <div className="px-3 py-6 text-center border rounded-md dark:border-zink-500 border-slate-200">
                                    <div className="flex items-center justify-center size-12 mx-auto mb-4 rounded-md text-15 bg-sky-50 dark:bg-sky-500/20">
                                        <Clock4 className="text-sky-500 fill-sky-200 dark:fill-sky-500/30"></Clock4></div>
                                    <h4 className="mb-2 fs-4xl"><CountUp className="counter-value" end={365} /></h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Working Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Counter with Card Colors</h6>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                                <div className="px-3 py-6 text-center border rounded-md border-custom-200 dark:border-zink-500">
                                    <div className="flex items-center justify-center size-12 mx-auto mb-4 rounded-md text-15 bg-custom-50 dark:bg-custom-400/20">
                                        <Smile className="text-custom-500 fill-custom-200 dark:fill-custom-500/20"></Smile></div>
                                    <h4 className="mb-1 fs-4xl"><CountUp className="counter-value" end={8000} />k</h4>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Happy Clients</p>
                                </div>
                                <div className="px-3 py-6 text-center bg-red-100 border border-red-200 rounded-md dark:bg-red-500/20 dark:border-red-800">
                                    <div className="flex items-center justify-center size-12 mx-auto mb-4 rounded-md bg-red-50 text-15 dark:bg-red-400/20">
                                        <Download className="text-red-500 fill-red-200 dark:fill-red-500/30"></Download></div>
                                    <h4 className="mb-1 text-red-500 fs-4xl"><CountUp className="counter-value" end={3000} />k</h4>
                                    <p className="mb-0 text-red-400">Downloads</p>
                                </div>
                                <div className="px-3 py-6 text-center bg-green-100 border border-green-100 rounded-md dark:bg-green-900 dark:border-zink-800">
                                    <div className="flex items-center justify-center size-12 mx-auto mb-4 rounded-md bg-green-50 text-15 dark:bg-green-400/20">
                                        <Monitor className="text-green-500 fill-green-200 dark:fill-green-500/20"></Monitor></div>
                                    <h4 className="mb-1 text-green-500 fs-4xl"><CountUp className="counter-value" end={4645} />k</h4>
                                    <p className="mb-0 text-green-400">Project Completed</p>
                                </div>
                                <div className="px-3 py-6 text-center border rounded-md bg-sky-500 border-sky-500 dark:bg-sky-900 dark:border-zink-800">
                                    <div className="flex items-center justify-center size-12 mx-auto mb-4 rounded-md bg-white/90 text-15 dark:bg-sky-400/20">
                                        <Clock4 className="text-sky-500 fill-sky-200 dark:fill-sky-500/20"></Clock4></div>
                                    <h4 className="mb-1 text-sky-50 fs-4xl">
                                        <CountUp end={365} className="counter-value" />
                                    </h4>
                                    <p className="mb-0 text-sky-200">Working Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default UiCountdown;