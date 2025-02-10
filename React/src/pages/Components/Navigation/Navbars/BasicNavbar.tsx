import React from "react";
import useActiveLink from "./useActiveLink";

// Image
import logoDark from "assets/images/logo-dark.png";
import logoLight from "assets/images/logo-light.png";
import { Menu } from "lucide-react";


const BasicNavbar = () => {

    const { activeLink, handleLinkClick } = useActiveLink(".navbar-menu li.active");

    return (
        <React.Fragment>
            <h6 className="mb-4 text-15">Basic Navbar</h6>

            <nav className="group-data-[skin=bordered]:shadow-sm group-data-[skin=bordered]:border group-data-[skin=bordered]:border-slate-200 group-data-[skin=bordered]:dark:border-zink-500 relative flex items-center h-16 px-4 py-2 bg-white rounded-md shadow-md  navbar dark:bg-zink-700">
                <div className="shrink-0">
                    <a href="#!"><img src={logoDark} alt="" className="block h-5 dark:hidden" /></a>
                    <a href="#!"><img src={logoLight} alt="" className="hidden h-5 dark:block" /></a>
                </div>
                <ul id="navbar7" className="absolute inset-x-0 z-20 items-center hidden py-3 bg-white shadow-lg dark:bg-zink-600 dark:md:bg-transparent md:z-0 navbar-menu rounded-b-md md:shadow-none md:flex top-full ltr:ml-auto rtl:mr-auto md:relative md:bg-transparent md:rounded-none md:top-auto md:py-0">
                    <li>
                        <a href="#!"
                            className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === '/Home' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/Home')}
                        >Home</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === '/About' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/About')}
                        >About Us</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === '/Service' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/Service')}
                        >Service</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === '/Blog' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/Blog')}
                        >Blog</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === '/Contact' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/Contact')}
                        >Contact</a>
                    </li>
                </ul>
                <div className="ltr:ml-auto rtl:mr-auto md:hidden navbar-toggale-button">
                    <button type="button" className="flex items-center  justify-center size-[37.5px] p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                        <Menu /></button>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default BasicNavbar;