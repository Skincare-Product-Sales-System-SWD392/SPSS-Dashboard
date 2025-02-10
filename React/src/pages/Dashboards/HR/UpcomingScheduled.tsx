import React, { useEffect } from 'react';
import Flatpickr from "react-flatpickr";
import supportImg from "assets/images/support.png";

import { UpcomingScheduledData } from 'Common/data';

const UpcomingScheduled = () => {

    useEffect(() => {
        document.getElementById('upcomingscheduledflatpickr')?.classList.add('hidden');
        return () => {
            document.getElementById('upcomingscheduledflatpickr')?.classList.remove('hidden');
        };
    }, []);

    return (
        <React.Fragment>
            <div className="col-span-12 md:order-9 lg:col-span-6 lg:row-span-2 xl:col-span-4 xl:row-span-2 2xl:row-span-2 2xl:col-span-3 ">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-3 text-15 grow">Upcoming Scheduled</h6>
                        <Flatpickr
                            id='upcomingscheduledflatpickr'
                            options={{
                                inline: true
                            }}
                            className="w-auto p-1"
                        />
                        <div className="flex flex-col gap-4 mt-3">
                            {(UpcomingScheduledData || []).map((item: any, key: number) => (<div className="flex gap-3" key={key}>
                                <div className="flex flex-col items-center justify-center size-12 border rounded-sm border-slate-200 dark:border-zink-500 shrink-0"><h6>{item.date}</h6>  <span className="text-sm text-slate-500 dark:text-zink-200">{item.month}</span></div>
                                <div className="grow">
                                    <h6 className="mb-1">{item.title} {item.time && <small className="inline-block px-2 font-medium border border-transparent rounded text-[11px] py-0.5 bg-slate-100 text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent">{item.time}</small>}</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Created by {item.createdBy}</p>
                                </div>
                            </div>))}
                        </div>
                        <div className="flex gap-3 p-2 mt-3 rounded-md bg-custom-500">
                            <div className="shrink-0">
                                <img src={supportImg} alt="" className="h-24" />
                            </div>
                            <div>
                                <h6 className="mb-1 text-15 text-custom-50">Need Help ?</h6>
                                <p className="text-custom-200">If you would like to learn more about transferring the license to a customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UpcomingScheduled;
