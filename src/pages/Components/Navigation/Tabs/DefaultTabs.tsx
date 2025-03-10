import React from "react";
import { Nav } from "Common/Components/Tab/Nav";
import Tab from "Common/Components/Tab/Tab";
import { Contact, Home, Profile, Setting } from "./TabsPara";

const DefaultTabs = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Default Tabs</h6>
                    <div>
                        <Tab.Container defaultActiveKey="home">
                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs">
                                <Nav.Item eventKey="home" className="group">
                                    <a href="#!" data-tab-toggle data-target="home" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Home</a>
                                </Nav.Item>
                                <Nav.Item eventKey="Profile" className="group">
                                    <a href="#!" data-tab-toggle data-target="Profile" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Profile</a>
                                </Nav.Item>
                                <Nav.Item eventKey="setting" className="group">
                                    <a href="#!" data-tab-toggle data-target="setting" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Settings</a>
                                </Nav.Item>
                                <Nav.Item eventKey="contact" className="group">
                                    <a href="#!" data-tab-toggle data-target="contact" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Contacts</a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="mt-5 tab-content">
                                <Tab.Pane eventKey="home" id="home">
                                    <p className="mb-0"><Home /></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Profile" id="Profile">
                                    <p className="mb-0"><Profile /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="setting" id="setting">
                                    <p className="mb-0"><Setting /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="contact" id="contact">
                                    <p className="mb-0"><Contact /> </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Justified Tabs</h6>
                    <div>
                        <Tab.Container defaultActiveKey="homeJustified">
                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs">
                                <Nav.Item eventKey="homeJustified" className="group grow">
                                    <a href="#!" data-tab-toggle data-target="homeJustified" className="inline-block px-4 py-2 text-base w-full transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Home</a>
                                </Nav.Item>
                                <Nav.Item eventKey="ProfileJustified" className="group grow">
                                    <a href="#!" data-tab-toggle data-target="ProfileJustified" className="inline-block px-4 py-2 text-base w-full transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Profile</a>
                                </Nav.Item>
                                <Nav.Item eventKey="settingJustified" className="group grow">
                                    <a href="#!" data-tab-toggle data-target="settingJustified" className="inline-block px-4 py-2 text-base w-full transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Settings</a>
                                </Nav.Item>
                                <Nav.Item eventKey="contactJustified" className="group grow">
                                    <a href="#!" data-tab-toggle data-target="contactJustified" className="inline-block px-4 py-2 text-base w-full transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Contacts</a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="mt-5 tab-content">
                                <Tab.Pane eventKey="homeJustified" id="homeJustified">
                                    <p className="mb-0"><Home /></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ProfileJustified" id="ProfileJustified">
                                    <p className="mb-0"><Profile /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settingJustified" id="settingJustified">
                                    <p className="mb-0"><Setting /> </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="contactJustified" id="contactJustified">
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

export default DefaultTabs;