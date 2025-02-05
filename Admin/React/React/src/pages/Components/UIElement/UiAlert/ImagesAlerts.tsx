import React from "react";
import Alert from "Common/Components/Alert";

// Image
import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";
import avatar4 from "assets/images/users/avatar-4.png";
import avatar5 from "assets/images/users/avatar-5.png";
import avatar6 from "assets/images/users/avatar-6.png";
import avatar7 from "assets/images/users/avatar-7.png";
import avatar8 from "assets/images/users/avatar-8.png";


const ImagesAlerts = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Alerts with Images</h6>
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <Alert className="flex gap-2 px-4 py-3 text-sm border rounded-md md:items-center border-custom-200 text-custom-500 bg-custom-50 dark:bg-custom-400/20 dark:border-custom-500/50">
                                <Alert.Image src={avatar1} alt="" className="size-8 rounded-full" />
                                <Alert.Bold>Custom</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-2 px-4 py-3 text-sm text-green-500 border border-green-200 rounded-md md:items-center bg-green-50 dark:bg-green-400/20 dark:border-green-500/50">
                                <Alert.Image src={avatar2} alt="" className="size-8 rounded-full" />
                                <Alert.Bold>Green</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-2 px-4 py-3 text-sm text-orange-500 border border-orange-200 rounded-md md:items-center bg-orange-50 dark:bg-orange-400/20 dark:border-orange-500/50">
                                <Alert.Image src={avatar3} alt="" className="size-8 rounded-full" />
                                <Alert.Bold>Orange</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-2 px-4 py-3 text-sm border rounded-md md:items-center border-sky-200 text-sky-500 bg-sky-50 dark:bg-sky-400/20 dark:border-sky-500/50">
                                <Alert.Image src={avatar4} alt="" className="size-8 rounded-full" />
                                <Alert.Bold>Sky</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Alert className="flex gap-2 px-4 py-3 text-sm text-yellow-500 border border-yellow-200 rounded-md md:items-center bg-yellow-50 dark:bg-yellow-400/20 dark:border-yellow-500/50">
                                <Alert.Image src={avatar5} alt="" className="size-8 rounded-full" />
                                <Alert.Bold>Yellow</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-2 px-4 py-3 text-sm text-red-500 border border-red-200 rounded-md md:items-center bg-red-50 dark:bg-red-400/20 dark:border-red-500/50">
                                <Alert.Image src={avatar6} alt="" className="size-8 rounded-full" />
                                <Alert.Bold>Red</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-2 px-4 py-3 text-sm text-purple-500 border border-purple-200 rounded-md md:items-center bg-purple-50 dark:bg-purple-400/20 dark:border-purple-500/50">
                                <Alert.Image src={avatar7} alt="" className="size-8 rounded-full" />
                                <Alert.Bold>Warning</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                            <Alert className="flex gap-2 px-4 py-3 text-sm border rounded-md md:items-center text-slate-500 border-slate-200 bg-slate-50 dark:bg-zink-500/30 dark:border-zink-500 dark:text-zink-200">
                                <Alert.Image src={avatar8} alt="" className="size-8 rounded-full" />
                                <Alert.Bold>Light</Alert.Bold> alert! You should check in on some of those fields below.
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ImagesAlerts;