import React from "react";
import { User2 } from "lucide-react";

const PlaceholderIconAvatar = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4">Placeholder Icon Avatar</h6>
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="relative size-10 overflow-hidden rounded-full bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-300">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-slate-200 dark:fill-zink-500"></User2>
                            </div>
                            <div className="relative size-10 overflow-hidden rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-custom-200 dark:fill-custom-900"></User2>
                            </div>
                            <div className="relative size-10 overflow-hidden text-green-500 bg-green-100 rounded-full dark:bg-green-900">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-green-200 dark:fill-green-800"></User2>
                            </div>
                            <div className="relative size-10 overflow-hidden text-orange-500 bg-orange-100 rounded-full dark:bg-orange-950">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-orange-200 dark:fill-orange-900"></User2>
                            </div>
                            <div className="relative size-10 overflow-hidden text-yellow-500 bg-yellow-100 rounded-full dark:bg-yellow-950">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-yellow-200 dark:fill-yellow-900"></User2>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="relative size-10 overflow-hidden rounded-md bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-300">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-slate-200 dark:fill-zink-500"></User2>
                            </div>
                            <div className="relative size-10 overflow-hidden rounded-md bg-custom-100 text-custom-500 dark:bg-custom-950">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-custom-200 dark:fill-custom-900"></User2>
                            </div>
                            <div className="relative size-10 overflow-hidden text-green-500 bg-green-100 rounded-md dark:bg-green-900">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-green-200 dark:fill-green-800"></User2>
                            </div>
                            <div className="relative size-10 overflow-hidden text-orange-500 bg-orange-100 rounded-md dark:bg-orange-950">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-orange-200 dark:fill-orange-900"></User2>
                            </div>
                            <div className="relative size-10 overflow-hidden text-yellow-500 bg-yellow-100 rounded-md dark:bg-yellow-950">
                                <User2 className="absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1 fill-yellow-200 dark:fill-yellow-900"></User2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PlaceholderIconAvatar;