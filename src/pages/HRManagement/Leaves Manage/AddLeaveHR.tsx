import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';

const AddLeaveHR = () => {

    const options = [
        { value: '', label: 'Select Employee' },
        { value: 'Willie Torres', label: 'Willie Torres' },
        { value: 'Patricia Garcia', label: 'Patricia Garcia' },
        { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
        { value: 'Thomas Hatfield', label: 'Thomas Hatfield' },
        { value: 'Willie Torres', label: 'Willie Torres' },
        { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
        { value: 'Nancy Reynolds', label: 'Nancy Reynolds' },
        { value: 'Holly Kavanaugh', label: 'Holly Kavanaugh' },
        { value: 'Jonas Frederiksen', label: 'Jonas Frederiksen' },
    ];

    const leaveOptions = [
        { value: '', label: 'Select Leave Type' },
        { value: 'Medical Leave', label: 'Medical Leave' },
        { value: 'Casual Leave', label: 'Casual Leave' },
        { value: 'Sick Leave', label: 'Sick Leave' },
        { value: 'Annual Leave', label: 'Annual Leave' },
    ];

    const leaveOptions1 = [
        { value: '', label: 'Select Leave Day' },
        { value: 'Full Day', label: 'Full Day' },
        { value: 'Half Day', label: 'Half Day' },
    ];

    return (
        <React.Fragment>
            <BreadCrumb title='Add Leave (HR)' pageTitle='Leaves Manage' />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                <div className="xl:col-span-9">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15 grow">Add Leave</h6>
                            <form action="#!">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
                                    <div className="xl:col-span-6">
                                        <div>
                                            <label htmlFor="employeeName" className="inline-block mb-2 text-base font-medium">Employee</label>
                                            <Select
                                                className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                options={options}
                                                isSearchable={false} // If you want to disable search
                                                name="employeeName"
                                                id="employeeName"
                                            />
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6">
                                        <div>
                                            <label htmlFor="employeeId" className="inline-block mb-2 text-base font-medium">Employee ID</label>
                                            <input type="text" id="employeeId" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" value="#TWE1001501" disabled />
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6">
                                        <div>
                                            <label htmlFor="leaveType" className="inline-block mb-2 text-base font-medium">Leave Type</label>
                                            <Select
                                                className="border-slate-200 focus:outline-none focus:border-custom-500"
                                                options={leaveOptions}
                                                isSearchable={false} // To disable search
                                                name="leaveType"
                                                id="leaveType"
                                            />
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6">
                                        <div>
                                            <label htmlFor="remainingLeaves" className="inline-block mb-2 text-base font-medium">Remaining Leaves</label>
                                            <input type="text" id="remainingLeaves" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" value="18" disabled />
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="fromInput" className="inline-block mb-2 text-base font-medium">Form</label>
                                        <Flatpickr
                                            id="fromInput"
                                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                            options={{
                                                dateFormat: "d M, Y"
                                            }}
                                            placeholder='Select Date'
                                        />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="toInput" className="inline-block mb-2 text-base font-medium">To</label>
                                        <Flatpickr
                                            id="toInput"
                                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                            options={{
                                                dateFormat: "d M, Y"
                                            }}
                                            placeholder='Select Date'
                                        />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <div>
                                            <label htmlFor="numberOfDayLeaves" className="inline-block mb-2 text-base font-medium">Number of Days</label>
                                            <input type="text" id="numberOfDayLeaves" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" value="01" disabled />
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="leaveDayInput" className="inline-block mb-2 text-base font-medium">Leave Day</label>
                                        <Select
                                            className="border-slate-200 focus:outline-none focus:border-custom-500"
                                            options={leaveOptions1}
                                            isSearchable={false} // To disable search
                                            name="leaveDayInput"
                                            id="leaveDayInput"
                                        />
                                    </div>
                                    <div className="md:col-span-2 xl:col-span-12">
                                        <div>
                                            <label htmlFor="reasonInput" className="inline-block mb-2 text-base font-medium">Reason</label>
                                            <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="reasonInput" rows={3}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 mt-4">
                                    <button type="reset" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10">Reset</button>
                                    <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add Leave</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Leave Information (2023)</h6>
                            <div>
                                <table className="w-full mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">Medical Leave</td>
                                            <th className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">04</th>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">Casual Leave</td>
                                            <th className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">08</th>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">Sick Leave</td>
                                            <th className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">03</th>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">Annual Leave</td>
                                            <th className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">12</th>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">Use Leave</td>
                                            <th className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">09</th>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">Remaining Leave</td>
                                            <th className="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">18</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddLeaveHR;
