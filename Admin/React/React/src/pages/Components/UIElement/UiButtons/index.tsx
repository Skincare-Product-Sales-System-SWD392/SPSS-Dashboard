import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import BasicButtons from "./BasicButtons";
import SoftDashed from "./SoftDashed";
import AnimationButton from "./AnimationButton";
import IconButtons from "./IconButtons";
import SizesRounded from "./SizesRounded";
import LabelIcon from "./LabelIcon";

const UiButtons = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title='Buttons' pageTitle='UI Elements' />
                <div>
                    <BasicButtons />
                    <SoftDashed />
                    <AnimationButton />
                    <IconButtons />
                    <SizesRounded />
                    <LabelIcon />
                </div>
            </div>
        </React.Fragment>
    );
}

export default UiButtons;