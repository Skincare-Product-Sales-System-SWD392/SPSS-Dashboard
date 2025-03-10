import React from 'react';

import { UpcomingInterviewData } from 'Common/data';

// SimpleBar
import SimpleBar from 'simplebar-react';

// Icons
import { MoreVertical, Calendar, Clock4 } from 'lucide-react';
import { Dropdown } from 'Common/Components/Dropdown';
import { Link } from 'react-router-dom';

const UpcomingInterview = () => {

    const Status = ({ item }: any) => {
        switch (item) {
            case "Confirm":
                return (<span className="px-2.5 py-0.5 text-xs inline-block text-center font-medium shrink-0 rounded border bg-white border-green-400 text-green-500 dark:bg-zink-700 dark:border-green-700">{item}</span>);
            case "Re-scheduled":
                return (<span className="px-2.5 py-0.5 text-xs text-center inline-block font-medium shrink-0 rounded border bg-white border-custom-400 text-custom-500 dark:bg-zink-700 dark:border-custom-700">{item}</span>);
            case "Scheduled":
                return (<span className="px-2.5 py-0.5 text-xs inline-block text-center font-medium shrink-0 rounded border bg-white border-sky-400 text-sky-500 dark:bg-zink-700 dark:border-sky-700">{item}</span>);
            case "Cancelled":
                return (<span className="px-2.5 py-0.5 text-xs inline-block text-center font-medium shrink-0 rounded border bg-white border-red-400 text-red-500 dark:bg-zink-700 dark:border-red-700">{item}</span>);
            default:
                return (<span className="px-2.5 py-0.5 text-xs inline-block text-center font-medium shrink-0 rounded border bg-white border-green-400 text-green-500 dark:bg-zink-700 dark:border-green-700">{item}</span>);
        }
    };

    return (
        <React.Fragment>
            <div className="col-span-12 md:order-11 lg:col-span-6 xl:col-span-4 2xl:col-span-3 card">
                <div className="!pb-0 card-body">
                    <h6 className="mb-3 text-15">Upcoming Interview</h6>
                </div>
                <div className="pb-5">
                    <SimpleBar className="flex flex-col h-[350px] gap-4 px-5">
                        <div className="flex flex-col gap-3">
                            {(UpcomingInterviewData || []).map((item: any, key: number) => (<div className="border rounded-md border-slate-200 dark:border-zink-500" key={key}>
                                <div className="flex flex-wrap items-center gap-3 p-2">
                                    <div className="size-10 rounded-full shrink-0">
                                        <img src={item.image} alt="" className="h-10 rounded-full" />
                                    </div>
                                    <div className="grow">
                                        <h6 className="mb-1"><Link to="#!">{item.name}</Link></h6>
                                        <p className="text-slate-500 dark:text-zink-200">{item.email}</p>
                                    </div>
                                    <Dropdown className="relative dropdown shrink-0">
                                        <Dropdown.Trigger type="button" className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle" id="interviewDropdown" data-bs-toggle="dropdown">
                                            <MoreVertical className="inline-block size-4" />
                                        </Dropdown.Trigger>

                                        <Dropdown.Content placement={UpcomingInterviewData.length / 2 <= key ? "top-end" : "right-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="interviewDropdown">
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Overview</Link>
                                            </li>
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Edit</Link>
                                            </li>
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Delete</Link>
                                            </li>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                                <div className="p-2 border-t border-slate-200 dark:border-zink-500">
                                    <div className="flex flex-col gap-3 md:items-center md:flex-row">
                                        <p className="text-slate-500 dark:text-zink-200 shrink-0"><Calendar className="inline-block size-4 ltr:mr-1 rtl::ml-1" /> <span className="align-middle">{item.date}</span></p>
                                        <p className="text-slate-500 dark:text-zink-200 grow"><Clock4 className="inline-block size-4 ltr:mr-1 rtl::ml-1" /> <span className="align-middle">{item.time}</span></p>
                                        <Status item={item.status} />
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UpcomingInterview;
