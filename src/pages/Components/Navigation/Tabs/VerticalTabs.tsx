import React from "react";
import { Nav } from "Common/Components/Tab/Nav";
import Tab from "Common/Components/Tab/Tab";
import { CheckSquare } from "lucide-react";

const VerticalTabs = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Vertical Tabs</h6>
                    <div className="gap-4 md:flex">
                        <Tab.Container defaultActiveKey="homeVertical">

                            <Nav className="flex flex-col w-full mb-4 text-sm font-medium text-center md:w-36 shrink-0 nav-tabs md:mb-0">
                                <Nav.Item eventKey="homeVertical" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="homeVertical" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Home</a>
                                </Nav.Item>
                                <Nav.Item eventKey="profileVertical" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="profileVertical" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Profile</a>
                                </Nav.Item>
                                <Nav.Item eventKey="settingVertical" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="settingVertical" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Settings</a>
                                </Nav.Item>
                                <Nav.Item eventKey="contactVertical" className="group grow ">
                                    <a href="#!" data-tab-toggle data-target="contactVertical" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Contacts</a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="tab-content">
                                <Tab.Pane eventKey="homeVertical" id="homeVertical">
                                    <p className="flex gap-2 mb-2 text-slate-500 dark:text-zink-200"><CheckSquare className="inline-block h-3.5 mt-1 shrink-0 text-green-500" /> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                                    <p className="flex gap-2 text-slate-500 dark:text-zink-200"><CheckSquare className="inline-block h-3.5 mt-1 shrink-0 text-green-500" /> Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="profileVertical">
                                    <p className="flex gap-2 mb-2 text-slate-500 dark:text-zink-200"><CheckSquare className="inline-block h-3.5 mt-1 shrink-0 text-green-500" /> In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                                    <p className="flex gap-2 text-slate-500 dark:text-zink-200"><CheckSquare className="inline-block h-3.5 mt-1 shrink-0 text-green-500" /> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settingVertical">
                                    <p className="flex gap-2 mb-2 text-slate-500 dark:text-zink-200"><CheckSquare className="inline-block h-3.5 mt-1 shrink-0 text-green-500" /> Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices.</p>
                                    <p className="flex gap-2 text-slate-500 dark:text-zink-200"><CheckSquare className="inline-block h-3.5 mt-1 shrink-0 text-green-500" /> For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="contactVertical">
                                    <p className="flex gap-2 mb-2 text-slate-500 dark:text-zink-200"><CheckSquare className="inline-block h-3.5 mt-1 shrink-0 text-green-500" /> For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                                    <p className="flex gap-2 text-slate-500 dark:text-zink-200"><CheckSquare className="inline-block h-3.5 mt-1 shrink-0 text-green-500" /> Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default VerticalTabs;