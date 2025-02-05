import React from "react";

const SoftOutlineDefault = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-16">Soft Checkbox</h6>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input id="checkboxSoft1" className="size-4 border rounded-sm appearance-none cursor-pointer border-custom-200 bg-custom-50 checked:bg-custom-500 checked:border-custom-500 dark:border-custom-800 dark:bg-custom-500/20 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="checkbox" value="" />
                            <label htmlFor="checkboxSoft1" className="align-middle">
                                Custom
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxSoft2" className="size-4 border border-green-200 rounded-sm appearance-none bg-green-50 checked:bg-green-500 checked:border-green-500 dark:border-green-800 dark:bg-green-500/20 dark:checked:bg-green-500 dark:checked:border-green-500" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxSoft2" className="align-middle">
                                Green
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxSoft3" className="size-4 border border-orange-200 rounded-sm appearance-none bg-orange-50 checked:bg-orange-500 checked:border-orange-500 dark:border-orange-800 dark:bg-orange-500/10 dark:checked:bg-orange-500 dark:checked:border-orange-500" type="checkbox" value="" />
                            <label htmlFor="checkboxSoft3" className="align-middle">
                                Orange
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxSoft4" className="size-4 border rounded-sm appearance-none cursor-pointer border-sky-200 bg-sky-50 checked:bg-sky-500 checked:border-sky-500 dark:border-sky-800 dark:bg-sky-500/10 dark:checked:bg-sky-500 dark:checked:border-sky-500" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxSoft4" className="align-middle">
                                Sky
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxSoft5" className="size-4 border border-yellow-200 rounded-sm appearance-none cursor-pointer bg-yellow-50 checked:bg-yellow-500 checked:border-yellow-500 dark:border-yellow-800 dark:bg-yellow-500/10 dark:checked:bg-yellow-500 dark:checked:border-yellow-500" type="checkbox" value="" />
                            <label htmlFor="checkboxSoft5" className="align-middle">
                                Yellow
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxSoft6" className="size-4 border border-red-200 rounded-full appearance-none cursor-pointer bg-red-50 checked:bg-red-500 checked:border-red-500 dark:border-red-800 dark:bg-red-500/10 dark:checked:bg-red-500 dark:checked:border-red-500" type="checkbox" value="" />
                            <label htmlFor="checkboxSoft6" className="align-middle">
                                Red
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxSoft7" className="size-4 border border-purple-200 rounded-full appearance-none cursor-pointer bg-purple-50 checked:bg-purple-500 checked:border-purple-500 dark:border-purple-800 dark:bg-purple-500/10 dark:checked:bg-purple-500 dark:checked:border-purple-500" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxSoft7" className="align-middle">
                                Purple
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxSoft8" className="size-4 border rounded-full appearance-none cursor-pointer border-slate-200 bg-slate-50 checked:bg-slate-300 checked:border-slate-300 dark:border-zink-500 dark:bg-zink-600 dark:checked:bg-zink-200 dark:checked:border-zink-200" type="checkbox" value="" />
                            <label htmlFor="checkboxSoft8" className="align-middle">
                                Light
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxSoft9" className="size-4 border rounded-full appearance-none cursor-pointer border-slate-300 bg-slate-200 checked:bg-slate-700 checked:border-slate-700 dark:border-zink-500 dark:bg-zink-600 dark:checked:bg-zink-400 dark:checked:border-zink-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxSoft9" className="align-middle">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-16">Outline Checkbox</h6>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline11" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline11" className="align-middle">
                                Custom
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline12" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-green-500 checked:border-green-500 dark:after:text-green-500 dark:checked:border-green-800" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxOutline12" className="align-middle">
                                Green
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline13" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-orange-500 checked:border-orange-500 dark:after:text-orange-500 dark:checked:border-orange-800" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline13" className="align-middle">
                                Orange
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline14" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-sky-500 checked:border-sky-500 dark:after:text-sky-500 dark:checked:border-sky-800" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxOutline14" className="align-middle">
                                Sky
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline15" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-yellow-500 checked:border-yellow-500 dark:after:text-sky-500 dark:checked:border-sky-800" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline15" className="align-middle">
                                Yellow
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline16" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-red-500 checked:border-red-500 dark:after:text-red-500 dark:checked:border-red-800" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline16" className="align-middle">
                                Red
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline17" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-purple-500 checked:border-purple-500 dark:after:text-purple-500 dark:checked:border-purple-800" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxOutline17" className="align-middle">
                                Purple
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline18" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-slate-400 checked:border-slate-400 dark:after:text-zink-200 dark:checked:border-zink-200" type="checkbox" value="" />
                            <label htmlFor="checkboxOutline18" className="align-middle">
                                Light
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="checkboxOutline19" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-slate-700 checked:border-slate-700 dark:after:text-zink-400 dark:checked:border-zink-400" type="checkbox" value="" defaultChecked />
                            <label htmlFor="checkboxOutline19" className="align-middle">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-16">Default Radio</h6>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input id="radioDefault1" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="radio" value="" defaultChecked />
                            <label htmlFor="radioDefault1" className="align-middle">
                                Custom
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioDefault2" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-green-500 checked:border-green-500 dark:checked:bg-green-500 dark:checked:border-green-500" type="radio" value="" />
                            <label htmlFor="radioDefault2" className="align-middle">
                                Green
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioDefault3" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-orange-500 checked:border-orange-500 dark:checked:bg-orange-500 dark:checked:border-orange-500" type="radio" value="" defaultChecked />
                            <label htmlFor="radioDefault3" className="align-middle">
                                Orange
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioDefault4" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-sky-500 checked:border-sky-500 dark:checked:bg-sky-500 dark:checked:border-sky-500" type="radio" value="" />
                            <label htmlFor="radioDefault4" className="align-middle">
                                Sky
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioDefault5" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-yellow-500 checked:border-yellow-500 dark:checked:bg-yellow-500 dark:checked:border-yellow-500" type="radio" value="" />
                            <label htmlFor="radioDefault5" className="align-middle">
                                Yellow
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioDefault6" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-red-500 checked:border-red-500 dark:checked:bg-red-500 dark:checked:border-red-500" type="radio" value="" defaultChecked />
                            <label htmlFor="radioDefault6" className="align-middle">
                                Red
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioDefault7" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-500 dark:checked:border-purple-500" type="radio" value="" defaultChecked />
                            <label htmlFor="radioDefault7" className="align-middle">
                                Purple
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioDefault8" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-slate-300 checked:border-slate-300 dark:checked:bg-zink-200 dark:checked:border-zink-200" type="radio" value="" />
                            <label htmlFor="radioDefault8" className="align-middle">
                                Light
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input id="radioDefault9" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-slate-700 checked:border-slate-700 dark:checked:bg-zink-400 dark:checked:border-zink-400" type="radio" value="" defaultChecked />
                            <label htmlFor="radioDefault9" className="align-middle">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default SoftOutlineDefault;