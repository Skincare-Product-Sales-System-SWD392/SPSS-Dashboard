import React, { useState } from "react";
import useActiveLink from "./useActiveLink";
import { Menu } from "lucide-react";

// Image
import logoDark from "assets/images/logo-dark.png";
import logoLight from "assets/images/logo-light.png";

const HamburgerMenu = () => {

    const { activeLink, handleLinkClick } = useActiveLink(".navbar-menu li.active");

    const [show, setShow] = useState<boolean>(false)

    return (
        <React.Fragment>
            <h6 className="mb-4 mt-7 text-16">Hamburger menu</h6>

            <nav className="group-data-[skin=bordered]:shadow-sm group-data-[skin=bordered]:border group-data-[skin=bordered]:border-slate-200 group-data-[skin=bordered]:dark:border-zink-500 relative flex items-center h-16 px-4 py-2 bg-white rounded-md shadow-md  navbar dark:bg-zink-700">
                <div className="shrink-0">
                    <a href="#!"><img src={logoDark} alt="" className="block h-5 dark:hidden" /></a>
                    <a href="#!"><img src={logoLight} alt="" className="hidden h-5 dark:block" /></a>
                </div>
                <ul id="navbar8" className={`absolute inset-x-0 z-20 items-center py-3 bg-white shadow-lg dark:bg-zink-600 dark:md:bg-transparent navbar-menu rounded-b-md top-full ltr:ml-auto rtl:mr-auto ${show ? "" : "hidden"}`}>
                    <li>
                        <a href="#!"
                            className={`block px-4 py-2.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Home" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/Home")}
                        >Home</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block px-4 py-2.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/About" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/About")}
                        >About Us</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block px-4 py-2.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Service" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/Service")}
                        >Service</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block px-4 py-2.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Blog" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/Blog")}
                        >Blog</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block px-4 py-2.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Contact" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/Contact")}
                        >Contact</a>
                    </li>
                </ul>
                <div className="ltr:ml-auto rtl:mr-auto navbar-toggale-button">
                    <button type="button" className="flex items-center  justify-center size-[37.5px] p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                        onClick={() => setShow(!show)}><Menu /></button>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default HamburgerMenu;