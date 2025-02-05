import React from "react";
import authEmail from "assets/images/auth-email.png";

// Image
import logoLight from "assets/images/logo-light.png";
import logoDark from "assets/images/logo-dark.png";
import { Link } from "react-router-dom";

const EmailCover = () => {

    document.title = "Verify Email | Tailwick - React Admin & Dashboard Template";

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
                        <h4 className="mb-1 text-custom-500 dark:text-custom-500">Verify Email</h4>
                        <p className="mb-4 text-slate-500 dark:text-zink-200">Did you not receive an email? Please <Link to="/" className="text-custom-500">try again</Link></p>
                        <Link to="/" className="px-2 py-1.5 text-xs text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100">Skip Now</Link>
                    </div>

                    <div className="pt-10 text-center">
                        <img src={authEmail} alt="" className="block w-2/3 mx-auto" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EmailCover;