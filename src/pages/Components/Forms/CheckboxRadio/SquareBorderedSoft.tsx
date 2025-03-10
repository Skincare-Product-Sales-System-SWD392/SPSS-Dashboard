import React from "react";

const SquareBorderedSoft: React.FC = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-16">Square Radio</h6>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input id="radioSquare1" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-400 dark:checked:border-custom-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioSquare1" className="align-middle">
                                Custom
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSquare2" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-green-500 checked:border-green-500 dark:checked:bg-green-400 dark:checked:border-green-400" type="radio" value="" />
                            <label htmlFor="radioSquare2" className="align-middle">
                                Green
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSquare3" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-orange-500 checked:border-orange-500 dark:checked:bg-orange-400 dark:checked:border-orange-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioSquare3" className="align-middle">
                                Orange
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSquare4" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-sky-500 checked:border-sky-500 dark:checked:bg-sky-400 dark:checked:border-sky-400" type="radio" value="" />
                            <label htmlFor="radioSquare4" className="align-middle">
                                Sky
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSquare5" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-yellow-500 checked:border-yellow-500 dark:checked:bg-yellow-400 dark:checked:border-yellow-400" type="radio" value="" />
                            <label htmlFor="radioSquare5" className="align-middle">
                                Yellow
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSquare6" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-red-500 checked:border-red-500 dark:checked:bg-red-400 dark:checked:border-red-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioSquare6" className="align-middle">
                                Red
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSquare7" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-400 dark:checked:border-purple-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioSquare7" className="align-middle">
                                Purple
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSquare8" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-slate-300 checked:border-slate-300 dark:checked:bg-zink-200 dark:checked:border-zink-200" type="radio" value="" />
                            <label htmlFor="radioSquare8" className="align-middle">
                                Light
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSquare9" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-slate-700 checked:border-slate-700 dark:checked:bg-zink-400 dark:checked:border-zink-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioSquare9" className="align-middle">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-16">Bordered Radio</h6>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input id="radioBordered1" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-400 dark:checked:border-custom-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioBordered1" className="align-middle">
                                Custom
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioBordered2" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-green-500 checked:border-green-500 dark:checked:bg-green-400 dark:checked:border-green-400" type="radio" value="" />
                            <label htmlFor="radioBordered2" className="align-middle">
                                Green
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioBordered3" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-orange-500 checked:border-orange-500 dark:checked:bg-orange-400 dark:checked:border-orange-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioBordered3" className="align-middle">
                                Orange
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioBordered4" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-sky-500 checked:border-sky-500 dark:checked:bg-sky-400 dark:checked:border-sky-400" type="radio" value="" />
                            <label htmlFor="radioBordered4" className="align-middle">
                                Sky
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioBordered5" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-yellow-500 checked:border-yellow-500 dark:checked:bg-yellow-400 dark:checked:border-yellow-400" type="radio" value="" />
                            <label htmlFor="radioBordered5" className="align-middle">
                                Yellow
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioBordered6" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-red-500 checked:border-red-500 dark:checked:bg-red-400 dark:checked:border-red-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioBordered6" className="align-middle">
                                Red
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioBordered7" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-400 dark:checked:border-purple-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioBordered7" className="align-middle">
                                Purple
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioBordered8" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-slate-300 checked:border-slate-300 dark:checked:bg-zink-200 dark:checked:border-zink-200" type="radio" value="" />
                            <label htmlFor="radioBordered8" className="align-middle">
                                Light
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioBordered9" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-slate-700 checked:border-slate-700 dark:checked:bg-zink-400 dark:checked:border-zink-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioBordered9" className="align-middle">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-16">Soft Radio</h6>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input id="radioSoft1" className="size-4 border rounded-sm appearance-none cursor-pointer border-custom-200 bg-custom-50 checked:bg-custom-500 checked:border-custom-500 dark:border-custom-800 dark:bg-custom-500/20 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="radio" value="" />
                            <label htmlFor="radioSoft1" className="align-middle">
                                Custom
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSoft2" className="size-4 border border-green-200 rounded-sm appearance-none cursor-pointer bg-green-50 checked:bg-green-500 checked:border-green-500 dark:border-green-800 dark:bg-green-500/20 dark:checked:bg-green-500 dark:checked:border-green-500" type="radio" value="" defaultChecked />
                            <label htmlFor="radioSoft2" className="align-middle">
                                Green
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSoft3" className="size-4 border border-orange-200 rounded-sm appearance-none cursor-pointer bg-orange-50 checked:bg-orange-500 checked:border-orange-500 dark:border-orange-800 dark:bg-orange-500/20 dark:checked:bg-orange-500 dark:checked:border-orange-500" type="radio" value="" />
                            <label htmlFor="radioSoft3" className="align-middle">
                                Orange
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSoft4" className="size-4 border rounded-sm appearance-none cursor-pointer border-sky-200 bg-sky-50 checked:bg-sky-500 checked:border-sky-500 dark:border-sky-800 dark:bg-sky-500/20 dark:checked:bg-sky-500 dark:checked:border-sky-500" type="radio" value="" defaultChecked />
                            <label htmlFor="radioSoft4" className="align-middle">
                                Sky
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSoft5" className="size-4 border border-yellow-200 rounded-sm appearance-none cursor-pointer bg-yellow-50 checked:bg-yellow-500 checked:border-yellow-500 dark:border-yellow-800 dark:bg-yellow-500/20 dark:checked:bg-yellow-500 dark:checked:border-yellow-500" type="radio" value="" />
                            <label htmlFor="radioSoft5" className="align-middle">
                                Yellow
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSoft6" className="size-4 border border-red-200 rounded-full appearance-none cursor-pointer bg-red-50 checked:bg-red-500 checked:border-red-500 dark:border-red-800 dark:bg-red-500/20 dark:checked:bg-red-500 dark:checked:border-red-500" type="radio" value="" />
                            <label htmlFor="radioSoft6" className="align-middle">
                                Red
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSoft7" className="size-4 border border-purple-200 rounded-sm appearance-none cursor-pointer bg-purple-50 checked:bg-purple-500 checked:border-purple-500 dark:border-purple-800 dark:bg-purple-500/20 dark:checked:bg-purple-500 dark:checked:border-purple-500" type="radio" value="" defaultChecked />
                            <label htmlFor="radioSoft7" className="align-middle">
                                Purple
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSoft8" className="size-4 border rounded-full appearance-none cursor-pointer border-slate-200 bg-slate-50 checked:bg-slate-300 checked:border-slate-300 dark:border-zink-500 dark:bg-zink-600 dark:checked:bg-zink-200 dark:checked:border-zink-200" type="radio" value="" />
                            <label htmlFor="radioSoft8" className="align-middle">
                                Light
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioSoft9" className="size-4 border rounded-full appearance-none cursor-pointer border-slate-300 bg-slate-200 checked:bg-slate-700 checked:border-slate-700 dark:border-zink-500 dark:bg-zink-600 dark:checked:bg-zink-400 dark:checked:border-zink-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioSoft9" className="align-middle">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SquareBorderedSoft;