import React from "react";
import BreadCrumb from "Common/BreadCrumb";

const UiVideo = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Video" pageTitle="UI Elements" />

                <div className="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Basic</h6>
                                <iframe className="w-full rounded-md aspect-video" title="Embedded YouTube Video" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Square</h6>
                                <iframe className="w-full rounded-md aspect-square" title="Embedded YouTube Video" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Video - 1/1</h6>
                                <iframe className="w-full rounded-md aspect-1/1" title="Embedded YouTube Video" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Auto</h6>
                                <iframe className="w-full rounded-md aspect-auto" title="Embedded YouTube Video" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Video - 4/3</h6>
                                <iframe className="w-full rounded-md aspect-4/3" title="Embedded YouTube Video" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Video - 16/9</h6>
                                <iframe className="w-full rounded-md aspect-16/9" title="Embedded YouTube Video" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-4 text-15">Video - 16/9</h6>
                                <iframe className="w-full rounded-md aspect-21/9" title="Embedded YouTube Video" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UiVideo;