import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import Flatpickr from "react-flatpickr";

const FormDatePicker = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Date Picker" pageTitle="Forms" />

                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Basic Example</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat="d M, Y"</code> options.</p>
                            <Flatpickr
                                options={{
                                    dateFormat: "d M, Y",
                                }}
                                placeholder="Select Date"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">DateTime</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat="d.m.y" enableTime</code> options.</p>
                            <Flatpickr
                                options={{
                                    enableTime: true,
                                    dateFormat: "d.m.y H:i",
                                }}
                                placeholder="Select date-time"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Human-Friendly Dates</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with altFormat="F j, Y"</code> options.</p>
                            <Flatpickr
                                options={{
                                    altInput: true,
                                    altFormat: "F j, Y",
                                    dateFormat: "Y-m-d",
                                }}
                                placeholder="Select Date"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">MinDate and MaxDate</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat="d M, Y" minDate="Your Min. Date" maxDate="Your Max. date"</code> options.</p>
                            <Flatpickr
                                options={{
                                    dateFormat: "d M, Y",
                                    minDate: "09 Dec, 2023",
                                    maxDate: "20 Dec,2023"
                                }}
                                placeholder="Select Date"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Default Date</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat="d M, Y" defaultDate="Your Default Date"</code> options.</p>
                            <Flatpickr
                                options={{
                                    defaultDate: "16 Oct, 2023",
                                    dateFormat: "d M, Y",
                                }}
                                placeholder="Select Date"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Selecting Multiple Dates</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat="d M, Y" mode="multiple",</code> options.</p>
                            <Flatpickr
                                options={{
                                    mode: "multiple",
                                    dateFormat: "d M, Y",
                                }}
                                placeholder="Select Date"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Range</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat="d M, Y" mode="range"</code> options.</p>
                            <Flatpickr
                                options={{
                                    mode: "range",
                                    dateFormat: "d M, Y",
                                }}
                                placeholder="Select Date"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Week Numbers</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat="d M, Y" weekNumbers="true"</code> options.</p>
                            <Flatpickr
                                options={{
                                    weekNumbers: true,
                                    dateFormat: "d M, Y",
                                }}
                                placeholder="Select Date"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Inline</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat="d M, Y" defaultDate="today" inline="true"</code> options.</p>
                            <Flatpickr
                                options={{
                                    inline: true,
                                    dateFormat: "d M, Y",
                                    defaultDate: "19 Nov,2021"
                                }}
                                placeholder="Select Date"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default FormDatePicker;