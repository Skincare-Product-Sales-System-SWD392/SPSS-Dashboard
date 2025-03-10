import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { SlideshowLightbox } from 'lightbox.js-react'
// import 'lightbox.js-react/dist/index.css'

// IMage
import image2 from "assets/images/small/img-2.jpg";
import image3 from "assets/images/small/img-3.jpg";
import image4 from "assets/images/small/img-4.jpg";
import image5 from "assets/images/small/img-5.jpg";
import image7 from "assets/images/small/img-7.jpg";
import image8 from "assets/images/small/img-8.jpg";
import image9 from "assets/images/small/img-9.jpg";
import image10 from "assets/images/small/img-10.jpg";

const PLightBox = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Lightbox" pageTitle="Plugins" />
                <div>
                    <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-1">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Simple Image Gallery</h6>
                                <SlideshowLightbox className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                                    <img src={image2} alt="" className="rounded-md" />
                                    <img src={image3} alt="" className="rounded-md" />
                                    <img src={image4} alt="" className="rounded-md" />
                                    <img src={image5} alt="" className="rounded-md" />
                                </SlideshowLightbox>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Images with Description</h6>
                                <SlideshowLightbox className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                                    <img src={image10} alt="" className="rounded-md" />
                                    <img src={image9} alt="" className="rounded-md" />
                                    <img src={image8} alt="" className="rounded-md" />
                                    <img src={image7} alt="" className="rounded-md" />
                                </SlideshowLightbox>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Videos Gallery</h6>

                                <SlideshowLightbox className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                                    <img src="https://i.ytimg.com/vi/qYgogv4R8zg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcI9Cw0yBtGv_ashbS-ogqh1OGpQ" alt="" className="object-cover w-full rounded-md h-30 video" />
                                    <img src="https://i.ytimg.com/vi/waoOK5s9ypc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkSGeAQ17_LFepTKdEByyVTZkeVw" alt="" className="object-cover w-full rounded-md h-30 video" />
                                    <img src="https://i.ytimg.com/vi/waoOK5s9ypc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkSGeAQ17_LFepTKdEByyVTZkeVw" alt="" className="object-cover w-full rounded-md h-30 video" />
                                    <img src="https://i.ytimg.com/vi/TrftauE2Vyk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm6UjEfDC3R5dJik1gEW__HEnaAA" alt="" className="object-cover w-full rounded-md h-30 video" />
                                </SlideshowLightbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PLightBox;