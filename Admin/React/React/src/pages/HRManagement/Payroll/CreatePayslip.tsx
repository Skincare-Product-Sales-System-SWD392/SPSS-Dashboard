import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';

// Images
import logoSm from "assets/images/logo-sm.png";
import signature from "assets/images/signature.png";

// Icons
import { Plus } from 'lucide-react';

const CreatePayslip = () => {

    const options = [
        { value: '', label: 'Select Employee' },
        { value: 'Willie Torres', label: 'Willie Torres' },
        { value: 'Patricia Garcia', label: 'Patricia Garcia' },
        { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
        { value: 'Thomas Hatfield', label: 'Thomas Hatfield' },
        { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
        { value: 'Nancy Reynolds', label: 'Nancy Reynolds' },
        { value: 'Holly Kavanaugh', label: 'Holly Kavanaugh' },
        { value: 'Jonas Frederiksen', label: 'Jonas Frederiksen' },
    ];

    return (
        <React.Fragment>
            <BreadCrumb title='Create Payslip' pageTitle='Payroll' />
            <div className="grid grid-cols-1 2xl:grid-cols-12">
                <div className="relative card 2xl:col-span-8 2xl:col-start-3">
                    <div className="p-8">
                        <div className="absolute top-0 ltr:right-0 rtl:left-0 opacity-30">
                            <img src={logoSm} alt="" />
                        </div>
                        <div className="text-center">
                            <h5 className="relative before:absolute before:h-[1px] before:inset-x-0 before:-bottom-2.5 inline-block before:bg-gradient-to-r before:from-white dark:before:from-zink-700 before:via-custom-500 before:to-white dark:before:to-zink-700 dark:before:via-custom-500">Salary Slip</h5>
                        </div>

                        <div className="mt-16 xl:max-w-md">
                            <div className="mb-4">
                                <label htmlFor="employeeID" className="inline-block mb-2 text-base font-medium">Employee ID</label>
                                <input type="text" id="employeeID" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" value="#TWE1001524" disabled />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="employeeSelect" className="inline-block mb-2 text-base font-medium">Employee Name</label>
                                <Select
                                    className="border-slate-200 focus:outline-none focus:border-custom-500"
                                    options={options}
                                    isSearchable={false} // To disable search
                                    name="employeeSelect"
                                    id="employeeSelect"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="ExperienceInput" className="inline-block mb-2 text-base font-medium">Experience</label>
                                <input type="text" id="ExperienceInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="0.4 year" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="createDateInput" className="inline-block mb-2 text-base font-medium">Create Date</label>
                                <Flatpickr
                                    id="createDateInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Select Date'
                                />
                            </div>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-3.5 py-2.5 border border-transparent">
                                            <Flatpickr
                                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                options={{
                                                    dateFormat: "d M, Y"
                                                }}
                                                placeholder='Select Date'
                                            />
                                        </td>
                                        <td className="px-3.5 py-2.5 border border-transparent">
                                            <input type="number" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="$00.00" />
                                        </td>
                                        <td className="px-3.5 py-2.5 border border-transparent">
                                            <input type="number" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="$00.00" />
                                        </td>
                                        <td className="px-3.5 py-2.5 border border-transparent">
                                            <input type="number" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="$00.00" />
                                        </td>
                                        <td className="px-3.5 py-2.5 border border-transparent">
                                            <input type="number" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="$00.00" />
                                        </td>
                                        <td className="px-3.5 py-2.5 border border-transparent">
                                            <input type="number" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="$00.00" />
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="before:block before:h-4">
                                    <tr>
                                        <td colSpan={6}>
                                            <button type="button" className="bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20"><Plus className="inline-block size-3 mr-1 align-middle" /> <span className="align-middle">Add Item</span></button>
                                        </td>
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

export default CreatePayslip;
