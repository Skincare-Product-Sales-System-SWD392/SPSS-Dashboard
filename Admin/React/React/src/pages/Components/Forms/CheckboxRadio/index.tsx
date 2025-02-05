import BreadCrumb from "Common/BreadCrumb";
import React from "react";
import DefaultCircleBordered from "./DefaultCircleBordered";
import SoftOutlineDefault from "./SoftOutlineDefault";
import SquareBorderedSoft from "./SquareBorderedSoft";
import DisabledInlineLabel from "./DisabledInlineLabel";

const CheckboxRadio = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Checkbox & Radio" pageTitle="Forms" />

                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
                    <DefaultCircleBordered />
                    <SoftOutlineDefault />
                    <SquareBorderedSoft />
                    <DisabledInlineLabel />
                </div>

            </div>
        </React.Fragment>
    );
}

export default CheckboxRadio;