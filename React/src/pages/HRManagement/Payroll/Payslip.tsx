import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';

// Images
import logoSm from "assets/images/logo-sm.png";
import signature from "assets/images/signature.png";

const Payslip = () => {

    return (
        <React.Fragment>
            <BreadCrumb title='Payslip' pageTitle='Payroll' />
            <div className="grid grid-cols-1 2xl:grid-cols-12">
                <div className="relative card 2xl:col-span-8 2xl:col-start-3">
                    <div className="p-8">
                        <div className="absolute top-0 ltr:right-0 rtl:left-0 opacity-30">
                            <img src={logoSm} alt="" />
                        </div>
                        <div className="text-center">
                            <h5 className="relative before:absolute before:h-[1px] before:inset-x-0 before:-bottom-2.5 inline-block before:bg-gradient-to-r before:from-white dark:before:from-zink-700 before:via-custom-500 before:to-white dark:before:to-zink-700 dark:before:via-custom-500">Salary Slip</h5>
                        </div>

                        <div className="mt-16">
                            <p className="mb-2 text-slate-500 dark:text-zink-200">Employee ID: <span className="font-semibold text-slate-800 dark:text-zink-50">#TWE1001524</span></p>
                            <p className="mb-2 text-slate-500 dark:text-zink-200">Employee Name: <span className="font-semibold text-slate-800 dark:text-zink-50">Patricia Garcia</span></p>
                            <p className="mb-2 text-slate-500 dark:text-zink-200">Experience: <span className="font-semibold text-slate-800 dark:text-zink-50">2 Year</span></p>
                            <p className="text-slate-500 dark:text-zink-200">Create Date: <span className="font-semibold text-slate-800 dark:text-zink-50">08 Oct 2023</span></p>
                        </div>

                        <div className="mt-10 overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                                <thead className="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600">
                                    <tr>
                                        <th className="px-3.5 py-2.5 font-semibold border border-transparent">Month</th>
                                        <th className="px-3.5 py-2.5 font-semibold border border-transparent">Salary Amount</th>
                                        <th className="px-3.5 py-2.5 font-semibold border border-transparent">Deductions(TDS)</th>
                                        <th className="px-3.5 py-2.5 font-semibold border border-transparent">Professional Tax</th>
                                        <th className="px-3.5 py-2.5 font-semibold border border-transparent">Provident Fund</th>
                                        <th className="px-3.5 py-2.5 font-semibold border border-transparent">Net Payable</th>
                                        <th className="px-3.5 py-2.5 font-semibold border border-transparent">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-3.5 py-2.5 border border-transparent">Oct, 2023</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$25,000</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$800</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$150</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$500</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$23,550</td>
                                        <td className="px-3.5 py-2.5 border border-transparent"><span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">Paid</span></td>
                                    </tr>
                                    <tr>
                                        <td className="px-3.5 py-2.5 border border-transparent">Nov, 2023</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$25,000</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$800</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$150</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$500</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$23,550</td>
                                        <td className="px-3.5 py-2.5 border border-transparent"><span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">Paid</span></td>
                                    </tr>
                                    <tr>
                                        <td className="px-3.5 py-2.5 border border-transparent">Dec, 2023</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$25,000</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$800</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$150</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$500</td>
                                        <td className="px-3.5 py-2.5 border border-transparent">$23,550</td>
                                        <td className="px-3.5 py-2.5 border border-transparent"><span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">Paid</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="grid grid-cols-1 mt-10 2xl:grid-cols-12">
                            <div className="2xl:col-span-5">
                                <p className="mb-2 text-slate-500 dark:text-zink-200">For any inquiries, please contact us at +(252) 0123 456 7890 or reach out via email at tailwick@themesdesign.com.</p>
                                <p className="mb-2 text-slate-500 dark:text-zink-200">Best Regards,</p>
                                <p className="mb-2 text-slate-500 dark:text-zink-200">Themesdesign</p>
                                <p className="text-slate-500 dark:text-zink-200">Founder & CEO: <span className="font-semibold text-slate-800 dark:text-zink-50">Paula Keenan</span></p>
                            </div>
                            <div className="self-end text-center 2xl:col-span-2 2xl:col-start-11">
                                <img src={signature} alt="" className="h-12 mx-auto" />
                                <h6>Authorized Sign</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Payslip;
