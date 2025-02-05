import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import AccountInfo from "../Account/AccountInfo";
import { Nav } from "Common/Components/Tab/Nav";
import Tab from "Common/Components/Tab/Tab";
import PersonalTabs from "./PersonalTabs";
import IntegrationTabs from "./IntegrationTabs";
import ChangePasswordTabs from "./ChangePasswordTabs";
import PrivacyPolicyTabs from "./PrivacyPolicyTabs";

const Settings = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Account Settings' pageTitle='Pages' />
            <Tab.Container defaultActiveKey="personalTabs">
                <div className="card">
                    <AccountInfo className="card-body" />
                    <div className="card-body !py-0">
                        <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs">
                            <Nav.Item eventKey="personalTabs" className="group">
                                <a href="#!" data-tab-toggle data-target="personalTabs" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 dark:group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">Personal Info</a>
                            </Nav.Item>
                            <Nav.Item eventKey="integrationTabs" className="group">
                                <a href="#!" data-tab-toggle data-target="integrationTabs" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 dark:group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">Integration</a>
                            </Nav.Item>
                            <Nav.Item eventKey="changePasswordTabs" className="group">
                                <a href="#!" data-tab-toggle data-target="changePasswordTabs" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 dark:group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">Change Password</a>
                            </Nav.Item>
                            <Nav.Item eventKey="privacyPolicyTabs" className="group">
                                <a href="#!" data-tab-toggle data-target="privacyPolicyTabs" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 dark:group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">Privacy Policy</a>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="personalTabs" >
                        <PersonalTabs />
                    </Tab.Pane>
                    <Tab.Pane eventKey="integrationTabs" >
                        <IntegrationTabs />
                    </Tab.Pane>
                    <Tab.Pane eventKey="changePasswordTabs" >
                        <ChangePasswordTabs />
                    </Tab.Pane>
                    <Tab.Pane eventKey="privacyPolicyTabs" >
                        <PrivacyPolicyTabs />
                    </Tab.Pane>
                </Tab.Content>

            </Tab.Container>
        </React.Fragment>
    );
}

export default Settings;