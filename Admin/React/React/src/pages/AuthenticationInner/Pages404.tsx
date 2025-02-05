import React from "react";
import { Home } from "lucide-react";

// Image
import logoLight from "assets/images/logo-light.png"
import logoDark from "assets/images/logo-dark.png"
import error404 from "assets/images/auth/error-404.png"
import { Link } from "react-router-dom";

const Pages404 = () => {

    document.title = "404 | Tailwick - React Admin & Dashboard Template";

    React.useEffect(() => {
        const bodyElement = document.body;

        bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'bg-cover', 'bg-auth-pattern', 'dark:bg-auth-pattern-dark', 'font-public');

        return () => {
            bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'bg-cover', 'bg-auth-pattern', 'dark:bg-auth-pattern-dark', 'font-public');
        }
    }, []);

    return (
        <React.Fragment>
            <div className="mb-0 border-none shadow-none lg:w-[500px] card bg-white/70 dark:bg-zink-500/70">
                <div className="!px-10 !py-12 card-body">
                    <Link to="/">
                        <img src={logoLight} alt="" className="hidden h-6 mx-auto dark:block" />
                        <img src={logoDark} alt="" className="block h-6 mx-auto dark:hidden" />
                    </Link>

                    <div className="mt-10">
                        <img src={error404} alt="" className="h-64 mx-auto" />
                    </div>
                    <div className="mt-8 text-center">
                        <h4 className="mb-2 text-purple-500">OPPS, PAGE NOT FOUND</h4>
                        <p className="mb-6 text-slate-500 dark:text-zink-200">It will be as straightforward as Occidental; in fact, it will be just like Occidental to an English speaker.</p>
                        <Link to="/" className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                            <Home className="inline-block size-3 ltr:mr-1 rtl:ml-1"></Home> <span className="align-middle">Back to Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Pages404;