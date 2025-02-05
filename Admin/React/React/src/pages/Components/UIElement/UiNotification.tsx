import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { ToastContainer, ToastPosition, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const UiNotification = () => {

    const defaultToast = () => toast.info("Welcome Back! This is a Toast Notification", { autoClose: 3000, theme: "colored", icon: false });
    const greenToast = () => toast.success("Your application was successfully sent", { autoClose: 3000, theme: "colored", icon: false, position: toast.POSITION.TOP_LEFT, closeButton: false });
    const warningToast = () => toast.warning("Warning ! Something went wrong try again", { autoClose: 3000, theme: "colored", icon: false, position: toast.POSITION.TOP_LEFT, closeButton: false });
    const errorToast = () => toast.error("Error ! An error occurred.", { autoClose: 3000, theme: "colored", icon: false, position: toast.POSITION.TOP_LEFT, closeButton: false });

    const handleToastPosition = (gravity: any, position: any) => {
        let toastPosition: ToastPosition | undefined;

        if (gravity === 'TOP' && position === 'LEFT') {
            toastPosition = toast.POSITION.TOP_LEFT;
        } else if (gravity === 'TOP' && position === 'CENTER') {
            toastPosition = toast.POSITION.TOP_CENTER;
        } else if (gravity === 'TOP' && position === 'RIGHT') {
            toastPosition = toast.POSITION.TOP_RIGHT;
        } else if (gravity === 'BOTTOM' && position === 'LEFT') {
            toastPosition = toast.POSITION.BOTTOM_LEFT;
        } else if (gravity === 'BOTTOM' && position === 'CENTER') {
            toastPosition = toast.POSITION.BOTTOM_CENTER;
        } else if (gravity === 'BOTTOM' && position === 'RIGHT') {
            toastPosition = toast.POSITION.BOTTOM_RIGHT;
        }

        toast.info("Welcome Back! This is a Toast Notification", {
            autoClose: 3000,
            theme: "colored",
            icon: false,
            position: toastPosition
        });
    }

    const offsetPosition = () => toast.info("Welcome Back ! This is a Toast Notification", { autoClose: 3000, theme: "colored", icon: false, position: toast.POSITION.TOP_RIGHT });
    const CloseIconDisplay = () => toast.info("Welcome Back ! This is a Toast Notification", { autoClose: 3000, theme: "colored", icon: false, position: toast.POSITION.TOP_RIGHT });
    const Duration = () => toast.info("Toast Duration 5s", { autoClose: 5000, theme: "colored", icon: false, position: toast.POSITION.TOP_RIGHT });

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Notification" pageTitle="UI Elements" />
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="mb-4 text-15">Toastify JS</h5>
                            <div className="flex flex-wrap gap-2">
                                <button type="button" onClick={defaultToast}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Default</button>
                                <button type="button" onClick={greenToast}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Success</button>
                                <button type="button" onClick={warningToast}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Warning</button>
                                <button type="button" onClick={errorToast}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Error</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="mb-4 text-15">Display Position</h5>
                            <div className="flex flex-wrap gap-2">
                                <button type="button" onClick={() => handleToastPosition("TOP", "LEFT")}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Top Left</button>
                                <button type="button" onClick={() => handleToastPosition("TOP", "CENTER")}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Top Center</button>
                                <button type="button" onClick={() => handleToastPosition("TOP", "RIGHT")}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Top Right</button>
                                <button type="button" onClick={() => handleToastPosition("BOTTOM", "LEFT")}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Bottom Left</button>
                                <button type="button" onClick={() => handleToastPosition("BOTTOM", "CENTER")}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Bottom Center</button>
                                <button type="button" onClick={() => handleToastPosition("BOTTOM", "RIGHT")}
                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                >Bottom Right</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="mb-4 text-15">Offset Position</h5>
                                <div className="flex flex-wrap items-center gap-2">
                                    <button type="button" onClick={offsetPosition}
                                        className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                    >Click Me</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="mb-4 text-15">Close icon Display</h5>
                                <div className="flex flex-wrap items-center gap-2">
                                    <button type="button" onClick={CloseIconDisplay}
                                        className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                    >Click Me</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="mb-4 text-15">Duration</h5>
                                <div className="flex flex-wrap items-center gap-2">
                                    <button type="button" onClick={Duration}
                                        className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                    >Click Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </React.Fragment>
    );
}

export default UiNotification;