import React from "react";

// Image
import image1 from "assets/images/small/img-1.jpg";
import image2 from "assets/images/small/img-2.jpg";
import image3 from "assets/images/small/img-3.jpg";
import image4 from "assets/images/small/img-4.jpg";
import image5 from "assets/images/small/img-5.jpg";

const GalleryAnimation = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">With Animation</h6>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <div className="overflow-hidden">
                                <img src={image1} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="pt-3">
                                <h5 className="mb-1 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                                <p className="text-slate-500 dark:zink-200">Artyom is depicted as a silent protagonist and a blank slate for the player.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <div className="overflow-hidden">
                                <img src={image2} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="pt-3">
                                <h5 className="mb-1 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                                <p className="text-slate-500 dark:zink-200">Artyom is depicted as a silent protagonist and a blank slate for the player.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <div className="overflow-hidden">
                                <img src={image3} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="pt-3">
                                <h5 className="mb-1 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                                <p className="text-slate-500 dark:zink-200">Artyom is depicted as a silent protagonist and a blank slate for the player.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <div className="overflow-hidden">
                                <img src={image4} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="pt-3">
                                <h5 className="mb-1 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                                <p className="text-slate-500 dark:zink-200">Artyom is depicted as a silent protagonist and a blank slate for the player.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <div className="overflow-hidden">
                                <img src={image5} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="pt-3">
                                <h5 className="mb-1 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                                <p className="text-slate-500 dark:zink-200">Artyom is depicted as a silent protagonist and a blank slate for the player.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default GalleryAnimation;