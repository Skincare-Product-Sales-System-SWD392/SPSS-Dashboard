import React from "react";
import { Rocket, ShoppingCart } from "lucide-react";

const Home = () => {
    return (
        <React.Fragment>
            <section className="relative pb-36 pt-44" id="home">
                <div className="absolute rotate-45 border border-dashed size-[500px] border-t-slate-300 dark:border-t-zink-500 border-l-slate-300 dark:border-l-zink-500 border-r-slate-700 dark:border-r-zink-400 border-b-slate-700 dark:border-b-zink-400 -bottom-[250px] rounded-full ltr:right-40 rtl:left-40 z-10 hidden lg:block"></div>
                <div className="absolute rotate-45 border border-dashed size-[700px] border-t-slate-300 dark:border-t-zink-500 border-l-slate-300 dark:border-l-zink-500 border-r-slate-700 dark:border-r-zink-400 border-b-slate-700 dark:border-b-zink-400 -bottom-[350px] rounded-full ltr:right-16 rtl:left-16 z-10 hidden 2xl:block"></div>
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="grid grid-cols-12 2xl:grid-cols-2">
                        <div className="col-span-12 lg:col-span-7 2xl:col-span-1">
                            <h1 className="mb-8 !leading-relaxed md:text-5xl">Effective Management of Large Projects at <span className="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-sky-50 dark:before:bg-sky-500/20 before:rounded-md before:backdrop-blur-xl"><span className="relative text-sky-500">Tailwick</span></span></h1>
                            <p className="mb-6 text-lg text-slate-500 dark:text-zink-200">Effective professional services project management means having a firm grasp on the scope, budget, resources, personnel, and timeline dedicated to a project. An effective project manager is able to manage unplanned issues while keeping the ball rolling on company goals and tasks in progress.</p>
                            <div className="flex items-center gap-2">
                                <button type="button" className="py-2.5 px-6 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Rocket className="inline-block size-4 align-middle rtl:ml-1 ltr:mr-1"></Rocket> Get Started</button>
                                <button type="button" className="py-2.5 px-6 text-red-500 bg-white border-red-500 border-dashed btn hover:text-red-500 hover:bg-red-50 hover:border-red-600 focus:text-red-600 focus:bg-red-50 focus:border-red-600 active:text-red-600 active:bg-red-50 active:border-red-600 dark:bg-zink-800 dark:ring-red-400/20 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20 dark:active:bg-red-800/20"><ShoppingCart className="inline-block size-4 align-middle rtl:ml-1 ltr:mr-1"></ShoppingCart> <span className="align-middle">Buy Now</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default Home;