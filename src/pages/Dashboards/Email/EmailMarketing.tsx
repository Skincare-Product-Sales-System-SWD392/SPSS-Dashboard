import React from 'react';
import { EmailMarketingChart } from './Charts';
import { Dropdown } from 'Common/Components/Dropdown';
import { MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailMarketing = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="card-body">
                    <div className="flex items-center">
                        <h6 className="text-15 grow">Email Marketing</h6>
                        <Dropdown className="relative shrink-0">
                            <Dropdown.Trigger id="orderAction1" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] dropdown-toggle p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10">
                                <MoreHorizontal className="size-3"></MoreHorizontal></Dropdown.Trigger>
                            <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="orderAction1">
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">This Year</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Last Year</Link>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>

                    <EmailMarketingChart chartId="emailMarketingChart" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default EmailMarketing;
