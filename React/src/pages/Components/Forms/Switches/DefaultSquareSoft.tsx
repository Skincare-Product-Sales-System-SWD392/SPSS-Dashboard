import React from "react";

const DefaultSquareSoft = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Default Switch</h6>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="customDefaultSwitch" id="customDefaultSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-custom-500 dark:checked:border-custom-500 arrow-none" defaultChecked />
                                <label htmlFor="customDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-500 peer-checked/published:border-custom-500"></label>
                            </div>
                            <label htmlFor="customDefaultSwitch" className="inline-block text-base font-medium cursor-pointer">Custom Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="greenDefaultSwitch" id="greenDefaultSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-green-500 dark:checked:border-green-500 arrow-none" defaultChecked />
                                <label htmlFor="greenDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-green-500 peer-checked/published:border-green-500"></label>
                            </div>
                            <label htmlFor="greenDefaultSwitch" className="inline-block text-base font-medium cursor-pointer">Green Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="orangeDefaultSwitch" id="orangeDefaultSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-orange-500 dark:checked:border-orange-500 arrow-none" defaultChecked />
                                <label htmlFor="orangeDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-orange-500 peer-checked/published:border-orange-500"></label>
                            </div>
                            <label htmlFor="orangeDefaultSwitch" className="inline-block text-base font-medium cursor-pointer">Orange Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="greenDefaultSwitch" id="skyDefaultSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-sky-500 dark:checked:border-sky-500 arrow-none" defaultChecked />
                                <label htmlFor="skyDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-sky-500 peer-checked/published:border-sky-500"></label>
                            </div>
                            <label htmlFor="skyDefaultSwitch" className="inline-block text-base font-medium cursor-pointer">Sky Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="yellowDefaultSwitch" id="yellowDefaultSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-yellow-500 dark:checked:border-yellow-500 arrow-none" defaultChecked />
                                <label htmlFor="yellowDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-yellow-500 peer-checked/published:border-yellow-500"></label>
                            </div>
                            <label htmlFor="yellowDefaultSwitch" className="inline-block text-base font-medium cursor-pointer">Yellow Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="redDefaultSwitch" id="redDefaultSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-red-500 dark:checked:border-red-500 arrow-none" defaultChecked />
                                <label htmlFor="redDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-red-500 peer-checked/published:border-red-500"></label>
                            </div>
                            <label htmlFor="redDefaultSwitch" className="inline-block text-base font-medium cursor-pointer">Red Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="purpleDefaultSwitch" id="purpleDefaultSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-purple-500 dark:checked:border-purple-500 arrow-none" defaultChecked />
                                <label htmlFor="purpleDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-purple-500 peer-checked/published:border-purple-500"></label>
                            </div>
                            <label htmlFor="purpleDefaultSwitch" className="inline-block text-base font-medium cursor-pointer">Purple Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="lightDefaultSwitch" id="lightDefaultSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-slate-400 dark:checked:border-slate-400 arrow-none" defaultChecked />
                                <label htmlFor="lightDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-slate-400 peer-checked/published:border-slate-400"></label>
                            </div>
                            <label htmlFor="lightDefaultSwitch" className="inline-block text-base font-medium cursor-pointer">light Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="darkDefaultSwitch" id="darkDefaultSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-slate-700 dark:checked:border-slate-700 arrow-none" defaultChecked />
                                <label htmlFor="darkDefaultSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-slate-700 peer-checked/published:border-slate-700"></label>
                            </div>
                            <label htmlFor="darkDefaultSwitch" className="inline-block text-base font-medium cursor-pointer">Dark Switch</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Square Switch</h6>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="customSquareSwitch" id="customSquareSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-sm appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-custom-500 dark:checked:border-custom-500 arrow-none" defaultChecked />
                                <label htmlFor="customSquareSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-sm cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-500 peer-checked/published:border-custom-500"></label>
                            </div>
                            <label htmlFor="customSquareSwitch" className="inline-block text-base font-medium cursor-pointer">Custom Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="greenSquareSwitch" id="greenSquareSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-sm appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-green-500 dark:checked:border-green-500 arrow-none" defaultChecked />
                                <label htmlFor="greenSquareSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-sm cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-green-500 peer-checked/published:border-green-500"></label>
                            </div>
                            <label htmlFor="greenSquareSwitch" className="inline-block text-base font-medium cursor-pointer">Green Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="orangeSquareSwitch" id="orangeSquareSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-sm appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-orange-500 dark:checked:border-orange-500 arrow-none" defaultChecked />
                                <label htmlFor="orangeSquareSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-sm cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-orange-500 peer-checked/published:border-orange-500"></label>
                            </div>
                            <label htmlFor="orangeSquareSwitch" className="inline-block text-base font-medium cursor-pointer">Orange Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="greenSquareSwitch" id="skySquareSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-sm appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-sky-500 dark:checked:border-sky-500 arrow-none" defaultChecked />
                                <label htmlFor="skySquareSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-sm cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-sky-500 peer-checked/published:border-sky-500"></label>
                            </div>
                            <label htmlFor="skySquareSwitch" className="inline-block text-base font-medium cursor-pointer">Sky Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="yellowSquareSwitch" id="yellowSquareSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-sm appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-yellow-500 dark:checked:border-yellow-500 arrow-none" defaultChecked />
                                <label htmlFor="yellowSquareSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-sm cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-yellow-500 peer-checked/published:border-yellow-500"></label>
                            </div>
                            <label htmlFor="yellowSquareSwitch" className="inline-block text-base font-medium cursor-pointer">Yellow Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="redSquareSwitch" id="redSquareSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-sm appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-red-500 dark:checked:border-red-500 arrow-none" defaultChecked />
                                <label htmlFor="redSquareSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-sm cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-red-500 peer-checked/published:border-red-500"></label>
                            </div>
                            <label htmlFor="redSquareSwitch" className="inline-block text-base font-medium cursor-pointer">Red Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="purpleSquareSwitch" id="purpleSquareSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-sm appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-purple-500 dark:checked:border-purple-500 arrow-none" defaultChecked />
                                <label htmlFor="purpleSquareSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-sm cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-purple-500 peer-checked/published:border-purple-500"></label>
                            </div>
                            <label htmlFor="purpleSquareSwitch" className="inline-block text-base font-medium cursor-pointer">Purple Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="lightSquareSwitch" id="lightSquareSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-sm appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-slate-400 dark:checked:border-slate-400 arrow-none" defaultChecked />
                                <label htmlFor="lightSquareSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-sm cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-slate-400 peer-checked/published:border-slate-400"></label>
                            </div>
                            <label htmlFor="lightSquareSwitch" className="inline-block text-base font-medium cursor-pointer">light Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="darkSquareSwitch" id="darkSquareSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-sm appearance-none cursor-pointer border-slate-200 dark:border-zink-500 bg-white/80 dark:bg-zink-400 peer/published checked:bg-white dark:checked:bg-white ltr:checked:right-0 rtl:checked:left-0 checked:bg-none checked:border-slate-700 dark:checked:border-slate-700 arrow-none" defaultChecked />
                                <label htmlFor="darkSquareSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-sm cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-slate-700 peer-checked/published:border-slate-700"></label>
                            </div>
                            <label htmlFor="darkSquareSwitch" className="inline-block text-base font-medium cursor-pointer">Dark Switch</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Soft Switch</h6>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="customSoftSwitch" id="customSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none" defaultChecked />
                                <label htmlFor="customSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"></label>
                            </div>
                            <label htmlFor="customSoftSwitch" className="inline-block text-base font-medium cursor-pointer">Custom Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="greenSoftSwitch" id="greenSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-green-500 dark:checked:bg-green-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-green-100 dark:checked:border-green-900 arrow-none checked:bg-none" defaultChecked />
                                <label htmlFor="greenSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-green-100 peer-checked/published:border-green-100 dark:peer-checked/published:bg-green-900 dark:peer-checked/published:border-green-900"></label>
                            </div>
                            <label htmlFor="greenSoftSwitch" className="inline-block text-base font-medium cursor-pointer">Green Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="orangeSoftSwitch" id="orangeSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-orange-500 dark:checked:bg-orange-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-orange-100 dark:checked:border-orange-900 arrow-none checked:bg-none" defaultChecked />
                                <label htmlFor="orangeSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-orange-100 peer-checked/published:border-orange-100 dark:peer-checked/published:bg-orange-900 dark:peer-checked/published:border-orange-900"></label>
                            </div>
                            <label htmlFor="orangeSoftSwitch" className="inline-block text-base font-medium cursor-pointer">Orange Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="greenSoftSwitch" id="skySoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-sky-500 dark:checked:bg-sky-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-sky-100 arrow-none dark:checked:border-sky-900 checked:bg-none" defaultChecked />
                                <label htmlFor="skySoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-sky-100 peer-checked/published:border-sky-100 dark:peer-checked/published:bg-sky-900 dark:peer-checked/published:border-sky-900"></label>
                            </div>
                            <label htmlFor="skySoftSwitch" className="inline-block text-base font-medium cursor-pointer">Sky Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="yellowSoftSwitch" id="yellowSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-yellow-500 dark:checked:bg-yellow-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-yellow-100 dark:checked:border-yellow-900 arrow-none checked:bg-none" defaultChecked />
                                <label htmlFor="yellowSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-yellow-100 peer-checked/published:border-yellow-100 dark:peer-checked/published:bg-yellow-900 dark:peer-checked/published:border-yellow-900"></label>
                            </div>
                            <label htmlFor="yellowSoftSwitch" className="inline-block text-base font-medium cursor-pointer">Yellow Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="redSoftSwitch" id="redSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-red-500 dark:checked:bg-red-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-red-100 dark:checked:border-red-900 arrow-none checked:bg-none" defaultChecked />
                                <label htmlFor="redSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-red-100 peer-checked/published:border-red-100 dark:peer-checked/published:bg-red-900 dark:peer-checked/published:border-red-900"></label>
                            </div>
                            <label htmlFor="redSoftSwitch" className="inline-block text-base font-medium cursor-pointer">Red Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="purpleSoftSwitch" id="purpleSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-purple-500 dark:checked:bg-purple-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-purple-100 dark:checked:border-purple-900 arrow-none checked:bg-none" defaultChecked />
                                <label htmlFor="purpleSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-purple-100 peer-checked/published:border-purple-100 dark:peer-checked/published:bg-purple-900 dark:peer-checked/published:border-purple-900"></label>
                            </div>
                            <label htmlFor="purpleSoftSwitch" className="inline-block text-base font-medium cursor-pointer">Purple Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="lightSoftSwitch" id="lightSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-slate-500 dark:checked:bg-zink-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-slate-200 dark:checked:border-zink-200 arrow-none checked:bg-none" defaultChecked />
                                <label htmlFor="lightSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-slate-300 peer-checked/published:border-slate-100 dark:peer-checked/published:bg-zink-200 dark:peer-checked/published:border-zink-200"></label>
                            </div>
                            <label htmlFor="lightSoftSwitch" className="inline-block text-base font-medium cursor-pointer">light Switch</label>
                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                <input type="checkbox" name="darkSoftSwitch" id="darkSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-slate-500 dark:checked:bg-zink-300 ltr:checked:right-0 rtl:checked:left-0 checked:border-slate-400 dark:checked:border-zink-500 arrow-none checked:bg-none" defaultChecked />
                                <label htmlFor="darkSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-slate-400 peer-checked/published:border-slate-400 dark:peer-checked/published:bg-zink-500 dark:peer-checked/published:border-zink-500"></label>
                            </div>
                            <label htmlFor="darkSoftSwitch" className="inline-block text-base font-medium cursor-pointer">Dark Switch</label>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DefaultSquareSoft;