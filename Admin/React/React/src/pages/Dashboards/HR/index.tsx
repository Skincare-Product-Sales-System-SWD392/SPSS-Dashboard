import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import EmployeePerformance from './EmployeePerformance';
import UpcomingScheduled from './UpcomingScheduled';
import TotalProjects from './TotalProjects';
import UpcomingInterview from './UpcomingInterview';
import RecentPayroll from './RecentPayroll';

const HRDashboard = () => {

    return (
        <React.Fragment>
            <BreadCrumb title='HR' pageTitle='Dashboards' />
            <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
                <div className="col-span-12 md:order-1 xl:col-span-8 2xl:col-span-6">
                    <h5 className="mb-2">Welcome Paula Keenan 🎉</h5>
                    <p className="mb-5 text-slate-500 dark:text-zink-200">The salary of
                        <Link to="#" className="underline text-slate-800 dark:text-zink-50">Glennie Langosh</Link> is pending since 05 Dec, 2023. the documentation of the tasks, workflows, and activities that make up a process managed by the HR or People Ops team. <Link to="#!" className="text-red-500">Learn More</Link></p>
                </div>
                <div className="col-span-12 md:order-2 xl:col-span-4 2xl:col-start-9 card">
                    <div className="p-4">
                        <div className="grid grid-cols-3">
                            <div className="px-4 text-center ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500 ltr:last:border-r-0 rtl:last:border-l-0">
                                <h6 className="mb-1 font-bold">
                                    <CountUp end={36} className="counter-value" />
                                </h6>
                                <p className="text-slate-500 dark:text-zink-200">Absent</p>
                            </div>
                            <div className="px-4 text-center ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500 ltr:last:border-r-0 rtl:last:border-l-0">
                                <h6 className="mb-1 font-bold">
                                    <CountUp end={465} className="counter-value" />
                                </h6>
                                <p className="text-slate-500 dark:text-zink-200">Attendance</p>
                            </div>
                            <div className="px-4 text-center ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500 ltr:last:border-r-0 rtl:last:border-l-0">
                                <h6 className="mb-1 font-bold">
                                    <CountUp end={50} className="counter-value" />
                                </h6>
                                <p className="text-slate-500 dark:text-zink-200">Late</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Widgets />
                <EmployeePerformance />
                <UpcomingScheduled />
                <TotalProjects />
                <UpcomingInterview />
                <RecentPayroll />

            </div>
        </React.Fragment>
    );
};

export default HRDashboard;
