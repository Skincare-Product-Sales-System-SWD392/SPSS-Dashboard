import React from "react";
import { CheckSquare } from "lucide-react";

const HorizontalPricing = () => {
    return (
        <React.Fragment>
            <h5 className="mt-2 mb-4 underline">Horizontal Pricing</h5>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-2"><span className="align-middle">Personal Plan</span></h5>

                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-8">
                                <p className="relative before:absolute before:border-b before:border-slate-200 dark:before:border-zink-500 before:bottom-2 before:right-0 before:left-0"><span className="relative pr-2 bg-white dark:bg-zink-700 dark:text-zink-200 text-slate-500">Everything Includes</span></p>
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <ul className="flex flex-col gap-3 mt-5">
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>3</b> Projects</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>299</b> Customers</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span>Scalable Bandwidth</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>0</b> No Team Account</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-col gap-3 md:mt-5">
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>3</b> Projects</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>299</b> Customers</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-4 card bg-custom-500 !mb-0 dark:bg-custom-500">
                                <div className="flex flex-col h-full card-body">
                                    <p className="mb-3 text-custom-100">Per Month</p>
                                    <div className="mt-auto">
                                        <h3 className="mb-2 text-white">$29.99</h3>
                                        <button type="button" className="w-full text-white btn bg-custom-600 border-custom-600 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-2"><span className="align-middle">Enterprise Plan</span></h5>

                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-8">
                                <p className="relative before:absolute before:border-b before:border-slate-200 dark:before:border-zink-500 before:bottom-2 before:right-0 before:left-0"><span className="relative pr-2 bg-white dark:bg-zink-700 dark:text-zink-200 text-slate-500">Everything Includes</span></p>
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <ul className="flex flex-col gap-3 mt-5">
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>3</b> Projects</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>299</b> Customers</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span>Scalable Bandwidth</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>0</b> No Team Account</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-col gap-3 md:mt-5">
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>3</b> Projects</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>299</b> Customers</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span>Scalable Bandwidth</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckSquare className="inline-block size-4 text-green-500"></CheckSquare>
                                                <span><b>5</b> No Team Account</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-4 card bg-purple-100 !mb-0 shadow-none dark:bg-purple-500/20">
                                <div className="flex flex-col h-full card-body">
                                    <p className="mb-3 text-purple-500">Per Month</p>
                                    <div className="mt-auto">
                                        <h3 className="mb-2">$49.99</h3>
                                        <button type="button" className="w-full text-white bg-purple-500 border-purple-500 btn hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:text-white focus:bg-purple-600 focus:border-purple-600 focus:ring focus:ring-purple-100 active:text-white active:bg-purple-600 active:border-purple-600 active:ring active:ring-purple-100 dark:ring-purple-400/10">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HorizontalPricing;