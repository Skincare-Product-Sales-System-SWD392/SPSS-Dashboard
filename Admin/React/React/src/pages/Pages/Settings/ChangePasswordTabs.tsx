import React from "react";

const ChangePasswordTabs = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Changes Password</h6>
                    <form action="#!">
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValueOld" className="inline-block mb-2 text-base font-medium">Old Password*</label>
                                <div className="relative">
                                    <input type="password" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="oldpasswordInput2" placeholder="Enter current password" />
                                    <button className="absolute top-2 ltr:right-4 rtl:left-4 " type="button"><i className="align-middle ri-eye-fill text-slate-500 dark:text-zink-200"></i></button>
                                </div>
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValueNew" className="inline-block mb-2 text-base font-medium">New Password*</label>
                                <div className="relative">
                                    <input type="password" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="NewpasswordInput" placeholder="Enter new password" />
                                    <button className="absolute top-2 ltr:right-4 rtl:left-4 " type="button"><i className="align-middle ri-eye-fill text-slate-500 dark:text-zink-200"></i></button>
                                </div>
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Confirm Password*</label>
                                <div className="relative">
                                    <input type="password" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="ConfirmpasswordInput" placeholder="Confirm password" />
                                    <button className="absolute top-2 ltr:right-4 rtl:left-4 " type="button"><i className="align-middle ri-eye-fill text-slate-500 dark:text-zink-200"></i></button>
                                </div>
                            </div>
                            <div className="flex items-center xl:col-span-6">
                                <a href="#!" className="underline text-custom-500 text-13">Forgot Password ?</a>
                            </div>
                            <div className="flex justify-end xl:col-span-6">
                                <button type="button" className="text-white bg-green-500 border-green-500 btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10">Change Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>

    );
}

export default ChangePasswordTabs;