import React from "react";
import Alert from "Common/Components/Alert";
import { AlertCircle, AlertTriangle, CheckCircle, MoveRight } from "lucide-react";

const ContentAlerts = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Content Alerts</h6>
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <Alert className="flex gap-3 p-4 text-sm rounded-md text-custom-500 bg-custom-50 dark:bg-custom-400/20">
                                <AlertCircle className="inline-block size-4 mt-0.5 shrink-0"></AlertCircle>
                                <Alert.Content>
                                    <h6 className="mb-1">Hi! A simple Primary alert —check it out!</h6>
                                    <ul className="ml-2 list-disc list-inside">
                                        <li>Send the billing agreement</li>
                                        <li>Send over all the documentation.</li>
                                        <li>Meeting with daron to review the intake form</li>
                                    </ul>
                                </Alert.Content>
                            </Alert>
                            <Alert className="flex gap-3 p-4 text-sm text-green-500 rounded-md bg-green-50 dark:bg-green-400/20">
                                <CheckCircle className="inline-block size-4 mt-0.5 shrink-0"></CheckCircle>
                                <Alert.Content>
                                    <h6 className="mb-1">Yey! Everything worked! A simple success alert —check it out!</h6>
                                    <ul className="ml-2 list-disc list-inside">
                                        <li>Send the billing agreement</li>
                                        <li>Send over all the documentation.</li>
                                        <li>Meeting with daron to review the intake form</li>
                                    </ul>
                                </Alert.Content>
                            </Alert>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Alert className="flex gap-3 p-4 text-sm text-yellow-500 rounded-md bg-yellow-50 dark:bg-yellow-400/20">
                                <AlertCircle className="inline-block size-4 mt-0.5 shrink-0"></AlertCircle>
                                <Alert.Content>
                                    <h6 className="mb-1">Uh oh, something went wrong!</h6>
                                    <p>Better check yourself, you're not looking too good. Whenever you need to, be sure to use margin utilities to keep things nice and tidy. If your device is running an outdated version of Android, this could be causing the issue. To check for updates, open your device's Settings app, go to System, and then tap System update.</p>
                                </Alert.Content>
                            </Alert>
                            <Alert className="flex gap-3 p-4 text-sm text-red-500 rounded-md bg-red-50 dark:bg-red-400/20">
                                <AlertTriangle className="inline-block size-4 mt-0.5 shrink-0"></AlertTriangle>
                                <Alert.Content>
                                    <h6 className="mb-1">Something is very wrong!</h6>
                                    <p className="mb-2">Change a few things up and try submitting again. A few informal nouns for a mistake are a blooper, boo-boo, and blunder. We also have hiccup, which means a minor problem/mistake that was corrected.</p>
                                    <a href="#!" className="font-semibold text-red-600 transition hover:text-red-700">Read More <MoveRight className="inline-block h-4 align-middle"></MoveRight></a>
                                </Alert.Content>
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContentAlerts;