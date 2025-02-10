import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import DefaultOutline from "./DefaultOutline";
import PillsDismissible from "./PillsDismissible";
import FillBadges from "./FillBadges";
import LabelBadge from "./LabelBadge";

const UiLabel = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title='Label' pageTitle='UI Elements' />
                <div>
                    <DefaultOutline />
                    <PillsDismissible />
                    <FillBadges />
                    <LabelBadge />
                </div>
            </div>
        </React.Fragment>
    );
}

export default UiLabel;