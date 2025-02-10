import React from "react";
import { LogOut } from "lucide-react";
import ModernImage from "../ModernImage";
import Modern from "../Modern";
import AuthDropdown from "../AuthDropdown";
import { Link } from "react-router-dom";

const LogoutModern = () => {

    document.title = "LogOut | Tailwick - React Admin & Dashboard Template";

    React.useEffect(() => {
        const bodyElement = document.body;

        bodyElement.classList.add('font-public');

        return () => {
            bodyElement.classList.remove('font-public');
        }
    }, []);

    return (
        <React.Fragment>
            <div className="relative flex flex-col w-full overflow-hidden xl:flex-row to-custom-800 bg-gradient-to-r from-custom-900 dark:to-custom-900 dark:from-custom-950">
                <ModernImage />
                <div className="min-h-[calc(100vh_-_theme('spacing.4')_*_2)] mx-3 lg:w-[40rem] shrink-0 px-10 py-14 flex items-center justify-center m-4 bg-white rounded z-10 relative dark:bg-zink-700 dark:text-zink-100 md:mx-auto xl:mx-4">
                    <div className="flex flex-col w-full h-full">
                        <AuthDropdown />
                        <div className="my-auto">
                            <div className="mt-8 text-center">
                                <div className="mb-4 text-center">
                                    <LogOut className="size-6 mx-auto text-purple-500 fill-purple-100"></LogOut>
                                </div>
                                <h4 className="mb-2 text-custom-500 dark:text-custom-500">You are Logged Out</h4>
                                <p className="mb-8 text-slate-500 dark:text-zink-200">Thank you for using tailwick admin template</p>
                            </div>

                            <Link to="/auth-logout-basic" className="w-full text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Sign In</Link>
                        </div>
                        <div className="mt-5">
                            <p className="mb-0 text-center text-15 text-slate-500 dark:text-zink-200">© {new Date().getFullYear()} Tailwick. Crafted with <i className="text-red-500 ri-heart-fill"></i> by <a href="http://themesdesign.in" className="underline transition-all duration-200 ease-linear text-slate-800 dark:text-zink-50 hover:text-custom-500 dark:hover:text-custom-500">Themesdesign</a>
                            </p>
                        </div>
                    </div>
                </div>
                <Modern />
            </div>
        </React.Fragment>
    );
}

export default LogoutModern;