import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import BasicAlerts from "./BasicAlerts";
import OutlineAlerts from "./OutlineAlerts";
import BorderedAlerts from "./BorderedAlerts";
import DismissAlerts from "./DismissAlerts";
import IconAlerts from "./IconAlerts";
import ImagesAlerts from "./ImagesAlerts";
import Alert from "Common/Components/Alert";
import ContentAlerts from "./ContentAlerts";
import FillSolidAlerts from "./FillSolidAlerts";

const UiAlert = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Alerts" pageTitle="UI Elements" />

                <div>

                    <BasicAlerts />
                    <OutlineAlerts />
                    <BorderedAlerts />
                    <DismissAlerts />
                    <IconAlerts />
                    <ImagesAlerts />

                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Top Border Alerts</h6>
                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                                <div className="flex flex-col gap-3">
                                    <Alert className="relative p-3 pr-12 text-sm border border-t-2 border-transparent rounded-md border-t-custom-500 text-custom-500 bg-custom-50 dark:bg-custom-400/20 dark:border-t-custom-500/50">
                                        <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 transition text-custom-200 hover:text-custom-500 dark:text-custom-400/50 dark:hover:text-custom-500" />
                                        <Alert.Bold>Custom</Alert.Bold> alert! You should check in on some of those fields below.
                                    </Alert>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Alert className="relative p-3 pr-12 text-sm text-green-500 border border-t-2 border-transparent rounded-md bg-green-50 border-t-green-300 dark:bg-green-400/20 dark:border-t-green-500/50">
                                        <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-green-200 transition hover:text-green-500 dark:text-green-400/50 dark:hover:text-green-500" />
                                        <Alert.Bold>Green</Alert.Bold> alert! You should check in on some of those fields below.
                                    </Alert>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContentAlerts />
                    <FillSolidAlerts />
                </div>
            </div>
        </React.Fragment>
    );
}

export default UiAlert;