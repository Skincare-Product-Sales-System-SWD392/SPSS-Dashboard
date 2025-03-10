import React from 'react';

//import images
import img02 from "assets/images/product/img-02.png";
import img03 from "assets/images/product/img-03.png";
import img04 from "assets/images/product/img-04.png";
import img05 from "assets/images/product/img-05.png";
import img06 from "assets/images/product/img-06.png";
import { MoreVertical, ShoppingCart } from 'lucide-react';
import { Dropdown } from 'Common/Components/Dropdown';
import { Link } from 'react-router-dom';

const TopSellingProducts = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Top Selling Products</h6>
                        <Dropdown className="relative shrink-0">
                            <Dropdown.Trigger type="button" className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle" id="sellingProductDropdown" data-bs-toggle="dropdown">
                                <MoreVertical className="inline-block size-4"></MoreVertical>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="sellingProductDropdown">
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">1 Weekly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">1 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">3 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">6 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">This Yearly</Link>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-md bg-slate-100 dark:bg-zink-600">
                                <img src={img02} alt="" className="h-6" />
                            </div>
                            <div className="overflow-hidden grow">
                                <h6 className="truncate">Mesh Ergonomic Black Chair</h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                            <h6 className="shrink-0"><ShoppingCart className="inline-block size-4 align-middle text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"></ShoppingCart> 798</h6>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-md bg-slate-100 dark:bg-zink-600">
                                <img src={img03} alt="" className="h-6" />
                            </div>
                            <div className="overflow-hidden grow">
                                <h6 className="truncate">Fastcolors Typography Men</h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                            <h6 className="shrink-0"><ShoppingCart className="inline-block size-4 align-middle text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"></ShoppingCart> 695</h6>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-md bg-slate-100 dark:bg-zink-600">
                                <img src={img04} alt="" className="h-6" />
                            </div>
                            <div className="overflow-hidden grow">
                                <h6 className="truncate">Mesh Ergonomic Green Chair</h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                            <h6 className="shrink-0"><ShoppingCart className="inline-block size-4 align-middle text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"></ShoppingCart> 985</h6>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-md bg-slate-100 dark:bg-zink-600">
                                <img src={img05} alt="" className="h-6" />
                            </div>
                            <div className="overflow-hidden grow">
                                <h6 className="truncate">Techel Black Bluetooth Soundbar</h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                            <h6 className="shrink-0"><ShoppingCart className="inline-block size-4 align-middle text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"></ShoppingCart> 813</h6>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-md bg-slate-100 dark:bg-zink-600">
                                <img src={img06} alt="" className="h-6" />
                            </div>
                            <div className="overflow-hidden grow">
                                <h6 className="truncate">Bovet Fleurier AIFSQ029</h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                            <h6 className="shrink-0"><ShoppingCart className="inline-block size-4 align-middle text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"></ShoppingCart> 915</h6>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-md bg-slate-100 dark:bg-zink-600">
                                <img src={img03} alt="" className="h-6" />
                            </div>
                            <div className="overflow-hidden grow">
                                <h6 className="truncate">Fastcolors Typography Men</h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                            <h6 className="shrink-0"><ShoppingCart className="inline-block size-4 align-middle text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"></ShoppingCart> 785</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TopSellingProducts;
