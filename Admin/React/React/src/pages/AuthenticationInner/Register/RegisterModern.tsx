import React from "react";
import { Facebook, Github, Mail, Smartphone, Twitter } from "lucide-react";
import { Nav } from "Common/Components/Tab/Nav";
import Tab from "Common/Components/Tab/Tab";
import ModernImage from "../ModernImage";
import Modern from "../Modern";
import AuthDropdown from "../AuthDropdown";
import { Link } from "react-router-dom";

const RegisterModern = () => {

    document.title = "Register | Tailwick - React Admin & Dashboard Template";

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
                            <Tab.Container defaultActiveKey="emailLogin">
                                <div className="lg:w-[20rem] mx-auto mt-10">
                                    <Nav className="flex flex-wrap w-full gap-2 text-sm font-medium text-center nav-tabs">
                                        <Nav.Item eventKey="emailLogin" className="group grow">
                                            <a href="#!" data-tab-toggle data-target="emailLogin" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 bg-slate-100 dark:text-zink-200 dark:bg-zink-600 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">
                                                <Mail className="inline-block size-4 mr-1" /> <span className="align-middle">Email</span>
                                            </a>
                                        </Nav.Item>
                                  
                                        <Nav.Item eventKey="phoneLogin" className="group grow">
                                            <a href="#!" data-tab-toggle data-target="phoneLogin" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 bg-slate-100 dark:text-zink-200 dark:bg-zink-600 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">
                                            <Smartphone className="inline-block size-4 mr-1"></Smartphone> <span className="align-middle">Phone</span></a>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <div className="lg:w-[25rem] mx-auto">
                                    <Tab.Content className="mt-5 tab-content">
                                        <Tab.Pane eventKey="emailLogin" className="tab-pane" id="emailLogin">
                                            <form action="/" className="mt-10" id="signInForm">
                                                <div className="hidden p-3 mb-3 text-base text-green-500 border border-green-200 rounded-md bg-green-50" id="successAlert">
                                                    You have <b>successfully</b> signed in.
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="inline-block mb-2 text-base font-medium">UserName/ Email ID</label>
                                                    <input type="text" id="username" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter username or email" />
                                                    <div id="username-error" className="hidden mt-1 text-sm text-red-500">Please enter a valid email address.</div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="inline-block mb-2 text-base font-medium">Password</label>
                                                    <input type="password" id="password" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter password" />
                                                    <div id="password-error" className="hidden mt-1 text-sm text-red-500">Password must be at least 8 characters long and contain both letters and numbers.</div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <input id="emailCheckRememberMe" className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400" type="checkbox" value="" />
                                                        <label htmlFor="emailCheckRememberMe" className="inline-block text-base font-medium align-middle cursor-pointer">Remember me</label>
                                                    </div>
                                                    <div id="remember-error" className="hidden mt-1 text-sm text-red-500">Please check the "Remember me" before submitting the form.</div>
                                                </div>
                                                <div className="mt-10">
                                                    <button type="submit" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Sign In</button>
                                                </div>
                                            </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="phoneLogin" className="tab-pane" id="phoneLogin">
                                            <form action="/" className="mt-10" id="signInForm1">
                                                <div className="hidden px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50" id="successAlert">
                                                    You have <b>successfully</b> signed in.
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="phoneNumber" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                                                    <input type="number" id="phoneNumber" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter phone" />
                                                    <div id="phone-error" className="hidden mt-1 text-sm text-red-500">Please enter a valid email address.</div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="inline-block mb-2 text-base font-medium">Password</label>
                                                    <input type="password" id="password1" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter password" />
                                                    <div id="password-error" className="hidden mt-1 text-sm text-red-500">Password must be at least 8 characters long and contain both letters and numbers.</div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <input id="phoneCheckRememberMe" className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400" type="checkbox" value="" />
                                                        <label htmlFor="phoneCheckRememberMe" className="inline-block text-base font-medium align-middle cursor-pointer">Remember me</label>
                                                    </div>
                                                    <div id="remember-error" className="hidden mt-1 text-sm text-red-500">Please check the "Remember me" before submitting the form.</div>
                                                </div>
                                                <div className="mt-10">
                                                    <button type="submit" className="w-full font-medium text-white uppercase transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100">Sign In</button>
                                                </div>
                                            </form>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    <div className="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200 dark:before:border-t-zink-500">
                                        <h5 className="inline-block px-4 py-0.5 text-sm bg-white text-slate-500 dark:text-zink-200 dark:bg-zink-700 rounded relative">Already have an account ?</h5>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-2">
                                        <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-custom-500 btn bg-custom-100 border-custom-100 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 active:text-white active:bg-custom-600 active:border-custom-600">
                                            <Facebook className="size-4"></Facebook>
                                        </button>
                                        <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-orange-500 btn bg-orange-100 border-orange-100 hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:text-white focus:bg-orange-600 focus:border-orange-600 active:text-white active:bg-orange-600 active:border-orange-600">
                                            <Mail className="size-4"></Mail>
                                        </button>
                                        <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-sky-500 btn bg-sky-100 border-sky-100 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600">
                                            <Twitter className="size-4"></Twitter>
                                        </button>
                                        <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-slate-500 btn bg-slate-200 border-slate-200 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 active:text-white active:bg-slate-600 active:border-slate-600">
                                            <Github className="size-4"></Github>
                                        </button>
                                    </div>

                                    <div className="mt-10 text-center">
                                        <p className="mb-0 text-slate-500 dark:text-zink-200">Already have an account ? <Link to="/auth-login-basic" className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500">Login</Link> </p>
                                    </div>

                                </div>
                            </Tab.Container>
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

export default RegisterModern;