import React from "react";

// Image
import image1 from "assets/images/small/img-1.jpg";
import image4 from "assets/images/small/img-4.jpg";

const HorizontalCard = () => {
    return (
        <React.Fragment>
            <h5 className="mb-5 underline">Horizontal Card</h5>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <div className="card sm:flex">
                    <div>
                        <img className="transition-transform duration-500 ease-in-out group-hover/card:scale-105 rounded-l-md" src={image4} alt="" />
                    </div>
                    <div className="flex flex-wrap">
                        <div className="flex flex-col h-full card-body">
                            <h6 className="mb-4 text-15">
                                Card title
                            </h6>
                            <p className="text-slate-500 dark:text-zink-200">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <div className="mt-5 sm:mt-auto">
                                <p className="text-sm text-slate-500 dark:text-zink-200">
                                    Last updated 5 mins ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card sm:flex">
                    <div className="flex flex-wrap">
                        <div className="flex flex-col h-full card-body">
                            <h6 className="text-gray-800 text-15 dark:text-zink-50">
                                Card title
                            </h6>
                            <p className="mt-2 text-slate-500 dark:text-zink-200">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <div className="mt-5 sm:mt-auto">
                                <p className="text-slate-500 ext-sm dark:text-zink-200">
                                    Last updated 5 mins ago
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="transition-transform duration-500 ease-in-out group-hover/card:scale-105 rounded-r-md" src={image1} alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HorizontalCard;