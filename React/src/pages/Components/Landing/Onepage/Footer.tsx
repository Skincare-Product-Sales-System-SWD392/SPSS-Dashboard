import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// Image
import us from "assets/images/flags/us.svg";
import es from "assets/images/flags/es.svg"
import de from "assets/images/flags/de.svg"
import fr from "assets/images/flags/fr.svg"
import jp from "assets/images/flags/jp.svg"
import it from "assets/images/flags/it.svg"
import ru from "assets/images/flags/ru.svg"
import ae from "assets/images/flags/ae.svg"

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="relative pt-20 pb-12 bg-slate-800 dark:bg-zink-700">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="relative z-10 grid grid-cols-12 gap-5 xl:grid-cols-12">
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                            <h5 className="mb-4 font-medium tracking-wider text-slate-50 dark:text-zink-50">Dashboards</h5>
                            <ul className="flex flex-col gap-3 text-15">
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Analytics</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">CRM</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Ecommerce</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Email</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">HR</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Social Media</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                            <h5 className="mb-4 font-medium tracking-wider text-slate-50 dark:text-zink-50">Apps Pages</h5>
                            <ul className="flex flex-col gap-3 text-15">
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Ecommerce Apps</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Invoices</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Email App</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Chat App</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Users Apps</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">HR Management</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Social Media</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-2">
                            <h5 className="mb-4 font-medium tracking-wider text-slate-50 dark:text-zink-50">Resources</h5>
                            <ul className="flex flex-col gap-3 text-15">
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">All Resources</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Blog</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">FAQ's</a>
                                </li>
                                <li>
                                    <a href="#!" className="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Help Center</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-4">
                            <form action="#!" className="relative mb-6">
                                <input type="email" id="subscribeInput" className="py-3 ltr:pr-40 rtl:pl-40 bg-slate-700/60 dark:bg-zink-600/40 form-input text-slate-200 border-slate-700 dark:border-zink-500 focus:outline-none focus:border-custom-500 dark:focus:border-custom-500 placeholder:text-slate-500 dark:placeholder:text-zink-200 backdrop-blur-md" autoComplete="off" placeholder="tailwick@themesdesign.com" required />
                                <button type="submit" className="absolute px-6 py-2 text-base transition-all duration-200 ease-linear border-custom-500 bg-custom-500 ltr:right-1 rtl:left-1 text-custom-50 btn hover:text-custom-50 hover:bg-custom-600 hover:border-custom-600 top-1 bottom-1">Subscribe Now</button>
                            </form>

                            <p className="mb-1 text-slate-500 dark:text-zink-200 text-15">Support Email</p>
                            <h5 className="text-lg !font-normal text-slate-200 dark:text-zink-50">support@themesdesign.com</h5>

                            <p className="mt-6 mb-1 text-slate-500 dark:text-zink-200 text-15">Contact Us</p>
                            <h5 className="text-lg !font-normal text-slate-200 dark:text-zink-50">+(012) 1202 012 4567</h5>
                        </div>
                    </div>

                    <div className="py-5 mt-20 border-y border-slate-700">
                        <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-12">
                            <div className="md:col-span-2">
                                <div className="relative dropdown">
                                    <button type="button" className="inline-flex items-center gap-3 transition-all duration-200 ease-linear dropdown-toggle btn border-slate-700 group/items focus:border-custom-500" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                        <img src={us} alt="" className="object-cover h-5 rounded-full" />
                                        <h6 className="text-base font-medium transition-all duration-200 ease-linear text-slate-300 group-hover/items:text-custom-500">English</h6>
                                    </button>

                                    <div className="absolute z-50 hidden p-3 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[9rem] flex flex-col gap-3 dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                                        <a href="#!" className="flex items-center gap-3 group/items">
                                            <img src={us} alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500">English</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items">
                                            <img src={es} alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500">Spanish</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items">
                                            <img src={de} alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500">German</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items">
                                            <img src={fr} alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500">French</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items">
                                            <img src={jp} alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500">Japanese</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items">
                                            <img src={it} alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500">Italian</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items">
                                            <img src={ru} alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500">Russian</h6>
                                        </a>
                                        <a href="#!" className="flex items-center gap-3 group/items">
                                            <img src={ae} alt="" className="object-cover h-4 rounded-full" />
                                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500">Arabic</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-3 md:col-start-10">
                                <ul className="flex items-center gap-3 md:justify-end">
                                    <li>
                                        <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Facebook className="size-4"></Facebook></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Linkedin className="size-4"></Linkedin></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Instagram className="size-4"></Instagram></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Twitter className="size-4"></Twitter></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Youtube className="size-4"></Youtube></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center text-slate-400 dark:text-zink-200 text-16">
                        <p>
                            {new Date().getFullYear()} © Tailwick. Design & Develop by <a href="#!" className="underline text-slate-300 dark:text-zink-100">Themesdesign</a>
                        </p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;