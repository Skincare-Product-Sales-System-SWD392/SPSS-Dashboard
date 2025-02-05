import BreadCrumb from "Common/BreadCrumb";
import React from "react";
import BasicNavbar from "./BasicNavbar";
import HamburgerMenu from "./HamburgerMenu";
import NavbarButton from "./NavbarButton";
import NavbarSearch from "./NavbarSearch";
import DarkNavbar from "./DarkNavbar";

const NavBars = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Navbar" pageTitle="Navigation" />
                <BasicNavbar />
                <HamburgerMenu />
                <NavbarButton />
                <NavbarSearch />
                <DarkNavbar />
            </div>
        </React.Fragment>
    );
}

export default NavBars;