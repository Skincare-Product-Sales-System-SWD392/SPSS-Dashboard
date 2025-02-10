import React from "react";

const ContentWithStatus = () => {

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4">Avatar Content with Status</h6>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="relative flex items-center justify-center size-8 rounded-md bg-custom-100 dark:bg-custom-950 text-custom-500">
                                A
                                <span className="-top-1 ltr:-right-1 rtl:-left-1 absolute  size-2.5 bg-red-400 border-2 border-white rounded-full dark:border-zink-700"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-10 rounded-md bg-custom-100 dark:bg-custom-950 text-custom-500">
                                A
                                <span className="-top-1 ltr:-right-1 rtl:-left-1 absolute  size-2.5 bg-red-400 border-2 border-white rounded-full dark:border-zink-700"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-12 rounded-md text-15 bg-custom-100 dark:bg-custom-950 text-custom-500">
                                A
                                <span className="absolute size-3 bg-red-400 border-2 border-white rounded-full dark:border-zink-700 -top-1 ltr:-right-1 rtl:-left-1"></span>
                            </div>
                            <div className="relative flex items-center justify-center rounded-md size-14 text-15 bg-custom-100 dark:bg-custom-950 text-custom-500">
                                A
                                <span className="absolute size-3 bg-red-400 border-2 border-white rounded-full dark:border-zink-700 -top-1 ltr:-right-1 rtl:-left-1"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-16 text-xl rounded-md bg-custom-100 dark:bg-custom-950 text-custom-500">
                                A
                                <span className="absolute size-3.5 bg-red-400 border-2 border-white rounded-full dark:border-zink-700 -top-1.5 ltr:-right-1.5 rtl:-left-1.5"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-20 text-2xl rounded-md bg-custom-100 dark:bg-custom-950 text-custom-500">
                                A
                                <span className="absolute size-4 bg-red-400 border-2 border-white rounded-full dark:border-zink-700 -top-1.5 ltr:-right-1.5 rtl:-left-1.5"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-24 text-2xl rounded-md bg-custom-100 dark:bg-custom-950 text-custom-500">
                                A
                                <span className="absolute size-5 bg-red-400 border-2 border-white rounded-full dark:border-zink-700 -top-2 ltr:-right-2 rtl:-left-2"></span>
                            </div>
                            <div className="relative flex items-center justify-center text-3xl rounded-md size-28 bg-custom-100 dark:bg-custom-950 text-custom-500">
                                A
                                <span className="absolute size-6 bg-red-400 border-2 border-white rounded-full dark:border-zink-700 -top-2.5 ltr:-right-2.5 rtl:-left-2.5"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4">Circular Avatar Content with Status</h6>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="relative flex items-center justify-center size-8 rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">
                                A <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-red-400 border-2 border-white rounded-full dark:border-zink-700"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-10 rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">
                                A <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-red-400 border-2 border-white rounded-full dark:border-zink-700"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-12 rounded-full text-15 bg-custom-100 text-custom-500 dark:bg-custom-950">
                                A <span className="absolute top-0 size-3 bg-red-400 border-2 border-white rounded-full ltr:right-0 rtl:left-0 dark:border-zink-700"></span>
                            </div>
                            <div className="relative flex items-center justify-center rounded-full size-14 text-15 bg-custom-100 text-custom-500 dark:bg-custom-950">
                                A <span className="absolute top-0 size-3 bg-red-400 border-2 border-white rounded-full ltr:right-0 rtl:left-0 dark:border-zink-700"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-16 text-xl rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">
                                A <span className="absolute size-3 bg-red-400 border-2 border-white rounded-full top-0.5 ltr:right-0.5 rtl:left-0.5 dark:border-zink-700"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-20 text-2xl rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">
                                A <span className="absolute size-4 bg-red-400 border-2 border-white rounded-full top-0.5 ltr:right-0.5 rtl:left-0.5 dark:border-zink-700"></span>
                            </div>
                            <div className="relative flex items-center justify-center size-24 text-2xl rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">
                                A <span className="absolute size-5 bg-red-400 border-2 border-white rounded-full top-0.5 ltr:right-0.5 rtl:left-0.5 dark:border-zink-700"></span>
                            </div>
                            <div className="relative flex items-center justify-center text-3xl rounded-full size-28 bg-custom-100 text-custom-500 dark:bg-custom-950">
                                A <span className="absolute size-6 bg-red-400 border-2 border-white rounded-full top-1 ltr:right-1 rtl:left-1 dark:border-zink-700"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContentWithStatus;