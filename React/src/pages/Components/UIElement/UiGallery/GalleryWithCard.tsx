import React from "react";

// Image
import image6 from "assets/images/small/img-6.jpg"
import image7 from "assets/images/small/img-7.jpg"
import image8 from "assets/images/small/img-8.jpg"
import image9 from "assets/images/small/img-9.jpg"
import image10 from "assets/images/small/img-10.jpg"

const GalleryWithCard = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Gallery with Card</h6>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                        <div className="relative mb-0 overflow-hidden transition-all duration-300 ease-linear rounded-md group/gallery card hover:-translate-y-2">
                            <div className="overflow-hidden">
                                <img src={image6} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="card-body">
                                <h5 className="mb-0 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden transition-all duration-300 ease-linear rounded-md group/gallery card hover:-translate-y-2">
                            <div className="overflow-hidden">
                                <img src={image7} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="card-body">
                                <h5 className="mb-0 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden transition-all duration-300 ease-linear rounded-md group/gallery card hover:-translate-y-2">
                            <div className="overflow-hidden">
                                <img src={image8} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="card-body">
                                <h5 className="mb-0 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden transition-all duration-300 ease-linear rounded-md group/gallery card hover:-translate-y-2">
                            <div className="overflow-hidden">
                                <img src={image9} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="card-body">
                                <h5 className="mb-0 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                            </div>
                        </div>
                        <div className="relative mb-0 overflow-hidden transition-all duration-300 ease-linear rounded-md group/gallery card hover:-translate-y-2">
                            <div className="overflow-hidden">
                                <img src={image10} alt="" className="transition-all duration-300 ease-linear group-hover/gallery:scale-110" />
                            </div>
                            <div className="card-body">
                                <h5 className="mb-0 text-16"><a href="#!" className="transition-all duration-300 ease-linear hover:text-custom-500">Cinematic Metro</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default GalleryWithCard;