import React from "react";
import Alert from "Common/Components/Alert";

const IconAlerts = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Alerts with Icon</h6>
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <Alert className="flex gap-1 px-4 py-3 text-sm border rounded-md md:items-center border-custom-200 text-custom-500 bg-custom-50 dark:bg-custom-400/20 dark:border-custom-500/50">
                                <Alert.Icon />
                                <Alert.Bold>Custom</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-1 px-4 py-3 text-sm text-green-500 border border-green-200 rounded-md md:items-center bg-green-50 dark:bg-green-400/20 dark:border-green-500/50">
                                <Alert.Icon />
                                <Alert.Bold>Green</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-1 px-4 py-3 text-sm text-orange-500 border border-orange-200 rounded-md md:items-center bg-orange-50 dark:bg-orange-400/20 dark:border-orange-500/50">
                                <Alert.Icon />
                                <Alert.Bold>Orange</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-1 px-4 py-3 text-sm border rounded-md md:items-center border-sky-200 text-sky-500 bg-sky-50 dark:bg-sky-400/20 dark:border-sky-500/50">
                                <Alert.Icon />
                                <Alert.Bold>Sky</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Alert className="flex gap-1 px-4 py-3 text-sm text-yellow-500 border border-yellow-200 rounded-md md:items-center bg-yellow-50 dark:bg-yellow-400/20 dark:border-yellow-500/50">
                                <Alert.Icon />
                                <Alert.Bold>Yellow</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-1 px-4 py-3 text-sm text-red-500 border border-red-200 rounded-md md:items-center bg-red-50 dark:bg-red-400/20 dark:border-red-500/50">
                                <Alert.Icon />
                                <Alert.Bold>Red</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-1 px-4 py-3 text-sm text-purple-500 border border-purple-200 rounded-md md:items-center bg-purple-50 dark:bg-purple-400/20 dark:border-purple-500/50">
                                <Alert.Icon />
                                <Alert.Bold>Warning</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-1 px-4 py-3 text-sm border rounded-md md:items-center text-slate-500 border-slate-200 bg-slate-50 dark:bg-zink-500/30 dark:border-zink-500 dark:text-zink-200">
                                <Alert.Icon />
                                <Alert.Bold>Light</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default IconAlerts;