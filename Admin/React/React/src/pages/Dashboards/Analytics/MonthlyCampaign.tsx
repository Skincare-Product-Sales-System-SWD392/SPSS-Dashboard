import React from 'react';
import { Eye, Mail, PackageOpen, UserX2, Users2 } from 'lucide-react';

const MonthlyCampaign = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 lg:col-span-6 order-[13] 2xl:order-1 card 2xl:col-span-3">
                <div className="card-body">
                    <h6 className="mb-3 text-15">Status of Monthly Campaign</h6>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-8 text-red-500 bg-red-100 rounded-md dark:bg-red-500/20 shrink-0">
                                <Mail className="size-4"></Mail>
                            </div>
                            <h6 className="grow">Clicked</h6>
                            <p className="text-slate-500 dark:text-zink-200">9,745</p>
                            <div className="w-12 text-green-500 ltr:text-right rtl:text-left">
                                2.5%
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-8 rounded-md text-sky-500 bg-sky-100 dark:bg-sky-500/20 shrink-0">
                                <Users2 className="size-4"></Users2>
                            </div>
                            <h6 className="grow">Subscribe</h6>
                            <p className="text-slate-500 dark:text-zink-200">3,352</p>
                            <div className="w-12 text-green-500 ltr:text-right rtl:text-left">
                                18.9%
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-8 text-orange-500 bg-orange-100 rounded-md dark:bg-orange-500/20 shrink-0">
                                <UserX2 className="size-4"></UserX2>
                            </div>
                            <h6 className="grow">Unsubscribe</h6>
                            <p className="text-slate-500 dark:text-zink-200">85,745</p>
                            <div className="w-12 text-red-500 ltr:text-right rtl:text-left">
                                1.2%
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-8 text-green-500 bg-green-100 rounded-md dark:bg-green-500/20 shrink-0">
                                <Eye className="size-4"></Eye>
                            </div>
                            <h6 className="grow">Viewers</h6>
                            <p className="text-slate-500 dark:text-zink-200">85,745</p>
                            <div className="w-12 text-green-500 ltr:text-right rtl:text-left">
                                11.6%
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-8 rounded-md text-slate-500 bg-slate-100 dark:bg-zink-600 dark:text-zink-200 shrink-0">
                                <PackageOpen className="size-4"></PackageOpen>
                            </div>
                            <h6 className="grow">Opened</h6>
                            <p className="text-slate-500 dark:text-zink-200">85,745</p>
                            <div className="w-12 text-red-500 ltr:text-right rtl:text-left">
                                3.1%
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MonthlyCampaign;
