import React, { useState } from "react";
import { Search } from 'lucide-react';

import { MessageData, PopularEventsData, UpcomingBirthdayData } from "Common/data";
import { Link } from "react-router-dom";
import filterDataBySearch from "Common/filterDataBySearch";

const Messages = () => {

    const [data, setData] = useState(MessageData);

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['name'];
        filterDataBySearch(MessageData, search, keysToSearch, setData);
    };

    return (
        <React.Fragment>
            <div className="col-span-12 lg:hidden xl:col-span-3 2xl:block shrink-0">
                <div className="card" id="messageList">
                    <div className="card-body">
                        <div className="flex items-center gap-3">
                            <h6 className="mb-0 grow text-15">Message <span className="inline-flex items-center justify-center size-6 text-xs font-medium border rounded rtl:mr-1 ltr:ml-1 bg-custom-100 border-custom-100 text-custom-500 dark:bg-custom-400/20 dark:border-transparent">15</span></h6>
                            <div className="shrink-0">
                                <Link to="#!" className="underline text-custom-500">Requests(2)</Link>
                            </div>
                        </div>
                        <div className="relative mt-3">
                            <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                            <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                        </div>
                        <div className="js-read-smore" data-read-smore-words="15">
                            <ul className="flex flex-col gap-3 mt-5 list">
                                {(data || []).map((item: any, key: number) => (<li key={key}>
                                    <Link to="#!" className="flex items-center gap-3 transition-all duration-150 ease-linear group/items">
                                        <div className="relative rounded-full size-7 bg-slate-100 dark:bg-zink-600">
                                            <img src={item.image} alt="" className="rounded-full h-7" />
                                            <span className={`bottom-0 ltr:right-0 rtl:left-0 absolute size-2.5 border-2 border-white dark:border-zink-500 rounded-full ${item.isActive ? "bg-green-400" : "bg-red-400"}`}></span>
                                        </div>
                                        <h6 className="transition-all duration-150 ease-linear group-hover/items:text-custom-500 user-name">{item.name}</h6>
                                    </Link>
                                </li>))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Popular Events</h6>
                        <ul className="flex flex-col gap-4 mt-5">
                            {(PopularEventsData || []).map((item: any, key: number) => (<li key={key}>
                                <Link to="#!" className="flex items-center gap-3 transition-all duration-150 ease-linear group/items">
                                    <div>
                                        <img src={item.image} alt="" className="h-6 rounded-full" />
                                    </div>
                                    <h6 className="transition-all duration-150 ease-linear group-hover/items:text-custom-500">{item.event}</h6>
                                </Link>
                            </li>))}
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Upcoming Birthday</h6>
                        <ul className="flex flex-col gap-3 mt-5">
                            {(UpcomingBirthdayData || []).map((item: any, key: number) => (<li key={key}>
                                <Link to="#!" className="flex items-center gap-3 transition-all duration-150 ease-linear group/items">
                                    <div className="relative rounded-full size-9 bg-slate-100 dark:bg-zink-600">
                                        <img src={item.image} alt="" className="rounded-full h-9" />
                                        <span className="bottom-0 ltr:right-0 rtl:left-0 absolute size-2.5 bg-green-400 border-2 border-white dark:border-zink-500 rounded-full"></span>
                                    </div>
                                    <div className="grow">
                                        <h6 className="mb-1 transition-all duration-150 ease-linear group-hover/items:text-custom-500">{item.name}</h6>
                                        <p className="text-slate-500">{item.date}</p>
                                    </div>
                                </Link>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Messages;