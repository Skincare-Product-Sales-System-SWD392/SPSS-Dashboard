import React from "react";
import { Facebook, Github, Mail, Twitter } from "lucide-react";

// Image
import logoLight from 'assets/images/logo-light.png';
import logoDark from 'assets/images/logo-dark.png';
import img1 from "assets/images/auth/img-01.png";
import us from "assets/images/flags/us.svg";
import es from "assets/images/flags/es.svg";
import de from "assets/images/flags/de.svg";
import fr from "assets/images/flags/fr.svg";
import jp from "assets/images/flags/jp.svg";
import it from "assets/images/flags/it.svg";
import ru from "assets/images/flags/ru.svg";
import ae from "assets/images/flags/ae.svg";
import { Link } from "react-router-dom";

const LoginBoxed = () => {

    document.title = "Sign In | Tailwick - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="flex items-center justify-center min-h-screen px-4 py-16 bg-cover bg-auth-pattern dark:bg-auth-pattern-dark dark:text-zink-100 font-public">
                <div className="mb-0 border-none shadow-none xl:w-2/3 card bg-white/70 dark:bg-zink-500/70">
                    <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <div className="!px-12 !py-12 card-body">

                                <div className="text-center">
                                    <h4 className="mb-2 text-purple-500 dark:text-purple-500">Welcome Back !</h4>
                                    <p className="text-slate-500 dark:text-zink-200">Sign in to continue to Tailwick.</p>
                                </div>

                                <form action="/" className="mt-10" id="signInForm">
                                    <div className="hidden px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50" id="successAlert">
                                        You have <b>successfully</b> signed in.
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="inline-block mb-2 text-base font-medium">UserName/ Email ID</label>
                                        <input type="text" id="username" className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter username or email" />
                                        <div id="username-error" className="hidden mt-1 text-sm text-red-500">Please enter a valid email address.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="inline-block mb-2 text-base font-medium">Password</label>
                                        <input type="password" id="password" className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter password" />
                                        <div id="password-error" className="hidden mt-1 text-sm text-red-500">Password must be at least 8 characters long and contain both letters and numbers.</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <input id="checkboxDefault1" className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600/50 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400" type="checkbox" defaultValue="" />
                                            <label htmlFor="checkboxDefault1" className="inline-block text-base font-medium align-middle cursor-pointer">Remember me</label>
                                        </div>
                                        <div id="remember-error" className="hidden mt-1 text-sm text-red-500">Please check the "Remember me" before submitting the form.</div>
                                    </div>
                                    <div className="mt-10">
                                        <button type="submit" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Sign In</button>
                                    </div>

                                    <div className="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200 dark:before:border-t-zink-500">
                                        <h5 className="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 dark:bg-zink-600 dark:text-zink-200 rounded relative">Sign In with</h5>
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
                                        <p className="mb-0 text-slate-500 dark:text-zink-200">Don't have an account ? <Link to="/auth-register-boxed" className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"> SignUp</Link> </p>
                                    </div>
                                </form>
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
                                        <div className="relative dropdown text-end">
                                            <button type="button" className="inline-flex items-center gap-3 transition-all duration-200 ease-linear dropdown-toggle btn border-slate-200 dark:border-zink-400/60 group/items focus:border-custom-500 dark:focus:border-custom-500" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                <img src={us} alt="" className="object-cover h-5 rounded-full" />
                                                <h6 className="text-base font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">English</h6>
                                            </button>

                                            <div className="absolute z-50 hidden p-3 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[9rem] flex flex-col gap-3 dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <img src={img1} alt="" className="md:max-w-[32rem] mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default LoginBoxed;