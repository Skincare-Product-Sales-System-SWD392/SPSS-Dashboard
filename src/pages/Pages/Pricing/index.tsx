import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import Plans from "./Plans";
import HorizontalPricing from "./HorizontalPricing";

const Pricing = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Pricing' pageTitle='Pages' />
            <Plans />
            <HorizontalPricing />
        </React.Fragment>
    );
}

export default Pricing;