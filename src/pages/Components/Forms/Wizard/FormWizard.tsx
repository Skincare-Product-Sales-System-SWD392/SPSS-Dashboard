import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { MapPin, PartyPopper, Rocket, User2 } from "lucide-react";
import Tab from "Common/Components/Tab/Tab";
import { Nav } from "Common/Components/Tab/Nav";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import Completed from "./Completed";

const FormWizard = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Register Wizard" pageTitle="Wizards" />

                <div className="grid grid-cols-1 2xl:grid-cols-12">
                    <div className="col-span-12 2xl:col-start-3 2xl:col-span-8">
                        <div className="card">
                            <div className="card-body">
                                <Tab.Container defaultActiveKey="accountInfo">

                                    <Nav className="grid grid-cols-1 gap-3 lg:grid-cols-4 nav-tabs form-wizard">
                                        <Nav.Item eventKey="accountInfo" className="group/item">
                                            <a href="#!" data-target="accountInfo" data-tab-id="1" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                                <Rocket className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                                <span className="block mt-3 font-medium text-15">1. Account Info</span>
                                            </a>
                                        </Nav.Item>
                                        <Nav.Item eventKey="personalInfo" className="group/item">
                                            <a href="#!" data-target="personalInfo" data-tab-id="2" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                                <User2 className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                                <span className="block mt-3 font-medium text-15">2. Personal Info</span>
                                            </a>
                                        </Nav.Item>
                                        <Nav.Item eventKey="addressInfo" className="group/item">
                                            <a href="#!" data-target="addressInfo" data-tab-id="3" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                                <MapPin className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                                <span className="block mt-3 font-medium text-15">3. Address Info</span>
                                            </a>
                                        </Nav.Item>
                                        <Nav.Item eventKey="completed" className="group/item">
                                            <a href="#!" data-target="completed" data-tab-id="4" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                                <PartyPopper className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                                <span className="block mt-3 font-medium text-15">4. Completed</span>
                                            </a>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content className="mt-5 tab-content">
                                        <Tab.Pane eventKey="accountInfo">
                                            <AccountInfo />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="personalInfo">
                                            <PersonalInfo />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addressInfo">
                                            <AddressInfo />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="completed">
                                            <Completed />
                                        </Tab.Pane>
                                    </Tab.Content>

                                </Tab.Container>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default FormWizard;