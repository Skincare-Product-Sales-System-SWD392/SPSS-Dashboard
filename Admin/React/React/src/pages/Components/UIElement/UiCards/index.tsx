import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import CardTitle from "./CardTitle";
import HorizontalCard from "./HorizontalCard";
import CardAnimation from "./CardAnimation";
import BorderCard from "./BorderCard";
import DashedBorderCard from "./DashedBorderCard";
import FillCard from "./FillCard";
import ModernCard from "./ModernCard";
import GroupCard from "./GroupCard";

const UiCards = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title='Cards' pageTitle='UI Elements' />

                <CardTitle />
                <HorizontalCard />
                <CardAnimation />
                <BorderCard />
                <DashedBorderCard />
                <FillCard />
                <ModernCard />
                <GroupCard />
            </div>
        </React.Fragment>
    );
}

export default UiCards;