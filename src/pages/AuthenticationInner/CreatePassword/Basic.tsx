import React from "react";

// Image
import logoLight from "assets/images/logo-light.png"
import logoDark from "assets/images/logo-dark.png"
import AuthIcon from "../AuthIcon";
import { Link } from "react-router-dom";

const BasicCreatePassword = () => {

    document.title = "Create Password | Tailwick - React Admin & Dashboard Template";

    React.useEffect(() => {
        const bodyElement = document.body;

        bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');

        return () => {
            bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');
        }
    }, []);

    return (
        <React.Fragment>
            <div className="relative">
                <AuthIcon />

                <div className="mb-0 w-screen lg:w-[500px] card shadow-lg border-none shadow-slate-100 dark:shadow-zink-500/20 relative">
                    <div className="!px-10 !py-12 card-body">
                        <Link to="/">
                            <img src={logoLight} alt="" className="hidden h-6 mx-auto dark:block" />
                            <img src={logoDark} alt="" className="block h-6 mx-auto dark:hidden" />
                        </Link>

                        <div className="mt-8 text-center">
                            <h4 className="mb-2 text-custom-500 dark:text-custom-500">Set a New Password</h4>
                            <p className="mb-8 text-slate-500 dark:text-zink-200">Your new password should be distinct from any of your prior passwords</p>
                        </div>

                        <form autoComplete="off" action="/">
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="inline-block mb-2 text-base font-medium">Password</label>
                                <input type="password" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required placeholder="Password" id="passwordInput" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordConfirmInput" className="inline-block mb-2 text-base font-medium">Confirm Password</label>
                                <input type="password" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required placeholder="Confirm password" id="passwordConfirmInput" />
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="checkboxDefault1" className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400" type="checkbox" value="" />
                                <label htmlFor="checkboxDefault1" className="inline-block text-base font-medium align-middle cursor-pointer">Remember me</label>
                            </div>
                            <div className="mt-8">
                                <button type="submit" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Reset Password</button>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="mb-0">Hold on, I've got my password... <Link to="/auth-login-basic" className="underline fw-medium text-custom-500"> Click here </Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BasicCreatePassword;