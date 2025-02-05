import React from "react";
import { Nav } from "Common/Components/Tab/Nav";
import Tab from "Common/Components/Tab/Tab";
import { Link } from "react-router-dom";
import { Facebook, Github, Mail, Smartphone, Twitter } from "lucide-react";
import { Dropdown } from "Common/Components/Dropdown";

// Image 
import logoLight from "assets/images/logo-light.png";
import logoDark from "assets/images/logo-dark.png";
import image1 from "assets/images/auth/img-01.png";
import us from "assets/images/flags/us.svg";
import es from "assets/images/flags/es.svg";
import de from "assets/images/flags/de.svg";
import fr from "assets/images/flags/fr.svg";
import jp from "assets/images/flags/jp.svg";
import it from "assets/images/flags/it.svg";
import ru from "assets/images/flags/ru.svg";
import ae from "assets/images/flags/ae.svg";

const RegisterBoxed = () => {

    document.title = "Sign In | Tailwick - React Admin & Dashboard Template";
    
    return (
        <React.Fragment>
            <div className="flex items-center justify-center min-h-screen px-4 py-16 bg-cover bg-auth-pattern dark:bg-auth-pattern-dark dark:text-zink-100 font-public">
                <div className="mb-0 border-none shadow-none xl:w-2/3 card bg-white/70 dark:bg-zink-500/70">
                    <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <div className="!px-10 !py-12 card-body">
                                <Tab.Container defaultActiveKey="emailTabs">

                                    <div className="lg:w-[25rem] mx-auto">
                                        <Nav className="flex flex-wrap w-full gap-2 text-sm font-medium text-center nav-tabs">
                                            <Nav.Item eventKey="emailTabs" className="group grow">
                                                <a href="#!" data-tab-toggle data-target="emailTabs" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 bg-slate-100 dark:text-zink-200 dark:bg-zink-600 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">
                                                    <Mail className="inline-block size-4 mr-1"></Mail> <span className="align-middle">Email</span></a>
                                            </Nav.Item>
                                            <Nav.Item eventKey="phoneTabs" className="group grow">
                                                <a href="#!" data-tab-toggle data-target="phoneTabs" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 bg-slate-100 dark:text-zink-200 dark:bg-zink-600 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">
                                                    <Smartphone className="inline-block size-4 mr-1"></Smartphone> <span className="align-middle">Phone</span></a>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div>
                                        <Tab.Content className="mt-5 tab-content">
                                            <Tab.Pane eventKey="emailTabs" className="tab-pane" id="emailTabs">
                                                <form action="/" className="mt-10" id="signInForm">
                                                    <div className="mb-3">
                                                        <label htmlFor="email-id-field" className="inline-block mb-2 text-base font-medium">Email ID</label>
                                                        <input type="number" id="email-id-field" className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter email" />
                                                        <div id="email-id-error" className="hidden mt-1 text-sm text-red-500">Please enter a valid Email ID.</div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="username-field" className="inline-block mb-2 text-base font-medium">UserName</label>
                                                        <input type="text" id="username-field" className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter username" />
                                                        <div id="username-error" className="hidden mt-1 text-sm text-red-500">Please enter a username.</div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="password" className="inline-block mb-2 text-base font-medium">Password</label>
                                                        <input type="password" id="password" className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter password" />
                                                        <div id="password-error" className="hidden mt-1 text-sm text-red-500">Password must be at least 8 characters long and contain both letters and numbers.</div>
                                                    </div>
                                                    <p className="italic text-15 text-slate-500 dark:text-zink-200">By registering you agree to the Tailwick <a href="#!" className="underline">Terms of Use</a></p>
                                                    <div className="mt-10">
                                                        <button type="submit" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Sign In</button>
                                                    </div>
                                                </form>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="phoneTabs" className="tab-pane" id="phoneTabs">
                                                <form action="/" className="mt-10" id="signInForm1">
                                                    <div className="mb-3">
                                                        <label htmlFor="phone-number-field" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                                                        <input type="number" id="phone-number-field" className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter phone" />
                                                        <div id="phone-number-error" className="hidden mt-1 text-sm text-red-500">Please enter a valid phone number.</div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="username-field1" className="inline-block mb-2 text-base font-medium">UserName</label>
                                                        <input type="text" id="username-field1" className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter username" />
                                                        <div id="username-error" className="hidden mt-1 text-sm text-red-500">Please enter a username.</div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="password" className="inline-block mb-2 text-base font-medium">Password</label>
                                                        <input type="password" id="password1" className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter password" />
                                                        <div id="password-error" className="hidden mt-1 text-sm text-red-500">Password must be at least 8 characters long and contain both letters and numbers.</div>
                                                    </div>
                                                    <p className="italic text-15 text-slate-500 dark:text-zink-200">By registering you agree to the Tailwick <a href="#!" className="underline">Terms of Use</a></p>
                                                    <div className="mt-10">
                                                        <button type="submit" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Sign In</button>
                                                    </div>
                                                </form>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        <div className="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200 dark:before:border-t-zink-500">
                                            <h5 className="inline-block px-4 py-0.5 text-sm bg-white text-slate-500 dark:bg-zink-700 dark:text-zink-200 rounded relative">Create account with</h5>
                                        </div>

                                        <div className="flex flex-wrap justify-center gap-2">
                                            <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 active:text-white active:bg-custom-600 active:border-custom-600">
                                                <Facebook className="size-4"></Facebook>
                                            </button>
                                            <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-orange-500 border-orange-500 hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:text-white focus:bg-orange-600 focus:border-orange-600 active:text-white active:bg-orange-600 active:border-orange-600">
                                                <Mail className="size-4"></Mail>
                                            </button>
                                            <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600">
                                                <Twitter className="size-4"></Twitter>
                                            </button>
                                            <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 active:text-white active:bg-slate-600 active:border-slate-600">
                                                <Github className="size-4"></Github>
                                            </button>
                                        </div>

                                        <div className="mt-10 text-center">
                                            <p className="mb-0 text-slate-500 dark:text-zink-200">Already have an account ? <Link to="/auth-login-basic" className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500">Login</Link> </p>
                                        </div>
                                    </div>
                                </Tab.Container>
                            </div>
                        </div>
                        <div className="mx-2 mt-2 mb-2 border-none shadow-none lg:col-span-7 card bg-white/60 dark:bg-zink-500/60">
                            <div className="!px-10 !pt-10 h-full !pb-0 card-body flex flex-col">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="grow">
                                        <Link to="/">
                                            <img src={logoLight} alt="" className="hidden h-6 dark:block" />
                                            <img src={logoDark} alt="" className="block h-6 dark:hidden" />
                                        </Link>
                                    </div>
                                    <div className="shrink-0">
                                        <Dropdown className="relative text-end">
                                            <Dropdown.Trigger type="button" className="inline-flex items-center gap-3 transition-all duration-200 ease-linear dropdown-toggle btn border-slate-200 dark:border-zink-400/60 group/items focus:border-custom-500 dark:focus:border-custom-500" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                <img src={us} alt="" className="object-cover h-5 rounded-full" />
                                                <h6 className="text-base font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">English</h6>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content placement="right-end" className="absolute z-50 p-3 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[9rem] flex flex-col gap-3 dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={us} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">English</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={es} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Spanish</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={de} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">German</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={fr} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">French</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={jp} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Japanese</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={it} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Italian</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={ru} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Russian</h6>
                                                </a>
                                                <a href="#!" className="flex items-center gap-3 group/items">
                                                    <img src={ae} alt="" className="object-cover h-4 rounded-full" />
                                                    <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Arabic</h6>
                                                </a>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <img src={image1} alt="" className="md:max-w-[32rem] mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default RegisterBoxed;