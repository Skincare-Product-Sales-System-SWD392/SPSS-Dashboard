import React from "react";
import { RefreshCcw } from "lucide-react";

// Image
import logoLight from "assets/images/logo-light.png"
import logoDark from "assets/images/logo-dark.png"
import offline from "assets/images/auth/offline.png"
import { Link } from "react-router-dom";

const Offline = () => {

    document.title = "Offline | Tailwick - React Admin & Dashboard Template";

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
                        <img src={offline} alt="" className="mx-auto h-72" />
                    </div>
                    <div className="mt-8 text-center">
                        <h4 className="mb-2 text-purple-500">We're Temporarily Offline</h4>
                        <p className="mb-6 text-slate-500 dark:text-zink-200">We can't display these images as you're currently not connected to the internet. Once you're back online, please refresh the page or click the button below.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                            <RefreshCcw className="inline-block size-3 ltr:mr-1 rtl:ml-1"></RefreshCcw> <span className="align-middle">Refresh</span>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Offline;