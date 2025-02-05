import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';

// Icons
import { Search, Plus, BadgeCheck, Home, UserRound, CalendarDays, Clapperboard, ShoppingCart, Settings, Bookmark } from 'lucide-react';

// Images
import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";
import avatar4 from "assets/images/users/avatar-4.png";
import avatar5 from "assets/images/users/avatar-5.png";
import avatar6 from "assets/images/users/avatar-6.png";
import avatar7 from "assets/images/users/avatar-7.png";
import avatar8 from "assets/images/users/avatar-8.png";
import avatar9 from "assets/images/users/avatar-9.png";
import avatar10 from "assets/images/users/avatar-10.png";

import productImg01 from "assets/images/product/img-01.png";
import productImg02 from "assets/images/product/img-02.png";
import productImg03 from "assets/images/product/img-03.png";
import productImg04 from "assets/images/product/img-04.png";
import productImg05 from "assets/images/product/img-05.png";
import productImg06 from "assets/images/product/img-06.png";
import productImg07 from "assets/images/product/img-07.png";
import productImg08 from "assets/images/product/img-08.png";

import adwords from "assets/images/brand/adwords.png";
import twitter from "assets/images/brand/twitter.png";
import meta from "assets/images/brand/meta.png";
import figma from "assets/images/brand/figma.png";
import { Link } from 'react-router-dom';

