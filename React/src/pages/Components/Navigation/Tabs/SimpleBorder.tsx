import React from "react";
import Tab from "Common/Components/Tab/Tab";
import { Nav } from "Common/Components/Tab/Nav";
import { Contact, Home, Profile, Setting } from "./TabsPara";

const SimpleBorder = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Simple Tabs</h6>
                    <div>
                        <Tab.Container defaultActiveKey="homeSimple">

                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs">
                                <Nav.Item eventKey="homeSimple" className="group">
                                    <a href="#!" data-tab-toggle data-target="homeSimple" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-custom-500 -mb-[1px]">Home</a>
                                </Nav.Item>
                                <Nav.Item eventKey="ProfileSimple" className="group">
                                    <a href="#!" data-tab-toggle data-target="ProfileSimple" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-custom-500 -mb-[1px]">Profile</a>
                                </Nav.Item>
                                <Nav.Item eventKey="settingSimple" className="group">
                                    <a href="#!" data-tab-toggle data-target="settingSimple" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-custom-500 -mb-[1px]">Settings</a>
                                </Nav.Item>
                                <Nav.Item eventKey="contactSimple" className="group">
                                    <a href="#!" data-tab-toggle data-target="contactSimple" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-custom-500 -mb-[1px]">Contacts</a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="mt-5 tab-content">
                                <Tab.Pane eventKey="homeSimple" id="homeSimple">
                                    <p className="mb-0"><Home /></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ProfileSimple" id="ProfileSimple">
                                    <p className="mb-0"><Profile /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settingSimple" id="settingSimple">
                                    <p className="mb-0"><Setting /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="contactSimple" id="contactSimple">
                                    <p className="mb-0"><Contact /> </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Border Top Nav</h6>
                    <div>
                        <Tab.Container defaultActiveKey="homeBorderTop">

                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs">
                                <Nav.Item eventKey="homeBorderTop" className="group">
                                    <a href="#!" data-tab-toggle data-target="homeBorderTop" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent border-t-2 group-[.active]:text-red-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-t-red-500 dark:group-[.active]:border-t-red-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-red-500 active:text-red-500 dark:hover:text-red-500 dark:active:text-red-500 -mb-[1px]">Home</a>
                                </Nav.Item>
                                <Nav.Item eventKey="ProfileBorderTop" className="group">
                                    <a href="#!" data-tab-toggle data-target="ProfileBorderTop" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent border-t-2 group-[.active]:text-red-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-t-red-500 dark:group-[.active]:border-t-red-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-red-500 active:text-red-500 dark:hover:text-red-500 dark:active:text-red-500 -mb-[1px]">Profile</a>
                                </Nav.Item>
                                <Nav.Item eventKey="settingBorderTop" className="group">
                                    <a href="#!" data-tab-toggle data-target="settingBorderTop" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent border-t-2 group-[.active]:text-red-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-t-red-500 dark:group-[.active]:border-t-red-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-red-500 active:text-red-500 dark:hover:text-red-500 dark:active:text-red-500 -mb-[1px]">Settings</a>
                                </Nav.Item>
                                <Nav.Item eventKey="contactBorderTop" className="group">
                                    <a href="#!" data-tab-toggle data-target="contactBorderTop" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent border-t-2 group-[.active]:text-red-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-t-red-500 dark:group-[.active]:border-t-red-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-red-500 active:text-red-500 dark:hover:text-red-500 dark:active:text-red-500 -mb-[1px]">Contacts</a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="mt-5 tab-content">
                                <Tab.Pane eventKey="homeBorderTop" id="homeBorderTop">
                                    <p className="mb-0"><Home /></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ProfileBorderTop" id="ProfileBorderTop">
                                    <p className="mb-0"><Profile /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settingBorderTop" id="settingBorderTop">
                                    <p className="mb-0"><Setting /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="contactBorderTop" id="contactBorderTop">
                                    <p className="mb-0"><Contact /> </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div >
        </React.Fragment >
    );
}

export default SimpleBorder;