import React from "react";
import { Frown, Gift, Mail } from "lucide-react";

const LabelBadge = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Badge with Icon</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-custom-100 border-transparent text-custom-500 dark:bg-custom-500/20 dark:border-transparent"><Frown className="size-3 ltr:mr-1 rtl:ml-1"></Frown> Custom</span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent"><Frown className="size-3 ltr:mr-1 rtl:ml-1"></Frown> Green</span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20 dark:border-transparent"><Frown className="size-3 ltr:mr-1 rtl:ml-1"></Frown> Orange</span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-sky-100 border-transparent text-sky-500 dark:bg-sky-500/20 dark:border-transparent"><Frown className="size-3 ltr:mr-1 rtl:ml-1"></Frown> Sky</span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent"><Frown className="size-3 ltr:mr-1 rtl:ml-1"></Frown> Yellow</span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent"><Frown className="size-3 ltr:mr-1 rtl:ml-1"></Frown> Red</span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-purple-100 border-transparent text-purple-500 dark:bg-purple-500/20 dark:border-transparent"><Frown className="size-3 ltr:mr-1 rtl:ml-1"></Frown> Purple</span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent"><Frown className="size-3 ltr:mr-1 rtl:ml-1"></Frown> Slate</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Badge with Indicator</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-custom-400 text-custom-500 dark:bg-zink-700 dark:border-custom-700">
                                <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full inline-block bg-custom-500"></span> Custom
                            </span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-green-400 text-green-500 dark:bg-zink-700 dark:border-green-700">
                                <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full inline-block bg-green-500"></span> Green
                            </span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border bg-white border-orange-400 text-orange-500 dark:bg-zink-700 dark:border-orange-700">
                                <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full inline-block bg-orange-500"></span> Orange
                            </span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-sky-400 text-sky-500 dark:bg-zink-700 dark:border-sky-700">
                                <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full inline-block bg-sky-500"></span> Sky
                            </span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-yellow-400 text-yellow-500 dark:bg-zink-700 dark:border-yellow-700">
                                <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full inline-block bg-yellow-500"></span> Yellow
                            </span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-red-400 text-red-500 dark:bg-zink-700 dark:border-red-700">
                                <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full inline-block bg-red-500"></span> Red
                            </span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-purple-400 text-purple-500 dark:bg-zink-700 dark:border-purple-700">
                                <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full inline-block bg-purple-500"></span> Purple
                            </span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-400 text-slate-500 dark:bg-zink-700 dark:border-zink-400 dark:text-zink-200">
                                <span className="size-1.5 ltr:mr-1 rtl:ml-1 rounded-full inline-block bg-slate-500"></span> Slate
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Badge with Icon Only</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="flex items-center justify-center size-8 text-xs font-medium border border-transparent rounded bg-custom-100 text-custom-500 dark:bg-custom-500/20 dark:border-transparent"><Gift className="size-3"></Gift></span>
                            <span className="flex items-center justify-center size-8 text-xs font-medium text-green-500 bg-green-100 border border-transparent rounded-full dark:bg-green-500/20 dark:border-transparent"><Gift className="size-3"></Gift></span>
                            <span className="flex items-center justify-center size-8 text-xs font-medium text-orange-500 bg-white border border-transparent rounded dark:bg-orange-500/20 dark:border-transparent"><Gift className="size-3"></Gift></span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Badge with Button</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <button type="button" className="relative flex items-center justify-center text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                Custom Button
                                <span className="flex items-center justify-center size-5 ltr:ml-2 rtl:mr-2 text-[10px] shrink-0 font-medium border rounded-full bg-custom-400 border-custom-400">15</span>
                            </button>
                            <button type="button" className="flex items-center justify-center size-[37.5px] relative p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                <span className="absolute flex items-center justify-center size-5 text-[11px] font-medium bg-red-400 border border-red-400 rounded-full ltr:-right-2 rtl:-left-4 -top-2">8</span>
                                <Mail className="size-4"></Mail>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Badges as Links</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <a href="#!" className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-custom-100 border-transparent text-custom-500 hover:bg-custom-200 dark:bg-custom-400/20 dark:hover:bg-custom-400/30 dark:border-transparent">Custom</a>
                            <a href="#!" className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-green-100 border-transparent text-green-500 hover:bg-green-200 dark:bg-green-400/20 dark:hover:bg-green-400/30 dark:border-transparent">Green</a>
                            <a href="#!" className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-orange-100 border-transparent text-orange-500 hover:bg-orange-200 dark:bg-orange-400/20 dark:hover:bg-orange-400/30 dark:border-transparent">Orange</a>
                            <a href="#!" className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-sky-100 border-transparent text-sky-500 hover:bg-sky-200 dark:bg-sky-400/20 dark:hover:bg-sky-400/30 dark:border-transparent">Sky</a>
                            <a href="#!" className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-yellow-100 border-transparent text-yellow-500 hover:bg-yellow-200 dark:bg-yellow-400/20 dark:hover:bg-yellow-400/30 dark:border-transparent ">Yellow</a>
                            <a href="#!" className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-red-100 border-transparent text-red-500 hover:bg-red-200 dark:bg-red-400/20 dark:hover:bg-red-400/30 dark:border-transparent">Red</a>
                            <a href="#!" className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-purple-100 border-transparent text-purple-500 hover:bg-purple-200 dark:bg-purple-400/20 dark:hover:bg-purple-400/30 dark:border-transparent">Purple</a>
                            <a href="#!" className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-slate-100 border-transparent text-slate-500 hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-400/20 dark:hover:bg-slate-400/30 dark:border-transparent">Slate</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LabelBadge;