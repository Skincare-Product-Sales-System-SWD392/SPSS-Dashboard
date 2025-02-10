import React, { useState } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import Flatpickr from "react-flatpickr";

import { CalendarDays, Plus, Video, Image, AtSign, GitPullRequest, MessagesSquare, HelpCircle, UserRoundX, MoreHorizontal, Heart, Send, Bookmark, CheckCircle, UploadCloud } from 'lucide-react';

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Images
import avatar1 from "assets/images/users/avatar-1.png";
import avatar5 from "assets/images/users/avatar-5.png";
import avatar7 from "assets/images/users/avatar-7.png";
import avatar8 from "assets/images/users/avatar-8.png";

import smallImg3 from "assets/images/small/img-3.jpg";
import smallImg5 from "assets/images/small/img-5.jpg";
import smallImg6 from "assets/images/small/img-6.jpg";

import { storyData } from "Common/data";
import { Dropdown } from "Common/Components/Dropdown";
import Modal from "Common/Components/Modal";
import Dropzone from "react-dropzone";

const CommentFeed = () => {

    const [index, setIndex] = useState<any>(-1);

    const productGallery = [smallImg6, smallImg3, smallImg5];

    const slideGallery = productGallery.map((item: any) => ({ "src": item }));

    // Story LightBox
    const [storyBox, setStoryBox] = useState<boolean>(false);

    // Add/Edit Modal
    const [defaultModal, setDefaultModal] = useState<boolean>(false);
    const defaultToggle = () => setDefaultModal(!defaultModal);

    const [defaultEventModal, setDefaultEventModal] = useState<boolean>(false);
    const defaultEventToggle = () => setDefaultEventModal(!defaultEventModal);

    const btnFollow = (ele: any) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };

    // Dropzone
    const [selectfiles, setSelectfiles] = useState([]);

    const handleAcceptfiles = (files: any) => {
        files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            });
        });
        setSelectfiles(files);
    };

    const formatBytes = (bytes: any, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    return (
        <React.Fragment>
            <div className="col-span-12 lg:col-span-7 xl:col-span-9 2xl:col-span-6">
                <div className="card">
                    <div className="card-body">
                        <SimpleBar className="w-full">
                            <div className="flex gap-4">
                                {(storyData || []).map((item: any, key: number) => (
                                    <Link to="#inline-example" className={`block w-20 px-1 py-2 group highlight-story ${item.isActive && "active"}`} data-glightbox="max-width: 28rem;" key={key} onClick={() => setStoryBox(true)}>

                                        <div className={`size-16 mx-auto rounded-full ${item.bgColor} outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative`}>
                                            <img src={item.image} alt="" className="size-16 rounded-full" />
                                            {key === 0 && <div className="absolute flex items-center justify-center size-5 text-white rounded-full ltr:-right-0.5 rtl:-left-0.5 -bottom-0.5 bg-sky-500">
                                                <Plus className="size-4" />
                                            </div>}
                                        </div>
                                        <h6 className="mt-2 font-normal truncate">{item.username}</h6>
                                    </Link>
                                ))}
                            </div>
                        </SimpleBar>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="flex gap-3">
                            <ul className="flex gap-3 grow">
                                <li>
                                    <Link to="#!"><Video className="inline-block size-4 text-red-500 ltr:mr-1 rtl:ml-1" /> <span className="align-middle text-slate-500 dark:text-zink-200">Live Video</span></Link>
                                </li>
                                <li>
                                    <Link to="#!" onClick={defaultToggle}><Image className="inline-block size-4 ltr:mr-1 text-custom-600 rtl:ml-1" /> <span className="align-middle text-slate-500 dark:text-zink-200">Image/Video</span></Link>
                                </li>
                                <li>
                                    <Link to="#!" onClick={defaultEventToggle}><CalendarDays className="inline-block size-4 text-green-500 ltr:mr-1 rtl:ml-1" /> <span className="align-middle text-slate-500 dark:text-zink-200">Event</span></Link>
                                </li>
                                <li>
                                    <Link to="#!"><AtSign className="inline-block size-4 ltr:mr-1 text-sky-500 rtl:ml-1" /> <span className="align-middle text-slate-500 dark:text-zink-200">Mention</span></Link>
                                </li>
                            </ul>
                            <Dropdown className="relative dropdown shrink-0">
                                <Dropdown.Trigger className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="socialMediaCreate" data-bs-toggle="dropdown"><MoreHorizontal className="size-3" /></Dropdown.Trigger>
                                <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="socialMediaCreate">
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200 text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" to="#!"><GitPullRequest className="inline-block size-3 mr-1" /> <span className="align-middle">Create a poll</span></Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200 text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" to="#!"><MessagesSquare className="inline-block size-3 mr-1" /> <span className="align-middle">Ask a question</span></Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200 text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" to="#!"><HelpCircle className="inline-block size-3 mr-1" /> <span className="align-middle">Help</span></Link>
                                    </li>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                        <form action="#!">
                            <div className="flex gap-3 mt-4">
                                <div className="bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20">
                                    <img src={avatar1} alt="" className="rounded-full size-9" />
                                </div>
                                <div className="grow">
                                    <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="textArea" placeholder="Share your thoughts ..." rows={3}></textarea>
                                </div>
                            </div>
                            <div className="mt-4 text-right">
                                <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Share Post</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <div className="size-12 bg-green-100 rounded-full outline-1 outline outline-transparent outline-offset-[3px] [&.active]:outline-custom-500 shrink-0 dark:bg-green-500/20">
                                <img src={avatar8} alt="" className="size-12 rounded-full" />
                            </div>
                            <div className="grow">
                                <h6 className="mb-1 text-15"><Link to="#!" className="transition-all duration-200 ease-linear hover:text-custom-500 dark:hover:text-custom-500">Frances Zboncak</Link> -<small className="ml-1 font-normal text-slate-500 dark:text-zink-200">25 min</small></h6>
                                <p className="text-slate-500 dark:text-zink-200">Web Developer at <Link to="#!" className="underline">Themesdesign</Link></p>
                            </div>
                            <div className="flex items-center gap-2 mt-4 shrink-0 md:mt-4">
                                <button type="button" className="group/item toggle-button active px-2 py-1.5 text-xs bg-white border-dashed text-sky-500 btn border-sky-500 hover:text-sky-500 hover:bg-sky-50 hover:border-sky-600 focus:text-sky-600 focus:bg-sky-50 focus:border-sky-600 active:text-sky-600 active:bg-sky-50 active:border-sky-600 dark:bg-zink-700 dark:ring-sky-400/20 dark:hover:bg-sky-800/20 dark:focus:bg-sky-800/20 dark:active:bg-sky-800/20" onClick={(e) => btnFollow(e.target)}>
                                    <span className="group-[.active]/item:hidden block"><Plus className="inline-block size-3 mr-1" /> Follow</span>
                                    <span className="group-[.active]/item:block hidden"><UserRoundX className="inline-block size-3 mr-1" /> Unfollow</span>
                                </button>
                                <Dropdown className="relative dropdown">
                                    <Dropdown.Trigger className="dropdown-toggle flex items-center justify-center size-[30px] p-0 bg-white text-sky-500 btn hover:text-sky-500 hover:bg-sky-100 focus:text-sky-500 focus:bg-sky-100 active:text-sky-500 active:bg-sky-100 dark:bg-zink-700 dark:hover:bg-sky-500/10 dark:focus:bg-sky-500/10 dark:active:bg-sky-500/10" id="socialPost1" data-bs-toggle="dropdown"><MoreHorizontal className="size-4" /></Dropdown.Trigger>
                                    <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="socialPost1">
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200 text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" to="#!"><GitPullRequest className="inline-block size-3 mr-1" /> <span className="align-middle">Create a poll</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200 text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" to="#!"><MessagesSquare className="inline-block size-3 mr-1" /> <span className="align-middle">Ask a question</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200 text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" to="#!"><HelpCircle className="inline-block size-3 mr-1" /> <span className="align-middle">Help</span></Link>
                                        </li>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                        <p>Our newly established office serves as a clear representation of our unwavering commitment to nurturing a vibrant and dynamic work atmosphere, where innovation thrives and creativity knows no bounds.</p>
                    </div>
                    <div className="border-y border-slate-200 card-body dark:border-zink-500">
                        <ul className="flex items-center gap-4 mb-0">
                            <li>
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><MessagesSquare className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">48 Comments</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><Heart className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">257 Likes</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><Send className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">13 Share</span></Link>
                            </li>
                            <li className="ltr:ml-auto rtl:mr-auto">
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><Bookmark className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">7</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <form action="#!">
                            <div className="flex gap-3">
                                <div className="bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20">
                                    <img src={avatar1} alt="" className="rounded-full size-9" />
                                </div>
                                <div className="grow">
                                    <input type="text" id="commentInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Write your comment ..." />
                                </div>
                                <div className="shrink-0">
                                    <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Send</button>
                                </div>
                            </div>
                        </form>

                        <div className="mt-5">
                            <div className="flex gap-3">
                                <div className="bg-yellow-100 rounded-full size-9 shrink-0 dark:bg-yellow-500/20">
                                    <img src={avatar5} alt="" className="rounded-full size-9" />
                                </div>
                                <div className="grow">
                                    <div className="p-3 rounded-md bg-slate-100 dark:bg-zink-600">
                                        <h6 className="mb-3 text-15"><Link to="#!">@bertha34</Link> - <span className="text-sm font-normal text-slate-500 dark:text-zink-200">14 June, 2023</span></h6>
                                        <p>Do you have a date or timeline when do you release the Laravel + Vite + Jetstream + Pest + Vue (Full Stack) version of this item ?</p>
                                        <div className="flex items-center gap-2 mt-4">
                                            <Link to="#!" className="px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500">Like (3)</Link>
                                            <Link to="#!" className="px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500">Reply</Link>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 mt-4">
                                        <div className="bg-green-100 rounded-full size-9 shrink-0 dark:bg-green-500/20">
                                            <img src={avatar8} alt="" className="rounded-full size-9" />
                                        </div>
                                        <div className="grow">
                                            <div className="p-3 rounded-md bg-slate-100 dark:bg-zink-600">
                                                <h6 className="mb-3 text-15"><Link to="#!">@frances_zboncak</Link> - <span className="text-sm font-normal text-slate-500 dark:text-zink-200">14 June, 2023</span></h6>
                                                <p className="mb-1">Sorry not at the moment. But Laravel + Interia + Vue will be ready next week hopefully. FYI: There will be no backend-related functionality with this template.</p>
                                                <p>Thank you</p>
                                                <div className="flex items-center gap-2 mt-4">
                                                    <Link to="#!" className="px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500">Like (6)</Link>
                                                    <Link to="#!" className="px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500">Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <div className="size-12 bg-green-100 rounded-full outline-1 outline outline-transparent outline-offset-[3px] [&.active]:outline-custom-500 shrink-0 dark:bg-green=500/20">
                                <img src={avatar7} alt="" className="size-12 rounded-full" />
                            </div>
                            <div className="grow">
                                <h6 className="mb-1 text-15"><Link to="#!" className="transition-all duration-200 ease-linear hover:text-custom-500 dark:hover:text-custom-500">Stephen Tillman</Link> -<small className="ml-1 font-normal text-slate-500 dark:text-zink-200">25 min</small></h6>
                                <p className="text-slate-500 dark:text-zink-200">React Developer at <Link to="#!" className="underline">Webfox Info</Link></p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-4 shrink-0 md:mt-4">
                                <button type="button" className="group/item toggle-button active px-2 py-1.5 text-xs bg-white border-dashed text-sky-500 btn border-sky-500 hover:text-sky-500 hover:bg-sky-50 hover:border-sky-600 focus:text-sky-600 focus:bg-sky-50 focus:border-sky-600 active:text-sky-600 active:bg-sky-50 active:border-sky-600 dark:bg-zink-700 dark:ring-sky-400/20 dark:hover:bg-sky-800/20 dark:focus:bg-sky-800/20 dark:active:bg-sky-800/20" onClick={(e) => btnFollow(e.target)}>
                                    <span className="group-[.active]/item:hidden block"><Plus className="inline-block size-3 mr-1" /> Follow</span>
                                    <span className="group-[.active]/item:block hidden"><UserRoundX className="inline-block size-3 mr-1" /> Unfollow</span>
                                </button>
                                <Dropdown className="relative dropdown">
                                    <Dropdown.Trigger className="dropdown-toggle flex items-center justify-center size-[30px] p-0 bg-white text-sky-500 btn hover:text-sky-500 hover:bg-sky-100 focus:text-sky-500 focus:bg-sky-100 active:text-sky-500 active:bg-sky-100 dark:bg-zink-700 dark:hover:bg-sky-500/10 dark:focus:bg-sky-500/10 dark:active:bg-sky-500/10" id="socialPost2" data-bs-toggle="dropdown"><MoreHorizontal className="size-4" /></Dropdown.Trigger>
                                    <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="socialPost2">
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><GitPullRequest className="inline-block size-3 mr-1" /> <span className="align-middle">Create a poll</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><MessagesSquare className="inline-block size-3 mr-1" /> <span className="align-middle">Ask a question</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><HelpCircle className="inline-block size-3 mr-1" /> <span className="align-middle">Help</span></Link>
                                        </li>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                        <p>Product design is the process of developing a usable product that meets customer's needs by defining the users' problems and finding creative solutions for these problems. The term is also used to refer to the result of this process, the design qualities of an existing product.</p>
                        <div className="grid gap-4 mt-4 md:grid-cols-3">
                            {(productGallery || []).map((item: any, key: number) => (<Link to="#" className="highlight-story" onClick={() => setIndex(key)} key={key}>
                                <img src={item} alt="" className="rounded-md" />
                            </Link>))}
                        </div>
                    </div>
                    <div className="border-y border-slate-200 card-body dark:border-zink-500">
                        <ul className="flex items-center gap-4 mb-0">
                            <li>
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><MessagesSquare className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">224 Comments</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><Heart className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">746 Likes</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><Send className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">47 Share</span></Link>
                            </li>
                            <li className="ltr:ml-auto rtl:mr-auto">
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><Bookmark className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">139</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <form action="#!">
                            <div className="flex gap-3">
                                <div className="bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20">
                                    <img src={avatar1} alt="" className="rounded-full size-9" />
                                </div>
                                <div className="grow">
                                    <input type="text" id="commentInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Write your comment ..." />
                                </div>
                                <div className="shrink-0">
                                    <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <div className="size-12 bg-green-100 rounded-full outline-1 outline outline-transparent outline-offset-[3px] [&.active]:outline-custom-500 shrink-0 dark:bg-green-500/20">
                                <img src={avatar7} alt="" className="size-12 rounded-full" />
                            </div>
                            <div className="grow">
                                <h6 className="mb-1 text-15"><Link to="#!" className="transition-all duration-200 ease-linear hover:text-custom-500 dark:hover:text-custom-500">Stephen Tillman</Link> -<small className="ml-1 font-normal text-slate-500 dark:text-zink-200">25 min</small></h6>
                                <p className="text-slate-500 dark:text-zink-200">React Developer at <Link to="#!" className="underline">Webfox Info</Link></p>
                            </div>
                            <div className="flex items-center gap-2 mt-4 shrink-0 md:mt-4">
                                <button type="button" className="group/item toggle-button active px-2 py-1.5 text-xs bg-white border-dashed text-sky-500 btn border-sky-500 hover:text-sky-500 hover:bg-sky-50 hover:border-sky-600 focus:text-sky-600 focus:bg-sky-50 focus:border-sky-600 active:text-sky-600 active:bg-sky-50 active:border-sky-600 dark:bg-zink-700 dark:ring-sky-400/20 dark:hover:bg-sky-800/20 dark:focus:bg-sky-800/20 dark:active:bg-sky-800/20" onClick={(e) => btnFollow(e.target)}>
                                    <span className="group-[.active]/item:hidden block"><Plus className="inline-block size-3 mr-1" /> Follow</span>
                                    <span className="group-[.active]/item:block hidden"><UserRoundX className="inline-block size-3 mr-1" /> Unfollow</span>
                                </button>
                                <Dropdown className="relative dropdown">
                                    <Dropdown.Trigger className="dropdown-toggle flex items-center justify-center size-[30px] p-0 bg-white text-sky-500 btn hover:text-sky-500 hover:bg-sky-100 focus:text-sky-500 focus:bg-sky-100 active:text-sky-500 active:bg-sky-100 dark:bg-zink-700 dark:hover:bg-sky-500/10 dark:focus:bg-sky-500/10 dark:active:bg-sky-500/10" id="socialPost3" data-bs-toggle="dropdown"><MoreHorizontal className="size-4" /></Dropdown.Trigger>
                                    <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="socialPost3">
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><GitPullRequest className="inline-block size-3 mr-1" /> <span className="align-middle">Create a poll</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><MessagesSquare className="inline-block size-3 mr-1" /> <span className="align-middle">Ask a question</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!"><HelpCircle className="inline-block size-3 mr-1" /> <span className="align-middle">Help</span></Link>
                                        </li>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                        <p>Add a 'Different Languages' option to the poll.</p>
                        <ul className="inline-flex flex-col gap-3 p-4 mt-4 rounded-md w-80 bg-slate-100 max-w-7xl dark:bg-zink-600">
                            <li>
                                <Link to="#!" className="relative flex gap-4 group active">
                                    <div className="absolute top-1 ltr:right-1 rtl:left-1">
                                        <CheckCircle className="size-4 text-green-500 fill-green-200 dark:fill-green-500/20 group-[&.active]:block hidden" />
                                    </div>
                                    <h6 className="shrink-0">1.</h6>
                                    <div className="grow">
                                        <h6>React Js</h6>
                                        <div className="w-full h-1.5 rounded-full bg-white dark:bg-zink-700 mt-2">
                                            <div className="h-1.5 rounded-full bg-custom-500" style={{ width: "75%" }}></div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!" className="relative flex gap-3 group">
                                    <div className="absolute top-1 ltr:right-1 rtl:left-1">
                                        <CheckCircle className="size-4 text-green-500 fill-green-200 group-[&.active]:block hidden" />
                                    </div>
                                    <h6 className="shrink-0">2.</h6>
                                    <div className="grow">
                                        <h6>Laravel</h6>
                                        <div className="w-full h-1.5 rounded-full bg-white dark:bg-zink-700 mt-2">
                                            <div className="h-1.5 rounded-full bg-custom-500" style={{ width: "41%" }}></div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!" className="relative flex gap-3 group">
                                    <div className="absolute top-1 ltr:right-1 rtl:left-1">
                                        <CheckCircle className="size-4 text-green-500 fill-green-200 group-[&.active]:block hidden" />
                                    </div>
                                    <h6 className="shrink-0">3.</h6>
                                    <div className="grow">
                                        <h6>ASP.Net / MVC.Net</h6>
                                        <div className="w-full h-1.5 rounded-full bg-white dark:bg-zink-700 mt-2">
                                            <div className="h-1.5 rounded-full bg-custom-500" style={{ width: "63%" }}></div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-y border-slate-200 card-body dark:border-zink-500">
                        <ul className="flex items-center gap-4 mb-0">
                            <li>
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><MessagesSquare className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">495 Comments</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><Heart className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">1.3k Likes</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><Send className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">203 Share</span></Link>
                            </li>
                            <li className="ltr:ml-auto rtl:mr-auto">
                                <Link to="#!" className="text-slate-500 dark:text-zink-200"><Bookmark className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">159</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <form action="#!">
                            <div className="flex gap-3">
                                <div className="bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20">
                                    <img src={avatar1} alt="" className="rounded-full size-9" />
                                </div>
                                <div className="grow">
                                    <input type="text" id="commentInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Write your comment ..." />
                                </div>
                                <div className="shrink-0">
                                    <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center mb-5">
                    <button type="button" className="flex items-center text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                        <svg className="size-4 ltr:mr-2 rtl:ml-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Load More
                    </button>
                </div>
            </div>

            {/* LightBox */}
            <Lightbox
                index={index}
                slides={slideGallery}
                open={index >= 0}
                close={() => setIndex(-1)}
            />

            {/* Story LightBox */}
            <Lightbox
                open={storyBox}
                close={() => setStoryBox(false)}
                slides={[{ src: "https://cdn.dribbble.com/userupload/3012253/file/original-dd6cf163ea8f5617304d9d41f6ff38e7.png?resize=448x506" }]}
            />

            {/* Image/Video Modal */}
            <Modal show={defaultModal} onHide={defaultToggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500">
                    <Modal.Title className="text-16">Add Post Image / Video</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!">
                        <div className="mb-4">
                            <label htmlFor="postTitle" className="inline-block mb-2 text-base font-medium">Post Title</label>
                            <input type="text" id="postTitle" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter title" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="descriptionInput" className="inline-block mb-2 text-base font-medium">Description</label>
                            <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="descriptionInput" rows={3}></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mentionUserSelect" className="inline-block mb-2 text-base font-medium">@Mention</label>
                            <input className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="mentionUserSelect" data-choices data-choices-text-unique-true type="text" defaultValue="@shaylee-pouros" />
                        </div>
                        <div className="mb-4">


                            <label className="inline-block mb-2 text-base font-medium">Images / Video</label>
                            <Dropzone
                                onDrop={(acceptfiles: any) => {
                                    handleAcceptfiles(acceptfiles);
                                }}>
                                {({ getRootProps }: any) => (
                                    <div className="flex items-center justify-center bg-white border border-dashed rounded-md cursor-pointer dropzone border-slate-300 dropzone2 dark:bg-zink-700 dark:border-zink-500">
                                        <div className="w-full py-5 text-lg text-center dz-message needsclick" {...getRootProps()} >
                                            <div className="mb-3">
                                                <UploadCloud className="block size-12 mx-auto text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-600" />
                                            </div>
                                            <h5 className="mb-0 font-normal text-slate-500 dark:text-zink-200 text-15">Drag and drop your images / video or <Link to="#!">browse</Link> your images / video</h5>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>

                            <ul className="flex flex-wrap mb-0 gap-x-5" id="dropzone-preview2">
                                {
                                    (selectfiles || [])?.map((file: any, index: number) => {
                                        return (
                                            <li className="mt-5" id="dropzone-preview-list2">
                                                <div className="border rounded border-slate-200 dark:border-zink-500">
                                                    <div className="p-2 text-center">
                                                        <div>
                                                            <div className="p-2 mx-auto rounded-md size-14 bg-slate-100 dark:bg-zink-500">
                                                                <img className="block w-full h-full rounded-md" src={file.priview} alt={file.name} />
                                                            </div>
                                                        </div>
                                                        <div className="pt-3">
                                                            <h5 className="mb-1 text-15">{file.path}</h5>
                                                            <p className="mb-0 text-slate-500 dark:text-zink-200">{file.formattedSize}</p>
                                                            <strong className="text-red-500 error"></strong>
                                                        </div>
                                                        <div className="mt-2">
                                                            <button className="px-2 py-1.5 text-xs text-white bg-purple-500 border-purple-500 btn hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:text-white focus:bg-purple-600 focus:border-purple-600 focus:ring focus:ring-purple-100 active:text-white active:bg-purple-600 active:border-purple-600 active:ring active:ring-purple-100 dark:ring-purple-400/10" onClick={() => {
                                                                const newImages = [...selectfiles];
                                                                newImages.splice(index, 1);
                                                                setSelectfiles(newImages);
                                                            }}>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Share Post</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* Event Modal */}
            <Modal show={defaultEventModal} onHide={defaultEventToggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500">
                    <Modal.Title className="text-16">Add Post Image / Video</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!">
                        <div className="mb-4">
                            <label htmlFor="eventTitle" className="inline-block mb-2 text-base font-medium">Title</label>
                            <input type="text" id="eventTitle" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Event title" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="eventDateInput" className="inline-block mb-2 text-base font-medium">Event Date</label>
                            <Flatpickr
                                id="eventDateInput"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 flatpickr-input"
                                options={{
                                    dateFormat: "d M, Y"
                                }}
                                placeholder='Select date'
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="eventTimeInput" className="inline-block mb-2 text-base font-medium">Event Time</label>
                            <Flatpickr
                                id="eventTimeInput"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 flatpickr-input"
                                options={{
                                    enableTime: true,
                                    noCalendar: true,
                                    dateFormat: "H:i",
                                }}
                                placeholder='Select Time'
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="descriptionEventInput" className="inline-block mb-2 text-base font-medium">Description</label>
                            <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="descriptionEventInput" rows={2}></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="inline-block mb-2 text-base font-medium">Location</label>
                            <input className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="location" type="text" placeholder="Enter location" />
                        </div>
                        <div className="text-right">
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Create Event</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    );
};

export default CommentFeed;