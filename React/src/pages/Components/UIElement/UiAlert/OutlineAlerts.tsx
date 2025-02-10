import React from "react";
import Alert from "Common/Components/Alert";

const OutlineAlerts = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Outline Alerts</h6>
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <Alert className="px-4 py-3 text-sm bg-white border rounded-md border-custom-300 text-custom-500 dark:bg-zink-700 dark:border-custom-500">
                                <Alert.Bold>Custom</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm text-green-500 bg-white border border-green-300 rounded-md dark:bg-zink-700 dark:border-green-500">
                                <Alert.Bold>Green</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm text-orange-500 bg-white border border-orange-300 rounded-md dark:bg-zink-700 dark:border-orange-500">
                                <Alert.Bold>Orange</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm bg-white border rounded-md border-sky-300 text-sky-500 dark:bg-zink-700">
                                <Alert.Bold>Sky</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Alert className="px-4 py-3 text-sm text-yellow-500 bg-white border border-yellow-300 rounded-md dark:bg-zink-700 dark:border-yellow-500">
                                <Alert.Bold>Yellow</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm text-red-500 bg-white border border-red-300 rounded-md dark:bg-zink-700 dark:border-red-500">
                                <Alert.Bold>Red</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm text-purple-500 bg-white border border-purple-300 rounded-md dark:bg-zink-700 dark:border-purple-500">
                                <Alert.Bold>Warning</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm bg-white border rounded-md text-slate-500 border-slate-300 dark:bg-zink-700 dark:border-zink-500 dark:text-zink-200">
                                <Alert.Bold>Light</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OutlineAlerts;