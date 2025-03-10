import React from "react";
import { Nav } from "Common/Components/Tab/Nav";
import Tab from "Common/Components/Tab/Tab";
import { Contact, Home as HomeTab, Profile, Setting } from "./TabsPara";
import { User2, Settings, Phone, Home } from "lucide-react";

const IconArrow = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Icon Tabs</h6>
                    <div>
                        <Tab.Container defaultActiveKey="homeIcon">

                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs">
                                <Nav.Item eventKey="homeIcon" className="group">
                                    <a href="#!" data-tab-toggle data-target="homeIcon" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Home className="inline-block size-4 mr-1"></Home> <span className="align-middle">Home</span></a>
                                </Nav.Item>
                                <Nav.Item eventKey="ProfileIcon" className="group">
                                    <a href="#!" data-tab-toggle data-target="ProfileIcon" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><User2 className="inline-block size-4 mr-1"></User2> <span className="align-middle">Profile</span></a>
                                </Nav.Item>
                                <Nav.Item eventKey="settingIcon" className="group">
                                    <a href="#!" data-tab-toggle data-target="settingIcon" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Settings className="inline-block size-4 mr-1"></Settings> <span className="align-middle">Settings</span></a>
                                </Nav.Item>
                                <Nav.Item eventKey="contactIcon" className="group">
                                    <a href="#!" data-tab-toggle data-target="contactIcon" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Phone className="inline-block size-4 mr-1"></Phone> <span className="align-middle">Contacts</span></a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="mt-5 tab-content">
                                <Tab.Pane eventKey="homeIcon">
                                    <p className="mb-0"><HomeTab /></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ProfileIcon">
                                    <p className="mb-0"><Profile /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settingIcon">
                                    <p className="mb-0"><Setting /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="contactIcon">
                                    <p className="mb-0"><Contact /> </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Arrow Nav Tabs</h6>
                    <div>
                        <Tab.Container defaultActiveKey="homeArrow">

                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs">
                                <Nav.Item eventKey="homeArrow" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="homeArrow" className="relative inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:group-[.active]:text-white dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px] before:absolute before:-bottom-1.5 before:-rotate-[135deg] before:left-2/4 before:-translate-x-2/4 before:bg-transparent group-[.active]:before:bg-custom-500 before:h-3 before:w-3">Home</a>
                                </Nav.Item>
                                <Nav.Item eventKey="profileArrow" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="profileArrow" className="relative inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:group-[.active]:text-white dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px] before:absolute before:-bottom-1.5 before:-rotate-[135deg] before:left-2/4 before:-translate-x-2/4 before:bg-transparent group-[.active]:before:bg-custom-500 before:h-3 before:w-3">Profile</a>
                                </Nav.Item>
                                <Nav.Item eventKey="settingArrow" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="settingArrow" className="relative inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:group-[.active]:text-white dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px] before:absolute before:-bottom-1.5 before:-rotate-[135deg] before:left-2/4 before:-translate-x-2/4 before:bg-transparent group-[.active]:before:bg-custom-500 before:h-3 before:w-3">Settings</a>
                                </Nav.Item>
                                <Nav.Item eventKey="contactArrow" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="contactArrow" className="relative inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:group-[.active]:text-white dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px] before:absolute before:-bottom-1.5 before:-rotate-[135deg] before:left-2/4 before:-translate-x-2/4 before:bg-transparent group-[.active]:before:bg-custom-500 before:h-3 before:w-3">Contacts</a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="mt-5 tab-content">
                                <Tab.Pane eventKey="homeArrow">
                                    <p className="mb-0"><HomeTab /></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="profileArrow">
                                    <p className="mb-0"><Profile /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settingArrow">
                                    <p className="mb-0"><Setting /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="contactArrow">
                                    <p className="mb-0"><Contact /> </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default IconArrow;