import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Image
import avatar2 from "assets/images/users/avatar-2.png";
import avatar4 from "assets/images/users/avatar-4.png";
import avatar7 from "assets/images/users/avatar-7.png";
import avatar9 from "assets/images/users/avatar-9.png";

const Feedback = () => {

    React.useEffect(() => {
        document.querySelector(".swiper-pagination")?.classList.add("-mb-3");
        return () => {
            document.querySelector(".swiper-pagination")?.classList.remove("-mb-3");
        };
    }, []);

    return (
        <React.Fragment>
            <section className="relative py-24 xl:py-32" id="feedback">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="mx-auto mb-8 text-center xl:max-w-3xl">
                        <h1 className="mb-0 leading-normal capitalize">What Our Customer Says</h1>
                    </div>
                    <Swiper className="pb-6 feedback-slider"
                        slidesPerView={3}
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={true}
                        modules={[Pagination, Autoplay]}>
                        <SwiperSlide>
                            <div className="p-5 text-center" data-aos="fade-up" data-aos-easing="linear">
                                <div className="size-20 mx-auto rounded-full bg-custom-500/10">
                                    <img src={avatar2} alt="" className="size-20 rounded-full" />
                                </div>
                                <p className="mt-6 text-16">" The best templates which is supported multiple programming languages with beautiful templates. thank you for the valuable template. "</p>
                                <h6 className="mt-4 mb-1 text-15">Angela Ulligan</h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-5 text-center" data-aos="fade-up" data-aos-easing="linear">
                                <div className="size-20 mx-auto rounded-full bg-yellow-500/10">
                                    <img src={avatar4} alt="" className="size-20 rounded-full" />
                                </div>
                                <p className="mt-6 text-16">" I encountered a few errors in the design of the product detail page in Angular. I contacted the support team and they established. "</p>
                                <h6 className="mt-4 mb-1 text-15"><a href="#!">muratoztrkk01</a></h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-5 text-center" data-aos="fade-up" data-aos-easing="linear">
                                <div className="size-20 mx-auto rounded-full bg-red-500/10">
                                    <img src={avatar7} alt="" className="size-20 rounded-full" />
                                </div>
                                <p className="mt-6 text-16">" This theme is very good. I really recommend it. It's very good optimized, elegant, well documented, etc. "</p>
                                <h6 className="mt-4 mb-1 text-15"><a href="#!">Christine Marbury</a></h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-5 text-center" data-aos="fade-up" data-aos-easing="linear">
                                <div className="size-20 mx-auto rounded-full bg-purple-500/10">
                                    <img src={avatar9} alt="" className="size-20 rounded-full" />
                                </div>
                                <p className="mt-6 text-16">" ThemesDesign used Anydesk to fix the bug in Flask and django version. I highly recommend this product! "</p>
                                <h6 className="mt-4 mb-1 text-15"><a href="#!">Anthony Hobbs</a></h6>
                                <div className="text-yellow-500">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section >
            <section className="relative py-20 border-t border-slate-200 dark:border-zinc-800">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="grid items-center grid-cols-1 gap-5 lg:grid-cols-12">
                        <div className="lg:col-span-8" data-aos="fade-right">
                            <h1 className="mb-4 leading-normal capitalize">Sign up for update & newsletter</h1>
                            <p className="text-lg text-slate-500 dark:text-zinc-400">Tell us which describes you, and we'll get in touch with next steps.</p>
                        </div>
                        <div className="ltr:lg:text-right rtl:lg:text-left lg:col-span-4">
                            <form action="#!" className="relative" data-aos="fade-left">
                                <input type="email" id="subscribeInput" className="py-3 ltr:pr-40 rtl:pl-40 bg-slate-100 dark:bg-zinc-800/40 form-input text-slate-200 border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-custom-500 dark:focus:border-custom-500 placeholder:text-slate-500 dark:placeholder:text-zinc-400 backdrop-blur-md" autoComplete="off" placeholder="tailwick@themesdesign.com" required />
                                <button type="submit" className="absolute px-6 py-2 text-base transition-all duration-200 ease-linear border-0 ltr:right-1 rtl:left-1 text-custom-50 btn top-1 bottom-1 bg-gradient-to-r from-custom-500 to-purple-500 hover:text-white hover:from-purple-500 hover:to-custom-500">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
};

export default Feedback;