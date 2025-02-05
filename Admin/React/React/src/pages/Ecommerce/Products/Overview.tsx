import React, { useCallback, useEffect, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import Flatpickr from "react-flatpickr";
import moment from "moment";

// Image
import overview01 from "assets/images/product/overview-01.png";
import overview02 from "assets/images/product/overview-02.png";

import productImg01 from "assets/images/product/img-01.png";
import productImg09 from "assets/images/product/img-09.png";
import productImg12 from "assets/images/product/img-12.png";
import productImg13 from "assets/images/product/img-13.png";
import userDummy from "assets/images/users/user-dummy-img.jpg";

// Icon
import { ShoppingCart, Repeat, HelpCircle, Share2, Store, Star, MapPin, MoreHorizontal, FileEdit, Trash2, Truck, Container, ThumbsUp, ThumbsDown, Tag } from 'lucide-react';
import { Dropdown } from "Common/Components/Dropdown";
import { Link } from "react-router-dom";
import DeleteModal from "Common/DeleteModal";
import Modal from "Common/Components/Modal";

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import {
    getReview as onGetReview,
    addReview as onAddReview,
    updateReview as onUpdateReview,
    deleteReview as onDeleteReview
} from 'slices/thunk';

const Overview = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.Ecommerce,
        (state) => ({
            dataList: state.reviews
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Get Data
    useEffect(() => {
        dispatch(onGetReview());
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
            dispatch(onDeleteReview(eventData.id));
            setDeleteModal(false);
        }
    };
    // 

    // Update Data
    const handleUpdateDataClick = (ele: any) => {
        setEventData({ ...ele });
        setIsEdit(true);
        setShow(true);
    };

    // validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            img: (eventData && eventData.img) || '',
            customerName: (eventData && eventData.customerName) || '',
            date: (eventData && eventData.date) || '',
            rating: (eventData && eventData.rating) || '',
            review: (eventData && eventData.review) || '',
            like: (eventData && eventData.like) || '',
            dislike: (eventData && eventData.dislike) || ''
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Please Enter Date"),
            rating: Yup.string().required("Please Enter Rating"),
            review: Yup.string().required("Please Enter review")
        }),

        onSubmit: (values) => {
            if (isEdit) {
                const updateData = {
                    id: eventData ? eventData.id : 0,
                    ...values,
                };
                // update user
                dispatch(onUpdateReview(updateData));
            } else {
                const newData = {
                    ...values,
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    img: userDummy,
                    customerName: "Paula Keenan",
                    like: "0",
                    dislike: "0"
                };
                // save new user
                dispatch(onAddReview(newData));
            }
            toggle();
        },
    });

    // 
    const toggle = useCallback(() => {
        if (show) {
            setShow(false);
            setEventData("");
            setIsEdit(false);
        } else {
            setShow(true);
            setEventData("");
            validation.resetForm();
        }
    }, [show, validation]);

    const StareRating = ({ item }: any) => {
        switch (item) {
            case "5":
                return (
                    <div className="flex items-center gap-2 mt-4 mb-2 text-yellow-500">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                    </div>
                );
            case "4":
                return (
                    <div className="flex items-center gap-2 mt-4 mb-2 text-yellow-500">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                    </div>
                );
            case "3":
                return (
                    <div className="flex items-center gap-2 mt-4 mb-2 text-yellow-500">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                    </div>
                );
            case "2":
                return (
                    <div className="flex items-center gap-2 mt-4 mb-2 text-yellow-500">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                    </div>
                );
            case "1":
                return (
                    <div className="flex items-center gap-2 mt-4 mb-2 text-yellow-500">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center gap-2 mt-4 mb-2 text-yellow-500">
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                    </div>
                );
        }
    };

    // Add/Edit Modal
    // const [defaultModal, setDefaultModal] = useState<boolean>(false);
    // const defaultToggle = () => setDefaultModal(!defaultModal);

    return (
        <React.Fragment>
            <BreadCrumb title='Overview' pageTitle='Products' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />

            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
                <div className="xl:col-span-4">
                    <div className="sticky top-[calc(theme('spacing.header')_*_1.3)] mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                                    <div className="rounded-md md:col-span-8 md:row-span-2 bg-slate-100 dark:bg-zink-600">
                                        <img src={overview01} alt="" />
                                    </div>
                                    <div className="rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        <img src={overview02} alt="" />
                                    </div>
                                    <div className="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        <img src={productImg01} alt="" />
                                    </div>
                                    <div className="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        <img src={productImg09} alt="" />
                                    </div>
                                    <div className="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        <img src={productImg12} alt="" />
                                    </div>
                                    <div className="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        <img src={productImg13} alt="" />
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-4 shrink-0">
                                    <Link to="/apps-ecommerce-cart" type="button" className="w-full bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">
                                        <ShoppingCart className="inline-block size-3 align-middle ltr:mr-1 rtl:ml-1" />
                                        <span className="align-middle">Add to Cart</span>
                                    </Link>
                                    <button type="button" className="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-red-400/20">Buy Now</button>
                                </div>

                                <div className="flex items-center gap-3 mt-3 justify-evenly">
                                    <Link to="#!" className="transition-all duration-300 ease-linear hover:text-custom-500"><Repeat className="inline-block size-3 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Compare</span></Link>
                                    <Link to="#!" data-modal-target="askQuestionModal" className="transition-all duration-300 ease-linear hover:text-custom-500"><HelpCircle className="inline-block size-3 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Ask a Question</span></Link>
                                    <Link to="#!" data-modal-target="shareModal" className="transition-all duration-300 ease-linear hover:text-custom-500"><Share2 className="inline-block size-3 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Share</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="border-b card-body border-slate-200 dark:border-zink-500">
                                <div className="flex">
                                    <h6 className="grow text-15"><Store className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Themesdesign</span></h6>
                                    <div className="shrink-0">
                                        <Star className="inline-block size-4 text-yellow-500 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">(4.8)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="flex">
                                    <h6 className="grow text-15"><MapPin className="inline-block size-4 text-orange-500 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">California, USA</span></h6>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2.5 py-2 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">View Store</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-8">
                    <div className="card">
                        <div className="card-body">
                            <Dropdown className="relative ltr:float-right rtl:float-left dropdown">
                                <Dropdown.Trigger className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="categoryNotes1" data-bs-toggle="dropdown"><MoreHorizontal className="size-3" /></Dropdown.Trigger>
                                <Dropdown.Content className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="categoryNotes1">
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-ecommerce-product-create"><FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span></Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={deleteToggle}><Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span></Link>
                                    </li>
                                </Dropdown.Content>
                            </Dropdown>
                            <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-100 text-sky-500 dark:bg-sky-400/20 dark:border-transparent"> New Arrivals</span>
                            <h5 className="mt-3 mb-1">Smartees Printed Men Round Neck Pink</h5>
                            <ul className="flex flex-wrap items-center gap-4 mb-5 text-slate-500 dark:text-zink-200">
                                <li><Link to="#!" className="font-medium underline text-custom-500">Rossie Fadel</Link></li>
                                <li>Seller: <Link to="#!" className="font-medium">Themesdesign</Link></li>
                                <li>Published: <span className="font-medium">20 Oct, 2023</span></li>
                            </ul>

                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <div className="flex items-center gap-2 text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-line"></i>

                                    <div className="text-slate-800 dark:text-zink-50 shrink-0">
                                        <h6>(4.8)</h6>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <h6>973 Reviews</h6>
                                </div>
                                <div className="shrink-0">
                                    <h6>1,231 Sold</h6>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="mb-1 text-green-500">Special Price</p>
                                <h4>$487.32 <small className="font-normal line-through align-middle text-slate-500 dark:text-zink-200">$599.99</small> <small className="text-green-500 align-middle">20% Off</small></h4>
                            </div>

                            <h6 className="mb-3 text-15">Select Color</h6>
                            <div className="flex flex-wrap items-center gap-2">
                                <input id="color1" className="size-5 border rounded-sm appearance-none cursor-pointer border-custom-500 bg-custom-500 checked:bg-custom-500 checked:border-custom-500 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" disabled />
                                <input id="color2" className="size-5 bg-red-300 border border-red-300 rounded-sm appearance-none cursor-pointer checked:bg-red-300 checked:border-red-300 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                                <input id="color3" className="size-5 bg-green-300 border border-green-300 rounded-sm appearance-none cursor-pointer checked:bg-green-300 checked:border-green-300 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                                <input id="color4" className="size-5 border rounded-sm appearance-none cursor-pointer border-slate-500 bg-slate-500 checked:bg-slate-500 checked:border-slate-500 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                                <input id="color5" className="size-5 bg-purple-500 border border-purple-500 rounded-sm appearance-none cursor-pointer checked:bg-purple-500 checked:border-purple-500 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                                <input id="color6" className="size-5 border rounded-sm appearance-none cursor-pointer bg-sky-500 border-sky-500 checked:bg-sky-500 checked:border-sky-500 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                                <input id="color7" className="size-5 bg-yellow-500 border border-yellow-500 rounded-sm appearance-none cursor-pointer checked:bg-yellow-500 checked:border-yellow-500 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                                <input id="color7" className="size-5 bg-green-500 border border-green-500 rounded-sm appearance-none cursor-pointer checked:bg-green-500 checked:border-green-500 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                                <input id="color8" className="size-5 border rounded-sm appearance-none cursor-pointer bg-slate-800 border-slate-800 checked:bg-slate-800 checked:border-slate-800 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                                <input id="color9" className="size-5 border rounded-sm appearance-none cursor-pointer bg-slate-200 border-slate-200 checked:bg-slate-200 checked:border-slate-200 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                                <input id="color10" className="size-5 border rounded-sm appearance-none cursor-pointer bg-emerald-300 border-embg-emerald-300 checked:bg-emerald-300 checked:border-embg-emerald-300 disabled:opacity-75 disabled:cursor-default" type="radio" name="SelectColor" value="" />
                            </div>

                            <h6 className="mt-5 mb-3 text-15">Select Size</h6>
                            <div className="flex flex-wrap items-center gap-2">
                                <div>
                                    <input id="selectSizeXS" className="hidden peer" type="radio" value="XS" name="selectSize" />
                                    <label htmlFor="selectSizeXS" className="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">XS</label>
                                </div>
                                <div>
                                    <input id="selectSizeS" className="hidden peer" type="radio" value="S" name="selectSize" defaultChecked />
                                    <label htmlFor="selectSizeS" className="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">S</label>
                                </div>
                                <div>
                                    <input id="selectSizeM" className="hidden peer" type="radio" value="M" name="selectSize" disabled />
                                    <label htmlFor="selectSizeM" className="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">M</label>
                                </div>
                                <div>
                                    <input id="selectSizeL" className="hidden peer" type="radio" value="L" name="selectSize" />
                                    <label htmlFor="selectSizeL" className="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">L</label>
                                </div>
                                <div>
                                    <input id="selectSizeXL" className="hidden peer" type="radio" value="XL" name="selectSize" />
                                    <label htmlFor="selectSizeXL" className="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">XL</label>
                                </div>
                                <div>
                                    <input id="selectSize2XL" className="hidden peer" type="radio" value="2XL" name="selectSize" />
                                    <label htmlFor="selectSize2XL" className="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">2XL</label>
                                </div>
                            </div>

                            <h6 className="mt-5 mb-3 text-15">Available Offers (4)</h6>
                            <ul className="flex flex-col gap-2">
                                <li><Tag className="inline-block size-4 text-green-500 ltr:mr-1 rtl:ml-1 fill-green-200 dark:fill-green-500/20" /> <span className="font-semibold">Bank Offer</span> 10% Instant Discount on Paypal, up to $1250 on orders of $5,000 and above <Link to="#!" className="underline text-custom-500">T&C</Link></li>
                                <li><Tag className="inline-block size-4 text-green-500 ltr:mr-1 rtl:ml-1 fill-green-200 dark:fill-green-500/20" /> <span className="font-semibold">Special Price</span> Get at flat $199 <Link to="#!" className="underline text-custom-500">T&C</Link></li>
                                <li><Tag className="inline-block size-4 text-green-500 ltr:mr-1 rtl:ml-1 fill-green-200 dark:fill-green-500/20" /> <span className="font-semibold">Partner Offer</span> Purchase now & get 1 surprise cashback coupon in Future <Link to="#!" className="underline text-custom-500">Know More</Link></li>
                                <li><Tag className="inline-block size-4 text-green-500 ltr:mr-1 rtl:ml-1 fill-green-200 dark:fill-green-500/20" /> <span className="font-semibold">Bank Offer</span> UPI Offer Men's Clothing <Link to="#!" className="underline text-custom-500">T&C</Link></li>
                            </ul>

                            <div className="grid grid-cols-1 gap-5 my-5 xl:grid-cols-3">
                                <div className="flex items-center gap-5 p-4 border rounded-md border-slate-200 dark:border-zink-500">
                                    <div className="flex items-center justify-center">
                                        <Truck className="size-6 text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1">Estimated Delivery</h6>
                                        <p className="text-slate-500 dark:text-zink-200">01 - 07 Dec, 2023</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 p-4 border rounded-md border-slate-200 dark:border-zink-500">
                                    <div className="flex items-center justify-center">
                                        <Container className="size-6 text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1">Free Shipping & Returns</h6>
                                        <p className="text-slate-500 dark:text-zink-200">On all orders over $200.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h6 className="mb-3 text-15">Product Description:</h6>
                                <p className="mb-2 text-slate-500 dark:text-zink-200">Latest <b>Trends</b> in Fashion Clothing. Currently, the latest clothing trends for women on FabAlley include playful check print, breezy floral motif, bold red hue, cool denim fabric, quirky polka dot and romantic ruffles.</p>
                                <p className="text-slate-500 dark:text-zink-200"><b>Avoid shapeless and baggy clothing</b>. Stay away from pieces with extra fabric at the hips or bust to keep your look proportionate. Avoid wearing ruffles or pleats around your waist or hips. Be sure to wear supportive undergarments that fit you well!</p>
                            </div>

                            <div className="mt-5">
                                <h6 className="mb-3 text-15">Features:</h6>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th className="px-3.5 py-2.5 font-semibold border-b border-transparent w-64 ltr:text-left rtl:text-right text-slate-500 dark:text-zink-200">Type</th>
                                                <td className="px-3.5 py-2.5 border-b border-transparent">Round Neck</td>
                                            </tr>
                                            <tr>
                                                <th className="px-3.5 py-2.5 font-semibold border-b border-transparent w-64 ltr:text-left rtl:text-right text-slate-500 dark:text-zink-200">Sleeve</th>
                                                <td className="px-3.5 py-2.5 border-b border-transparent">Half Sleeve</td>
                                            </tr>
                                            <tr>
                                                <th className="px-3.5 py-2.5 font-semibold border-b border-transparent w-64 ltr:text-left rtl:text-right text-slate-500 dark:text-zink-200">Fit</th>
                                                <td className="px-3.5 py-2.5 border-b border-transparent">Regular</td>
                                            </tr>
                                            <tr>
                                                <th className="px-3.5 py-2.5 font-semibold border-b border-transparent w-64 ltr:text-left rtl:text-right text-slate-500 dark:text-zink-200">Fabric</th>
                                                <td className="px-3.5 py-2.5 border-b border-transparent">Cotton Blend</td>
                                            </tr>
                                            <tr>
                                                <th className="px-3.5 py-2.5 font-semibold border-b border-transparent w-64 ltr:text-left rtl:text-right text-slate-500 dark:text-zink-200">Pack of</th>
                                                <td className="px-3.5 py-2.5 border-b border-transparent">1</td>
                                            </tr>
                                            <tr>
                                                <th className="px-3.5 py-2.5 font-semibold border-b border-transparent w-64 ltr:text-left rtl:text-right text-slate-500 dark:text-zink-200">Product Code</th>
                                                <td className="px-3.5 py-2.5 border-b border-transparent">TWT1542</td>
                                            </tr>
                                            <tr>
                                                <th className="px-3.5 py-2.5 font-semibold border-b border-transparent w-64 ltr:text-left rtl:text-right text-slate-500 dark:text-zink-200">Ideal for</th>
                                                <td className="px-3.5 py-2.5 border-b border-transparent">Women</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <h6 className="mt-5 mb-3 text-15">Ratings & Reviews</h6>
                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                                <div className="xl:col-span-4">
                                    <div className="border border-dashed rounded-md border-slate-200 dark:border-zink-500">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h5 className="mb-2 text-16">Customer Ratings</h5>
                                                <span className="px-3.5 py-1.5 inline-flex gap-3 text-xs font-medium rounded-full border bg-slate-100 border-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-600">
                                                    <span className="flex items-center gap-2 text-yellow-500">
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                    (4.8 out of 5)
                                                </span>
                                                <p className="mt-2 text-sm text-slate-500 dark:text-zink-200">4,213 total ratings</p>
                                            </div>
                                            <div className="flex flex-col gap-3 mt-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-sm shrink-0">
                                                        5 <i className="ml-1 text-yellow-500 align-middle ri-star-fill"></i>
                                                    </div>
                                                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-zink-600">
                                                        <div className="h-1.5 rounded-full bg-green-500" style={{ width: "79%" }}></div>
                                                    </div>
                                                    <div className="text-sm text-right w-9 shrink-0">
                                                        1,210
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="text-sm shrink-0">
                                                        4 <i className="ml-1 text-yellow-500 align-middle ri-star-fill"></i>
                                                    </div>
                                                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-zink-600">
                                                        <div className="h-1.5 rounded-full bg-sky-500" style={{ width: "66%" }}></div>
                                                    </div>
                                                    <div className="text-sm text-right w-9 shrink-0">
                                                        1,174
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="text-sm shrink-0">
                                                        3 <i className="ml-1 text-yellow-500 align-middle ri-star-fill"></i>
                                                    </div>
                                                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-zink-600">
                                                        <div className="h-1.5 rounded-full bg-purple-500" style={{ width: "45%" }}></div>
                                                    </div>
                                                    <div className="text-sm text-right w-9 shrink-0">
                                                        762
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="text-sm shrink-0">
                                                        2 <i className="ml-1 text-yellow-500 align-middle ri-star-fill"></i>
                                                    </div>
                                                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-zink-600">
                                                        <div className="h-1.5 rounded-full bg-yellow-500" style={{ width: "22%" }}></div>
                                                    </div>
                                                    <div className="text-sm text-right w-9 shrink-0">
                                                        274
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="text-sm shrink-0">
                                                        1 <i className="ml-1 text-yellow-500 align-middle ri-star-fill"></i>
                                                    </div>
                                                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-zink-600">
                                                        <div className="h-1.5 rounded-full bg-red-500" style={{ width: "5%" }}></div>
                                                    </div>
                                                    <div className="text-sm text-right w-9 shrink-0">
                                                        32
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h5 className="text-16 grow">Reviews</h5>
                                        <button type="button" className="px-2 shrink-0 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={toggle}>Add Review</button>
                                    </div>
                                    {(data || []).map((item: any, key: number) => (<div className={key === 0 ? "mt-3" : "pt-3 mt-3 border-t border-slate-200 dark:border-zink-500"} key={key}>
                                        <Dropdown className="relative ltr:float-right rtl:float-left dropdown">
                                            <Dropdown.Trigger className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="reviews1" data-bs-toggle="dropdown"><MoreHorizontal className="size-3" /></Dropdown.Trigger>
                                            <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="reviews1">
                                                <li>
                                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => handleUpdateDataClick(item)}><FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span></Link>
                                                </li>
                                                <li>
                                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => onClickDelete(item)}><Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span></Link>
                                                </li>
                                            </Dropdown.Content>
                                        </Dropdown>
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-full shrink-0 bg-sky-100 dark:bg-sky-500/20">
                                                <img src={item.img} alt="" className="h-10 rounded-full" />
                                            </div>
                                            <div className="grow">
                                                <h6 className="text-15"><Link to="#!">{item.customerName}</Link></h6>
                                                <p className="text-sm text-slate-500 dark:text-zink-200">on {item.date}</p>
                                            </div>
                                        </div>
                                        <StareRating item={item.rating} />
                                        <p className="text-slate-500 dark:text-zink-200">{item.review}</p>
                                        <div className="flex items-center gap-3 mt-3">
                                            <Link to="#!" className="text-slate-500 shrink-0 count-button [&.active]:text-green-500 active"><ThumbsUp className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle count-number">{item.like}</span></Link>
                                            <Link to="#!" className="text-slate-500 shrink-0 count-button [&.active]:text-red-500 active"><ThumbsDown className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle count-number">{item.dislike}</span></Link>
                                        </div>
                                    </div>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview Modal */}
            <Modal show={show} onHide={toggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen lg:xl:w-[55rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-5 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!isEdit ? "Edit Review" : "Add Review"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-4">
                                <label htmlFor="createDateInput" className="inline-block mb-2 text-base font-medium">Create Date</label>
                                <Flatpickr
                                    id="createDateInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Select date'
                                    name='date'
                                    onChange={(date: any) => validation.setFieldValue("date", moment(date[0]).format("DD MMMM ,YYYY"))}
                                    value={validation.values.date || ''}
                                />
                                {validation.touched.date && validation.errors.date ? (
                                    <p className="text-red-400">{validation.errors.date}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="notesTitleInput" className="inline-block mb-2 text-base font-medium">Give your review a title</label>
                                <input type="text" id="notesTitleInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Title"
                                    name="customerName"
                                    onChange={validation.handleChange}
                                    value={validation.values.customerName || ""}
                                />
                                {validation.touched.customerName && validation.errors.customerName ? (
                                    <p className="text-red-400">{validation.errors.customerName}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-4">
                                <div>
                                    <label htmlFor="categorySelect" className="inline-block mb-2 text-base font-medium">Rating</label>
                                    <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices data-choices-search-false id="statusSelect"
                                        name="rating"
                                        onChange={validation.handleChange}
                                        value={validation.values.rating || ""}
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="5">5 Star</option>
                                        <option value="4">4 Star</option>
                                        <option value="3">3 Star</option>
                                        <option value="2">2 Star</option>
                                        <option value="1">1 Star</option>
                                    </select>
                                    {validation.touched.rating && validation.errors.rating ? (
                                        <p className="text-red-400">{validation.errors.rating}</p>
                                    ) : null}
                                </div>
                            </div>
                            <div className="xl:col-span-12">
                                <div>
                                    <label htmlFor="textArea" className="inline-block mb-2 text-base font-medium">Your review</label>
                                    <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="textArea" placeholder="Enter Description" rows={6}
                                        name="review"
                                        onChange={validation.handleChange}
                                        value={validation.values.review || ""}
                                    ></textarea>
                                    {validation.touched.review && validation.errors.review ? (
                                        <p className="text-red-400">{validation.errors.review}</p>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-4">
                            <button className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Cancel</button>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!isEdit ? "Update" : "Add Review"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Overview;