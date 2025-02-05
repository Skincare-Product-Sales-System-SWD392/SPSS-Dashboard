import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// Image
import logoLight from "assets/images/logo-light.png";
import logoDark from 'assets/images/logo-dark.png'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="relative pt-20 pb-12 border-t border-slate-200 dark:border-zinc-800">
                <div className="absolute left-0 size-64 bg-purple-500 -top-16 opacity-10 blur-3xl"></div>
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="relative z-10 grid grid-cols-12 gap-5 xl:grid-cols-12">
                        <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4">
                            <div className="mb-5">
                                <a href="#!">
                                    <img src={logoLight} alt="" className="hidden h-7 dark:block" />
                                </a>
                                <a href="#!">
                                    <img src={logoDark} alt="" className="block h-7 dark:hidden" />
                                </a>
                            </div>
                            <p className="mb-5 text-slate-500 dark:text-zinc-400">Premium Multipurpose Admin & Dashboard Template You can build any type of web application like eCommerce, CRM, CMS, Project management apps, Admin Panels, etc using Tailwick.</p>
                            <ul className="flex items-center gap-3">
                                <li>
                                    <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500">
                                        <Facebook className="size-4"></Facebook>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500">
                                        <Linkedin className="size-4"></Linkedin>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500">
                                        <Instagram className="size-4"></Instagram>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500">
                                        <Twitter className="size-4"></Twitter>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500">
                                        <Youtube className="size-4"></Youtube>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3">
                            <h5 className="mb-4 font-medium tracking-wider dark:text-zink-50">Dashboards</h5>
                            <ul className="flex flex-col gap-3 text-15">
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Analytics</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">CRM</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Ecommerce</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Email</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">HR</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Social Media</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3">
                            <h5 className="mb-4 font-medium tracking-wider dark:text-zinc-50">About Us</h5>
                            <ul className="flex flex-col gap-3 text-15">
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">News</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Service</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Our Policy</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Support 24/7</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">FAQ's</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-2">
                            <h5 className="mb-4 font-medium tracking-wider dark:text-zink-50">Get Help</h5>
                            <ul className="flex flex-col gap-3 text-15">
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">About Us</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Payment Policy</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Return Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="pt-10 mt-16 text-center border-t text-slate-500 dark:text-zinc-400 dark:border-zinc-800 text-16">
                    <p>
                        {new Date().getFullYear()} © Tailwick. Design & Develop by <a href="#!" className="underline text-slate-800 dark:text-zinc-100">Themesdesign</a>
                    </p>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;