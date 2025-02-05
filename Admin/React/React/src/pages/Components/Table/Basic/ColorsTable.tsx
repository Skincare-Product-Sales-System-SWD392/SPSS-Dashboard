import React from "react";

const ColorsTable = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Primary Colors Table</h6>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-custom-50 dark:bg-custom-500/10">
                            <thead className="ltr:text-left rtl:text-right bg-custom-100 dark:bg-custom-500/10">
                                <tr>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-custom-200 dark:border-custom-900">Order ID</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-custom-200 dark:border-custom-900">Shop</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-custom-200 dark:border-custom-900">Customer</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-custom-200 dark:border-custom-900">Price</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-custom-200 dark:border-custom-900">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#541254265</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">Amezon</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">Cleo Carson</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">$4,521</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#744145235</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">Shoppers</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">Juston Eichmann</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">$7,546</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#9855126598</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">Flipkart</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">Bettie Johson</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">$1,350</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#847512653</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">Tailwick</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">Maritza Blanda</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900">$4,521</td>
                                    <td className="px-3.5 py-2.5 border-y border-custom-200 dark:border-custom-900"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Dark Table</h6>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-slate-800 dark:zink-600">
                            <thead className="ltr:text-left rtl:text-right bg-white/5">
                                <tr>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Order ID</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Shop</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Customer</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Price</th>
                                    <th className="px-3.5 py-2.5 font-semibold border-b border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#541254265</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Amezon</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Cleo Carson</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">$4,521</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#744145235</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Shoppers</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Juston Eichmann</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">$7,546</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#9855126598</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Flipkart</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Bettie Johson</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">$1,350</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#847512653</a></td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Tailwick</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">Maritza Blanda</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200">$4,521</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ColorsTable;