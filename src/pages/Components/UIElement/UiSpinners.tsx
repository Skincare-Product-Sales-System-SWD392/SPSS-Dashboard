import React from "react";
import BreadCrumb from "Common/BreadCrumb";

const UiSpinners = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Spinner" pageTitle="UI Elements" />
                <div className="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="mb-4 text-15">Default Spinner</h5>
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="inline-block size-8 border-2 rounded-full animate-spin border-l-transparent border-custom-500"></div>
                                <div className="inline-block size-8 border-2 border-green-500 rounded-full animate-spin border-l-transparent"></div>
                                <div className="inline-block size-8 border-2 border-orange-500 rounded-full animate-spin border-l-transparent"></div>
                                <div className="inline-block size-8 border-2 rounded-full animate-spin border-l-transparent border-sky-500"></div>
                                <div className="inline-block size-8 border-2 border-yellow-500 rounded-full animate-spin border-l-transparent"></div>
                                <div className="inline-block size-8 border-2 border-red-500 rounded-full animate-spin border-l-transparent"></div>
                                <div className="inline-block size-8 border-2 border-purple-500 rounded-full animate-spin border-l-transparent"></div>
                                <div className="inline-block size-8 border-2 rounded-full animate-spin border-l-transparent border-slate-400 dark:border-zink-500 dark:border-l-transparent"></div>
                                <div className="inline-block size-8 border-2 rounded-full animate-spin border-l-transparent border-slate-900 dark:border-zink-200 dark:border-l-transparent"></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="mb-4 text-15">Ping Animation</h5>
                            <div className="flex flex-wrap items-center gap-5 px-3 py-2">
                                <div className="inline-flex size-4 rounded-full opacity-75 animate-ping bg-custom-500"></div>
                                <div className="inline-flex size-4 bg-green-400 rounded-full opacity-75 animate-ping"></div>
                                <div className="inline-flex size-4 bg-orange-400 rounded-full opacity-75 animate-ping"></div>
                                <div className="inline-flex size-4 rounded-full opacity-75 animate-ping bg-sky-400"></div>
                                <div className="inline-flex size-4 bg-yellow-400 rounded-full opacity-75 animate-ping"></div>
                                <div className="inline-flex size-4 bg-red-400 rounded-full opacity-75 animate-ping"></div>
                                <div className="inline-flex size-4 bg-purple-400 rounded-full opacity-75 animate-ping"></div>
                                <div className="inline-flex size-4 rounded-full opacity-75 animate-ping bg-slate-400"></div>
                                <div className="inline-flex size-4 rounded-full opacity-75 animate-ping bg-slate-900 dark:bg-zink-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-4 text-gray-800 text-15 dark:text-white">Bounce Animation</h5>
                        <div className="flex flex-wrap items-center gap-5">
                            <div className="inline-flex size-6 rounded-full opacity-75 animate-bounce bg-custom-500"></div>
                            <div className="inline-flex size-6 bg-green-400 rounded-full opacity-75 animate-bounce"></div>
                            <div className="inline-flex size-6 bg-orange-400 rounded-full opacity-75 animate-bounce"></div>
                            <div className="inline-flex size-6 rounded-full opacity-75 animate-bounce bg-sky-400"></div>
                            <div className="inline-flex size-6 bg-yellow-400 rounded-full opacity-75 animate-bounce"></div>
                            <div className="inline-flex size-6 bg-red-400 rounded-full opacity-75 animate-bounce"></div>
                            <div className="inline-flex size-6 bg-purple-400 rounded-full opacity-75 animate-bounce"></div>
                            <div className="inline-flex size-6 rounded-full opacity-75 animate-bounce bg-slate-400"></div>
                            <div className="inline-flex size-6 rounded-full opacity-75 animate-bounce bg-slate-900 dark:bg-zink-300"></div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-4 text-gray-800 text-15 dark:text-white">Sizes Animation</h5>
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                            <div className="flex flex-wrap items-center gap-5">
                                <div className="inline-block size-4 border-2 rounded-full animate-spin border-l-transparent border-custom-500"></div>
                                <div className="inline-block size-6 border-2 rounded-full animate-spin border-l-transparent border-custom-500"></div>
                                <div className="inline-block size-8 border-2 rounded-full animate-spin border-l-transparent border-custom-500"></div>
                                <div className="inline-block size-10 border-2 rounded-full animate-spin border-l-transparent border-custom-500"></div>
                            </div>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="inline-flex size-4 rounded-full opacity-75 animate-bounce bg-custom-500"></div>
                                <div className="inline-flex size-6 rounded-full opacity-75 animate-bounce bg-custom-500"></div>
                                <div className="inline-flex size-8 rounded-full opacity-75 animate-bounce bg-custom-500"></div>
                                <div className="inline-flex size-10 rounded-full opacity-75 animate-bounce bg-custom-500"></div>
                            </div>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="inline-flex size-2 rounded-full opacity-75 animate-ping bg-custom-500"></div>
                                <div className="inline-flex size-4 rounded-full opacity-75 animate-ping bg-custom-500"></div>
                                <div className="inline-flex size-6 rounded-full opacity-75 animate-ping bg-custom-500"></div>
                                <div className="inline-flex size-8 rounded-full opacity-75 animate-ping bg-custom-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UiSpinners;