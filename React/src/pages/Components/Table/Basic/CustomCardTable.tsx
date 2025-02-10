import React from "react";

const CustomCardTable = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Custom Table</h6>

                    <div className="overflow-x-auto">
                        <table className="w-full border-separate table-custom border-spacing-y-1">
                            <thead className="ltr:text-left rtl:text-right ">
                                <tr className="relative rounded-md bg-slate-50 after:absolute after:border-l-2 after:left-0 after:top-0 after:bottom-0 after:border-transparent dark:bg-zink-600 [&.active]:after:border-custom-500">
                                    <th className="px-3.5 py-2.5 font-semibold">Order ID</th>
                                    <th className="px-3.5 py-2.5 font-semibold">Shop</th>
                                    <th className="px-3.5 py-2.5 font-semibold">Customer</th>
                                    <th className="px-3.5 py-2.5 font-semibold">Price</th>
                                    <th className="px-3.5 py-2.5 font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="relative rounded-md bg-slate-50 after:absolute after:border-l-2 after:left-0 after:top-0 after:bottom-0 after:border-transparent dark:bg-zink-600 [&.active]:after:border-custom-500">
                                    <td className="px-3.5 py-2.5"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#541254265</a></td>
                                    <td className="px-3.5 py-2.5">Amezon</td>
                                    <td className="px-3.5 py-2.5">Cleo Carson</td>
                                    <td className="px-3.5 py-2.5">$4,521</td>
                                    <td className="px-3.5 py-2.5"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr className="relative rounded-md bg-slate-50 after:absolute after:border-l-2 after:left-0 after:top-0 after:bottom-0 after:border-transparent dark:bg-zink-600 [&.active]:after:border-custom-500 active">
                                    <td className="px-3.5 py-2.5"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#744145235</a></td>
                                    <td className="px-3.5 py-2.5">Shoppers</td>
                                    <td className="px-3.5 py-2.5">Juston Eichmann</td>
                                    <td className="px-3.5 py-2.5">$7,546</td>
                                    <td className="px-3.5 py-2.5"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr className="relative rounded-md bg-slate-50 after:absolute after:border-l-2 after:left-0 after:top-0 after:bottom-0 after:border-transparent dark:bg-zink-600 [&.active]:after:border-custom-500">
                                    <td className="px-3.5 py-2.5"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#9855126598</a></td>
                                    <td className="px-3.5 py-2.5">Flipkart</td>
                                    <td className="px-3.5 py-2.5">Bettie Johson</td>
                                    <td className="px-3.5 py-2.5">$1,350</td>
                                    <td className="px-3.5 py-2.5"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr className="relative rounded-md bg-slate-50 after:absolute after:border-l-2 after:left-0 after:top-0 after:bottom-0 after:border-transparent dark:bg-zink-600 [&.active]:after:border-custom-500">
                                    <td className="px-3.5 py-2.5"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#847512653</a></td>
                                    <td className="px-3.5 py-2.5">Tailwick</td>
                                    <td className="px-3.5 py-2.5">Maritza Blanda</td>
                                    <td className="px-3.5 py-2.5">$4,521</td>
                                    <td className="px-3.5 py-2.5"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Card Table</h6>

                        <div className="-mx-5 -mb-5 overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                                <thead className="ltr:text-left rtl:text-right ">
                                    <tr>
                                        <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500">Order ID</th>
                                        <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500">Shop</th>
                                        <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500">Customer</th>
                                        <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500">Price</th>
                                        <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#541254265</a></td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">Amezon</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">Cleo Carson</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">$4,521</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#744145235</a></td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">Shoppers</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">Juston Eichmann</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">$7,546</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#9855126598</a></td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">Flipkart</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">Bettie Johson</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">$1,350</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#847512653</a></td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">Tailwick</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">Maritza Blanda</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">$4,521</td>
                                        <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CustomCardTable;