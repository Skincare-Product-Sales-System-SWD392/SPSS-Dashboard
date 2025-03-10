import React from "react";
import { ChevronRight } from "lucide-react";

const DashedBorderCard = () => {
    return (
        <React.Fragment>
            <h5 className="mb-5 underline">Dashed Border Card</h5>
            <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
                <div className="border border-dashed card border-custom-200 dark:border-custom-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Custom Card
                        </h6>
                        <p className="mb-4 text-slate-500 dark:text-zink-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="border border-green-200 border-dashed card dark:border-green-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Green Card
                        </h6>
                        <p className="mb-4 text-slate-500 dark:text-zink-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="border border-orange-200 border-dashed card dark:border-orange-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Orange Card
                        </h6>
                        <p className="mb-4 text-slate-500 dark:text-zink-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="border border-dashed card border-sky-200 dark:border-sky-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Sky Card
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="border border-yellow-200 border-dashed card dark:border-yellow-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Yellow Card
                        </h6>
                        <p className="mb-4 text-slate-500 dark:text-zink-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="border border-red-200 border-dashed card dark:border-red-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Red Card
                        </h6>
                        <p className="mb-4 text-slate-500 dark:text-zink-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="border border-purple-200 border-dashed card dark:border-purple-800">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Purple Card
                        </h6>
                        <p className="mb-4 text-slate-500 dark:text-zink-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
                <div className="border border-dashed card border-slate-200 dark:border-zink-500">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Slate Card
                        </h6>
                        <p className="mb-4 text-slate-500 dark:text-zink-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600" href="#!">
                            Card link <ChevronRight className="inline-block size-4"></ChevronRight>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DashedBorderCard;