import React from "react";
import { ChevronRight } from "lucide-react";

const ModernCard = () => {
    return (
        <React.Fragment>
            <h5 className="mb-5 underline">Modern Card</h5>
            <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
                <div className="card bg-custom-100 border-custom-200 dark:bg-custom-400/20 dark:border-custom-600">
                    <div className="card-body">
                        <h6 className="mb-4 text-custom-500 dark:text-custom-200 text-15">
                            Custom Card
                        </h6>
                        <p className="mb-4 text-custom-400">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-400 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="bg-green-100 border-green-200 card dark:bg-green-400/20 dark:border-green-600">
                    <div className="card-body">
                        <h6 className="mb-4 text-green-500 text-15 dark:text-green-200">
                            Green Card
                        </h6>
                        <p className="mb-4 text-green-400">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-green-400 transition-all duration-200 ease-linear hover:text-green-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="bg-orange-100 border-orange-200 card dark:bg-orange-400/20 dark:border-orange-600">
                    <div className="card-body">
                        <h6 className="mb-4 text-orange-500 text-15 dark:text-orange-200">
                            Orange Card
                        </h6>
                        <p className="mb-4 text-orange-400">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 transition-all duration-200 ease-linear hover:text-orange-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="card bg-sky-100 border-sky-200 dark:bg-sky-400/20 dark:border-sky-600">
                    <div className="card-body">
                        <h6 className="mb-4 text-sky-500 text-15 dark:text-sky-200">
                            Sky Card
                        </h6>
                        <p className="mb-4 text-sky-400">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-sky-400 hover:text-sky-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="bg-yellow-100 border-yellow-200 card dark:bg-yellow-400/20 dark:border-yellow-600">
                    <div className="card-body">
                        <h6 className="mb-4 text-yellow-500 text-15 dark:text-yellow-200">
                            Yellow Card
                        </h6>
                        <p className="mb-4 text-yellow-400">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition-all duration-200 ease-linear hover:text-yellow-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="bg-red-100 border-red-200 card dark:bg-red-400/20 dark:border-red-600">
                    <div className="card-body">
                        <h6 className="mb-4 text-red-500 text-15 dark:text-red-200">
                            Red
                        </h6>
                        <p className="mb-4 text-red-400">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-red-400 transition-all duration-200 ease-linear hover:text-red-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="bg-purple-100 border-purple-200 card dark:bg-purple-400/20 dark:border-purple-600">
                    <div className="card-body">
                        <h6 className="mb-4 text-purple-500 text-15 dark:text-purple-200">
                            Purple Card
                        </h6>
                        <p className="mb-4 text-purple-400">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-all duration-200 ease-linear hover:text-purple-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="card bg-slate-200 border-slate-200 dark:bg-slate-400/20 dark:border-slate-600">
                    <div className="card-body">
                        <h6 className="mb-4 text-slate-400 text-15 dark:text-slate-200">
                            Slate Card
                        </h6>
                        <p className="mb-4 text-slate-400">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-slate-400 hover:text-slate-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ModernCard;