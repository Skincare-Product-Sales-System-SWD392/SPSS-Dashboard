import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { GoogleApiWrapper, Map } from "google-maps-react";
import { connect } from "react-redux";

interface IProvidedProps {
    google: object;
}

const MapsGoogle: React.FC<IProvidedProps> = (props) => {

    const { google } = props;

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Google Maps" pageTitle="Maps" />

                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Markers</h6>
                            <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                                <Map
                                    google={google}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Overlays</h6>
                            <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                                <Map
                                    google={google}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Street View Panoramas</h6>
                            <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                                <Map
                                    google={google}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Map Types</h6>
                            <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                                <Map
                                    google={google}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

const ConnectedMapsGoogle = connect(
    null,
    {}
)(GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    // v: "3",
})(MapsGoogle));

export default ConnectedMapsGoogle;
