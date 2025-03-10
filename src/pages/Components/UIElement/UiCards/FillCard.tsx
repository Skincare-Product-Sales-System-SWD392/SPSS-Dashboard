import React from "react";
import { ChevronRight } from "lucide-react";

const FillCard = () => {
    return (
        <React.Fragment>
            <h5 className="mb-5 underline">Fill Card</h5>
            <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
                <div className="card bg-custom-500 border-custom-500 dark:bg-custom-800 dark:border-custom-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-white text-15">
                            Custom Card
                        </h6>
                        <p className="mb-4 dark:text-custom-300 text-custom-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-300 hover:text-custom-100" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="bg-green-500 border-green-500 card dark:bg-green-800 dark:border-green-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-white text-15">
                            Card title
                        </h6>
                        <p className="mb-4 text-green-100 dark:text-green-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-green-300 transition-all duration-200 ease-linear hover:text-green-100" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="bg-yellow-500 border-yellow-500 card dark:bg-yellow-800 dark:border-yellow-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-white text-15">
                            Yellow Card
                        </h6>
                        <p className="mb-4 text-yellow-100 dark:text-yellow-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition-all duration-200 ease-linear hover:text-yellow-100" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="card bg-sky-500 border-sky-500 dark:bg-sky-800 dark:border-sky-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-white text-15">
                            Sky Card
                        </h6>
                        <p className="mb-4 text-sky-200 dark:text-sky-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-sky-300 hover:text-sky-100" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="bg-red-500 border-red-500 card dark:bg-red-500 dark:border-red-500">
                    <div className="card-body">
                        <h6 className="mb-4 text-white text-15">
                            Red Card
                        </h6>
                        <p className="mb-4 text-red-200 dark:text-red-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-red-300 transition-all duration-200 ease-linear hover:text-red-100" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="bg-purple-500 border-purple-500 card dark:bg-purple-500 dark:border-purple-500">
                    <div className="card-body">
                        <h6 className="mb-4 text-white text-15">
                            Purple Card
                        </h6>
                        <p className="mb-4 text-purple-200 dark:text-purple-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition-all duration-200 ease-linear hover:text-purple-100" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="card bg-slate-500 border-slate-500 dark:bg-slate-500 dark:border-slate-500">
                    <div className="card-body">
                        <h6 className="mb-4 text-white text-15">
                            Slate Card
                        </h6>
                        <p className="mb-4 text-slate-200 dark:text-slate-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-slate-300 hover:text-slate-100" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FillCard;