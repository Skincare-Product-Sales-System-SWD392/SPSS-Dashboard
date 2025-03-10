import React from "react";

// Image
import logoLight from "assets/images/logo-light.png"
import logoDark from "assets/images/logo-dark.png"
import { Link } from "react-router-dom";

const TwoStepsCover = () => {

    document.title = "Two Steps | Tailwick - React Admin & Dashboard Template";

    React.useEffect(() => {
        const bodyElement = document.body;

        bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'bg-cover', 'bg-auth-pattern', 'dark:bg-auth-pattern-dark', 'dark:text-zink-100', 'font-public');

        return () => {
            bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'bg-cover', 'bg-auth-pattern', 'dark:bg-auth-pattern-dark', 'dark:text-zink-100', 'font-public');
        }
    }, []);

    return (
        <React.Fragment>
            <div className="mb-0 border-none lg:w-[500px] card bg-white/70 shadow-none dark:bg-zink-500/70">
                <div className="!px-10 !py-12 card-body">
                    <Link to="/">
                        <img src={logoLight} alt="" className="hidden h-6 mx-auto dark:block" />
                        <img src={logoDark} alt="" className="block h-6 mx-auto dark:hidden" />
                    </Link>

                    <div className="mt-8 text-center">
                        <h4 className="mb-2 text-custom-500 dark:text-custom-500">Verify Email</h4>
                        <p className="mb-8 text-slate-500 dark:text-zink-200">Please enter the <b className="font-medium">4</b> digit code sent to <b className="font-medium">tailwick@themesdesign.com</b></p>
                    </div>

                    <form autoComplete="off" action="/">
                        <div className="grid grid-cols-1 gap-2 xl:grid-cols-4">
                            <div>
                                <label htmlFor="digit1-input" className="hidden">Digit 1</label>
                                <input type="text" className="text-lg text-center form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required placeholder="0"
                                    // onkeyup="moveToNext(1, event)" maxlength="1"
                                    id="digit1-input" />
                            </div>
                            <div>
                                <label htmlFor="digit2-input" className="hidden">Digit 2</label>
                                <input type="text" className="text-lg text-center form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required placeholder="0"
                                    // onkeyup="moveToNext(2, event)" maxlength="1"
                                    id="digit2-input" />
                            </div>

                            <div>
                                <label htmlFor="digit3-input" className="hidden">Digit 3</label>
                                <input type="text" className="text-lg text-center form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required placeholder="0"
                                    // onkeyup="moveToNext(3, event)" maxlength="1"
                                    id="digit3-input" />
                            </div>

                            <div>
                                <label htmlFor="digit4-input" className="hidden">Digit 4</label>
                                <input type="text" className="text-lg text-center form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required placeholder="0"
                                    // onkeyup="moveToNext(4, event)" maxlength="1"
                                    id="digit4-input" />
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TwoStepsCover;