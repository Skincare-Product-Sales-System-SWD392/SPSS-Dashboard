import React from 'react';
import { CalendarDays, MoreVertical } from 'lucide-react';

//import images
import avatar2 from "assets/images/users/avatar-2.png"
import avatar3 from "assets/images/users/avatar-3.png"
import avatar4 from "assets/images/users/avatar-4.png"
import avatar5 from "assets/images/users/avatar-5.png"
import { Dropdown } from 'Common/Components/Dropdown';
import { Link } from 'react-router-dom';

const CustomerService = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Customer Service</h6>
                        <Dropdown className="relative shrink-0">
                            <Dropdown.Trigger type="button" className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle" id="customServiceDropdown" data-bs-toggle="dropdown">
                                <MoreVertical className="inline-block size-4"></MoreVertical>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="customServiceDropdown">
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">1 Weekly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">1 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">3 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">6 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">This Yearly</Link>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mt-5 mb-2">
                            <p className="text-slate-500 dark:text-zink-200">28% of the Goal Reached ($25k)</p>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-zink-600">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: "28%" }}></div>
                        </div>
                        <div className="grid mt-3 xl:grid-cols-2">
                            <div className="flex items-center gap-2">
                                <div className="shrink-0">
                                    <CalendarDays className="inline-block size-4 mb-1 align-middle"></CalendarDays>
                                </div>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">This Month: <span className="font-medium text-slate-800 dark:text-zink-50">$13,741</span></p>
                            </div>
                        </div>
                    </div>
                    <h6 className="mt-4 mb-3">Top Customer</h6>
                    <ul className="divide-y divide-slate-200 dark:divide-zink-500">
                        <li className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                            <div className="size-8 rounded-full shrink-0 bg-slate-100 dark:bg-zink-600">
                                <img src={avatar2} alt="" className="size-8 rounded-full" />
                            </div>
                            <div className="grow">
                                <h6 className="font-medium">Urrie Arthur</h6>
                                <p className="text-slate-500 dark:text-zink-200">arthur@tailwick.com</p>
                            </div>
                            <div className="shrink-0">
                                <h6>$2,452</h6>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                            <div className="size-8 rounded-full shrink-0 bg-slate-100 dark:bg-zink-600">
                                <img src={avatar3} alt="" className="size-8 rounded-full" />
                            </div>
                            <div className="grow">
                                <h6 className="font-medium">Natalie Christy</h6>
                                <p className="text-slate-500 dark:text-zink-200">natalie@tailwick.com</p>
                            </div>
                            <div className="shrink-0">
                                <h6>$1,893</h6>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                            <div className="size-8 rounded-full shrink-0 bg-slate-100 dark:bg-zink-600">
                                <img src={avatar4} alt="" className="size-8 rounded-full" />
                            </div>
                            <div className="grow">
                                <h6 className="font-medium">Laurie Jackson</h6>
                                <p className="text-slate-500 dark:text-zink-200">jackson@tailwick.com</p>
                            </div>
                            <div className="shrink-0">
                                <h6>$1,196</h6>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                            <div className="size-8 rounded-full shrink-0 bg-slate-100 dark:bg-zink-600">
                                <img src={avatar5} alt="" className="size-8 rounded-full" />
                            </div>
                            <div className="grow">
                                <h6 className="font-medium">Michael Torres</h6>
                                <p className="text-slate-500 dark:text-zink-200">torres@tailwick.com</p>
                            </div>
                            <div className="shrink-0">
                                <h6>$976</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CustomerService;
