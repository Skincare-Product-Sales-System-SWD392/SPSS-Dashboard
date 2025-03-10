import React from "react";
import Alert from "Common/Components/Alert";

const BasicAlerts = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Basic Alerts</h6>
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <Alert className="px-4 py-3 text-sm border border-transparent rounded-md text-custom-500 bg-custom-50 dark:bg-custom-400/20">
                                <Alert.Bold>Custom</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm text-green-500 border border-transparent rounded-md bg-green-50 dark:bg-green-400/20">
                                <Alert.Bold>Green</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm text-orange-500 border border-transparent rounded-md bg-orange-50 dark:bg-orange-400/20">
                                <Alert.Bold>Orange</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm border border-transparent rounded-md text-sky-500 bg-sky-50 dark:bg-sky-400/20">
                                <Alert.Bold>Sky</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Alert className="px-4 py-3 text-sm text-yellow-500 border border-transparent rounded-md bg-yellow-50 dark:bg-yellow-400/20">
                                <Alert.Bold>Yellow</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
                                <Alert.Bold>Red</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm text-purple-500 border border-transparent rounded-md bg-purple-50 dark:bg-purple-400/20">
                                <Alert.Bold>Warning</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="px-4 py-3 text-sm rounded-md text-slate-500 bg-slate-50 dark:bg-zink-400/20 dark:text-zink-200">
                                <Alert.Bold>Light</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BasicAlerts;