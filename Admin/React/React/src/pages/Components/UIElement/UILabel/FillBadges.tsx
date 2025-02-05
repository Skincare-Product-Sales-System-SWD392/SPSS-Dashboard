import React from "react";
import { X } from "lucide-react";

const FillBadges = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Fill Badges</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border bg-custom-500 border-custom-500 text-custom-50">Custom</span>
                            <span className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border bg-green-500 border-green-500 text-green-50">Green</span>
                            <span className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border bg-orange-500 border-orange-500 text-orange-50">Orange</span>
                            <span className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border bg-sky-500 border-sky-500 text-sky-50">Sky</span>
                            <span className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border bg-yellow-500 border-yellow-500 text-yellow-50">Yellow</span>
                            <span className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border bg-red-500 border-red-500 text-red-50">Red</span>
                            <span className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border bg-purple-500 border-purple-500 text-purple-50">Purple</span>
                            <span className="px-2.5 py-0.5 text-xs font-medium inline-block rounded border bg-slate-500 border-slate-500 text-slate-50">Slate</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Dismissible Outline Badge</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border bg-white border-custom-400 text-custom-500 dark:bg-zink-700 dark:border-custom-700">Custom <a href="#!" className="transition text-custom-400 hover:text-custom-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border bg-white border-green-400 text-green-500 dark:bg-zink-700 dark:border-green-700">Green<a href="#!" className="text-green-400 transition hover:text-green-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border bg-white border-orange-400 text-orange-500 dark:bg-zink-700 dark:border-orange-700">Orange <a href="#!" className="text-orange-400 transition hover:text-orange-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border bg-white border-sky-400 text-sky-500 dark:bg-zink-700 dark:border-sky-700">Sky <a href="#!" className="transition text-sky-400 hover:text-sky-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border bg-white border-yellow-400 text-yellow-500 dark:bg-zink-700 dark:border-yellow-700">Yellow <a href="#!" className="text-yellow-400 transition hover:text-yellow-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border bg-white border-red-400 text-red-500 dark:bg-zink-700 dark:border-red-700">Red <a href="#!" className="text-red-400 transition hover:text-red-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border bg-white border-purple-400 text-purple-500 dark:bg-zink-700 dark:border-purple-700">Purple <a href="#!" className="text-purple-400 transition hover:text-purple-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                            <span className="flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border bg-white border-slate-400 text-slate-500 dark:bg-zink-700 dark:border-zink-400 dark:text-zink-200">Slate <a href="#!" className="transition text-slate-400 hover:text-slate-600"><X className="size-3 ltr:ml-1 rtl:mr-1"></X></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FillBadges;