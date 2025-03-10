import React from "react";

const DefaultCircleBordered = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-16">Default Checkbox</h6>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input id="checkboxDefault1" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxDefault1" className="align-middle">
                                Custom
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxDefault2" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-green-500 checked:border-green-500 dark:checked:bg-green-500 dark:checked:border-green-500 checked:disabled:bg-green-400 checked:disabled:border-green-400" type="checkbox" value="" />
                            <label htmlFor="checkboxDefault2" className="align-middle">
                                Green
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxDefault3" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-orange-500 checked:border-orange-500 dark:checked:bg-orange-500 dark:checked:border-orange-500 checked:disabled:bg-orange-400 checked:disabled:border-orange-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxDefault3" className="align-middle">
                                Orange
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxDefault4" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-sky-500 checked:border-sky-500 dark:checked:bg-sky-500 dark:checked:border-sky-500 checked:disabled:bg-sky-400 checked:disabled:border-sky-400" type="checkbox" value="" />
                            <label htmlFor="checkboxDefault4" className="align-middle">
                                Sky
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxDefault5" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-yellow-500 checked:border-yellow-500 dark:checked:bg-yellow-500 dark:checked:border-yellow-500 checked:disabled:bg-yellow-400 checked:disabled:border-yellow-400" type="checkbox" value="" />
                            <label htmlFor="checkboxDefault5" className="align-middle">
                                Yellow
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxDefault6" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-red-500 checked:border-red-500 dark:checked:bg-red-500 dark:checked:border-red-500 checked:disabled:bg-red-400 checked:disabled:border-red-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxDefault6" className="align-middle">
                                Red
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxDefault7" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-500 dark:checked:border-purple-500 checked:disabled:bg-purple-400 checked:disabled:border-purple-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxDefault7" className="align-middle">
                                Purple
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxDefault8" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-slate-300 checked:border-slate-300 dark:checked:bg-zink-200 dark:checked:border-zink-200 checked:disabled:bg-zink-400 checked:disabled:border-zink-400" type="checkbox" value="" />
                            <label htmlFor="checkboxDefault8" className="align-middle">
                                Light
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxDefault9" className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-slate-700 checked:border-slate-700 dark:checked:bg-zink-400 dark:checked:border-zink-400 checked:disabled:bg-zink-500 checked:disabled:border-zink-500" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxDefault9" className="align-middle">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-16">Circle Checkbox</h6>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input id="checkboxCircle1" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="checkbox" value="" />
                            <label htmlFor="checkboxCircle1" className="align-middle">
                                Custom
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxCircle2" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-green-500 checked:border-green-500 dark:checked:bg-green-500 dark:checked:border-green-500 checked:disabled:bg-green-400 checked:disabled:border-green-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxCircle2" className="align-middle">
                                Green
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxCircle3" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-orange-500 checked:border-orange-500 dark:checked:bg-orange-500 dark:checked:border-orange-500 checked:disabled:bg-orange-400 checked:disabled:border-orange-400" type="checkbox" value="" />
                            <label htmlFor="checkboxCircle3" className="align-middle">
                                Orange
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxCircle4" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-sky-500 checked:border-sky-500 dark:checked:bg-sky-500 dark:checked:border-sky-500 checked:disabled:bg-sky-400 checked:disabled:border-sky-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxCircle4" className="align-middle">
                                Sky
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxCircle5" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-yellow-500 checked:border-yellow-500 dark:checked:bg-yellow-500 dark:checked:border-yellow-500 checked:disabled:bg-yellow-400 checked:disabled:border-yellow-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxCircle5" className="align-middle">
                                Yellow
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxCircle6" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-red-500 checked:border-red-500 dark:checked:bg-red-500 dark:checked:border-red-500 checked:disabled:bg-red-400 checked:disabled:border-red-400" type="checkbox" value="" />
                            <label htmlFor="checkboxCircle6" className="align-middle">
                                Red
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxCircle7" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-500 dark:checked:border-purple-500 checked:disabled:bg-purple-400 checked:disabled:border-purple-400" type="checkbox" value="" />
                            <label htmlFor="checkboxCircle7" className="align-middle">
                                Purple
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxCircle8" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-slate-300 checked:border-slate-300 dark:checked:bg-zink-200 dark:checked:border-zink-200 checked:disabled:bg-zink-400 checked:disabled:border-zink-400" type="checkbox" value="" />
                            <label htmlFor="checkboxCircle8" className="align-middle">
                                Light
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxCircle9" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-slate-700 checked:border-slate-700 dark:checked:bg-zink-400 dark:checked:border-zink-400 checked:disabled:bg-zink-500 checked:disabled:border-zink-500" type="checkbox" value="" />
                            <label htmlFor="checkboxCircle9" className="align-middle">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-16">Bordered Checkbox</h6>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline1" className="size-4 bg-white border rounded-sm appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline1" className="align-middle">
                                Custom
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline2" className="size-4 bg-white border rounded-sm appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-green-500 checked:border-green-500 dark:checked:bg-green-500 dark:checked:border-green-500 checked:disabled:bg-green-400 checked:disabled:border-green-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxOutline2" className="align-middle">
                                Green
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline3" className="size-4 bg-white border rounded-sm appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-orange-500 checked:border-orange-500 dark:checked:bg-orange-500 dark:checked:border-orange-500 checked:disabled:bg-orange-400 checked:disabled:border-orange-400" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline3" className="align-middle">
                                Orange
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline4" className="size-4 bg-white border rounded-sm appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-sky-500 checked:border-sky-500 dark:checked:bg-sky-500 dark:checked:border-sky-500 checked:disabled:bg-sky-400 checked:disabled:border-sky-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxOutline4" className="align-middle">
                                Sky
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline5" className="size-4 bg-white border rounded-sm appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-yellow-500 checked:border-yellow-500 dark:checked:bg-yellow-500 dark:checked:border-yellow-500 checked:disabled:bg-yellow-400 checked:disabled:border-yellow-400" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline5" className="align-middle">
                                Yellow
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline6" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-red-500 checked:border-red-500 dark:checked:bg-red-500 dark:checked:border-red-500 checked:disabled:bg-sky-400 checked:disabled:border-sky-400" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline6" className="align-middle">
                                Red
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline7" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-500 dark:checked:border-purple-500 checked:disabled:bg-purple-400 checked:disabled:border-purple-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxOutline7" className="align-middle">
                                Purple
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline8" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-slate-300 checked:border-slate-300 dark:checked:bg-zink-200 dark:checked:border-zink-200 checked:disabled:bg-zink-400 checked:disabled:border-zink-400" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline8" className="align-middle">
                                Light
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline9" className="size-4 bg-white border rounded-full appearance-none cursor-pointer dark:bg-zink-700 border-slate-200 dark:border-zink-500 checked:bg-slate-700 checked:border-slate-700 dark:checked:bg-zink-400 dark:checked:border-zink-400 checked:disabled:bg-zink-500 checked:disabled:border-zink-500" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxOutline9" className="align-middle">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DefaultCircleBordered;