import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';

// Icons
import { Search, Plus, BadgeCheck, Home, UserRound, CalendarDays, Clapperboard, ShoppingCart, Settings, PlaySquare } from 'lucide-react';

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

import adwords from "assets/images/brand/adwords.png";
import twitter from "assets/images/brand/twitter.png";
import meta from "assets/images/brand/meta.png";
import figma from "assets/images/brand/figma.png";
import { Link } from 'react-router-dom';

const WatchVideo = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Watch Video' pageTitle='Social Media' />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="rounded-full bg-slate-100 dark:bg-zink-600 shrink-0">
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
                                <li className="group grow active">
                                    <Link to="/apps-social-video" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Clapperboard className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Watch Video</span></Link>
                                </li>
                                <li className="group grow">
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
                <div className="xl:col-span-9">
                    <div className="grid items-center grid-cols-1 gap-4 mb-4 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <h6 className="mb-0 text-15">Watch Video</h6>
                        </div>
                        <div className="flex gap-2 xl:col-span-4 xl:col-start-9">
                            <div className="relative grow">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                            <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                <Plus className="inline-block size-4" /> <span className="align-middle">Add Video</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-12">
                        <div className="md:col-span-12 xl:row-span-6 xl:col-span-8">
                            <div className="relative h-full bg-white rounded-md dark:bg-zink-600">
                                <h3 className="absolute inset-0 flex items-center justify-center">Welcome to <span className="text-sky-500">Tailwick</span> 🤩</h3>
                                <iframe name="iframe_a" className="relative w-full h-full rounded-md aspect-video" title="Iframe Example"></iframe>
                            </div>
                        </div>
                        <div className="md:col-span-6 xl:row-span-3 xl:col-span-4">
                            <Link to="//www.youtube.com/embed/qYgogv4R8zg?si=_YxUDmc2fDgHyPae" target="iframe_a" className="block !mb-0 card relative">
                                <div className="card-body">
                                    <div className="absolute flex items-center justify-center size-12 -translate-x-1/2 rounded-full bg-white/70 top-1/2 left-1/2">
                                        <PlaySquare className="text-red-500" />
                                    </div>
                                    <h6 className="mb-3 truncate text-15">Setting Up Tailwind CSS</h6>
                                    <img src="https://i.ytimg.com/vi/qYgogv4R8zg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcI9Cw0yBtGv_ashbS-ogqh1OGpQ" alt="" className="object-cover w-full rounded-md h-44" />
                                </div>
                            </Link>
                        </div>
                        <div className="md:col-span-6 xl:row-span-3 xl:col-span-4">
                            <Link to="//www.youtube.com/embed/waoOK5s9ypc?si=yzK5f339AF_hoXdn" target="iframe_a" className="block !mb-0 card relative">
                                <div className="card-body">
                                    <div className="absolute flex items-center justify-center size-12 -translate-x-1/2 rounded-full bg-white/70 top-1/2 left-1/2">
                                        <PlaySquare className="text-red-500" />
                                    </div>
                                    <h6 className="mb-3 truncate text-15">Upgrading to Tailwind CSS v3.0</h6>
                                    <img src="https://i.ytimg.com/vi/waoOK5s9ypc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkSGeAQ17_LFepTKdEByyVTZkeVw" alt="" className="object-cover w-full rounded-md h-44" />
                                </div>
                            </Link>
                        </div>
                        <div className="md:col-span-6 xl:col-span-4">
                            <Link to="//www.youtube.com/embed/TrftauE2Vyk?si=HRCFmq5956C01yB3" target="iframe_a" className="block !mb-0 card relative">
                                <div className="card-body">
                                    <div className="absolute flex items-center justify-center size-12 -translate-x-1/2 rounded-full bg-white/70 top-1/2 left-1/2">
                                        <PlaySquare className="text-red-500" />
                                    </div>
                                    <h6 className="mb-3 truncate text-15">Composing Utilities with @apply – Tailwind CSS</h6>
                                    <img src="https://i.ytimg.com/vi/TrftauE2Vyk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm6UjEfDC3R5dJik1gEW__HEnaAA" alt="" className="object-cover w-full rounded-md h-44" />
                                </div>
                            </Link>
                        </div>
                        <div className="md:col-span-6 xl:col-span-4">
                            <Link to="//www.youtube.com/embed/_CntOc4hBcg?si=-gNbpwS69E8EmjvI" target="iframe_a" className="block !mb-0 card relative">
                                <div className="card-body">
                                    <div className="absolute flex items-center justify-center size-12 -translate-x-1/2 rounded-full bg-white/70 top-1/2 left-1/2">
                                        <PlaySquare className="text-red-500" />
                                    </div>
                                    <h6 className="mb-3 truncate text-15">Sorting Tailwind CSS Classes Automatically with Prettier</h6>
                                    <img src="https://i.ytimg.com/vi/_CntOc4hBcg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh9x1KP6NaenewDWambvyEqCZ-Wg" alt="" className="object-cover w-full rounded-md h-44" />
                                </div>
                            </Link>
                        </div>
                        <div className="md:col-span-6 xl:col-span-4">
                            <Link to="//www.youtube.com/embed/GEYkwfYytAM?si=UL3B-HARGE7df_G2" target="iframe_a" className="block !mb-0 card relative">
                                <div className="card-body">
                                    <div className="absolute flex items-center justify-center size-12 -translate-x-1/2 rounded-full bg-white/70 top-1/2 left-1/2">
                                        <PlaySquare className="text-red-500" />
                                    </div>
                                    <h6 className="mb-3 truncate text-15">Effortless typography, even in dark mode — Tailwind CSS</h6>
                                    <img src="https://i.ytimg.com/vi/GEYkwfYytAM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQ3H5Fu81Ffh22LmJThZWWDumwkw" alt="" className="object-cover w-full rounded-md h-44" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WatchVideo;
