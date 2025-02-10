import React from "react";
import BreadCrumb from "Common/BreadCrumb";

const UiLists = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Lists" pageTitle="UI Elements" />

                <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Basic List</h6>
                            <ul className="space-y-5 rounded-md">
                                <li>Send the billing agreement</li>
                                <li>Send over all the documentation.</li>
                                <li>Meeting with daron to review the intake form</li>
                                <li>Check tailwick theme and give customer support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Bullet List</h6>
                            <ul className="space-y-5 list-disc list-inside rounded-md">
                                <li>Send the billing agreement</li>
                                <li>Send over all the documentation.</li>
                                <li>Meeting with daron to review the intake form</li>
                                <li>Check tailwick theme and give customer support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">List with Numbered</h6>
                            <ul className="space-y-5 list-decimal list-inside rounded-md">
                                <li>Send the billing agreement</li>
                                <li>Send over all the documentation.</li>
                                <li>Meeting with daron to review the intake form</li>
                                <li>Check tailwick theme and give customer support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Marker Colors</h6>
                            <ul className="space-y-5 list-disc list-inside rounded-md marker:text-red-500">
                                <li>Send the billing agreement</li>
                                <li>Send over all the documentation.</li>
                                <li>Meeting with daron to review the intake form</li>
                                <li>Check tailwick theme and give customer support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Marker Colors</h6>
                            <ul className="space-y-5 list-decimal list-inside rounded-md marker:text-custom-500">
                                <li>Send the billing agreement</li>
                                <li>Send over all the documentation.</li>
                                <li>Meeting with daron to review the intake form</li>
                                <li>Check tailwick theme and give customer support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Custom Square List</h6>
                            <ul className="list-[square] rounded-md list-inside space-y-5">
                                <li>Send the billing agreement</li>
                                <li>Send over all the documentation.</li>
                                <li>Meeting with daron to review the intake form</li>
                                <li>Check tailwick theme and give customer support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Bordered List</h6>
                            <ul className="border rounded-md border-slate-200 dark:border-zink-500">
                                <li className="px-3.5 py-2.5 border-b dark:border-zink-500">Send the billing agreement</li>
                                <li className="px-3.5 py-2.5 border-b dark:border-zink-500 text-custom-50 bg-custom-500">Send over all the documentation.</li>
                                <li className="px-3.5 py-2.5 border-b dark:border-zink-500">Meeting with daron to review the intake form</li>
                                <li className="px-3.5 py-2.5">Check tailwick theme and give customer support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Flush List</h6>
                            <ul>
                                <li className="px-3.5 py-2.5 border-b dark:border-zink-500">Send the billing agreement</li>
                                <li className="px-3.5 py-2.5 border-b dark:border-zink-500">Send over all the documentation.</li>
                                <li className="px-3.5 py-2.5 border-b dark:border-zink-500">Meeting with daron to review the intake form</li>
                                <li className="px-3.5 py-2.5">Check tailwick theme and give customer support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">List with Link</h6>
                            <div className="flex flex-col border rounded-md dark:border-zink-500">
                                <a href="#!" className="block px-3.5 py-2.5 transition border-b dark:border-zink-500 hover:bg-slate-100 dark:hover:bg-zink-600">Category Download</a>
                                <a href="#!" className="block px-3.5 py-2.5 transition border-b dark:border-zink-500 bg-custom-500 text-custom-50">Security Access</a>
                                <a href="#!" className="block px-3.5 py-2.5 transition border-b dark:border-zink-500 hover:bg-slate-100 dark:hover:bg-zink-600">Storage folder</a>
                                <a href="#!" className="block px-3.5 py-2.5 transition pointer-events-none bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600">Push Notification disabled</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">List with Checkbox</h6>
                            <div className="flex flex-col border rounded-md dark:border-zink-300/20">
                                <label className="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2">
                                    <input className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 ltr:mr-1 rtl:ml-1 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="checkbox" defaultValue="" defaultChecked />
                                    Declined Payment
                                </label>
                                <label className="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2">
                                    <input className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 ltr:mr-1 rtl:ml-1 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="checkbox" defaultValue="" />
                                    Delivery Error
                                </label>
                                <label className="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2">
                                    <input className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 ltr:mr-1 rtl:ml-1 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="checkbox" defaultValue="" />
                                    Wrong Amount
                                </label>
                                <label className="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2">
                                    <input className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 ltr:mr-1 rtl:ml-1 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="checkbox" defaultValue="" defaultChecked />
                                    Wrong Address
                                </label>
                                <label className="px-3.5 py-2.5 flex items-center gap-2">
                                    <input className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 ltr:mr-1 rtl:ml-1 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="checkbox" defaultValue="" />
                                    Wrong UX/UI Solution
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">List with Radio</h6>
                            <div className="flex flex-col border rounded-md dark:border-zink-300/20">
                                <label className="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2">
                                    <input className="size-4 border rounded-full appearance-none bg-slate-100 border-slate-200 text-custom-600 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="radio" name="listWithRadio" defaultValue="" />
                                    Declined Payment
                                </label>
                                <label className="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2">
                                    <input className="size-4 border rounded-full appearance-none bg-slate-100 border-slate-200 text-custom-600 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="radio" name="listWithRadio" defaultValue="" defaultChecked />
                                    Delivery Error
                                </label>
                                <label className="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2">
                                    <input className="size-4 border rounded-full appearance-none bg-slate-100 border-slate-200 text-custom-600 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="radio" name="listWithRadio" defaultValue="" />
                                    Wrong Amount
                                </label>
                                <label className="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2">
                                    <input className="size-4 border rounded-full appearance-none bg-slate-100 border-slate-200 text-custom-600 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="radio" name="listWithRadio" defaultValue="" />
                                    Wrong Address
                                </label>
                                <label className="px-3.5 py-2.5 flex items-center gap-2">
                                    <input className="size-4 border rounded-full appearance-none bg-slate-100 border-slate-200 text-custom-600 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500" type="radio" name="listWithRadio" defaultValue="" defaultChecked />
                                    Wrong UX/UI Solution
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default UiLists;