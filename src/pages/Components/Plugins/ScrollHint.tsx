import React from "react";
import BreadCrumb from "Common/BreadCrumb";

const ScrollHint = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Scroll Hint" pageTitle="Plugins" />

                <div>
                    <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Simple Scroll Hint</h6>
                                <div className="overflow-x-auto js-scrollable">
                                    <table className="w-full flex-nowrap">
                                        <thead className="ltr:text-left rtl:text-right">
                                            <tr>
                                                <th className="px-3.5 py-2.5 whitespace-nowrap font-semibold border-b border-slate-200 dark:border-zink-500">ID</th>
                                                <th className="px-3.5 py-2.5 whitespace-nowrap font-semibold border-b border-slate-200 dark:border-zink-500">Name</th>
                                                <th className="px-3.5 py-2.5 whitespace-nowrap font-semibold border-b border-slate-200 dark:border-zink-500">Position</th>
                                                <th className="px-3.5 py-2.5 whitespace-nowrap font-semibold border-b border-slate-200 dark:border-zink-500">Office</th>
                                                <th className="px-3.5 py-2.5 whitespace-nowrap font-semibold border-b border-slate-200 dark:border-zink-500">Age</th>
                                                <th className="px-3.5 py-2.5 whitespace-nowrap font-semibold border-b border-slate-200 dark:border-zink-500">Start date</th>
                                                <th className="px-3.5 py-2.5 whitespace-nowrap font-semibold border-b border-slate-200 dark:border-zink-500">Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">1</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Tiger Nixon</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">System Architect</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Edinburgh</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">61</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">2011-04-25</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">$320,800</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">2</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Garrett Winters</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Accountant</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Tokyo</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">63</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">2011-07-25</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">$170,750</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">3</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Ashton Cox</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Junior Technical Author</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">San Francisco</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">66</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">2009-01-12</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">$86,000</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">4</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Cedric Kelly</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Senior Javascript Developer</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Edinburgh</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">22</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">2012-03-29</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">$433,060</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">5</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Airi Satou</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Accountant</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Tokyo</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">33</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">2008-11-28</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">$162,700</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">6</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Brielle Williamson</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">Integration Specialist</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">New York</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">61</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">2012-12-02</td>
                                                <td className="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">$372,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ScrollHint;