import React from "react";

// Image
import avatar2 from "assets/images/users/user-2.jpg";

const AvatarStatus = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4">Square Avatar with Status</h6>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-8 rounded-md" />
                                <span className="-top-1 ltr:-right-1 rtl:-left-1 absolute size-2.5 bg-green-400 border-2 border-white rounded-full dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-10 rounded-md" />
                                <span className="-top-1 ltr:-right-1 rtl:-left-1 absolute size-2.5 bg-green-400 border-2 border-white rounded-full dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-12 rounded-md" />
                                <span className="absolute size-3 bg-green-400 border-2 border-white rounded-full -top-1 ltr:-right-1 rtl:-left-1 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="rounded-md h-14" />
                                <span className="absolute size-3 bg-green-400 border-2 border-white rounded-full -top-1 ltr:-right-1 rtl:-left-1 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-16 rounded-md" />
                                <span className="absolute size-3.5 bg-green-400 border-2 border-white rounded-full -top-1.5 ltr:-right-1.5 rtl:-left-1.5 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-20 rounded-md" />
                                <span className="absolute size-4 bg-green-400 border-2 border-white rounded-full -top-1.5 ltr:-right-1.5 rtl:-left-1.5 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-24 rounded-md" />
                                <span className="absolute size-5 bg-green-400 border-2 border-white rounded-full -top-2 ltr:-right-2 rtl:-left-2 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="rounded-md h-28" />
                                <span className="absolute size-6 bg-green-400 border-2 border-white rounded-full -top-2.5 ltr:-right-2.5 rtl:-left-2.5 dark:border-zink-700"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4">Circular Avatar with Status</h6>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-8 rounded-full" />
                                <span className="top-0 ltr:right-0 rtl:left-0 absolute size-2.5 bg-green-400 border-2 border-white rounded-full dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-10 rounded-full" />
                                <span className="top-0 ltr:right-0 rtl:left-0 absolute size-2.5 bg-green-400 border-2 border-white rounded-full dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-12 rounded-full" />
                                <span className="absolute top-0 size-3 bg-green-400 border-2 border-white rounded-full ltr:right-0 rtl:left-0 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="rounded-full h-14" />
                                <span className="absolute top-0 size-3 bg-green-400 border-2 border-white rounded-full ltr:right-0 rtl:left-0 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-16 rounded-full" />
                                <span className="absolute size-3 bg-green-400 border-2 border-white rounded-full top-0.5 ltr:right-0.5 rtl:left-0.5 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-20 rounded-full" />
                                <span className="absolute size-4 bg-green-400 border-2 border-white rounded-full top-0.5 ltr:right-0.5 rtl:left-0.5 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="h-24 rounded-full" />
                                <span className="absolute size-5 bg-green-400 border-2 border-white rounded-full top-0.5 ltr:right-0.5 rtl:left-0.5 dark:border-zink-700"></span>
                            </div>
                            <div className="relative">
                                <img src={avatar2} alt="" className="rounded-full h-28" />
                                <span className="absolute size-6 bg-green-400 border-2 border-white rounded-full top-1 ltr:right-1 rtl:left-1 dark:border-zink-700"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AvatarStatus;