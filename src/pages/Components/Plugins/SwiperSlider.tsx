import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Image
import image1 from "assets/images/small/img-1.jpg";
import image2 from "assets/images/small/img-2.jpg";
import image3 from "assets/images/small/img-3.jpg";
import image4 from "assets/images/small/img-4.jpg";
import image5 from "assets/images/small/img-5.jpg";
import image6 from "assets/images/small/img-6.jpg";
import image7 from "assets/images/small/img-7.jpg";
import image8 from "assets/images/small/img-8.jpg";
import image9 from "assets/images/small/img-9.jpg";
import image10 from "assets/images/small/img-10.jpg";
import image11 from "assets/images/small/img-11.jpg";
import image12 from "assets/images/small/img-12.jpg";

const SwiperSlider = () => {

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Swiper Slider" pageTitle="Plugins" />

                <div className="px-4 py-3 mb-5 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
                    The <a href="https://swiperjs.com/react" rel="noreferrer" className="font-semibold underline" target="_blank">swiper/react documentation</a> provides even more options and customization possibilities for creating engaging carousels. Remember to adjust image URLs and content according to your project.
                </div>

                <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-2 2xl:grid-cols-3">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Default</h6>

                            <Swiper className="mySwiper">
                                <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Navigation</h6>

                            <Swiper className="navigation-swiper"
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                modules={[Navigation]}>
                                <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image7} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image8} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image9} alt="" /></SwiperSlide>
                                <div className="swiper-button-next after:hidden text-custom-500"><ChevronRight /></div>
                                <div className="swiper-button-prev after:hidden text-custom-500"><ChevronLeft /></div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Pagination</h6>

                            <Swiper className="pagination-slider" pagination={true} modules={[Pagination]}>
                                <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image7} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image8} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image9} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Pagination Dynamic</h6>

                            <Swiper className="pagination-dynamic" pagination={{dynamicBullets: true}} modules={[Pagination]}>
                                <SwiperSlide><img src={image10} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image11} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image12} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Vertical</h6>

                            <Swiper direction={'vertical'} className="vertical-slider" style={{ height: "327px" }} pagination={{
                                clickable: true,
                            }} modules={[Pagination]}>
                                <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Pagination progress</h6>

                            <Swiper className="pagination-progress"
                                pagination={{ type: 'progressbar' }}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                modules={[Pagination, Navigation]}>
                                <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
                                <div className="swiper-button-next after:hidden text-custom-500"><ChevronRight /></div>
                                <div className="swiper-button-prev after:hidden text-custom-500"><ChevronLeft /></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SwiperSlider;