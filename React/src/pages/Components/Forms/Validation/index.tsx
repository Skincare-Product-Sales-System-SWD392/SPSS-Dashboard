import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import BrowserDefault from "./BrowserDefault";
import SignUpForm from "./SignUpForm";


const FormValidation = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Forms Validation" pageTitle="Forms" />
                <BrowserDefault />
                <SignUpForm />
            </div>
        </React.Fragment>
    );
}

export default FormValidation;