const Marketplace = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Marketplace' pageTitle='Social Media' />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="rounded-full bg-slate-100 shrink-0 dark:bg-zink-600">
                                    <img src={avatar1} alt="" className="rounded-full h-14" />
                                </div>
                                <div className="grow">
                                    <h6 className="mb-1 text-15">Paula Keenan <BadgeCheck className="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-sky-500/20" /></h6>
                                    <p className="text-slate-500 dark:text-zink-200">@paulak145</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 text-center divide-y sm:divide-y-0 sm:divide-x sm:grid-cols-3 divide-slate-200 dark:divide-zink-500 divide-dashed rtl:divide-x-reverse">
                                <div className="py-3 sm:py-0 sm:px-3">
                                    <h6>489</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Posts</p>
                                </div>
                                <div className="py-3 sm:py-0 sm:px-3">
                                    <h6>4.6k</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Follower</p>
                                </div>
                                <div className="py-3 sm:py-0 sm:px-3">
                                    <h6>159</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Following</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <ul className="flex flex-col w-full gap-2 mb-4 text-sm font-medium shrink-0 nav-tabs">
                                <li className="group grow">
                                    <Link to="/dashboards-social" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Home className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Feed</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/apps-social-friends" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><UserRound className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Friends</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/apps-social-event" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><CalendarDays className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Event</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/apps-social-video" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Clapperboard className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Watch Video</span></Link>
                                </li>
                                <li className="group grow active">
                                    <Link to="/apps-social-marketplace" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><ShoppingCart className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Marketplace</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/pages-account-settings" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Settings className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Settings</span></Link>
                                </li>
                            </ul>
                            <p className="mb-4 text-slate-500 dark:text-zink-200">Suggestion Pages</p>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={adwords} alt="" className="h-5" />
                                        <h6>Harmonious Team</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={twitter} alt="" className="h-5" />
                                        <h6>Twitter</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={meta} alt="" className="h-5" />
                                        <h6>Design Stack</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={figma} alt="" className="h-5" />
                                        <h6>UI / UX Community</h6>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Active Friends</h6>
                            <div className="flex flex-wrap items-center gap-3">
                                <Link to="#!" className="relative">
                                    <img src={avatar2} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar3} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar4} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar5} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar6} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar7} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar8} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar9} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar10} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative flex items-center justify-center size-10 rounded-full bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                                    5+
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-9" id="eventList">
                    <div className="grid items-center grid-cols-1 gap-4 mb-4 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <h6 className="mb-0 text-15">Marketplace (+115)</h6>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row xl:col-span-4 xl:col-start-9">
                            <div className="relative grow">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                            <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Plus className="inline-block size-4" /> <span className="align-middle">Add Products</span></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                        <div className="mb-0 bg-bottom bg-no-repeat card md:col-span-12 lg:col-span-8 xl:row-span-2 xl:col-span-6 bg-[url('../images/product/bg.png')]">
                            <div className="card-body">
                                <h1 className="mb-3 font-normal xl:w-80">Secure Discounts of up to 50% on any item</h1>
                                <button type="button" className="text-white bg-green-500 border-green-500 btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10">
                                    Shopping Now
                                </button>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden card md:col-span-6 lg:col-span-4 xl:col-span-3 group/item">
                            <div className="!p-10 card-body">
                                <img src={productImg05} alt="" className="h-40 mx-auto" />
                                <div className="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-red-500 btn bg-white border-white shadow-md hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 active:text-white active:bg-red-600 active:border-red-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-red-600"><ShoppingCart className="h-4" /></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-sky-500 btn bg-white border-white shadow-md hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-sky-600"><Bookmark className="h-4" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden card md:col-span-6 lg:col-span-4 xl:col-span-3 group/item">
                            <div className="!p-10 card-body">
                                <img src={productImg02} alt="" className="h-40 mx-auto" />
                                <div className="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-red-500 btn bg-white border-white shadow-md hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 active:text-white active:bg-red-600 active:border-red-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-red-600"><ShoppingCart className="h-4" /></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-sky-500 btn bg-white border-white shadow-md hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600 dark:bg-sky-600 dark:border-zink-500 dark:hover:bg-sky-600"><Bookmark className="h-4" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden card md:col-span-6 lg:col-span-4 xl:col-span-3 group/item">
                            <div className="!p-10 card-body">
                                <img src={productImg03} alt="" className="h-40 mx-auto" />
                                <div className="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-red-500 btn bg-white border-white shadow-md hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 active:text-white active:bg-red-600 active:border-red-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-red-600"><ShoppingCart className="h-4" /></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-sky-500 btn bg-white border-white shadow-md hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600 dark:bg-sky-600 dark:border-zink-500 dark:hover:bg-sky-600"><Bookmark className="h-4" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden card md:col-span-6 lg:col-span-4 xl:col-span-3 group/item">
                            <div className="!p-10 card-body">
                                <img src={productImg04} alt="" className="h-40 mx-auto" />
                                <div className="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-red-500 btn bg-white border-white shadow-md hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 active:text-white active:bg-red-600 active:border-red-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-red-600"><ShoppingCart className="h-4" /></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-sky-500 btn bg-white border-white shadow-md hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600 dark:bg-sky-600 dark:border-zink-500 dark:hover:bg-sky-600"><Bookmark className="h-4" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden card md:col-span-6 lg:col-span-4 xl:col-span-3 group/item">
                            <div className="!p-10 card-body">
                                <img src={productImg01} alt="" className="h-40 mx-auto" />
                                <div className="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-red-500 btn bg-white border-white shadow-md hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 active:text-white active:bg-red-600 active:border-red-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-red-600"><ShoppingCart className="h-4" /></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-sky-500 btn bg-white border-white shadow-md hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600 dark:bg-sky-600 dark:border-zink-500 dark:hover:bg-sky-600"><Bookmark className="h-4" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden card md:col-span-6 lg:col-span-4 xl:col-span-3 group/item">
                            <div className="!p-10 card-body">
                                <img src={productImg06} alt="" className="h-40 mx-auto" />
                                <div className="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-red-500 btn bg-white border-white shadow-md hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 active:text-white active:bg-red-600 active:border-red-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-red-600"><ShoppingCart className="h-4" /></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-sky-500 btn bg-white border-white shadow-md hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600 dark:bg-sky-600 dark:border-zink-500 dark:hover:bg-sky-600"><Bookmark className="h-4" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden card md:col-span-6 lg:col-span-4 xl:col-span-3 group/item">
                            <div className="!p-10 card-body">
                                <img src={productImg07} alt="" className="h-40 mx-auto" />
                                <div className="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-red-500 btn bg-white border-white shadow-md hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 active:text-white active:bg-red-600 active:border-red-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-red-600"><ShoppingCart className="h-4" /></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-sky-500 btn bg-white border-white shadow-md hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600 dark:bg-sky-600 dark:border-zink-500 dark:hover:bg-sky-600"><Bookmark className="h-4" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden card md:col-span-6 lg:col-span-4 xl:col-span-3 group/item">
                            <div className="!p-10 card-body">
                                <img src={productImg08} alt="" className="h-40 mx-auto" />
                                <div className="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-red-500 btn bg-white border-white shadow-md hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 active:text-white active:bg-red-600 active:border-red-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-red-600"><ShoppingCart className="h-4" /></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-sky-500 btn bg-white border-white shadow-md hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600 dark:bg-sky-600 dark:border-zink-500 dark:hover:bg-sky-600"><Bookmark className="h-4" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5 mb-5">
                        <button type="button" className="flex items-center text-white transition-all duration-200 ease-linear disabled btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                            <svg className="size-4 ltr:mr-2 rtl:ml-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Marketplace;
