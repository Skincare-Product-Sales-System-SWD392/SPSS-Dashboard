import React, { useEffect, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";

// Icon
import { Search, ChevronDown, ChevronUp, Star, List, LayoutGrid, X, Heart, ShoppingCart, MoreHorizontal, Eye, FileEdit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

import { Dropdown } from "Common/Components/Dropdown";
import { Link } from "react-router-dom";
import DeleteModal from "Common/DeleteModal";

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import {
    getProductGrid as onGetProductGrid,
    deleteProductGrid as onDeleteProductGrid
} from 'slices/thunk';
import { ToastContainer } from "react-toastify";

const GridView = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.Ecommerce,
        (state) => ({
            dataList: state.productGrid
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();
    const [list, setList] = useState<boolean>(true);

    // Get Data
    useEffect(() => {
        dispatch(onGetProductGrid());
    }, [dispatch]);

    useEffect(() => {
        setData(dataList);
    }, [dataList]);

    // Delete Modal
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    // Delete Data
    const onClickDelete = (cell: any) => {
        setDeleteModal(true);
        if (cell.id) {
            setEventData(cell);
        }
    };

    const handleDelete = () => {
        if (eventData) {
            dispatch(onDeleteProductGrid(eventData.id));
            setDeleteModal(false);
        }
    };

    const btnFav = (ele: any) => {

        if (ele.closest("a").classList.contains("active")) {
            ele.closest("a").classList.remove("active");
        } else {
            ele.closest("a").classList.add("active");
        }
    };
    return (
        <React.Fragment>
            <BreadCrumb title='Grid View' pageTitle='Products' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-x-5 ">
                <div className="hidden 2xl:col-span-3 2xl:block">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center gap-3">
                                <h6 className="text-15 grow">Filter</h6>
                                <div className="shrink-0">
                                    <Link to="#!" className="underline transition-all duration-200 ease-linear hover:text-custom-500">Clear All</Link>
                                </div>
                            </div>

                            <div className="relative mt-4">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>

                            <div className="mt-4 collapsible">
                                <button className="flex items-center w-full text-left collapsible-header group">
                                    <h6 className="underline grow">Color</h6>
                                    <div className="shrink-0 text-slate-500 dark:text-zink-200">
                                        <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                                        <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                                    </div>
                                </button>
                                <div className="mt-4 collapsible-content">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <input id="color1" className="size-5 border rounded-sm appearance-none cursor-pointer border-custom-500 bg-custom-500 checked:bg-custom-500 checked:border-custom-500" type="checkbox" value="" />
                                        <input id="color2" className="size-5 bg-red-300 border border-red-300 rounded-sm appearance-none cursor-pointer checked:bg-red-300 checked:border-red-300" type="checkbox" value="" />
                                        <input id="color3" className="size-5 bg-green-300 border border-green-300 rounded-sm appearance-none cursor-pointer checked:bg-green-300 checked:border-green-300" type="checkbox" value="" />
                                        <input id="color4" className="size-5 border rounded-sm appearance-none cursor-pointer border-slate-500 bg-slate-500 checked:bg-slate-500 checked:border-slate-500" type="checkbox" value="" />
                                        <input id="color5" className="size-5 bg-purple-500 border border-purple-500 rounded-sm appearance-none cursor-pointer checked:bg-purple-500 checked:border-purple-500" type="checkbox" value="" />
                                        <input id="color6" className="size-5 border rounded-sm appearance-none cursor-pointer bg-sky-500 border-sky-500 checked:bg-sky-500 checked:border-sky-500" type="checkbox" value="" />
                                        <input id="color7" className="size-5 bg-yellow-500 border border-yellow-500 rounded-sm appearance-none cursor-pointer checked:bg-yellow-500 checked:border-yellow-500" type="checkbox" value="" />
                                        <input id="color7" className="size-5 bg-green-500 border border-green-500 rounded-sm appearance-none cursor-pointer checked:bg-green-500 checked:border-green-500" type="checkbox" value="" />
                                        <input id="color8" className="size-5 border rounded-sm appearance-none cursor-pointer bg-slate-800 border-slate-800 checked:bg-slate-800 checked:border-slate-800" type="checkbox" value="" />
                                        <input id="color9" className="size-5 border rounded-sm appearance-none cursor-pointer bg-slate-200 border-slate-200 checked:bg-slate-200 checked:border-slate-200" type="checkbox" value="" />
                                        <input id="color10" className="size-5 border rounded-sm appearance-none cursor-pointer bg-emerald-300 border-embg-emerald-300 checked:bg-emerald-300 checked:border-embg-emerald-300" type="checkbox" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 collapsible">
                                <button className="flex items-center w-full text-left collapsible-header group">
                                    <h6 className="underline grow">Price</h6>
                                    <div className="shrink-0 text-slate-500 dark:text-zink-200">
                                        <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                                        <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                                    </div>
                                </button>
                                <div className="mt-4 collapsible-content">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <input id="priceAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="priceAll" className="align-middle cursor-pointer">
                                                All
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="price1" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="price1" className="align-middle cursor-pointer">
                                                $0.00 – $110.00
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="price2" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="price2" className="align-middle cursor-pointer">
                                                $110.00 – $220.00
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="price3" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="price3" className="align-middle cursor-pointer">
                                                $220 - $330
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="price4" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="price4" className="align-middle cursor-pointer">
                                                $330 - $550
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="price5" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="price5" className="align-middle cursor-pointer">
                                                $550+
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="price6" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="price6" className="align-middle cursor-pointer">
                                                Low to High
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="price6" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="price6" className="align-middle cursor-pointer">
                                                High to Low
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 collapsible">
                                <button className="flex items-center w-full text-left collapsible-header group">
                                    <h6 className="underline grow">Product Category</h6>
                                    <div className="shrink-0 text-slate-500 dark:text-zink-200">
                                        <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                                        <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                                    </div>
                                </button>
                                <div className="mt-4 collapsible-content">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <input id="categoryAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="categoryAll" className="align-middle cursor-pointer">
                                                All
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="category1" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="category1" className="align-middle cursor-pointer">
                                                Mobiles, Computers
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="category2" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="category2" className="align-middle cursor-pointer">
                                                TV, Appliances, Electronics
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="category3" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="category3" className="align-middle cursor-pointer">
                                                Men's Fashion
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="category4" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="category4" className="align-middle cursor-pointer">
                                                Women's Fashion
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="category5" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="category5" className="align-middle cursor-pointer">
                                                Home, Kitchen, Pets
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="category6" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="category6" className="align-middle cursor-pointer">
                                                Beauty, Health, Grocery
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="category7" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="category7" className="align-middle cursor-pointer">
                                                Books
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 collapsible">
                                <button className="flex items-center w-full text-left collapsible-header group">
                                    <h6 className="underline grow">Rating</h6>
                                    <div className="shrink-0 text-slate-500 dark:text-zink-200">
                                        <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                                        <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                                    </div>
                                </button>
                                <div className="mt-4 collapsible-content">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <input id="ratingAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="ratingAll" className="align-middle cursor-pointer">
                                                All
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="rating5" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="rating5" className="align-middle cursor-pointer">
                                                <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">5 Rating</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="rating4" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="rating4" className="align-middle cursor-pointer">
                                                <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">4 Rating and Up</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="rating3" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="rating3" className="align-middle cursor-pointer">
                                                <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">3 Rating and Up</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="rating2" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="rating2" className="align-middle cursor-pointer">
                                                <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">2 Rating and Up</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="rating1" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="rating1" className="align-middle cursor-pointer">
                                                <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">1 Rating and Up</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="rating0" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="rating0" className="align-middle cursor-pointer">
                                                <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">0 Rating</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 collapsible">
                                <button className="flex items-center w-full text-left collapsible-header group show">
                                    <h6 className="underline grow">Gender</h6>
                                    <div className="ml-2 shrink-0">
                                        <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                                        <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                                    </div>
                                </button>
                                <div className="hidden mt-4 collapsible-content">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <input id="genderAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="genderAll" className="align-middle cursor-pointer">
                                                All
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="gendermal" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="gendermal" className="align-middle cursor-pointer">
                                                Male
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="genderFemal" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="genderFemal" className="align-middle cursor-pointer">
                                                Female
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input id="genderOthers" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                            <label htmlFor="genderOthers" className="align-middle cursor-pointer">
                                                Others
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:col-span-9">
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="grow">Showing all <b>7,410</b> items results</p>
                        <div className="flex gap-2 shrink-0 items-cente">
                            <Dropdown className="relative dropdown">
                                <Dropdown.Trigger href="#!" className="bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500 dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown">Sort by: <b className="font-medium">Highest Price</b>
                                    <ChevronDown className="inline-block size-4 ltr:ml-1 rtl:mr-1" />
                                </Dropdown.Trigger>

                                <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Lowest Price</Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Highest Price</Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Hight to Low</Link>
                                    </li>
                                    <li className="pt-2 mt-2 border-t dark:border-zink-300/50">
                                        <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Low to High</Link>
                                    </li>
                                </Dropdown.Content>
                            </Dropdown>
                            <button type="button" id="listView" className={`flex items-center justify-center size-[37.5px] p-0 text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 [&.active]:text-white [&.active]:bg-sky-600 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:[&.active]:bg-sky-500 dark:[&.active]:text-white dark:ring-sky-400/20 ${!list && "active"}`} onClick={() => setList(false)}><List className="size-4" /></button>
                            <button type="button" id="gridView" className={`flex items-center justify-center size-[37.5px] p-0 text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 [&.active]:text-white [&.active]:bg-sky-600 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:[&.active]:bg-sky-500 dark:[&.active]:text-white dark:ring-sky-400/20 ${list && "active"}`} onClick={() => setList(true)}><LayoutGrid className="size-4" /></button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                        <span className="px-2.5 py-0.5 text-sm font-medium rounded-full border bg-slate-100 border-slate-300 text-slate-500 inline-flex items-center dark:bg-zink-800 dark:border-zink-500 dark:text-zink-200">High to Low <Link to="#!" className="transition text-slate-500 dark:text-zink-200 hover:text-slate-600 dark:hover:text-zink-100"><X className="size-3 ltr:ml-1 rtl:mr-1" /></Link></span>
                        <span className="px-2.5 py-0.5 text-sm font-medium rounded-full border bg-slate-100 border-slate-300 text-slate-500 inline-flex items-center dark:bg-zink-800 dark:border-zink-500 dark:text-zink-200">New <Link to="#!" className="transition text-slate-500 dark:text-zink-200 hover:text-slate-600 dark:hover:text-zink-100"><X className="size-3 ltr:ml-1 rtl:mr-1" /></Link></span>
                        <Link to="#!" className="px-2.5 py-0.5 text-sm font-medium rounded border bg-transparent border-transparent text-slate-500 transition hover:bg-slate-200 dark:bg-zink-800 dark:hover:bg-zink-600 dark:text-zink-200">All Clear</Link>
                    </div>

                    <div className={`grid grid-cols-1 mt-5 md:grid-cols-2 [&.gridView]:grid-cols-1 xl:grid-cols-4 group [&.gridView]:xl:grid-cols-1 gap-x-5 ${!list && "gridView"}`} id="cardGridView">

                        {(data || []).map((item: any, key: number) => (<div className="card md:group-[.gridView]:flex relative" key={key}>
                            <div className="relative group-[.gridView]:static p-8 group-[.gridView]:p-5">
                                <Link to="#!" className={`absolute group/item toggle-button top-6 ltr:right-6 rtl:left-6 ${item.isFav && "active"}`} onClick={(e) => btnFav(e.target)}>
                                    <Heart className="size-5 text-slate-400 fill-slate-200 transition-all duration-150 ease-linear dark:text-zink-200 dark:fill-zink-600 group-[.active]/item:text-red-500 dark:group-[.active]/item:text-red-500 group-[.active]/item:fill-red-200 dark:group-[.active]/item:fill-red-500/20 group-hover/item:text-red-500 dark:group-hover/item:text-red-500 group-hover/item:fill-red-200 dark:group-hover/item:fill-red-500/20" />
                                </Link>
                                <div className="group-[.gridView]:p-3 group-[.gridView]:bg-slate-100 dark:group-[.gridView]:bg-zink-600 group-[.gridView]:inline-block rounded-md">
                                    <img src={item.img} alt="" className="group-[.gridView]:h-16" />
                                </div>
                            </div>
                            <div className="card-body !pt-0 md:group-[.gridView]:flex group-[.gridView]:!p-5 group-[.gridView]:gap-3 group-[.gridView]:grow">
                                <div className="group-[.gridView]:grow">
                                    <h6 className="mb-1 truncate transition-all duration-200 ease-linear text-15 hover:text-custom-500"><Link to="/apps-ecommerce-product-overview">{item.productName}</Link></h6>

                                    <div className="flex items-center text-slate-500 dark:text-zink-200">
                                        <div className="mr-1 text-yellow-500 shrink-0 text-15">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-half-line"></i>
                                        </div>
                                        ({item.ratingNumber})
                                    </div>
                                    <h5 className="mt-4 text-16">{item.price} <small className="font-normal line-through text-slate-500 dark:text-zink-200">{item.delPrice}</small></h5>
                                </div>

                                <div className="flex items-center gap-2 mt-4 group-[.gridView]:mt-0 group-[.gridView]:self-end">
                                    <button type="button" className="w-full bg-white border-dashed text-slate-500 btn border-slate-500 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-600 focus:text-slate-600 focus:bg-slate-50 focus:border-slate-600 active:text-slate-600 active:bg-slate-50 active:border-slate-600 dark:bg-zink-700 dark:text-zink-200 dark:border-zink-400 dark:ring-zink-400/20 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:focus:bg-zink-600 dark:focus:text-zink-100 dark:active:bg-zink-600 dark:active:text-zink-100"><ShoppingCart className="inline-block size-3 leading-none" /> <span className="align-middle">Add to Cart</span></button>
                                    <Dropdown className="relative float-right dropdown">
                                        <Dropdown.Trigger className="flex items-center justify-center w-[38.39px] h-[38.39px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="productList1" data-bs-toggle="dropdown">
                                            <MoreHorizontal className="size-3" />
                                        </Dropdown.Trigger>
                                        <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="productList1">
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-ecommerce-product-overview"><Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Overview</span></Link>
                                            </li>
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-ecommerce-product-create"><FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span></Link>
                                            </li>
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => onClickDelete(item)}><Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span></Link>
                                            </li>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>))}
                    </div>

                    <div className="flex flex-col items-center mb-5 md:flex-row">
                        <div className="mb-4 grow md:mb-0">
                            <p className="text-slate-500 dark:text-zink-200">Showing <b>12</b> of <b>44</b> Results</p>
                        </div>
                        <ul className="flex flex-wrap items-center gap-2 shrink-0">
                            <li>
                                <Link to="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronLeft className="size-4 mr-1 rtl:rotate-180" /> Prev</Link>
                            </li>
                            <li>
                                <Link to="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">1</Link>
                            </li>
                            <li>
                                <Link to="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto active">2</Link>
                            </li>
                            <li>
                                <Link to="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">3</Link>
                            </li>
                            <li>
                                <Link to="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">4</Link>
                            </li>
                            <li>
                                <Link to="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">5</Link>
                            </li>
                            <li>
                                <Link to="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">Next <ChevronRight className="size-4 ml-1 rtl:rotate-180" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GridView;;