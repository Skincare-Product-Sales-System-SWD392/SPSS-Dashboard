import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import Contacts from "./Contacts";
import ContactsForm from "./ContactsForm";

const ContactUs = () => {
    return (
        <React.Fragment>
            <BreadCrumb title="Contact Us" pageTitle='Pages' />
            <Contacts />
            <ContactsForm />
        </React.Fragment>

    );
}

export default ContactUs;