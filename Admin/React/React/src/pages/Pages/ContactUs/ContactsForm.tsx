import React from "react";
import { Facebook, Globe, Instagram, Mail, Twitter, Youtube } from "lucide-react";

const ContactsForm = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                        <div className="xl:col-span-3 bg-custom-900 card !mb-0 dark:bg-custom-950">
                            <div className="flex flex-col h-full card-body">
                                <div className="mb-6">
                                    <h5 className="mb-2 text-white">Reach out to our business solution support team for assistance</h5>
                                    <p className="text-custom-200">Are you an existing customer or do you require further assistance with support for <b>additional inquiries</b>?</p>
                                </div>
                                <div className="mt-auto">
                                    <ul className="flex flex-wrap items-center justify-center gap-2">
                                        <li>
                                            <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md bg-custom-800/50 text-custom-300 hover:text-white dark:bg-custom-900/50">
                                                <Facebook className="size-5"></Facebook>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md bg-custom-800/50 text-custom-300 hover:text-white dark:bg-custom-900/50">
                                                <Twitter className="size-5"></Twitter>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md bg-custom-800/50 text-custom-300 hover:text-white dark:bg-custom-900/50">
                                                <Mail className="size-5"></Mail>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md bg-custom-800/50 text-custom-300 hover:text-white dark:bg-custom-900/50">
                                                <Globe className="size-5"></Globe>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md bg-custom-800/50 text-custom-300 hover:text-white dark:bg-custom-900/50">
                                                <Instagram className="size-5"></Instagram>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md bg-custom-800/50 text-custom-300 hover:text-white dark:bg-custom-900/50">
                                                <Youtube className="size-5"></Youtube>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-9">
                            <form action="#!">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="inputFirstName" className="inline-block mb-2 text-base font-medium">First Name</label>
                                        <input type="text" id="inputFirstName" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your First Name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputLastName" className="inline-block mb-2 text-base font-medium">Last Name</label>
                                        <input type="text" id="inputLastName" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your Last Name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmail" className="inline-block mb-2 text-base font-medium">Email</label>
                                        <input type="email" id="inputEmail" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your Email" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputPhone" className="inline-block mb-2 text-base font-medium">Phone</label>
                                        <input type="number" id="inputPhone" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Phone no" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputCompanyName" className="inline-block mb-2 text-base font-medium">Company Name</label>
                                        <input type="text" id="inputCompanyName" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Company name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inputSubject" className="inline-block mb-2 text-base font-medium">Subject</label>
                                        <input type="text" id="inputSubject" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Subject" required />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="inputSubject" className="inline-block mb-2 text-base font-medium">Comments</label>
                                        <textarea name="" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="" rows={5} placeholder="Enter comments"></textarea>
                                    </div>
                                </div>
                                <div className="mt-5 ltr:text-right rtl:text-left">
                                    <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactsForm;