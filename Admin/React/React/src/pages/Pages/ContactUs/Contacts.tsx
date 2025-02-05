import React from "react";
import { cardData } from "Common/data";

const Contacts = () => {
    return (
        <React.Fragment>
            <div className="mx-auto mb-16 text-center xl:w-2/5">
                <h4 className="mb-2">Contact Us</h4>
                <p className="text-slate-500 dark:text-zink-200">Fill out the form and a member from our sales team will get back to you within 2 working days, or scroll down for more ways to get in touch.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {(cardData || [])?.map((card: any, index: number) => (
                    <div key={index} className="card">
                        <div className="!px-6 card-body flex flex-col h-full">
                            <div className="flex items-center justify-center size-16 mx-auto text-xl bg-white rounded-full shadow dark:bg-zink-600 -mt-14">
                                <card.icon className={card.iconColor}></card.icon>
                            </div>
                            <div className="mt-5 text-center">
                                <h6 className="mb-2 text-16">{card.title}</h6>
                                {card.address && <p className="mb-5 text-slate-500 dark:text-zink-200">{card.address}</p>}
                                {card.email && <p className={`${index === cardData.length - 3 ? "mb-5" : "mb-1"} text-slate-500 dark:text-zink-200`}>{card.email}</p>}
                                {card.website && <p className="mb-5 text-slate-500 dark:text-zink-200">{card.website}</p>}
                                {card.phone && <p className="mb-5 text-slate-500 dark:text-zink-200">{card.phone}</p>}

                            </div>
                            <div className="mt-auto text-center">
                                <a
                                    href={card.link.url}
                                    className="transition-all duration-200 ease-linear text-custom-500 hover:text-custom-800 dark:hover:text-custom-400"
                                >
                                    {card.link.text} <card.link.icon className={`inline-block size-4 ${card.link.iconDirection}`}></card.link.icon>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default Contacts;