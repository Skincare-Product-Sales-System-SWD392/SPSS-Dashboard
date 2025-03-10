import React from "react";
import { Star } from "lucide-react";

// Image
import product16 from "assets/images/product/img-16.png";
import product17 from "assets/images/product/img-17.png";
import product18 from "assets/images/product/img-18.png";
import product19 from "assets/images/product/img-19.png";

const OurProduct = () => {
    return (
        <React.Fragment>
            <section className="relative py-24 xl:py-32" id="product">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="mx-auto text-center xl:max-w-3xl">
                        <h1 className="mb-0 leading-normal capitalize">Our Latest Product</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-12 md:grid-cols-2 xl:grid-cols-4">
                        <div className="p-5 rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-zinc-800 dark:to-zinc-900" data-aos="fade-up" data-aos-easing="linear">
                            <img src={product16} alt="" className="mx-auto h-52" />
                            <div className="mt-3">
                                <p className="mb-3">
                                    <Star className="inline-block size-4 text-yellow-500 align-middle ltr:mr-1 rtl:ml-1"></Star> (4.8)</p>
                                <h5><a href="#!">Green Sneakers Skate</a></h5>

                                <div className="flex items-center gap-3 mt-3">
                                    <h6 className="text-16 grow">$299.99</h6>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-zinc-800 dark:to-zinc-900" data-aos="fade-up" data-aos-easing="linear">
                            <img src={product17} alt="" className="mx-auto h-52" />
                            <div className="mt-3">
                                <p className="mb-3">
                                    <Star className="inline-block size-4 text-yellow-500 align-middle ltr:mr-1 rtl:ml-1"></Star> (4.4)</p>
                                <h5><a href="#!">Nike Running Shoes</a></h5>

                                <div className="flex items-center gap-3 mt-3">
                                    <h6 className="text-16 grow">$129.49</h6>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-zinc-800 dark:to-zinc-900" data-aos="fade-up" data-aos-easing="linear">
                            <img src={product18} alt="" className="mx-auto h-52" />
                            <div className="mt-3">
                                <p className="mb-3">
                                    <Star className="inline-block size-4 text-yellow-500 align-middle ltr:mr-1 rtl:ml-1"></Star> (4.9)</p>
                                <h5><a href="#!">Nike Air Max Sneakers Shoe</a></h5>

                                <div className="flex items-center gap-3 mt-3">
                                    <h6 className="text-16 grow">$149.99</h6>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-zinc-800 dark:to-zinc-900" data-aos="fade-up" data-aos-easing="linear">
                            <img src={product19} alt="" className="mx-auto h-52" />
                            <div className="mt-3">
                                <p className="mb-3">
                                    <Star className="inline-block size-4 text-yellow-500 align-middle ltr:mr-1 rtl:ml-1"></Star> (4.6)</p>
                                <h5><a href="#!">Dunk Sneakers Skate shoe</a></h5>

                                <div className="flex items-center gap-3 mt-3">
                                    <h6 className="text-16 grow">$174.65</h6>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default OurProduct;