import React from "react";

const FileGroup = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">File Sizing</h6>

                    <div className="grid items-center grid-cols-1 gap-5 xl:grid-cols-3">
                        <div>
                            <input type="file" className="cursor-pointer form-file form-file-sm border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500" placeholder="Enter your name" />
                        </div>
                        <div>
                            <input type="file" className="cursor-pointer form-file border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500" placeholder="Enter your name" />
                        </div>
                        <div>
                            <input type="file" className="cursor-pointer form-file form-file-lg border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500" placeholder="Enter your name" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Input Group</h6>

                    <div className="grid items-center grid-cols-1 gap-5 xl:grid-cols-3">
                        <div className="flex items-center">
                            <span className="inline-block px-3 py-2 border ltr:border-r-0 rtl:border-l-0 border-slate-200 bg-slate-100 dark:border-zink-500 dark:bg-zink-600 ltr:rounded-l-md rtl:rounded-r-md">@</span>
                            <input type="text" id="inputText" className="ltr:rounded-l-none rtl:rounded-r-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="@name" />
                        </div>
                        <div className="flex items-center">
                            <span className="inline-block px-3 py-2 border ltr:border-r-0 rtl:border-l-0 border-slate-200 dark:border-zink-500 ltr:rounded-l-md rtl:rounded-r-md">$</span>
                            <input type="number" id="inputNumber" className="ltr:rounded-l-none rtl:rounded-r-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="00.00" />
                        </div>
                        <div className="flex items-center">
                            <input type="text" id="input_text" className="ltr:rounded-r-none rtl:rounded-l-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="@name" />
                            <span className="inline-block px-3 py-2 border border-l-0 border-slate-200 bg-slate-100 dark:border-zink-500 dark:bg-zink-600 ltr:rounded-r-md rtl:rounded-l-md">@</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FileGroup;