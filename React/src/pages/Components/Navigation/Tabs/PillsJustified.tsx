import React from "react";
import { Nav } from "Common/Components/Tab/Nav";
import Tab from "Common/Components/Tab/Tab";
import { Contact, Home, Profile, Setting } from "./TabsPara";

const PillsJustified = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Pills Tabs</h6>
                    <div>
                        <Tab.Container defaultActiveKey="homePill">
                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs">
                                <Nav.Item eventKey="homePill" className="group">
                                    <a href="#!" data-tab-toggle data-target="homePill" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Home</a>
                                </Nav.Item>
                                <Nav.Item eventKey="profilePill" className="group">
                                    <a href="#!" data-tab-toggle data-target="profilePill" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Profile</a>
                                </Nav.Item>
                                <Nav.Item eventKey="settingPill" className="group">
                                    <a href="#!" data-tab-toggle data-target="settingPill" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Settings</a>
                                </Nav.Item>
                                <Nav.Item eventKey="contactPill" className="group">
                                    <a href="#!" data-tab-toggle data-target="contactPill" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Contacts</a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="mt-5 tab-content">
                                <Tab.Pane eventKey="homePill" id="homePill">
                                    <p className="mb-0"><Home /></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="profilePill" id="profilePill">
                                    <p className="mb-0"><Profile /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settingPill" id="settingPill">
                                    <p className="mb-0"><Setting /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="contactPill" id="contactPill">
                                    <p className="mb-0"><Contact /> </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Pills Justified Tabs</h6>
                    <div>
                        <Tab.Container defaultActiveKey="homePillJustified">

                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs">
                                <Nav.Item eventKey="homePillJustified" className="group grow">
                                    <a href="#!" data-tab-toggle data-target="homePillJustified" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Home</a>
                                </Nav.Item>
                                <Nav.Item eventKey="profilePillJustified" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="profilePillJustified" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Profile</a>
                                </Nav.Item>
                                <Nav.Item eventKey="settingPillJustified" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="settingPillJustified" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Settings</a>
                                </Nav.Item>
                                <Nav.Item eventKey="contactPillJustified" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="contactPillJustified" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Contacts</a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="mt-5 tab-content">
                                <Tab.Pane eventKey="homePillJustified" id="homePillJustified">
                                    <p className="mb-0"><Home /></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="profilePillJustified" id="profilePillJustified">
                                    <p className="mb-0"><Profile /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settingPillJustified" id="settingPillJustified">
                                    <p className="mb-0"><Setting /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="contactPillJustified" id="contactPillJustified">
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

export default PillsJustified;