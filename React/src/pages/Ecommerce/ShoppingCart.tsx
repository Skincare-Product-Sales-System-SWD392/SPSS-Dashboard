import React, { useEffect, useState } from "react";

// Icon
import { Trash2, Plus, Minus, Truck, Container, Search } from 'lucide-react';
import BreadCrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import DeleteModal from "Common/DeleteModal";

import { ShoppingCartData } from "Common/data";

const ShoppingCart = () => {

    // Delete Modal
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [deleteModalAll, setDeleteModalAll] = useState<boolean>(false);

    const deleteToggle = (item: any) => {
        setDeleteModal(!deleteModal);
        setEventData(item);
    };

    const [eventData, setEventData] = useState<any>();

    const [cart, setCart] = useState<any>(ShoppingCartData);

    const [charge, setCharge] = useState<any>(0);
    const [tax, setTax] = useState<any>(0);
    const [dis, setDis] = useState<any>(0);

    const assigned = cart.map((item: any) => item.total);
    let subTotal = 0;
    for (let i = 0; i < assigned.length; i++) {
        subTotal += Math.round(assigned[i]);
    }

    useEffect(() => {
        let dis = (0.12 * subTotal);
        let tax = (0.18 * subTotal);

        if (subTotal !== 0) {
            setCharge(65);
        } else {
            setCharge(0);
        }
        setTax(dis);
        setDis(tax);
    }, [subTotal]);

    const removeCartItem = () => {
        const filtered = cart.filter((item: any) => {
            return item.id !== eventData.id;
        });

        setCart(filtered);
        setDeleteModal(!deleteModal);
    };

    const removeCartItemAll = () => {
        setCart([]);
        setDeleteModalAll(!deleteModalAll);
    };

    const countUP = (id: any, prev_data_attr: any, itemPrice: any) => {
        setCart(
            cart.map((cart: any) =>
                cart.id === id ? { ...cart, quantity: prev_data_attr + 1, total: (prev_data_attr + 1) * itemPrice } : cart
            )
        );
    };

    const countDown = (id: any, prev_data_attr: any, itemPrice: any) => {
        setCart(
            cart.map((cart: any) =>
                (cart.id === id && cart.data_attr > 0) ? { ...cart, quantity: prev_data_attr - 1, total: (prev_data_attr - 1) * itemPrice } : cart
            )
        );
    };

    return (
        <React.Fragment>
            <BreadCrumb title='Shopping Cart' pageTitle='Ecommerce' />
            <DeleteModal show={deleteModal} onHide={() => deleteToggle({})} onDelete={removeCartItem} />
            <DeleteModal show={deleteModalAll} onHide={() => setDeleteModalAll(!deleteModalAll)} onDelete={removeCartItemAll} />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                <div className="xl:col-span-9 products-list">
                    <div className="flex items-center gap-3 mb-5">
                        <h5 className="underline text-16 grow">Shopping Cart ({cart.length})</h5>
                        <div>
                            <Link to="#!" className="text-red-500 transition-all duration-300 ease-linear hover:text-red-600" onClick={() => setDeleteModalAll(!deleteModalAll)}><Trash2 className="inline-block size-4 mr-1 align-middle" /> <span className="align-middle">Delete All</span></Link>
                        </div>
                    </div>

                    {(cart || []).map((item: any, key: number) => (<div className="card products" id={`product${item.id}`} key={key}>
                        <div className="card-body">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                                <div className="p-4 rounded-md lg:col-span-2 bg-slate-100 dark:bg-zink-600">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="flex flex-col lg:col-span-4">
                                    <div>
                                        <h5 className="mb-1 text-16"><Link to="/apps-ecommerce-product-overview">{item.product}</Link></h5>
                                        <p className="mb-2 text-slate-500 dark:text-zink-200"><Link to="#!">{item.category}</Link></p>
                                        <p className="mb-1 text-slate-500 dark:text-zink-200">Color: <span className="text-slate-800 dark:text-zink-50">{item.color}</span></p>
                                        <p className="mb-3 text-slate-500 dark:text-zink-200">Size: <span className="text-slate-800 dark:text-zink-50">{item.size}</span></p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <div className="inline-flex p-2 text-center border rounded input-step border-slate-200 dark:border-zink-500">
                                            <button type="button" className="border w-7 leading-[15px] minus-value bg-slate-200 dark:bg-zink-600 dark:border-zink-600 rounded transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                onClick={() => countDown(item.id, item.quantity, item.price)}>
                                                <Minus className="inline-block size-4" /></button>
                                            <input type="number" className="text-center ltr:pl-2 rtl:pr-2 w-15 h-7 products-quantity dark:bg-zink-700 focus:shadow-none" value={item.quantity.toString()} min="0" max="100" readOnly />
                                            <button type="button" className="transition-all duration-200 ease-linear border rounded border-slate-200 bg-slate-200 dark:bg-zink-600 dark:border-zink-600 w-7 plus-value text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                onClick={() => countUP(item.id, item.quantity, item.price)}>
                                                <Plus className="inline-block size-4" /></button>
                                        </div>
                                        <button type="button" className="flex items-center justify-center size-[37.5px] p-0 text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20 remove-button" onClick={() => deleteToggle(item)}><Trash2 className="size-4" /></button>
                                    </div>
                                </div>
                                <div className="flex justify-between w-full lg:flex-col lg:col-end-13 lg:col-span-2">
                                    <div className="mb-auto ltr:lg:text-right rtl:lg:text-left">
                                        <h6 className="text-16 products-price">$<span>{item.price}</span> {item.delPrice && <small className="font-normal line-through text-slate-500 dark:text-zink-200">{item.delPrice}</small>}</h6>
                                    </div>
                                    <h6 className="mt-auto text-16 ltr:lg:text-right rtl:lg:text-left">$<span className="products-line-price">{item.total.toFixed(2)}</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>))}

                    {!cart.length && <div className="noresult">
                        <div className="py-6 text-center">
                            <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                            <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                            <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 299+ orders We did not find any orders for you search.</p>
                        </div>
                    </div>}
                </div>
                <div className="xl:col-span-3">
                    <div className="sticky top-[calc(theme('spacing.header')_*_1.3)] mb-5">
                        <div className="card ">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Order Summary</h6>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <tbody className="table-total">
                                            <tr>
                                                <td className="py-2 text-slate-500 dark:text-zink-200">
                                                    Sub Total
                                                </td>
                                                <td className="py-2 text-slate-500 dark:text-zink-200 cart-subtotal">
                                                    ${subTotal.toFixed(2)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 text-slate-500 dark:text-zink-200">
                                                    Estimated Tax (18%)
                                                </td>
                                                <td className="py-2 text-slate-500 dark:text-zink-200 cart-tax">
                                                    ${tax.toFixed(2)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 text-slate-500 dark:text-zink-200">
                                                    Item Discounts (12%)
                                                </td>
                                                <td className="py-2 text-slate-500 dark:text-zink-200 cart-discount">
                                                    -${dis.toFixed(2)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 text-slate-500 dark:text-zink-200">
                                                    Shipping Charge
                                                </td>
                                                <td className="py-2 text-slate-500 dark:text-zink-200 cart-shipping">
                                                    ${charge}
                                                </td>
                                            </tr>
                                            <tr className="font-semibold">
                                                <td className="pt-2">
                                                    Total Amount (USD)
                                                </td>
                                                <td className="pt-2 cart-total">
                                                    ${(subTotal + charge + tax - dis).toFixed(2)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-5 shrink-0">
                            <Link to="/apps-ecommerce-product-list" className="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-red-400/20">Continue to Shopping</Link>
                            <Link to="/apps-ecommerce-checkout" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Checkout</Link>
                        </div>

                        <div className="flex items-center gap-5 p-4 mt-5 card">
                            <div className="flex items-center justify-center size-12 rounded-md bg-slate-100 dark:bg-zink-600">
                                <Truck className="size-6 text-slate-500 fill-slate-300 dark:text-zink-200 dark:fill-zink-500" />
                            </div>
                            <div>
                                <h6 className="mb-1">Estimated Delivery</h6>
                                <p className="text-slate-500">01 - 07 Dec, 2023</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 p-4 card">
                            <div className="flex items-center justify-center size-12 rounded-md bg-slate-100 dark:bg-zink-600">
                                <Container className="size-6 text-slate-500 fill-slate-300 dark:text-zink-200 dark:fill-zink-500" />
                            </div>
                            <div>
                                <h6 className="mb-1">Free Shipping & Returns</h6>
                                <p className="text-slate-500 dark:text-zink-200">On all orders over $200.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ShoppingCart;