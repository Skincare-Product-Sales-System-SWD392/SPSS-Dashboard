import React from "react";

// Image
import image6 from "assets/images/small/img-6.jpg";
import image7 from "assets/images/small/img-7.jpg";
import image8 from "assets/images/small/img-8.jpg";
import image9 from "assets/images/small/img-9.jpg";
import image10 from "assets/images/small/img-10.jpg";

const OverlayContent = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Gallery with Overlay Content</h6>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <img src={image6} alt="" className="rounded-md" />
                            <div className="absolute inset-0 transition-all duration-300 ease-linear opacity-0 group-hover/gallery:opacity-50 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-0 transition-all duration-300 ease-linear opacity-0 left-3 right-3 group-hover/gallery:opacity-100 group-hover/gallery:bottom-3">
                                <h5 className="font-normal text-white"><a href="#!">Image title</a></h5>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <img src={image7} alt="" className="rounded-md" />
                            <div className="absolute inset-0 transition-all duration-300 ease-linear opacity-0 group-hover/gallery:opacity-50 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-0 transition-all duration-300 ease-linear opacity-0 left-3 right-3 group-hover/gallery:opacity-100 group-hover/gallery:bottom-3">
                                <h5 className="font-normal text-white"><a href="#!">Image title</a></h5>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <img src={image8} alt="" className="rounded-md" />
                            <div className="absolute inset-0 transition-all duration-300 ease-linear opacity-0 group-hover/gallery:opacity-50 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-0 transition-all duration-300 ease-linear opacity-0 left-3 right-3 group-hover/gallery:opacity-100 group-hover/gallery:bottom-3">
                                <h5 className="font-normal text-white"><a href="#!">Image title</a></h5>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <img src={image9} alt="" className="rounded-md" />
                            <div className="absolute inset-0 transition-all duration-300 ease-linear opacity-0 group-hover/gallery:opacity-50 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-0 transition-all duration-300 ease-linear opacity-0 left-3 right-3 group-hover/gallery:opacity-100 group-hover/gallery:bottom-3">
                                <h5 className="font-normal text-white"><a href="#!">Image title</a></h5>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-md group/gallery">
                            <img src={image10} alt="" className="rounded-md" />
                            <div className="absolute inset-0 transition-all duration-300 ease-linear opacity-0 group-hover/gallery:opacity-50 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-0 transition-all duration-300 ease-linear opacity-0 left-3 right-3 group-hover/gallery:opacity-100 group-hover/gallery:bottom-3">
                                <h5 className="font-normal text-white"><a href="#!">Image title</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default OverlayContent;