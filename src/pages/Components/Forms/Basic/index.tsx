import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import BasicForm from "./BasicForm";
import InputSizing from "./InputSizing";
import RangeColor from "./RangeColor";
import FileGroup from "./FileGroup";

const FormsBasic= () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Basic Elements" pageTitle="Forms" />

                <BasicForm />
                <InputSizing />
                <RangeColor />
                <FileGroup />
            </div>
        </React.Fragment>
    );
}

export default FormsBasic;