import React from "react";
import Alert from "Common/Components/Alert";

const FillSolidAlerts = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Fill Solid Alerts</h6>
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <Alert className="relative p-3 pr-12 text-sm border border-transparent rounded-md text-custom-50 bg-custom-500">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 transition text-custom-200 hover:text-custom-100" />
                                <Alert.Bold>Custom</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm bg-green-500 border border-transparent rounded-md text-green-50">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-green-200 transition hover:text-green-100" />
                                <Alert.Bold>Green</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm bg-orange-500 border border-transparent rounded-md text-orange-50">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-orange-200 transition hover:text-orange-100" />
                                <Alert.Bold>Orange</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm border border-transparent rounded-md text-sky-50 bg-sky-500">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 transition text-sky-200 hover:text-sky-100" />
                                <Alert.Bold>Sky</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Alert className="relative p-3 pr-12 text-sm bg-yellow-500 border border-transparent rounded-md text-yellow-50">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-yellow-200 transition hover:text-yellow-100" />
                                <Alert.Bold>Yellow</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm bg-red-500 border border-transparent rounded-md text-red-50">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-red-200 transition hover:text-red-100" />
                                <Alert.Bold>Red</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm bg-purple-500 border border-transparent rounded-md text-purple-50">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-purple-200 transition hover:text-purple-100" />
                                <Alert.Bold>Warning</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm border border-transparent rounded-md text-slate-50 bg-slate-500 dark:bg-zink-500 dark:border-zink-500 dark:text-zink-100">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 transition text-slate-200 hover:text-slate-100" />
                                <Alert.Bold>Light</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FillSolidAlerts;