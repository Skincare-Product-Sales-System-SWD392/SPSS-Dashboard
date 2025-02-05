import React from "react";
import { Search } from "lucide-react";

// Image
import faq from "assets/images/faq.png";

const FaqSearch = () => {
    return (
        <React.Fragment>
            <div className="relative overflow-hidden card">
                <div className="p-8">
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                        <div className="xl:col-span-7">
                            <h4 className="mb-1">Explore support options for our products, fundamental knowledge, and beyond</h4>
                            <p className="mb-5 text-slate-500 dark:text-zink-200">Open the door to a wealth of resources and expert guidance, allowing you to gain a deeper understanding of our products and access a treasure trove of additional knowledge.</p>
                            <div className="relative inline-block w-2/3">
                                <input type="text" className="w-full py-2 pl-4 pr-8 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Ask a question" autoComplete="off" />
                                <Search className="inline-block size-4 absolute right-2.5 top-2.5 text-slate-400 fill-slate-100 dark:text-zink-200 dark:fill-zink-500"></Search>
                            </div>
                            <ul className="flex gap-2 mt-3">
                                <li><a href="#!" className="px-2.5 py-0.5 text-xs font-medium rounded border bg-slate-100 border-slate-100 text-slate-500 dark:bg-zink-600 dark:border-zink-600 dark:text-zink-100">Install Vite</a></li>
                                <li><a href="#!" className="px-2.5 py-0.5 text-xs font-medium rounded border bg-slate-100 border-slate-100 text-slate-500 dark:bg-zink-600 dark:border-zink-600 dark:text-zink-100">React</a></li>
                                <li><a href="#!" className="px-2.5 py-0.5 text-xs font-medium rounded border bg-slate-100 border-slate-100 text-slate-500 dark:bg-zink-600 dark:border-zink-600 dark:text-zink-100">Angular</a></li>
                                <li><a href="#!" className="px-2.5 py-0.5 text-xs font-medium rounded border bg-slate-100 border-slate-100 text-slate-500 dark:bg-zink-600 dark:border-zink-600 dark:text-zink-100">Vue</a></li>
                            </ul>
                        </div>
                        <div className="hidden xl:col-span-3 xl:col-start-10 xl:block">
                            <img src={faq} alt="" className="absolute h-[500px] -rotate-45 -top-28 ltr:right-8 rtl:left-8" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FaqSearch;