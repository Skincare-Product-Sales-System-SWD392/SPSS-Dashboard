import React from "react";
import Drawer from "./Components/Drawer";
import { Minus, Plus, X } from "lucide-react";

// Image
import image1 from "assets/images/product/img-01.png";
import image3 from "assets/images/product/img-03.png";
import image9 from "assets/images/product/img-09.png";
import { Link } from "react-router-dom";

interface AddToCard {
    id: number; img: string; title: string; price: number; name: string; initialValue: number; total: number;
}

const addToCard: AddToCard[] = [
    { id: 1, img: image1, title: "Cotton collar t-shirts for men", price: 155.32, name: "Fashion", initialValue: 2, total: 155.32 },
    { id: 2, img: image3, title: "Like style travel black handbag", price: 349.95, name: "Luggage", initialValue: 1, total: 349.95 },
    { id: 3, img: image9, title: "Blive Printed Men Round Neck", price: 546.74, name: "Fashion", initialValue: 4, total: 546.74 },
];

const CartDrawer = ({ show, handleDrawer }: any) => {

    const [cart, setCart] = React.useState<AddToCard[]>(addToCard);

    const [charge, setCharge] = React.useState<any>(0);
    const [tax, setTax] = React.useState<any>(0);
    const [dis, setDis] = React.useState<any>(0);

    const assigned = cart.map((item: AddToCard) => item.total);
    let subTotal = 0;
    for (let i = 0; i < assigned.length; i++) {
        subTotal += Math.round(assigned[i]);
    }

    React.useEffect(() => {
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

    const countUP = (id: any, prev_data_attr: any, itemPrice: any) => {
        setCart(
            cart.map((cart: AddToCard) =>
                cart.id === id ? { ...cart, initialValue: prev_data_attr + 1, total: (prev_data_attr + 1) * itemPrice } : cart
            )
        );
    };

    const countDown = (id: any, prev_data_attr: any, itemPrice: any) => {
        setCart(
            cart.map((cart: AddToCard) =>
                (cart.id === id && cart.initialValue > 0) ? { ...cart, initialValue: prev_data_attr - 1, total: (prev_data_attr - 1) * itemPrice } : cart
            )
        );
    };

    const removeItem = (id: number) => {
        setCart(
            cart.filter((cart: AddToCard) => cart.id !== id)
        );
    };


    return (
        <React.Fragment>
            <Drawer show={show} onHide={handleDrawer} id="cartSidePenal" drawer-end="true" className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow dark:bg-zink-600 ltr:right-0 rtl:left-0 md:w-96 z-drawer">
                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500">
                    <div className="grow">
                        <h5 className="mb-0 text-16">Shopping Cart <span className="inline-flex items-center justify-center size-5 ml-1 text-[11px] font-medium border rounded-full text-white bg-custom-500 border-custom-500">3</span></h5>
                    </div>
                    <div className="shrink-0">
                        <Drawer.Header data-drawer-close="cartSidePenal" className="transition-all duration-150 ease-linear text-slate-500 hover:text-slate-800">
                            <X className="size-4"></X>
                        </Drawer.Header>
                    </div>
                </div>
                <div className="px-4 py-3 text-sm text-green-500 border border-transparent bg-green-50 dark:bg-green-400/20">
                    <span className="font-bold underline">TAILWICK50</span> Coupon code applied successfully.
                </div>
                <div>
                    <div className="h-[calc(100vh_-_370px)] p-4 overflow-y-auto product-list">
                        <div className="flex flex-col gap-4">
                            {
                                (cart || [])?.map((item: AddToCard, index: number) => (
                                    <div key={index} className="flex gap-2 product" id={`product${item.id}`}>
                                        <div className="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0 dark:bg-zink-500">
                                            <img src={item.img} alt="" className="h-8" />
                                        </div>
                                        <div className="overflow-hidden grow">
                                            <div className="ltr:float-right rtl:float-left">
                                                <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500"
                                                    onClick={() => removeItem(item.id)}>
                                                    <X className="size-4"></X>
                                                </button>
                                            </div>
                                            <a href="#!" className="transition-all duration-200 ease-linear hover:text-custom-500">
                                                <h6 className="mb-1 text-15">{item.title}</h6>
                                            </a>
                                            <div className="flex items-center mb-3">
                                                <h5 className="text-base product-price"> $<span>{(item.price).toFixed(2)}</span></h5>
                                                <div className={`font-normal rtl:mr-1 ltr:ml-1 dark:text-zink-200 ${index === addToCard.length - 3 ? "text-slate-500" : "text-slate-400"}`}>({item.name})</div>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="inline-flex text-center input-step">
                                                    <button type="button" className="border size-9 leading-[15px] minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                        onClick={() => countDown(item.id, item.initialValue, item.price)}>
                                                        <Minus className="inline-block size-4"></Minus>
                                                    </button>
                                                    <input type="number" className="w-12 text-center h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500" value={item.initialValue.toString()} min="0" max="100" readOnly />
                                                    <button type="button" className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l size-9 border-slate-200 plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                        onClick={() => countUP(item.id, item.initialValue, item.price)}>
                                                        <Plus className="inline-block size-4"></Plus>
                                                    </button>
                                                </div>
                                                <h6 className="product-line-price">{(item.total).toFixed(2)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="p-4 border-t border-slate-200 dark:border-zink-500">

                        <table className="w-full mb-3 ">
                            <tbody className="table-total">
                                <tr>
                                    <td className="py-2">Sub Total :</td>
                                    <td className="text-right cart-subtotal">${subTotal.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Discount <span className="text-muted">(TAILWICK50)</span>:</td>
                                    <td className="text-right cart-discount">-${dis.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Shipping Charge :</td>
                                    <td className="text-right cart-shipping">${charge}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Estimated Tax (12.5%) : </td>
                                    <td className="text-right cart-tax">${tax.toFixed(2)}</td>
                                </tr>
                                <tr className="font-semibold">
                                    <td className="py-2">Total : </td>
                                    <td className="text-right cart-total">${(subTotal + charge + tax - dis).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex items-center justify-between gap-3">
                            <Link to="/apps-ecommerce-product-grid" className="w-full text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:border-slate-600 active:ring active:ring-slate-100 dark:ring-slate-400/10">Continue Shopping</Link>
                            <Link to="/apps-ecommerce-checkout" className="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20">Checkout</Link>
                        </div>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    );
};

export default CartDrawer;