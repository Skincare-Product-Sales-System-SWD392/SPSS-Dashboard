import React from "react";

const DefaultOutline = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Default Badge</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-custom-100 border-transparent text-custom-500 dark:bg-custom-500/20 dark:border-transparent">Custom</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">Green</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20 dark:border-transparent">Orange</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-sky-100 border-transparent text-sky-500 dark:bg-sky-500/20 dark:border-transparent">Sky</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">Yellow</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">Red</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-purple-100 border-transparent text-purple-500 dark:bg-purple-500/20 dark:border-transparent">Purple</span>
                            <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent">Slate</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Outline Badge</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-custom-400 text-custom-500 dark:bg-zink-700 dark:border-custom-700">Custom</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-green-400 text-green-500 dark:bg-zink-700 dark:border-green-700">Green</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-orange-400 text-orange-500 dark:bg-zink-700 dark:border-orange-700">Orange</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-sky-400 text-sky-500 dark:bg-zink-700 dark:border-sky-700">Sky</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-yellow-400 text-yellow-500 dark:bg-zink-700 dark:border-yellow-700">Yellow</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-red-400 text-red-500 dark:bg-zink-700 dark:border-red-700">Red</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-purple-400 text-purple-500 dark:bg-zink-700 dark:border-purple-700">Purple</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-slate-400 text-slate-500 dark:bg-zink-700 dark:border-zink-400 dark:text-zink-200">Slate</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Bordered Badge</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-custom-100 border-custom-200 text-custom-500 dark:bg-custom-500/20 dark:border-custom-500/20">Custom</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">Green</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-orange-100 border-orange-200 text-orange-500 dark:bg-orange-500/20 dark:border-orange-500/20">Orange</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20">Sky</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-500/20">Yellow</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-red-100 border-red-200 text-red-500 dark:bg-red-500/20 dark:border-red-500/20">Red</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-purple-100 border-purple-200 text-purple-500 dark:bg-purple-500/20 dark:border-purple-500/20">Purple</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-zink-200">Slate</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Soft Outline Badge</h6>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-custom-100 text-custom-500 dark:bg-zink-700 dark:border-custom-900">Custom</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-green-100 text-green-500 dark:bg-zink-700 dark:border-green-900">Green</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-orange-100 text-orange-500 dark:bg-zink-700 dark:border-orange-900">Orange</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-sky-100 text-sky-500 dark:bg-zink-700 dark:border-sky-900">Sky</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-yellow-100 text-yellow-500 dark:bg-zink-700 dark:border-yellow-900">Yellow</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-red-100 text-red-500 dark:bg-zink-700 dark:border-red-900">Red</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-purple-100 text-purple-500 dark:bg-zink-700 dark:border-purple-900">Purple</span>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-slate-100 text-slate-500 dark:bg-zink-700 dark:border-zink-500 dark:text-zink-200">Slate</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DefaultOutline;