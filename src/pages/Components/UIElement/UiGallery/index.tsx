import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import GalleryContent from "./GalleryContent";
import OverlayContent from "./OverlayContent";
import GalleryAnimation from "./GalleryAnimation";
import GalleryWithCard from "./GalleryWithCard";
import GridGallery from "./GridGallery";

const UiGallery = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Gallery" pageTitle="UI Elements" />
                <div>
                    <GalleryContent />
                    <OverlayContent />
                    <GalleryAnimation />
                    <GalleryWithCard />
                    <GridGallery />
                </div>
            </div>
        </React.Fragment>
    );
}

export default UiGallery;