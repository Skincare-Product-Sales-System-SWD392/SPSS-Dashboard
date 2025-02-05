import React from "react";
import { pricingData } from "Common/data";
import { CheckCheck, X } from "lucide-react";

const Plans = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

                {
                    (pricingData || [])?.map((item: any, index: number) => (
                        <div className={`card ${item.isSale ? "relative overflow-hidden" : ""}`} key={index}>
                            <div className="card-body">
                                {item.isSale &&
                                    <div className="absolute top-0 right-0 size-16">
                                        <div className="absolute transform rotate-45 bg-sky-600 text-center text-white font-medium py-1 -right-12 top-6 w-[170px]">
                                            25% Sale
                                        </div>
                                    </div>
                                }
                                <h5 className="mb-2">
                                    <item.icon className={`inline-block size-5 mr-1 text-${item.color}-500`}></item.icon> <span className="align-middle">{item.plan}</span></h5>
                                <p className="mb-4 text-slate-500 dark:text-zink-200">{item.description}</p>

                                <h1 className="mb-4 font-normal"><span className="text-slate-500 dark:text-zink-200">$</span>{item.price}
                                    <small className="text-15 text-slate-500 dark:text-zink-200">/Monthly</small></h1>
                                <button type="button" className="w-full bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">Purchase Now</button>
                                <ul className="flex flex-col gap-3 mt-5">
                                    {(item.features || [])?.map((feature: any, index: number) => (
                                        <li className={`flex items-center gap-2 ${!feature.isRight ? "line-through text-slate-500 dark:text-zink-200" : ""}`} key={index}>
                                            {
                                                feature.isRight ?
                                                    <CheckCheck className="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCheck>
                                                    :
                                                    <X className="inline-block size-4 text-red-500 fill-green-100"></X>
                                            }
                                            <span>{feature.number && <b>{feature.number}</b>} {feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    );
}

export default Plans;