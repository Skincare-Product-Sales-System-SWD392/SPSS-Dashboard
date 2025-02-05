import BreadCrumb from "Common/BreadCrumb";
import React from "react";
import DefaultSquareSoft from "./DefaultSquareSoft";
import OutlineIconSizesDisabled from "./OutlineIconSizesDisabled";

const FormSwitches = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Switch" pageTitle="Forms" />

                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
                    <DefaultSquareSoft />
                    <OutlineIconSizesDisabled />
                </div>
            </div>
        </React.Fragment>
    );
}

export default FormSwitches;