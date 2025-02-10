import React, { useEffect, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";

// Images
import avatar1 from "assets/images/users/avatar-1.png";
import avatar5 from "assets/images/users/avatar-5.png";

// Icons
import { Inbox, Star, PenSquare, StepForward, AlertOctagon, CircleUser, Trash2, RadioTower, Squirrel, FileText, Tag, CircleDot, RefreshCw, ArchiveRestore, Mail, Clock, Search, MoreHorizontal, ChevronsLeft, Printer, Mic, Image, Send, Plus, StarOff } from 'lucide-react';
import SimpleBar from "simplebar-react";
import { Dropdown } from "Common/Components/Dropdown";

import { createSelector } from "reselect";

// react-redux
import { useSelector, useDispatch } from "react-redux";

import {
    getMail as onGetMail,
    unreadMail as onUnreadMail,
    staredMail as onStaredMail,
    trashMail as onTrashMail,
    deleteMail as onDeleteMail
} from 'slices/thunk';

import { ToastContainer, toast } from 'react-toastify';
import DeleteModal from "Common/DeleteModal";
import Modal from "Common/Components/Modal";

const Mailbox = () => {
    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.Mailbox,
        (state) => ({
            dataList: state.maillist,
            isLoader: state.isLoader
        })
    );

    const { dataList, isLoader } = useSelector(selectDataList);

    useEffect(() => {
        dispatch(onGetMail());
    }, [dispatch]);

    const [data, setData] = useState<any>([]);
    const [activeTabs, setActiveTabs] = useState<any>("all");
    const [displayCategory, setCategory] = useState<string>("all");
    const [displaylabel, setLabel] = useState<string>("all");

    const [show, setShow] = useState<boolean>(false);
    const toggleModal = () => { setShow(!show); };


    useEffect(() => {
        setData(dataList);
    }, [dataList]);

    const filterMails = ({ category, label }: any) => {
        if (displayCategory === "all" && category === "trash") {
            return false;
        }
        return (
            (displayCategory === "all" || displayCategory === category) &&
            (displaylabel === "all" || displaylabel === label)
        );
    };

    const filteredMails = data.filter(({ category, label }: any) => filterMails({ category, label }));


    const toggleTab = (category: any, label: any) => {
        if (activeTabs !== category) {
            setActiveTabs(category);

            if (category === "all") {
                setActiveTabs(label);
            }
        }

        setCategory(category);
        setLabel(label);
    };

    // Stared Mail
    const favouriteBtn = (item: any) => {
        dispatch(onStaredMail(item.id));
    };

    // Refresh Mails

    const [refreshLoader, setRefreshLoader] = useState(false);
    const refreshMails = () => {
        setRefreshLoader(true);
        setTimeout(() => {
            setRefreshLoader(false);
        }, 3000);
    };

    // CheckAll
    const checkedAll = () => {
        const checkboxAll: any = document.getElementById("checkboxAll");
        const element = document.querySelectorAll("tr.relative");

        if (checkboxAll.checked) {
            element.forEach((node: any) => {
                node.classList.add("checked");
                node.firstChild.firstChild.firstChild.checked = true;
            });
        } else {
            element.forEach((node: any) => {
                node.classList.remove("checked");
                node.firstChild.firstChild.firstChild.checked = false;
            });
        }
    };

    // Delete Modal
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    // Delete Email
    const removeEmail = () => {
        const element: any = document.querySelectorAll("tr.relative");
        const checkboxAll: any = document.getElementById("checkboxAll");

        element.forEach((element: any) => {

            if (element.classList.contains('checked')) {
                var forId = element.querySelector('input').value;

                if (displayCategory === "trash") {
                    dispatch(onDeleteMail(forId));
                } else {
                    dispatch(onTrashMail(forId));
                }
            }
            element.classList.remove("checked");
            element.querySelector('input').checked = false;

        });

        setTimeout(() => { toast.clearWaitingQueue(); }, 3000);
        checkboxAll.checked = false;

        setDeleteModal(false);
    };

    // Mark all as Read
    const readAll = (ele: any) => {

        if (ele === "unread") {
            document.querySelectorAll("tr.relative:not(.unread)").forEach(function (element: any) {
                const ele = element.querySelector("input").value;
                dispatch(onUnreadMail(ele));
            });

        } else {
            var unreadConversations = document.getElementById("unreadConversations") as HTMLElement;

            if (document.querySelectorAll("tr.relative.unread").length === 0) {
                unreadConversations.classList.remove("hidden");
                setTimeout(function () { unreadConversations.classList.add("hidden"); }, 1000);
            }

            document.querySelectorAll("tr.relative.unread").forEach(function (element: any) {
                const ele = element.querySelector("input").value;
                dispatch(onUnreadMail(ele));
            });
        }

        const element: any = document.querySelectorAll("tr.relative");
        const checkboxAll: any = document.getElementById("checkboxAll");
        element.forEach((element: any) => {
            element.classList.remove("checked");
            element.querySelector('input').checked = false;
        });
        checkboxAll.checked = false;

    };

    // All Delete

    const onAllDeleteClick = (ele: any) => {

        const checkboxAll: any = document.getElementById("checkboxAll");
        const element = document.querySelectorAll("tr.relative");
        const unmarkConversations = document.getElementById("unmarkConversations") as HTMLElement;
        const unfoundConversations = document.getElementById("unfoundConversations") as HTMLElement;

        if (ele) {
            if (document.querySelectorAll("tr.relative.checked").length === 0) {
                unmarkConversations.classList.remove("hidden");
                setTimeout(function () { unmarkConversations.classList.add("hidden"); }, 1000);
            }
            element.forEach((element: any) => {
                if (element.classList.contains('checked')) {
                    setDeleteModal(true);
                }
            });
        } else {
            if (element.length) {
                checkboxAll.checked = true;
                element.forEach((node: any) => {
                    node.firstChild.firstChild.firstChild.checked = true;
                    node.classList.add("checked");
                });
                setDeleteModal(true);
            } else {
                unfoundConversations.classList.remove("hidden");
                setTimeout(function () { unfoundConversations.classList.add("hidden"); }, 1000);
            }
        }
    };

    // Open Mail
    const openMail = () => {
        const emailOverview = document.getElementById("emailOverview") as HTMLElement;
        const emailList = document.getElementById("emailList") as HTMLElement;

        if (emailOverview.classList.contains("hidden")) {
            emailOverview.classList.remove("hidden");
            emailList.classList.add("hidden");
        } else {
            emailOverview.classList.add("hidden");
            emailList.classList.remove("hidden");
        }

    };

    return (
        <React.Fragment>
            <BreadCrumb title='Mailbox' pageTitle='Apps' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={removeEmail} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="grid grid-cols-12 xl:flex-row gap-x-5">
                <div className="col-span-12 lg:col-span-3 2xl:col-span-2 shrink-0 card">
                    <div className="card-body">
                        <button type="button" data-modal-target="addEmailModal" className="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20" onClick={toggleModal}><Plus className="inline-block size-4 mr-1" /> <span className="align-middle">Compose Email</span></button>
                        <ul className="mt-4">
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "all" && "active"}`} onClick={() => toggleTab("all", "all")}><Inbox className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Inbox</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "starred" && "active"}`} onClick={() => toggleTab("starred", "all")}><Star className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Starred</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "draft" && "active"}`} onClick={() => toggleTab("draft", "all")}><PenSquare className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Draft</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "important" && "active"}`} onClick={() => toggleTab("important", "all")}><StepForward className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Important</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "spam" && "active"}`} onClick={() => toggleTab("spam", "all")}><AlertOctagon className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Spam</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "contacts" && "active"}`} onClick={() => toggleTab("contacts", "all")}><CircleUser className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Contacts</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "trash" && "active"}`} onClick={() => toggleTab("trash", "all")}><Trash2 className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Trash</span></Link>
                            </li>
                            <li className="py-3">
                                <p className="text-sm uppercase">Category</p>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "social" && "active"}`} onClick={() => toggleTab("social", "all")}><RadioTower className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Social</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "updates" && "active"}`} onClick={() => toggleTab("updates", "all")}><Squirrel className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Updates</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "forums" && "active"}`} onClick={() => toggleTab("forums", "all")}><FileText className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Forums</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "promotions" && "active"}`} onClick={() => toggleTab("promotions", "all")}><Tag className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Promotions</span></Link>
                            </li>
                            <li className="py-3">
                                <p className="text-sm uppercase">Label</p>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "support" && "active"}`} onClick={() => toggleTab("all", "support")}><CircleDot className="inline-block size-4 text-red-500 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Support</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "freelance" && "active"}`} onClick={() => toggleTab("all", "freelance")}><CircleDot className="inline-block size-4 text-purple-500 align-middle rtl:ml-2 ltr:mr-2" /> <span className="align-middle">Freelance</span></Link>
                            </li>
                            <li>
                                <Link to="#!" className={`transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 ${activeTabs === "personal" && "active"}`} onClick={() => toggleTab("all", "personal")}><CircleDot className="inline-block size-4 align-middle rtl:ml-2 ltr:mr-2 text-sky-500" /> <span className="align-middle">Personal</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-9 2xl:col-span-10 grow card">
                    <div id="emailList" className="block">
                        <div className="card-body">
                            <div className="grid items-center grid-cols-1 gap-4 2xl:grid-cols-12">
                                <div className="2xl:col-span-5">
                                    <div className="flex flex-wrap items-center gap-3 divide-x rtl:divide-x-reverse divide-slate-200 dark:divide-zink-500">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-2" id="email-topbar-actions">
                                                <input id="checkboxAll" className="form-check-input size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" onChange={() => checkedAll()} />
                                            </div>
                                            <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-slate-600 dark:hover:text-zink-50" onClick={() => refreshMails()}><RefreshCw className="size-4" /></Link>
                                        </div>
                                        <div className="flex items-center gap-3 ltr:pl-2 rtl:pr-2">
                                            <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"><ArchiveRestore className="size-4" /></Link>
                                            <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-orange-500 dark:hover:text-orange-500"><AlertOctagon className="size-4" /></Link>
                                            <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500" onClick={() => onAllDeleteClick(true)}><Trash2 className="size-4" /></Link>
                                        </div>
                                        <div className="flex items-center gap-3 ltr:pl-2 rtl:pr-2">
                                            <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500" id="mark-all-read" onClick={() => readAll("read")}><Mail className="size-4" /></Link>
                                            <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-green-500 dark:hover:text-green-500"><Tag className="size-4" /></Link>
                                            <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-sky-500 dark:hover:text-sky-500"><Clock className="size-4" /></Link>
                                        </div>
                                        <div className="hidden px-4 py-3 text-sm text-yellow-500 border border-transparent rounded-md unreadConversations-alert bg-yellow-50 dark:bg-yellow-400/20" id="unreadConversations">
                                            <span className="font-bold">No Unread Conversations</span>
                                        </div>
                                        <div className="hidden px-4 py-3 text-sm text-yellow-500 border border-transparent rounded-md unreadConversations-alert bg-yellow-50 dark:bg-yellow-400/20" id="unmarkConversations">
                                            <span className="font-bold">No Mark Conversations</span>
                                        </div>
                                        <div className="hidden px-4 py-3 text-sm text-yellow-500 border border-transparent rounded-md unreadConversations-alert bg-yellow-50 dark:bg-yellow-400/20" id="unfoundConversations">
                                            <span className="font-bold">Not Found Any Conversations</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 2xl:col-span-4 2xl:col-start-9" >
                                    <div className="relative grow">
                                        <input type="text" id="searchResultList" defaultValue="" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" />
                                        <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                                    </div>
                                    <Dropdown className="relative dropdown shrink-0">
                                        <Dropdown.Trigger id="emailMainAction" className="flex items-center justify-center w-[39px] h-[39px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                                            <MoreHorizontal className="size-5" />
                                        </Dropdown.Trigger>
                                        <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="emailMainAction">
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={refreshMails} >Show more message</Link>
                                            </li>
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => readAll("unread")}>Important & Unread</Link>
                                            </li>
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Hide section when empty</Link>
                                            </li>
                                            <li>
                                                <Link data-modal-target="deleteModal" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => onAllDeleteClick(false)}>All Delete</Link>
                                            </li>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="xl:max-h-[calc(100vh_-_300px)]">
                            <div className="!pt-0 card-body">
                                <div className="overflow-x-auto">
                                    {isLoader || refreshLoader ? <h1>Loading....</h1> : (<table className="w-full whitespace-nowrap">
                                        <tbody className="elmLoader" id="mail-list">
                                            {/* <tr>
                                                <td colSpan={3}>
                                                    <p className="mb-2 text-slate-500 dark:text-zink-200">Today</p>
                                                </td>
                                            </tr> */}
                                            {filteredMails.length === 0 ? (
                                                <tr><td><span>No Messages Available.</span></td></tr>
                                            ) : ((filteredMails || []).map((item: any, key: number) => (
                                                <tr className={`relative before:absolute ltr:before:left-0 rtl:before:right-0 before:border [&.checked]:before:border-custom-500 before:inset-y-0 before:border-transparent group/mail ${item.unread ? "unread" : ""}`} key={key}>
                                                    <td className="px-3.5 py-2.5 border-y border-transparent first:pl-0 last:pr-0 w-20">
                                                        <div className="flex items-center gap-3 ltr:pl-2 rtl:pr-2 checkbox-wrapper-mail">
                                                            <input id="checkbox" className="itemCheckbox size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value={item.id} />
                                                            <Link to="#!" className="transition-all duration-200 ease-linear text-slate-500 hover:text-yellow-500 dark:text-zink-200 dark:hover:text-yellow-500" onClick={() => favouriteBtn(item)}>{item.category === "starred" ? <Star className="size-4" /> : <StarOff className="size-4" />}</Link>
                                                            <Link to="#!" className="transition-all duration-200 ease-linear text-slate-500 hover:text-yellow-500 dark:text-zink-200 dark:hover:text-yellow-500"><StepForward className="size-4" /></Link>
                                                        </div>
                                                    </td>
                                                    <td className="px-3.5 py-2.5 border-y border-transparent  mailBox first:pl-0 last:pr-0 text-slate-500 group-[.unread]/mail:text-slate-800 dark:text-zink-200 dark:group-[.unread]/mail:text-zink-50" onClick={openMail}>
                                                        <div className="grid items-center grid-cols-12 gap-3 ">
                                                            <div className="col-span-4 lg:col-span-2">
                                                                <Link to="#!" className="block truncate before:inset-0 before:absolute">{item.name}</Link>
                                                            </div>
                                                            <div className="col-span-8 lg:col-span-10">
                                                                <p className="truncate">{item.subject}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-3.5 py-2.5 border-y border-transparent first:pl-0 last:pr-0 text-end w-20 text-slate-500 group-[.unread]/mail:text-slate-800 dark:text-zink-200 dark:group-[.unread]/mail:text-zink-50">{item.time}</td>
                                                </tr>)))}
                                        </tbody>
                                    </table>)}
                                </div>
                            </div>
                        </SimpleBar>
                    </div>
                    <div id="emailOverview" className="hidden">
                        <div className="card-body">
                            <div className="flex gap-2">
                                <div className="grow">
                                    <button id="closeChatRightSidebar" className="inline-flex items-center justify-center h-8 transition-all duration-200 ease-linear rounded-md shrink-0 text-slate-500 hover:text-custom-500" onClick={openMail}><ChevronsLeft className="size-4 mx-auto" /></button>
                                    <h6 className="mb-1 text-16">How Custom Software Can Solve Your Business Challenges</h6>
                                    <p className="text-slate-500 dark:text-zink-200"><Link to="#!">infrateach@tailwick.com</Link> (Aug 6, 2023, 9:04 PM)</p>
                                </div>
                                <div className="flex gap-3 shrink-0">
                                    <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"><ArchiveRestore className="size-4" /></Link>
                                    <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-sky-500 dark:hover:text-sky-500"><Printer className="size-4" /></Link>
                                    <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-yellow-500 dark:hover:text-yellow-500"><Star className="size-4" /></Link>
                                    <Link to="#!" className="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500"><Trash2 className="size-4" /></Link>
                                </div>
                            </div>

                        </div>
                        <SimpleBar className="xl:max-h-[calc(100vh_-_385px)]">
                            <div className="card-body !pt-0">
                                <div className="flex gap-3 mt-3 first:mt-0">
                                    <div className="relative flex items-center justify-center font-semibold rounded-full text-slate-500 size-9 bg-slate-100 shrink-0 dark:text-zink-200 dark:bg-zink-600">
                                        <img src={avatar5} alt="" className="rounded-full h-9" />
                                    </div>
                                    <div className="grow">
                                        <div className="flex items-center">
                                            <div className="grow">
                                                <h6>Infra Teach</h6>
                                                <p className="text-slate-500 dark:text-zink-200"><Link to="#!">infrateach@tailwick.com</Link> </p>
                                            </div>
                                            <div className="shrink-0">
                                                Aug 6, 2023, 9:04 PM
                                            </div>
                                        </div>
                                        <div className="p-4 mt-3 rounded-md bg-slate-100 dark:bg-zink-600">
                                            <p className="mb-2 last:mb-0">Hi,</p>
                                            <p className="mb-2 last:mb-0">Custom software solutions are tailor-made software applications designed to meet the unique needs of a specific business or organization. Unlike off-the-shelf software, which offers a standardized solution for a broad range of users, custom software is precisely crafted to align with the workflows, processes, and objectives of a particular business.</p>
                                            <p className="mb-2 last:mb-0">The key advantage of custom software lies in its ability to be scalable and flexible. It can evolve alongside the business, accommodating changing requirements and supporting expansion. By adapting to the specific needs of the organization, custom software empowers businesses to gain a competitive edge, differentiate themselves in the market, and deliver enhanced experiences to their customers.</p>
                                            <p className="mb-2 last:mb-0">Thank You</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-3 first:mt-0">
                                    <div className="relative flex items-center justify-center font-semibold bg-pink-100 rounded-full text-slate-500 size-9 shrink-0 dark:bg-pink-500/20 dark:text-zink-200">
                                        <img src={avatar1} alt="" className="rounded-full h-9" />
                                    </div>
                                    <div className="grow">
                                        <div className="flex items-center">
                                            <div className="grow">
                                                <h6>Me</h6>
                                                <p className="text-slate-500 dark:text-zink-200"><Link to="#!">paulakeenan@tailwick.com</Link></p>
                                            </div>
                                            <div className="shrink-0">
                                                07 Nov, 2023, 10:14 PM
                                            </div>
                                        </div>
                                        <div className="p-4 mt-3 rounded-md bg-slate-100 dark:bg-zink-600">
                                            <p className="mb-2 last:mb-0">Hi,</p>
                                            <p className="mb-2 last:mb-0">I hope this email finds you well. Let me start by saying that I am a big fan of your work and it has inspired me to push myself beyond what I thought were my limits!</p>
                                            <p className="mb-2 last:mb-0">After taking a good look at [target company] I realize that you could improve in [improvement area]. I have helped many others improve in the same area and I‘d be more than happy to talk with you about it!</p>
                                            <p className="mb-2 last:mb-0">Would you be available for a quick call to discuss how our [product/service] could help you?</p>
                                            <p className="mb-2 last:mb-0">Regards,</p>
                                            <p className="mb-2 last:mb-0">Themesdesign</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-3 first:mt-0">
                                    <div className="relative flex items-center justify-center font-semibold rounded-full text-slate-500 size-9 bg-slate-100 shrink-0 dark:text-zink-200 dark:bg-zink-600">
                                        <img src={avatar5} alt="" className="rounded-full h-9" />
                                    </div>
                                    <div className="grow">
                                        <div className="flex items-center">
                                            <div className="grow">
                                                <h6>Infra Teach</h6>
                                                <p className="text-slate-500 dark:text-zink-200"><Link to="#!">infrateach@tailwick.com</Link></p>
                                            </div>
                                            <div className="shrink-0">
                                                07 Nov, 2023, 10:42 PM
                                            </div>
                                        </div>
                                        <div className="p-4 mt-3 rounded-md bg-slate-100 dark:bg-zink-600">
                                            <p className="mb-2 last:mb-0">Hello, Themesdesign</p>
                                            <p className="mb-2 last:mb-0">You are probably very busy, I totally understand that!</p>
                                            <p className="mb-2 last:mb-0">It would be great to hear back from you. So, please let me know when you find some time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                        <div className="card-body">
                            <div className="flex items-center gap-2">
                                <div className="grow">
                                    <input type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter Message" required autoComplete="off" />
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-slate-500 btn bg-transparent border-transparent hover:text-slate-700 focus:text-slate-700 active:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50 dark:focus:text-zink-50 dark:active:text-zink-50"><Mic className="size-4" /></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-slate-500 btn bg-transparent border-transparent hover:text-slate-700 focus:text-slate-700 active:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50 dark:focus:text-zink-50 dark:active:text-zink-50"><Image className="size-4" /></button>
                                    <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Send className="inline-block size-4 mr-1 align-middle" /> <span className="align-middle">Send</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Holiday Modal */}

            <Modal show={show} onHide={toggleModal} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen lg:w-[55rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-5 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500">
                    <Modal.Title className="text-16">New Message</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-5 overflow-y-auto">
                    <form action="#!">
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <div className="flex items-center gap-3 mb-2">
                                    <label htmlFor="emailTo" className="inline-block text-base font-medium grow">To</label>
                                    <div>
                                        <Link to="#!" className="mr-1 inlin-block">Cc</Link>
                                        <Link to="#!">Bcc</Link>
                                    </div>
                                </div>
                                <input className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="emailTo" data-choices data-choices-limit="3" data-choices-removeitem type="text" defaultValue="tailwick@themesdesign.com" />
                            </div>
                            <div className="xl:col-span-12">
                                <div>
                                    <label htmlFor="subjectInput" className="inline-block mb-2 text-base font-medium">Subject</label>
                                    <input className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="subjectInput" defaultValue="Subject" />
                                </div>
                            </div>
                            <div className="xl:col-span-12">
                                <div>
                                    <label htmlFor="textArea" className="inline-block mb-2 text-base font-medium">Example Textarea</label>
                                    <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="textArea" rows={3}></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-4">
                            <button type="reset" data-modal-close="addEmailModal" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggleModal}>Cancel</button>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={toggleModal}>Send</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </React.Fragment>

    );
};

export default Mailbox;