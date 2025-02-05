import React from "react";
import { ChevronLeft, ChevronRight, MoveLeft,MoveRight } from "lucide-react";

const BasicPagination = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Basic Pagination</h6>

                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

                        <ul className="flex flex-wrap items-center gap-2">
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500 disabled"><ChevronLeft className="size-4 rtl:rotate-180" /></a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500 active">1</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">2</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">3</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">4</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">5</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">6</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500"><ChevronRight className="size-4 rtl:rotate-180" /></a>
                            </li>
                        </ul>

                        <ul className="flex flex-wrap items-center gap-2">
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500"><MoveLeft className="size-4 rtl:rotate-180" /></a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">1</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">2</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500 active">3</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">4</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">5</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500">6</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear rounded text-slate-500 hover:text-custom-500 [&.active]:text-custom-500 [&.active]:hover:text-custom-500 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto dark:text-zink-200 dark:bg-zink-700 dark:hover:text-custom-500 dark:[.active]:hover:text-custom-500"><MoveRight  className="size-4 rtl:rotate-180" /></a>
                            </li>
                        </ul>

                        <ul className="flex flex-wrap items-center gap-2">
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronLeft className="size-4 rtl:rotate-180" /></a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">1</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto active">2</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">3</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">4</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">5</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">6</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronRight className="size-4 rtl:rotate-180" /></a>
                            </li>
                        </ul>

                        <ul className="flex flex-wrap items-center gap-2">
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronLeft className="size-4 rtl:rotate-180" /></a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">1</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto active">2</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">3</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">4</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">5</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">6</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-400/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-400/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronRight className="size-4 rtl:rotate-180" /></a>
                            </li>
                        </ul>

                        <ul className="flex flex-wrap items-center gap-2">
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white h-8 px-3 dark:bg-zink-700 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dar:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronLeft className="size-4 mr-1 rtl:rotate-180" /> Prev</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 dark:bg-zink-700 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">1</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 dark:bg-zink-700 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">2</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 dark:bg-zink-700 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto active">3</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 dark:bg-zink-700 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">4</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 dark:bg-zink-700 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">5</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white size-8 dark:bg-zink-700 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">6</a>
                            </li>
                            <li>
                                <a href="#!" className="inline-flex items-center justify-center bg-white h-8 px-3 dark:bg-zink-700 transition-all duration-150 ease-linear rounded-full text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dar:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">Next <ChevronRight className="size-4 ml-1 rtl:rotate-180" /></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default BasicPagination;