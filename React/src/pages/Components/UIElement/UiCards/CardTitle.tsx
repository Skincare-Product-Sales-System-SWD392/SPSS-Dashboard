import React from "react";
import { ChevronRight } from "lucide-react";

const CardTitle = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-body">
                        <h6 className="mb-2 text-15">
                            Card title
                        </h6>
                        <p className="mb-4 text-xs font-medium uppercase">
                            Card subtitle
                        </p>
                        <p className="mt-2 text-slate-500 dark:text-zink-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="bg-slate-200 card-body rounded-t-md dark:bg-zink-600">
                        <h6 className="text-15">
                            Card title
                        </h6>
                    </div>
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                    <div className="bg-slate-200 card-body dark:bg-zink-600 rounded-b-md">
                        <p className="text-slate-500 ext-sm dark:text-zink-200">
                            Last updated 5 mins ago
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CardTitle;