import React from "react";
import { MoveRight } from "lucide-react";

// Image
import widgets from "assets/images/landing/widgets.jpg";
import widgets2 from "assets/images/landing/widgets-2.jpg";
import widgets4 from "assets/images/landing/widgets-4.jpg";
import widgets5 from "assets/images/landing/widgets-5.jpg";
import widgets6 from "assets/images/landing/widgets-6.jpg";
import widgets7 from "assets/images/landing/widgets-7.jpg";

const AboutUs = () => {
    return (
        <React.Fragment>
            <section className="relative py-32" id="about">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="mx-auto text-center xl:max-w-3xl">
                        <h1 className="mb-6 leading-normal capitalize">Why Developers Should Embrace <span className="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-sky-50 dark:before:bg-sky-500/20 before:rounded-md before:backdrop-blur-xl"><span className="relative text-sky-500">Tailwick</span></span></h1>
                        <p className="text-lg text-slate-500 dark:text-zink-200">The purpose of developer communities is to provide the resources for developers to learn anything they want to.</p>
                    </div>

                    <div className="grid items-center grid-cols-1 gap-6 mt-20 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <h1 className="mb-3 leading-normal capitalize">Craft a Complete Website Quickly with the Help of Design Blocks</h1>
                            <p className="mb-6 text-lg text-slate-500 dark:text-zink-200">The block design approach basically breaks the design into small parts. These are built independently and then later combine into a customizable page which makes a website more flexible in terms of layout and content.</p>
                            <button type="button" className="py-2.5 px-6 bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500">
                                <span className="align-middle">Discover Now</span> <MoveRight className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"></MoveRight></button>
                        </div>
                        <div className="text-center lg:col-span-6">
                            <img src={widgets4} alt="" className="shadow-lg ltr:lg:ml-auto rtl:lg:mr-auto rounded-xl" />
                            <img src={widgets5} alt="" className="relative -mt-24 shadow-lg ltr:ml-auto ltr:mr-24 rtl:mr-auto rtl:ml-24 rounded-xl" />
                        </div>
                    </div>

                    <div className="grid items-center grid-cols-1 gap-6 mt-32 lg:grid-cols-12">
                        <div className="text-center lg:col-span-6">
                            <img src={widgets6} alt="" className="shadow-lg ltr:mr-auto rtl:ml-auto rounded-xl" />
                            <img src={widgets7} alt="" className="relative -mt-24 shadow-lg ltr:ml-auto ltr:mr-24 rtl:mr-auto rtl:ml-24 rounded-xl" />
                        </div>
                        <div className="lg:col-span-5">
                            <h1 className="mb-3 leading-normal capitalize">Boost Your Business Using Our Potent Tools</h1>
                            <p className="mb-6 text-lg text-slate-500 dark:text-zink-200">The block design approach basically breaks the design into small parts. These are built independently and then later combine into a customizable page which makes a website more flexible in terms of layout and content.</p>
                            <button type="button" className="py-2.5 px-6 bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500">
                                <span className="align-middle">Discover Now</span> <MoveRight className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"></MoveRight></button>
                        </div>
                    </div>

                    <div className="grid items-center grid-cols-1 gap-5 mt-32 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <h1 className="mb-3 leading-normal capitalize">Building a User-Friendly Website is Effortless</h1>
                            <p className="mb-4 text-lg text-slate-500 dark:text-zink-200">With a user-friendly interface and easy navigation, the user decreases search time and increases satisfaction, fulfilling his needs in a fast and efficient way.</p>
                            <ul className="flex flex-col gap-3 mb-6 text-lg list-disc list-inside">
                                <li>6+ Ready touse Dashboard</li>
                                <li>Light, Dark & RTL Mode Support</li>
                                <li>Multiple Layouts Support</li>
                            </ul>
                            <button type="button" className="py-2.5 px-6 bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500">
                                <span className="align-middle">Discover Now</span> <MoveRight className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"></MoveRight></button>
                        </div>
                        <div className="text-center lg:col-span-6">
                            <img src={widgets2} alt="" className="shadow-lg ltr:ml-auto rtl:mr-auto rounded-xl" />
                            <img src={widgets} alt="" className="relative -mt-24 shadow-lg ltr:ml-auto rtl:mr-auto ltr:mr-24 rtl:ml-24 rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default AboutUs;