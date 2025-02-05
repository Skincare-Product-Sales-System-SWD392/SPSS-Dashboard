import React from "react";

// Image
import image2 from "assets/images/small/img-2.jpg";
import image5 from "assets/images/small/img-5.jpg";
import image7 from "assets/images/small/img-7.jpg";

const GroupCard = () => {
    return (
        <React.Fragment>
            <h5 className="mb-5 underline">Group Card</h5>
            <div className="grid overflow-hidden border sm:flex card">
                <div className="flex flex-col flex-[1_0_0%] rtl:border-b rtl:sm:border-b-0 ltr:border-r rtl:sm:border-l border-slate-200 dark:border-zink-500">
                    <img className="w-full h-auto rounded-t-md sm:rounded-tr-none" src={image2} alt="" />
                    <div className="flex-1 card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                    </div>
                    <div className="border-t card-body border-slate-200 dark:border-zink-500">
                        <p className="text-xs">
                            Last updated 5 mins ago
                        </p>
                    </div>
                </div>
                <div className="flex flex-col flex-[1_0_0%] rtl:border-b rtl:sm:border-b-0 ltr:border-r rtl:sm:border-l border-slate-200 dark:border-zink-500">
                    <img className="w-full h-auto" src={image7} alt="" />
                    <div className="flex-1 card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            This card has supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>
                    <div className="border-t card-body border-slate-200 dark:border-zink-500">
                        <p className="text-xs">
                            Last updated 5 mins ago
                        </p>
                    </div>
                </div>

                <div className="flex flex-col flex-[1_0_0%]">
                    <img className="w-full h-auto sm:rounded-tr-md" src={image5} alt="" />
                    <div className="flex-1 card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                        </p>
                    </div>
                    <div className="border-t card-body border-slate-200 dark:border-zink-500">
                        <p className="text-xs">
                            Last updated 5 mins ago
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default GroupCard;