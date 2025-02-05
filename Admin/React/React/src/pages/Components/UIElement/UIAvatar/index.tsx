import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import SquareCircular from "./SquareCircular";
import AvatarContent from "./AvatarContent";
import PlaceholderIconAvatar from "./PlaceholderIconAvatar";
import AvatarStatus from "./AvatarStatus";
import ContentWithStatus from "./ContentwithStatus";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

// Image
import avatar2 from "assets/images/users/avatar-2.png";
import user1 from "assets/images/users/user-1.jpg";
import user2 from "assets/images/users/user-2.jpg";
import user3 from "assets/images/users/user-3.jpg";
import user4 from "assets/images/users/user-4.jpg";

const UiAvatar = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Avatar" pageTitle="UI Elements" />

                <div>
                    <SquareCircular />
                    <AvatarContent />

                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4">Bordered Avatar</h6>
                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                                <div className="flex flex-wrap items-center gap-4">
                                    <img src={avatar2} alt="" className="h-10 rounded-md ring-1 ring-offset-2 ring-slate-200 dark:ring-offset-zink-700 dark:ring-zink-500" />
                                    <img src={avatar2} alt="" className="h-10 rounded-full ring-1 ring-offset-2 ring-slate-200 dark:ring-offset-zink-700 dark:ring-zink-500" />
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center justify-center size-10 rounded-md bg-custom-100 text-custom-500 ring-1 ring-offset-2 ring-custom-200 dark:ring-offset-zink-700 dark:ring-custom-900 dark:bg-custom-950">A</div>
                                    <div className="flex items-center justify-center size-10 rounded-full bg-custom-100 text-custom-500 ring-1 ring-offset-2 ring-custom-200 dark:ring-offset-zink-700 dark:ring-custom-900 dark:bg-custom-950">A</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <PlaceholderIconAvatar />
                    <AvatarStatus />
                    <ContentWithStatus />

                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4">Avatar Group</h6>
                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user1} alt="" />
                                        <img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user2} alt="" />
                                        <img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user3} alt="" />
                                        <img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user4} alt="" />
                                    </div>

                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user1} alt="" />
                                        <img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user2} alt="" />
                                        <img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user3} alt="" />
                                        <a className="flex items-center justify-center size-10 text-xs font-medium text-white border-2 border-white rounded-full bg-slate-700 hover:bg-slate-600 dark:border-zink-700" href="#!">+99</a>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <div className="flex items-center justify-center size-10 border-2 border-white rounded-full bg-custom-100 text-custom-500 dark:border-zink-700 dark:bg-custom-950">TG</div>
                                        <div className="flex items-center justify-center size-10 text-green-500 bg-green-100 border-2 border-white rounded-full dark:border-zink-700 dark:bg-green-900">PI</div>
                                        <div className="flex items-center justify-center size-10 text-purple-500 bg-purple-100 border-2 border-white rounded-full dark:border-zink-700">AU</div>
                                        <img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user3} alt="" />
                                        <div className="flex items-center justify-center size-10 text-yellow-500 bg-yellow-100 border-2 border-white rounded-full dark:bg-yellow-950 dark:border-zink-700">SS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4">Avatar Group with Tooltip</h6>
                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <a href="#!" data-tooltip-id="default" data-tooltip-content="Jose White"><img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user1} alt="" /></a>
                                        <Tooltip id="default" />
                                        <a href="#!" data-tooltip-id="default1" data-tooltip-content="Patricia Garcia"><img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user2} alt="" /></a>
                                        <Tooltip id="default1" />
                                        <a href="#!" data-tooltip-id="default2" data-tooltip-content="Tonya Johnson"><img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user3} alt="" /></a>
                                        <Tooltip id="default2" />
                                        <a href="#!" data-tooltip-id="default3" data-tooltip-content="Paula Keenan"><img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user4} alt="" /></a>
                                        <Tooltip id="default3" />
                                    </div>

                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <a href="#!" data-tooltip-id="default4" data-tooltip-content="Paula Keenan"><img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user3} alt="" /></a>
                                        <Tooltip id="default4" />
                                        <a href="#!" data-tooltip-id="default5" data-tooltip-content="Paula Keenan"><img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user3} alt="" /></a>
                                        <Tooltip id="default5" />
                                        <a href="#!" data-tooltip-id="default6" data-tooltip-content="Paula Keenan"><img className="size-10 border-2 border-white rounded-full dark:border-zink-700" src={user3} alt="" /></a>
                                        <Tooltip id="default6" />
                                        <a href="#!" data-tooltip-id="default7" data-tooltip-content="More Users" className="flex items-center justify-center size-10 text-xs font-medium text-white border-2 border-white rounded-full bg-slate-700 hover:bg-slate-600 dark:border-zink-700">+99</a>
                                        <Tooltip id="default7" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UiAvatar;