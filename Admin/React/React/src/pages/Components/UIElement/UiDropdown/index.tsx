import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import BasicDropdown from "./BasicDropdown";
import SplitDropdowns from "./SplitDropdowns";
import VariantDropdown from "./VariantDropdown";
import DropdownContent from "./DropdownContent";

const UiDropdown = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title='Dropdown' pageTitle='UI Elements' />

                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                    <BasicDropdown />
                    <SplitDropdowns />
                    <VariantDropdown />
                    <DropdownContent />
                </div>
            </div>
        </React.Fragment>
    );
}

export default UiDropdown;