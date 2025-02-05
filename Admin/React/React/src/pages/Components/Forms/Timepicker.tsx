import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

const FormTimePicker = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Time Picker" pageTitle="Forms" />

                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Timepicker</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat: "H:i", enableTime="true"</code> attribute.</p>
                            <Flatpickr
                                options={{
                                    enableTime: true,
                                    noCalendar: true,
                                    dateFormat: "H:i",
                                }}
                                placeholder="Select Time"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">24-hour Time Picker</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat: "H:i", time_24hr="true"</code> attribute.</p>
                            <Flatpickr
                                options={{
                                    enableTime: true,
                                    noCalendar: true,
                                    dateFormat: "H:i",
                                    time_24hr: true
                                }}
                                placeholder="Select Time"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Time Picker w/ Limits</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat: "H:i", minTime="Min.Time" maxTime="Max.Time"</code> attribute.</p>
                            <Flatpickr
                                options={{
                                    enableTime: true,
                                    noCalendar: true,
                                    dateFormat: "H:i",
                                    minTime: "11:00",
                                    maxTime: "16:30",
                                }}
                                placeholder="Select Time"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Preloading Time</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat: "H:i", dadefaultDate="Your Default Time"</code> attribute.</p>
                            <Flatpickr
                                options={{
                                    enableTime: true,
                                    noCalendar: true,
                                    dateFormat: "H:i",
                                    defaultDate: "16:45"
                                }}
                                placeholder="Select Time"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-1 text-15">Inline</h6>
                            <p className="mb-4">Set <code className="text-xs text-pink-500 select-all">Flatpickr with dateFormat: "H:i", inline="Your Default Time"</code> attribute.</p>
                            <Flatpickr
                                options={{
                                    inline: true,
                                    enableTime: true,
                                    noCalendar: true,
                                    dateFormat: "H:i",
                                    defaultDate: "11:42"
                                }}
                                placeholder="Select Time"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default FormTimePicker;