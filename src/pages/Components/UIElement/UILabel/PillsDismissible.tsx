import React from "react";
import { X } from "lucide-react";

const PillsDismissible = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Pills Badge</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded-full border bg-custom-100 border-transparent text-custom-500 dark:bg-custom-500/20 dark:border-transparent">Custom</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded-full border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">Green</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded-full border bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20 dark:border-transparent">Orange</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded-full border bg-sky-100 border-transparent text-sky-500 dark:bg-sky-500/20 dark:border-transparent">Sky</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded-full border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">Yellow</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded-full border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">Red</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded-full border bg-purple-100 border-transparent text-purple-500 dark:bg-purple-500/20 dark:border-transparent">Purple</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded-full border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent">Slate</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Pills Outline Badge</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded-full border bg-white border-custom-400 text-custom-500 dark:bg-zink-700 dark:border-custom-700">Custom</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded-full border bg-white border-green-400 text-green-500 dark:bg-zink-700 dark:border-green-700">Green</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded-full border bg-white border-orange-400 text-orange-500 dark:bg-zink-700 dark:border-orange-700">Orange</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded-full border bg-white border-sky-400 text-sky-500 dark:bg-zink-700 dark:border-sky-700">Sky</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded-full border bg-white border-yellow-400 text-yellow-500 dark:bg-zink-700 dark:border-yellow-700">Yellow</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded-full border bg-white border-red-400 text-red-500 dark:bg-zink-700 dark:border-red-700">Red</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded-full border bg-white border-purple-400 text-purple-500 dark:bg-zink-700 dark:border-purple-700">Purple</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded-full border bg-white border-slate-400 text-slate-500 dark:bg-zink-700 dark:border-zink-400 dark:text-zink-200">Slate</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Dismissible Badges</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-custom-100 border-transparent text-custom-500 dark:bg-custom-500/20 dark:border-transparent">Custom <a href="#!" className="transition text-custom-400 hover:text-custom-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">Green <a href="#!" className="text-green-400 transition hover:text-green-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20 dark:border-transparent">Orange <a href="#!" className="text-orange-400 transition hover:text-orange-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-sky-100 border-transparent text-sky-500 dark:bg-sky-500/20 dark:border-transparent">Sky <a href="#!" className="transition text-sky-400 hover:text-sky-600 "><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">Yellow <a href="#!" className="text-yellow-400 transition hover:text-yellow-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">Red <a href="#!" className="text-red-400 transition hover:text-red-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-purple-100 border-transparent text-purple-500 dark:bg-purple-500/20 dark:border-transparent">Purple <a href="#!" className="text-purple-400 transition hover:text-purple-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent">Slate <a href="#!" className="transition text-slate-400 hover:text-slate-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Dismissible Outline Badge</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-custom-400 text-custom-500 dark:bg-zink-700 dark:border-custom-700">Custom <a href="#!" className="transition text-custom-400 hover:text-custom-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-green-400 text-green-500 dark:bg-zink-700 dark:border-green-700">Green<a href="#!" className="text-green-400 transition hover:text-green-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-orange-400 text-orange-500 dark:bg-zink-700 dark:border-orange-700">Orange <a href="#!" className="text-orange-400 transition hover:text-orange-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-sky-400 text-sky-500 dark:bg-zink-700 dark:border-sky-700">Sky <a href="#!" className="transition text-sky-400 hover:text-sky-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-yellow-400 text-yellow-500 dark:bg-zink-700 dark:border-yellow-700">Yellow <a href="#!" className="text-yellow-400 transition hover:text-yellow-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-red-400 text-red-500 dark:bg-zink-700 dark:border-red-700">Red <a href="#!" className="text-red-400 transition hover:text-red-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-purple-400 text-purple-500 dark:bg-zink-700 dark:border-purple-700">Purple <a href="#!" className="text-purple-400 transition hover:text-purple-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-400 text-slate-500 dark:bg-zink-700 dark:border-zink-400 dark:text-zink-200">Slate <a href="#!" className="transition text-slate-400 hover:text-slate-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PillsDismissible;