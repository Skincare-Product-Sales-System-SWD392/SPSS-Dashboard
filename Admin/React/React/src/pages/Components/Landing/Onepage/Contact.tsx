import React from "react";
import { ShoppingCart } from "lucide-react";

const Contact = () => {
    return (
        <React.Fragment>
            <section className="relative py-20 bg-custom-600 dark:bg-custom-800" id="contact">
                <div className="absolute rotate-45 border border-dashed size-[500px] border-t-custom-500 border-l-custom-500 border-r-slate-700 border-b-slate-700 -bottom-[250px] rounded-full ltr:right-40 rtl:left-40 z-10 hidden lg:block"></div>
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="grid items-center grid-cols-1 gap-5 lg:grid-cols-12">
                        <div className="lg:col-span-9">
                            <h1 className="mb-4 leading-normal capitalize text-custom-50">Ready to get started with Tailwick</h1>
                            <p className="text-lg text-custom-200">Tell us which describes you, and we'll get in touch with next steps.</p>
                        </div>
                        <div className="ltr:lg:text-right rtl:lg:text-left lg:col-span-3">
                            <button type="button" className="py-2.5 px-6 text-base transition-all duration-200 ease-linear bg-white text-custom-500 btn border-white hover:text-custom-600 hover:bg-white hover:border-white z-10 relative">
                                <ShoppingCart className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1"></ShoppingCart> <span className="align-middle">Purchase Now</span></button>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default Contact;