import React from "react";

const PrivacyPolicyTabs = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Security & Privacy</h6>
                    <div className="space-y-6">
                        <div className="flex flex-col justify-between gap-2 md:flex-row">
                            <div>
                                <h4 className="text-15">Two-factor Authentication</h4>
                                <p className="mt-1 text-slate-500 dark:text-zink-200">Two-factor authentication is an enhanced security. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.</p>
                            </div>
                            <div className="shrink-0">
                                <button type="button" className="py-1 text-xs px-1.5 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Enable Two-factor Authentication</button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-2 md:flex-row">
                            <div>
                                <h4 className="text-15">Secondary Verification</h4>
                                <p className="mt-1 text-slate-500 dark:text-zink-200">The first factor is a password and the second commonly includes a text with a code sent to your smartphone, or biometrics using your fingerprint, face, or retina.</p>
                            </div>
                            <div className="shrink-0">
                                <button type="button" className="py-1 text-xs px-1.5 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Set up secondary method</button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-2 md:flex-row">
                            <div>
                                <h4 className="text-15">Backup Codes</h4>
                                <p className="mt-1 text-slate-500 dark:text-zink-200">A backup code is automatically generated for you when you turn on two-factor authentication through your iOS or Android Twitter app. You can also generate a backup code on twitter.com.</p>
                            </div>
                            <div className="shrink-0">
                                <button type="button" className="py-1 text-xs px-1.5 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Generate backup codes</button>
                            </div>
                        </div>
                    </div>
                    <h6 className="inline-block mt-6 mb-4 underline text-15">Application Notifications:</h6>
                    <div className="space-y-6">
                        <div className="flex justify-between gap-2">
                            <div>
                                <h4 className="text-15">Direct messages</h4>
                                <p className="mt-1 text-slate-500 dark:text-zink-200">Messages from people you follow</p>
                            </div>
                            <div className="shrink-0">
                                <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                    <input type="checkbox" name="directMessage" id="directMessage" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none" defaultChecked />
                                    <label htmlFor="directMessage" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"></label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div>
                                <h4 className="text-15">Show email notifications</h4>
                                <p className="mt-1 text-slate-500 dark:text-zink-200">Under Settings, choose Notifications. Under Select an account, choose the account to enable notifications for.</p>
                            </div>
                            <div className="shrink-0">
                                <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                    <input type="checkbox" name="emailNotification" id="emailNotification" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none" defaultChecked />
                                    <label htmlFor="emailNotification" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"></label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div>
                                <h4 className="text-15">Show chat notifications</h4>
                                <p className="mt-1 text-slate-500 dark:text-zink-200">Messages from people you follow</p>
                            </div>
                            <div className="shrink-0">
                                <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                    <input type="checkbox" name="chatNotification" id="chatNotification" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none" defaultChecked />
                                    <label htmlFor="chatNotification" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"></label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div>
                                <h4 className="text-15">Show purchase notifications</h4>
                                <p className="mt-1 text-slate-500 dark:text-zink-200">Get real-time purchase alerts to protect yourself from fraudulent charges.</p>
                            </div>
                            <div className="shrink-0">
                                <div className="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2">
                                    <input type="checkbox" name="showPurchase" id="showPurchase" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none" defaultChecked />
                                    <label htmlFor="customSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 className="inline-block mt-6 mb-4 underline text-15">Delete This Account:</h6>
                    <p className="mt-1 text-slate-500 dark:text-zink-200">Go to the Data & Privacy section of your profile Account. Scroll to "Your data & privacy options." Delete your Profile Account. Follow the instructions to delete your account :</p>
                    <form action="">
                        <div className="max-w-xs mt-4">
                            <div>
                                <input type="password" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="oldpasswordInput1" placeholder="Enter password" />
                            </div>
                            <div className="flex mt-4 gap-x-2">
                                <button type="button" className="text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20">Close & delete this Account</button>
                                <button type="button" className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>

    );
}

export default PrivacyPolicyTabs;