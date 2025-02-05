import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { BarChartHorizontalBig, Percent, ShoppingCart, Store } from "lucide-react";

// Image
import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";

const UITimeline = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Timeline" pageTitle="UI Elements" />
                <div className="grid grid-cols-1 gap-x-4 xl:grid-cols-3">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Circle Timeline</h6>
                            <div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Invitation Sent</h6>
                                    <p className="mb-2 text-slate-400 dark:text-zink-200">No candidate reply</p>
                                    <p className="text-sm text-slate-400 dark:text-zink-200">02 Aug, 2023</p>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Sent to reminder to candidate</h6>
                                    <p className="mb-2 text-slate-500 dark:text-zink-200">Preview message sent</p>
                                    <p className="text-sm text-slate-500 dark:text-zink-200">15 Aug, 2023</p>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Scheduled</h6>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5">
                                    <h6 className="mb-4 text-15">Interview Done</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Square Timeline</h6>
                            <div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-sm ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Invitation Sent</h6>
                                    <p className="mb-2 text-slate-500 dark:text-zink-200">No candidate reply</p>
                                    <p className="text-sm text-slate-500 dark:text-zink-200">02 Aug, 2023</p>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-sm ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Sent to reminder to candidate</h6>
                                    <p className="mb-2 text-slate-500 dark:text-zink-200">Preview message sent</p>
                                    <p className="text-sm text-slate-500 dark:text-zink-200">15 Aug, 2023</p>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-sm ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Scheduled</h6>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 after:absolute after:size-2 after:bg-custom-500 after:rounded-sm ltr:after:left-0 rtl:after:right-0 after:top-1.5">
                                    <h6 className="mb-4 text-15">Interview Done</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Progress Timeline</h6>
                            <div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r rtl:before:right-[.22rem] before:border-custom-500 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4">
                                    <h6 className="mb-4 text-15">Invitation Sent</h6>
                                    <p className="mb-2 text-slate-500 dark:text-zink-200">No candidate reply</p>
                                    <p className="text-sm text-slate-500 dark:text-zink-200">02 Aug, 2023</p>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r rtl:before:right-[.22rem] before:border-custom-500 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4">
                                    <h6 className="mb-4 text-15">Sent to reminder to candidate</h6>
                                    <p className="mb-2 text-slate-500 dark:text-zink-200">Preview message sent</p>
                                    <p className="text-sm text-slate-500 dark:text-zink-200">15 Aug, 2023</p>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Scheduled</h6>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 dark:after:bg-zink-700 dark:after:border-zink-500">
                                    <h6 className="mb-4 text-15">Interview Done</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Outline Timeline</h6>
                            <div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:after:bg-zink-700 dark:after:border-zink-500 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Invitation Sent</h6>
                                    <p className="mb-2 text-slate-500 dark:text-zink-200">No candidate reply</p>
                                    <p className="text-sm text-slate-500 dark:text-zink-200">02 Aug, 2023</p>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:after:bg-zink-700 dark:after:border-zink-500 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Sent to reminder to candidate</h6>
                                    <p className="mb-2 text-slate-500 dark:text-zink-200">Preview message sent</p>
                                    <p className="text-sm text-slate-500 dark:text-zink-200">15 Aug, 2023</p>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:after:bg-zink-700 dark:after:border-zink-500 dark:before:border-zink-500">
                                    <h6 className="mb-4 text-15">Scheduled</h6>
                                </div>
                                <div className="relative ltr:pl-6 rtl:pr-6 after:absolute after:size-2 after:bg-white after:border-slate-200 after:border after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 dark:after:bg-zink-700 dark:after:border-zink-500">
                                    <h6 className="mb-4 text-15">Interview Done</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <h5 className="mb-5 underline">Timeline With Avatar</h5>
                <div className="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Timeline with Avatar</h6>
                            <div>
                                <div className="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500">
                                    <div className="relative flex gap-2">
                                        <img src={avatar1} alt="" className="size-8 p-0.5 bg-white border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700" />
                                        <div>
                                            <h6 className="mb-1">Purchased by James Price</h6>
                                            <p className="mb-2 text-slate-500 dark:text-zink-200">Product noise evolve smartwatch</p>
                                            <p className="text-sm text-slate-500 dark:text-zink-200">05:57 AM Today</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500">
                                    <div className="relative flex gap-2">
                                        <img src={avatar2} alt="" className="size-8 p-0.5 bg-white border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700" />
                                        <div>
                                            <h6 className="mb-1">Natasha Carey have liked the products</h6>
                                            <p className="mb-2 text-slate-500 dark:text-zink-200">Allow users to like products in your WooCommerce store.</p>
                                            <p className="text-sm text-slate-500 dark:text-zink-200">25 Dec, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500">
                                    <div className="relative flex gap-2">
                                        <img src={avatar3} alt="" className="size-8 p-0.5 bg-white border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700" />
                                        <div>
                                            <h6 className="mb-1">Today offers by Digitech Galaxy</h6>
                                            <p className="mb-2 text-slate-500 dark:text-zink-200">Offer is valid on orders of $230 Or above for selected products only.</p>
                                            <p className="text-sm text-slate-500 dark:text-zink-200">12 Dec, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="relative flex gap-2">
                                        <img src={avatar3} alt="" className="size-8 p-0.5 bg-white border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700" />
                                        <div>
                                            <h6 className="mb-1">New ticket received</h6>
                                            <p className="mb-2 text-slate-500 dark:text-zink-200">User <a href="#!" className="text-custom-500">Erica245</a> submitted a ticket</p>
                                            <p className="text-sm text-slate-500 dark:text-zink-200">26 Dec, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Timeline with Icon</h6>
                            <div>
                                <div className="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500">
                                    <div className="relative flex gap-2">
                                        <div className="size-8 p-0.5 bg-white text-custom-500 flex items-center justify-center border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700">
                                            <BarChartHorizontalBig className="size-4"></BarChartHorizontalBig>
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Purchased by James Price</h6>
                                            <p className="mb-2 text-slate-500 dark:text-zink-200">Product noise evolve smartwatch</p>
                                            <p className="text-sm text-slate-500 dark:text-zink-200">05:57 AM Today</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500">
                                    <div className="relative flex gap-2">
                                        <div className="size-8 p-0.5 bg-white text-red-500 flex items-center justify-center border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700">
                                            <Store className="size-4"></Store>
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Natasha Carey have liked the products</h6>
                                            <p className="mb-2 text-slate-500 dark:text-zink-200">Allow users to like products in your WooCommerce store.</p>
                                            <p className="text-sm text-slate-500 dark:text-zink-200">25 Dec, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500">
                                    <div className="relative flex gap-2">
                                        <div className="size-8 p-0.5 bg-white text-green-500 flex items-center justify-center border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700">
                                            <ShoppingCart className="size-4"></ShoppingCart>
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Today offers by Digitech Galaxy</h6>
                                            <p className="mb-2 text-slate-500 dark:text-zink-200">Offer is valid on orders of $230 Or above for selected products only.</p>
                                            <p className="text-sm text-slate-500 dark:text-zink-200">12 Dec, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="relative flex gap-2">
                                        <div className="size-8 p-0.5 bg-white text-purple-500 flex items-center justify-center border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700">
                                            <Percent className="size-4"></Percent>
                                        </div>
                                        <div>
                                            <h6 className="mb-1">New ticket received</h6>
                                            <p className="mb-2 text-slate-500 dark:text-zink-200">User <a href="#!" className="text-custom-500">Erica245</a> submitted a ticket</p>
                                            <p className="text-sm text-slate-500 dark:text-zink-200">26 Dec, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UITimeline;