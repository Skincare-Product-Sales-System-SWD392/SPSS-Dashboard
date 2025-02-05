import React, { useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import Drawer from "Common/Components/Drawer";
import { X } from "lucide-react";

const UIDrawer = () => {

    // drawerEnd
    const [drawerEnd, setDrawerEnd] = useState<boolean>(false);
    const drawerEndToggle = () => setDrawerEnd(!drawerEnd);

    // drawerStart
    const [drawerStart, setDrawerStart] = useState<boolean>(false);
    const drawerStartToggle = () => setDrawerStart(!drawerStart);

    // drawerBottom
    const [drawerBottom, setDrawerBottom] = useState<boolean>(false);
    const drawerBottomToggle = () => setDrawerBottom(!drawerBottom);

    // drawerTop
    const [drawerTop, setDrawerTop] = useState<boolean>(false);
    const drawerTopToggle = () => setDrawerTop(!drawerTop);

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title='Drawer' pageTitle='UI Elements' />
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Default</h6>
                            <div className="flex flex-wrap gap-2">

                                <button data-drawer-target="drawerEnd" type="button"
                                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                    onClick={drawerEndToggle}>End Button</button>

                                <Drawer show={drawerEnd} onHide={drawerEndToggle} id="drawerEnd" drawer-end="true" className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow ltr:right-0 rtl:left-0 md:w-80 z-drawer dark:bg-zink-600">
                                    <Drawer.Header className="flex items-center justify-between p-4 border-b card-body border-slate-200 dark:border-zink-500"
                                        closeButtonClass="lucide lucide-x size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50">
                                        <Drawer.Title className="text-15">Drawer Heading</Drawer.Title>
                                        <X className="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"></X>
                                    </Drawer.Header>
                                    <Drawer.Body className="h-full p-4 overflow-y-auto">
                                        <div className="card-body">
                                            <h6 className="mb-4 text-15">Drawer Content</h6>
                                            <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                        </div>
                                    </Drawer.Body>
                                    <Drawer.Footer className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-zink-500">
                                        <h6 className="text-15">Drawer Footer</h6>
                                    </Drawer.Footer>
                                </Drawer>

                                <button data-drawer-target="drawerStart" type="button"
                                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                    onClick={drawerStartToggle}>Start Drawer</button>

                                <Drawer show={drawerStart} onHide={drawerStartToggle} id="drawerStart" drawer-start="true" className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow ltr:left-0 rtl:right-0 md:w-80 z-drawer dark:bg-zink-600">
                                    <Drawer.Header className="flex items-center justify-between p-4 border-b card-body border-slate-200 dark:border-zink-500"
                                        closeButtonClass="lucide lucide-x size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50">
                                        <Drawer.Title className="text-15">Drawer Heading</Drawer.Title>
                                        <X className="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"></X>
                                    </Drawer.Header>
                                    <Drawer.Body className="h-full p-4 overflow-y-auto">
                                        <div className="card-body">
                                            <h6 className="mb-4 text-15">Drawer Content</h6>
                                            <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                        </div>
                                    </Drawer.Body>
                                    <Drawer.Footer className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-zink-500">
                                        <h6 className="text-15">Drawer Footer</h6>
                                    </Drawer.Footer>
                                </Drawer>

                                <button data-drawer-target="drawerBottom" type="button"
                                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                    onClick={drawerBottomToggle}>Bottom Drawer
                                </button>

                                <Drawer show={drawerBottom} onHide={drawerBottomToggle} id="drawerBottom" drawer-bottom="true" className="fixed bottom-0 left-0 right-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow md:h-80 z-drawer dark:bg-zink-600">
                                    <Drawer.Header className="flex items-center justify-between p-4 border-b card-body border-slate-200 dark:border-zink-500"
                                        closeButtonClass="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50">
                                        <Drawer.Title className="text-15">Drawer Heading</Drawer.Title>
                                        <X className="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"></X>
                                    </Drawer.Header>
                                    <Drawer.Body className="h-full p-4 overflow-y-auto">
                                        <div className="card-body">
                                            <h6 className="mb-4 text-15">Drawer Content</h6>
                                            <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                        </div>
                                    </Drawer.Body>
                                    <Drawer.Footer className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-zink-500">
                                        <h6 className="text-15">Drawer Footer</h6>
                                    </Drawer.Footer>
                                </Drawer>

                                <button data-drawer-target="drawerTop" type="button"
                                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                    onClick={drawerTopToggle}>Top Drawer
                                </button>
                                <Drawer show={drawerTop} onHide={drawerTopToggle} id="drawerTop" drawer-top="true" className="fixed top-0 left-0 right-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow md:h-80 z-drawer dark:bg-zink-600">
                                    <Drawer.Header className="flex items-center justify-between p-4 border-b card-body border-slate-200 dark:border-zink-500"
                                        closeButtonClass="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50">
                                        <Drawer.Title className="text-15">Drawer Heading</Drawer.Title>
                                        <X className="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"></X>
                                    </Drawer.Header>
                                    <Drawer.Body className="h-full p-4 overflow-y-auto">
                                        <div className="card-body">
                                            <h6 className="mb-4 text-15">Drawer Content</h6>
                                            <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                        </div>
                                    </Drawer.Body>
                                    <Drawer.Footer className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-zink-500">
                                        <h6 className="text-15">Drawer Footer</h6>
                                    </Drawer.Footer>
                                </Drawer>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default UIDrawer;