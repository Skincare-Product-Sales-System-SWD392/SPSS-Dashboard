import React from "react";

// Image
import productCta from "assets/images/product/cta.png";
import { MoveRight } from "lucide-react";

const Features = () => {
    return (
        <React.Fragment>
            <section className="relative py-24 xl:py-32" id="features">
                <div className="absolute top-0 left-0 size-64 bg-purple-500/10 blur-3xl"></div>
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="grid items-center grid-cols-1 gap-6 mt-20 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <h1 className="mb-3 leading-normal capitalize" data-aos="fade-right" data-aos-delay="400">Explore our flagship product and discover its unique features</h1>
                            <p className="mb-5 text-lg text-slate-500 dark:text-zinc-400" data-aos="fade-right" data-aos-delay="500">Whatever your running gait, a good pair of running shoes will provide flexibility, durability, and support.</p>
                            <ul className="flex flex-col gap-2 mb-6 list-disc list-inside text-15" data-aos="fade-right" data-aos-delay="500">
                                <li>Matches Your Foot Shape & Type</li>
                                <li>Easy to Wear</li>
                                <li>Heels That You Can Wear</li>
                                <li>Good Quality & Condition</li>
                                <li>Segments of Solid Rubber</li>
                            </ul>
                            <a href="#!" className="text-custom-500 text-16" data-aos="fade-right" data-aos-delay="600"
                            >Shopping Now <MoveRight className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"></MoveRight>
                            </a>
                        </div>
                        <div className="relative lg:col-start-8 lg:col-span-7">
                            <div className="absolute right-0 bg-center bg-cover bottom-40 w-52 h-96 bg-[url('../images/product/cta-2.png')] rounded-md" data-aos="fade-left" data-aos-delay="400">
                                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-white dark:to-zinc-900 from-30%"></div>
                            </div>
                            <div className="mr-16">
                                <img src={productCta} alt="" className="relative inline-block" data-aos="fade-up-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default Features;