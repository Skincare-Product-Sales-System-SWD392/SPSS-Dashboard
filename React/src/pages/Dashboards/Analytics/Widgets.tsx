import React from 'react';
import { ChevronDown, Cog, Coins, Kanban, ListFilter, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { Dropdown } from 'Common/Components/Dropdown';
import { PerspectiveChart } from './Charts';
import { Link } from 'react-router-dom';

const Widgets = () => {
    return (
        <React.Fragment>
            <div className="order-1 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-green-100 dark:bg-green-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-green-500/20 relative overflow-hidden">
                <div className="card-body">
                    <Kanban className="absolute top-0 size-32 stroke-1 text-green-200/50 dark:text-green-500/20 ltr:-right-10 rtl:-left-10"></Kanban>
                    <div className="flex items-center justify-center size-12 bg-green-500 rounded-md text-15 text-green-50">
                        <Users />
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={15876} className="counter-value" />
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Total Users</p>
                </div>
            </div>
            <div className="order-2 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-orange-100 dark:bg-orange-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-orange-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter className="absolute top-0 size-32 stroke-1 text-orange-200/50 dark:text-orange-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div className="flex items-center justify-center size-12 bg-orange-500 rounded-md text-15 text-orange-50">
                    <Cog />
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={103.15} decimals={2} className="counter-value" />
                        k</h5>
                    <p className="text-slate-500 dark:text-slate-200">Sessions</p>
                </div>
            </div>
            <div className="order-5 col-span-12 2xl:order-1 card 2xl:row-span-2 2xl:col-span-8">
                <div className="card-body">
                    <div className="flex items-center gap-2 mb-3">
                        <h6 className="text-15 grow">Platform Perspective</h6>
                        <Dropdown className="relative shrink-0">
                            <span className="ltr:mr-1 rtl:ml-1 text-slate-500 dark:zink-200">Sort by </span>
                            <Dropdown.Trigger type="button" className="px-2 py-1.5 text-xs bg-white border-dashed text-slate-500 btn border-slate-500 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-600 focus:text-slate-600 focus:bg-slate-50 focus:border-slate-600 active:text-slate-600 active:bg-slate-50 active:border-slate-600 dark:bg-zink-700 dark:text-zink-200 dark:border-zink-400 dark:ring-zink-400/20 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:focus:bg-zink-600 dark:focus:text-zink-100 dark:active:bg-zink-600 dark:active:text-zink-100 dropdown-toggle" id="emailDataDropdown" data-bs-toggle="dropdown">
                                This Yearly <ChevronDown className="inline-block size-4 ltr:ml-1 rlt:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="emailDataDropdown">
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
                    {/* <div id="platformPerspective" className="apex-charts" data-chart-colors='["bg-custom-500"]' dir="ltr"></div> */}
                    <PerspectiveChart chartId="platformPerspective"  data-chart-colors='["bg-custom-500"]' />
                    <div id="chartdiv"></div>
                </div>
            </div>
            <div className="order-3 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-sky-100 dark:bg-sky-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-sky-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter className="absolute top-0 size-32 stroke-1 text-sky-200/50 dark:text-sky-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div className="flex items-center justify-center size-12 rounded-md bg-sky-500 text-15 text-sky-50">
                        <Coins />
                    </div>
                    <h5 className="mt-5 mb-2">
                    <CountUp className="counter-value" end={1} duration={3} />M{' '}
                    <CountUp className="counter-value" end={29} duration={3} />sec
                        </h5>
                    <p className="text-slate-500 dark:text-slate-200">Avg. Visit Duration</p>
                </div>
            </div>
            <div className="order-4 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-purple-100 dark:bg-purple-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-purple-500/20 relative overflow-hidden">
                <div className="card-body">
                    <Kanban className="absolute top-0 size-32 stroke-1 text-purple-200/50 dark:text-purple-500/20 ltr:-right-10 rtl:-left-10"></Kanban>
                    <div className="flex items-center justify-center size-12 bg-purple-500 rounded-md text-15 text-purple-50">
                        <Users />
                    </div>
                    <h5 className="mt-5 mb-2">
                    <CountUp end={49.77} decimals={2} className="counter-value" />%
                        </h5>
                    <p className="text-slate-500 dark:text-slate-200">Bounce Rate</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets;
