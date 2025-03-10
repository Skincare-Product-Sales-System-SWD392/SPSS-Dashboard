import React from "react";
import { CheckCheck, Crown, Goal, GraduationCap, Luggage, X } from "lucide-react";

const Pricing = () => {
    return (
        <React.Fragment>
            <section className="relative pb-32" id="pricing">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="mx-auto text-center xl:max-w-3xl">
                        <h1 className="mb-4 leading-normal capitalize">Tailored Website Design Package</h1>
                        <p className="text-lg text-slate-500 dark:text-zink-200">A good web design package will include designing a logo, ingratiation with local SEO, linking a site to a social media presence, and more.</p>
                    </div>

                    <div className="grid grid-cols-1 mt-16 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
                        <div className="!shadow-lg text-15 card">
                            <div className="card-body">
                                <h5 className="mb-2"><Goal className="inline-block size-5 text-green-500 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Lite</span></h5>
                                <p className="mb-4 text-slate-500 dark:text-zink-200">Perfect plan for Lite</p>

                                <h1 className="mb-4 font-normal"><span className="text-slate-400 dark:text-zink-200">$</span>9.99<small className="text-15 text-slate-500 dark:text-zink-200">/Monthly</small></h1>
                                <button type="button" className="w-full bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">Purchase Now</button>
                                <ul className="flex flex-col gap-3 mt-5">
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>3</b> Projects</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>299</b> Customers</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>Scalable Bandwidth</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>0</b> No Team Account</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>In app messaging</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span><b>5</b> FTP Login</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>Detailed Analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>Custom Domain</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>Smart Workflow</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>IQ test</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="!shadow-lg text-15 card">
                            <div className="card-body">
                                <h5 className="mb-2"><GraduationCap className="inline-block size-5 text-purple-500 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Professional</span></h5>
                                <p className="mb-4 text-slate-500 dark:text-zink-200">For users who want to do more.</p>

                                <h1 className="mb-4 font-normal"><span className="text-slate-400 dark:text-zink-200">$</span>29.99<small className="text-15 text-slate-500 dark:text-zink-200">/Monthly</small></h1>
                                <button type="button" className="w-full bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">Purchase Now</button>
                                <ul className="flex flex-col gap-3 mt-5">
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>3</b> Projects</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>299</b> Customers</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>Scalable Bandwidth</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>3</b> No Team Account</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>In app messaging</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span><b>5</b> FTP Login</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>Detailed Analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>Custom Domain</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>Smart Workflow</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>IQ test</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative overflow-hidden card !shadow-lg text-15">
                            <div className="card-body">
                                <div className="absolute top-0 size-16 ltr:right-0 rtl:left-0">
                                    <div className="absolute transform ltr:rotate-45 rtl:-rotate-45 bg-sky-500 text-center text-white font-medium py-1 ltr:-right-12 rtl:-left-12 top-6 w-[170px]">
                                        25% Sale
                                    </div>
                                </div>
                                <h5 className="mb-2"><Crown className="inline-block size-5 ltr:mr-1 rtl:ml-1 text-sky-500" /> <span className="align-middle">Enterprise</span></h5>
                                <p className="mb-4 text-slate-500 dark:text-zink-200">Run your company on your teams</p>

                                <h1 className="mb-4 font-normal"><span className="text-slate-400 dark:text-zink-200">$</span>39.99<small className="text-15 text-slate-500 dark:text-zink-200">/Monthly</small></h1>
                                <button type="button" className="w-full bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">Purchase Now</button>
                                <ul className="flex flex-col gap-3 mt-5">
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>3</b> Projects</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>299</b> Customers</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>Scalable Bandwidth</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>3</b> No Team Account</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>In app messaging</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>5</b> FTP Login</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>Detailed Analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>Custom Domain</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>Smart Workflow</span>
                                    </li>
                                    <li className="flex items-center gap-2 line-through text-slate-500 dark:text-zink-200">
                                        <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                        <span>IQ test</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="!shadow-lg text-15 card">
                            <div className="card-body">
                                <h5 className="mb-2"><Luggage className="inline-block size-5 text-orange-500 ltr:mr-1 rtl:ml-1" />
                                    <span className="align-middle">Unlimited</span></h5>
                                <p className="mb-4 text-slate-500 dark:text-zink-200">Your entire team in one place</p>

                                <h1 className="mb-4 font-normal"><span className="text-slate-400 dark:text-zink-200">$</span>49.99<small className="text-15 text-slate-500 dark:text-zink-200">/Monthly</small></h1>
                                <button type="button" className="w-full bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">Purchase Now</button>
                                <ul className="flex flex-col gap-3 mt-5">
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>3</b> Projects</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>299</b> Customers</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>Scalable Bandwidth</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>3</b> No Team Account</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>In app messaging</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span><b>5</b> FTP Login</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>Detailed Analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>Custom Domain</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>Smart Workflow</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                        <span>IQ test</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Pricing;