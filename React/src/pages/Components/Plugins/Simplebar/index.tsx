import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import SimpleBar from "simplebar-react";
import SimpleBarPara from "./SimpleBarPara";

const PSimpleBar = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Simplebar" pageTitle="UI Elements" />

                <div>
                    <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-3">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Default Scroll</h6>
                                <SimpleBar style={{ maxHeight: " 220px" }} className="pr-2 text-slate-500 dark:text-zink-200">
                                    <SimpleBarPara />
                                </SimpleBar>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Auto Hide False</h6>
                                <SimpleBar autoHide={false} style={{ maxHeight: " 220px" }} className="pr-2 text-slate-500 dark:text-zink-200">
                                    <SimpleBarPara />
                                </SimpleBar>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">RTL Direction</h6>
                                <SimpleBar data-simplebar-direction='rtl' style={{ maxHeight: " 220px" }} className="pl-2 text-gray-400 dark:text-zink-200">
                                    <SimpleBarPara />
                                </SimpleBar>
                            </div>
                        </div>
                    </div>
                    <h5 className="mb-4 underline">Simplebar Track Color:</h5>

                    <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-3">

                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Custom Track</h6>
                                <SimpleBar data-simplebar-track="custom" style={{ maxHeight: " 220px" }} className="pr-2 text-slate-500 dark:text-zink-200" >
                                    <SimpleBarPara />
                                </SimpleBar>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Green Track</h6>
                                <SimpleBar data-simplebar-track="green" style={{ maxHeight: " 220px" }} className="pr-2 text-slate-500 dark:text-zink-200 simplebar-track-success">
                                    <SimpleBarPara />
                                </SimpleBar>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Orange Track</h6>
                                <SimpleBar data-simplebar-track="orange" style={{ maxHeight: " 220px" }} className="pr-2 text-slate-500 dark:text-zink-200">
                                    <SimpleBarPara />
                                </SimpleBar>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Sky Track</h6>
                                <SimpleBar data-simplebar-track="sky" style={{ maxHeight: " 220px" }} className="pr-2 text-slate-500 dark:text-zink-200">
                                    <SimpleBarPara />
                                </SimpleBar>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Yellow Track</h6>
                                <SimpleBar data-simplebar-track="yellow" style={{ maxHeight: " 220px" }} className="pr-2 text-slate-500 dark:text-zink-200">
                                    <SimpleBarPara />
                                </SimpleBar>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Red Track</h6>
                                <SimpleBar data-simplebar-track="red" style={{ maxHeight: " 220px" }} className="pr-2 text-slate-500 dark:text-zink-200">
                                    <SimpleBarPara />
                                </SimpleBar>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PSimpleBar;