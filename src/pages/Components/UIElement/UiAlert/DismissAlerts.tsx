import React from "react";
import Alert from "Common/Components/Alert";

const DismissAlerts = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Dismiss Alerts</h6>
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <Alert className="relative p-3 pr-12 text-sm border border-transparent rounded-md text-custom-500 bg-custom-50 dark:bg-custom-400/20">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 transition text-custom-200 hover:text-custom-500 dark:text-custom-400/50 dark:hover:text-custom-500" />
                                <Alert.Bold className="font-bold">Custom</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm text-green-500 border border-transparent rounded-md bg-green-50 dark:bg-green-400/20">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-green-200 transition hover:text-green-500 dark:text-green-400/50 dark:hover:text-green-500" />
                                <Alert.Bold className="font-bold">Green</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm text-orange-500 border border-transparent rounded-md bg-orange-50 dark:bg-orange-400/20">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-orange-200 transition hover:text-orange-500 dark:text-orange-400/50 dark:hover:text-orange-500" />
                                <Alert.Bold className="font-bold">Orange</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm border border-transparent rounded-md text-sky-500 bg-sky-50 dark:bg-sky-400/20">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 transition text-sky-200 hover:text-sky-500 dark:text-sky-400/50 dark:hover:text-sky-500" />
                                <Alert.Bold className="font-bold">Sky</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Alert className="relative p-3 pr-12 text-sm text-yellow-500 border border-transparent rounded-md bg-yellow-50 dark:bg-yellow-400/20">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-yellow-200 transition hover:text-yellow-500 dark:text-yellow-400/50 dark:hover:text-yellow-500" />
                                <Alert.Bold className="font-bold">Yellow</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-red-200 transition hover:text-red-500 dark:text-red-400/50 dark:hover:text-red-500" />
                                <Alert.Bold className="font-bold">Red</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm text-purple-500 border border-transparent rounded-md bg-purple-50 dark:bg-purple-400/20">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 text-purple-200 transition hover:text-purple-500 dark:text-purple-400/50 dark:hover:text-purple-500" />
                                <Alert.Bold className="font-bold">Warning</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="relative p-3 pr-12 text-sm border border-transparent rounded-md text-slate-500 bg-slate-50 dark:bg-zink-400/20 dark:text-zink-200">
                                <Alert.Close className="absolute top-0 bottom-0 right-0 p-3 transition text-slate-200 hover:text-slate-500 dark:text-zink-300 dark:hover:text-zink-200" />
                                <Alert.Bold className="font-bold">Light</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DismissAlerts;