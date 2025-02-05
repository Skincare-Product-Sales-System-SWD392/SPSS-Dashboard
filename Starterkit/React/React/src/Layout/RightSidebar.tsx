import React, { useState } from 'react';
import Drawer from 'Common/Components/Drawer';
import { Check, X } from 'lucide-react';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import {
    changeLayout,
    // changeLayoutSemiDark,
    changeSkin,
    changeLayoutMode,
    changeDirection,
    changeLayoutContentWidth,
    changeLeftsidebarSizeType,
    changeNavigation,
    changeLeftSidebarColorType,
    changeLayoutTopbarColor
} from "../slices/thunk";
import { LAYOUT_CONTENT_WIDTH, LAYOUT_DIRECTION, LAYOUT_MODE_TYPES, LAYOUT_SKIN, LAYOUT_TOPBAR_THEME_TYPES, LAYOUT_TYPES, LEFT_NAVIGATION_TYPES, LEFT_SIDEBAR_COLOR_TYPES, LEFT_SIDEBAR_SIZE_TYPES } from 'Common/constants/layout';

const RightSidebar = ({ handleToggleDrawer, isOpen }: any) => {
    const dispatch = useDispatch<any>();
    const selectLayoutState = (state: any) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout: any) => ({
            layoutType: layout.layoutType,
            layoutSemiDarkType: layout.layoutSemiDarkType,
            layoutSkintype: layout.layoutSkintype,
            layoutModeType: layout.layoutModeType,
            layoutDirectionType: layout.layoutDirectionType,
            layoutContentWidthType: layout.layoutContentWidthType,
            layoutSidebarSizeType: layout.layoutSidebarSizeType,
            layoutNavigationType: layout.layoutNavigationType,
            layoutSidebarColorType: layout.layoutSidebarColorType,
            layoutTopbarColorType: layout.layoutTopbarColorType,
        })
    );
    // Inside your component
    const {
        layoutType,
        // layoutSemiDarkType,
        layoutSkintype,
        layoutModeType,
        layoutDirectionType,
        layoutContentWidthType,
        layoutSidebarSizeType,
        layoutNavigationType,
        layoutSidebarColorType,
        layoutTopbarColorType
    } = useSelector(selectLayoutProperties);

    const [isClicked, setIsClicked] = useState(layoutTopbarColorType === LAYOUT_TOPBAR_THEME_TYPES.DARK);

    const handleSemiDarkMode = () => {
        setIsClicked(!isClicked);

        if (isClicked) {
            dispatch(changeLayoutTopbarColor(LAYOUT_TOPBAR_THEME_TYPES.LIGHT));
            dispatch(changeLeftSidebarColorType(LEFT_SIDEBAR_COLOR_TYPES.LIGHT));
        } else {
            dispatch(changeLayoutTopbarColor(LAYOUT_TOPBAR_THEME_TYPES.DARK));
            dispatch(changeLeftSidebarColorType(LEFT_SIDEBAR_COLOR_TYPES.DARK));
        }
    };

    const updateHorizontalMenu = (value: any) => {
        const navbarMenu: any = document.querySelector(".app-menu");
        navbarMenu.classList.remove("group-data-[layout=horizontal]:opacity-0");
        dispatch(changeLayout(value));
    };

    return (
        <React.Fragment>
            <Drawer show={isOpen} onHide={handleToggleDrawer} id="customizerButton" drawer-end="true" className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow ltr:right-0 rtl:left-0 md:w-96 z-drawer dark:bg-zink-600">
                <div className="flex justify-between p-4 border-b border-slate-200 dark:border-zink-500">
                    <div className="grow">
                        <h5 className="mb-1 text-16">Tailwick Theme Customizer</h5>
                        <p className="font-normal text-slate-500 dark:text-zink-200">Choose your themes & layouts etc.</p>
                    </div>
                    <div className="shrink-0">
                        <Drawer.Header data-drawer-close="customizerButton" className="transition-all duration-150 ease-linear text-slate-500 hover:text-slate-800 dark:text-zink-200 dark:hover:text-zink-50">
                            <X className="size-4"></X></Drawer.Header>
                    </div>
                </div>
                <Drawer.Body className="h-full p-6 overflow-y-auto">
                    <div>
                        {/* Layout Type */}
                        <h5 className="mb-3 underline capitalize text-15">Choose Layouts</h5>
                        <div className="grid grid-cols-1 mb-5 gap-7 sm:grid-cols-2">
                            <div className="relative">
                                <input
                                    id="layout-one"
                                    name="dataLayout"
                                    className="absolute size-4 border rounded-full appearance-none cursor-pointer ltr:right-2 rtl:left-2 top-2 vertical-menu-btn bg-slate-100 border-slate-300 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-400 dark:border-zink-500"
                                    type="radio"
                                    value={LAYOUT_TYPES.VERTICAL}
                                    checked={layoutType === LAYOUT_TYPES.VERTICAL}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            dispatch(changeLayout(e.target.value));
                                        }
                                    }}
                                />
                                <label className="block w-full h-24 p-0 overflow-hidden border rounded-lg cursor-pointer border-slate-200 dark:border-zink-500" htmlFor="layout-one">
                                    <span className="flex h-full gap-0">
                                        <span className="shrink-0">
                                            <span className="flex flex-col h-full gap-1 p-1 ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500">
                                                <span className="block p-1 px-2 mb-2 rounded bg-slate-100 dark:bg-zink-400"></span>
                                                <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500"></span>
                                                <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500"></span>
                                                <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500"></span>
                                            </span>
                                        </span>
                                        <span className="grow">
                                            <span className="flex flex-col h-full">
                                                <span className="block h-3 bg-slate-100 dark:bg-zink-500"></span>
                                                <span className="block h-3 mt-auto bg-slate-100 dark:bg-zink-500"></span>
                                            </span>
                                        </span>
                                    </span>
                                </label>
                                <h5 className="mt-2 text-center text-15">Vertical</h5>
                            </div>

                            <div className="relative">
                                <input
                                    id="layout-two"
                                    name="dataLayout"
                                    className="absolute size-4 border rounded-full appearance-none cursor-pointer ltr:right-2 rtl:left-2 top-2 vertical-menu-btn bg-slate-100 border-slate-300 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-400 dark:border-zink-500"
                                    type="radio"
                                    value={LAYOUT_TYPES.HORIZONTAL}
                                    checked={layoutType === LAYOUT_TYPES.HORIZONTAL}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            updateHorizontalMenu(e.target.value);
                                        }
                                    }}
                                />
                                <label className="block w-full h-24 p-0 overflow-hidden border rounded-lg cursor-pointer border-slate-200 dark:border-zink-500" htmlFor="layout-two">
                                    <span className="flex flex-col h-full gap-1">
                                        <span className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-zink-500">
                                            <span className="block p-1 ml-1 bg-white rounded dark:bg-zink-500"></span>
                                            <span className="block p-1 px-2 pb-0 bg-white dark:bg-zink-500 ms-auto"></span>
                                            <span className="block p-1 px-2 pb-0 bg-white dark:bg-zink-500"></span>
                                        </span>
                                        <span className="block p-1 bg-slate-100 dark:bg-zink-500"></span>
                                        <span className="block p-1 mt-auto bg-slate-100 dark:bg-zink-500"></span>
                                    </span>
                                </label>
                                <h5 className="mt-2 text-center text-15">Horizontal</h5>
                            </div>
                        </div>

                        <div id="semi-dark">
                            <div className="flex items-center">
                                <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in">
                                    <input
                                        type="checkbox"
                                        name="customDefaultSwitch"
                                        id="customDefaultSwitch"
                                        className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 bg-white/80 peer/published checked:bg-white checked:right-0 checked:border-custom-500 arrow-none dark:border-zink-500 dark:bg-zink-500 dark:checked:bg-zink-400 checked:bg-none"
                                        checked={isClicked}
                                        onChange={() => handleSemiDarkMode()}
                                    />
                                    <label htmlFor="customDefaultSwitch" className="block h-5 overflow-hidden transition duration-300 ease-linear border rounded-full cursor-pointer border-slate-200 bg-slate-200 peer-checked/published:bg-custom-500 peer-checked/published:border-custom-500 dark:border-zink-500 dark:bg-zink-600"></label>
                                </div>
                                <label htmlFor="customDefaultSwitch" className="inline-block text-base font-medium">Semi Dark (Sidebar & Header)</label>
                            </div>
                        </div>
                    </div>

                    {/* Skin Layouts */}
                    <div className="mt-6">
                        <h5 className="mb-3 underline capitalize text-15">Skin Layouts</h5>
                        <div className="grid grid-cols-1 mb-5 gap-7 sm:grid-cols-2">
                            <div className="relative">
                                <input
                                    id="layoutSkitOne"
                                    name="dataLayoutSkin"
                                    className="absolute size-4 border rounded-full appearance-none cursor-pointer ltr:right-2 rtl:left-2 top-2 vertical-menu-btn bg-slate-100 border-slate-300 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-400 dark:border-zink-500"
                                    type="radio"
                                    value={LAYOUT_SKIN.DEFAULT}
                                    checked={layoutSkintype === LAYOUT_SKIN.DEFAULT}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            dispatch(changeSkin(e.target.value));
                                        }
                                    }}
                                />
                                <label className="block w-full h-24 p-0 overflow-hidden border rounded-lg cursor-pointer border-slate-200 dark:border-zink-500 bg-slate-50 dark:bg-zink-600" htmlFor="layoutSkitOne">
                                    <span className="flex h-full gap-0">
                                        <span className="shrink-0">
                                            <span className="flex flex-col h-full gap-1 p-1 ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500">
                                                <span className="block p-1 px-2 mb-2 rounded bg-slate-100 dark:bg-zink-400"></span>
                                                <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500"></span>
                                                <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500"></span>
                                                <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500"></span>
                                            </span>
                                        </span>
                                        <span className="grow">
                                            <span className="flex flex-col h-full">
                                                <span className="block h-3 bg-slate-100 dark:bg-zink-500"></span>
                                                <span className="block h-3 mt-auto bg-slate-100 dark:bg-zink-500"></span>
                                            </span>
                                        </span>
                                    </span>
                                </label>
                                <h5 className="mt-2 text-center text-15">Default</h5>
                            </div>

                            <div className="relative">
                                <input
                                    id="layoutSkitTwo"
                                    name="dataLayoutSkin"
                                    className="absolute size-4 border rounded-full appearance-none cursor-pointer ltr:right-2 rtl:left-2 top-2 vertical-menu-btn bg-slate-100 border-slate-300 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-400 dark:border-zink-500"
                                    type="radio"
                                    value={LAYOUT_SKIN.BORDERED}
                                    checked={layoutSkintype === LAYOUT_SKIN.BORDERED}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            dispatch(changeSkin(e.target.value));
                                        }
                                    }}
                                />
                                <label className="block w-full h-24 p-0 overflow-hidden border rounded-lg cursor-pointer border-slate-200 dark:border-zink-500" htmlFor="layoutSkitTwo">
                                    <span className="flex h-full gap-0">
                                        <span className="shrink-0">
                                            <span className="flex flex-col h-full gap-1 p-1 ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500">
                                                <span className="block p-1 px-2 mb-2 rounded bg-slate-100 dark:bg-zink-400"></span>
                                                <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500"></span>
                                                <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500"></span>
                                                <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500"></span>
                                            </span>
                                        </span>
                                        <span className="grow">
                                            <span className="flex flex-col h-full">
                                                <span className="block h-3 border-b border-slate-200 dark:border-zink-500"></span>
                                                <span className="block h-3 mt-auto border-t border-slate-200 dark:border-zink-500"></span>
                                            </span>
                                        </span>
                                    </span>
                                </label>
                                <h5 className="mt-2 text-center text-15">Bordered</h5>
                            </div>
                        </div>
                    </div>

                    {/* Light & Dark Mode */}
                    <div className="mt-6">
                        <h5 className="mb-3 underline capitalize text-15">Light & Dark</h5>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                id="dataModeOne"
                                name="dataMode"
                                value={LAYOUT_MODE_TYPES.LIGHTMODE}
                                onClick={() => {
                                    dispatch(changeLayoutMode(LAYOUT_MODE_TYPES.LIGHTMODE));
                                    dispatch(changeLayoutTopbarColor(LAYOUT_TOPBAR_THEME_TYPES.LIGHT));
                                    dispatch(changeLeftSidebarColorType(LEFT_SIDEBAR_COLOR_TYPES.LIGHT));
                                }}
                                className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200
                                [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200
                                dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400
                                dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400
                                dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500
                                ${layoutModeType === LAYOUT_MODE_TYPES.LIGHTMODE ? "active" : ""}
                              `}>
                                Light Mode
                            </button>
                            <button
                                value={LAYOUT_MODE_TYPES.DARKMODE}
                                onClick={() => {
                                    dispatch(changeLayoutMode(LAYOUT_MODE_TYPES.DARKMODE));
                                    dispatch(changeLayoutTopbarColor(LAYOUT_TOPBAR_THEME_TYPES.DARK));
                                    dispatch(changeLeftSidebarColorType(LEFT_SIDEBAR_COLOR_TYPES.DARK));
                                }}
                                type="button" id="dataModeTwo" name="dataMode" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutModeType === LAYOUT_MODE_TYPES.DARKMODE ? "active" : ""}`}>Dark Mode</button>
                        </div>
                    </div>

                    {/* Ltr & Rtl Mode */}
                    <div className="mt-6">
                        <h5 className="mb-3 underline capitalize text-15">LTR & RTL</h5>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                id="diractionOne"
                                name="dir"
                                value={LAYOUT_DIRECTION.LTR}
                                onClick={() => {
                                    dispatch(changeDirection(LAYOUT_DIRECTION.LTR));
                                }}
                                className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500  ${layoutDirectionType === LAYOUT_DIRECTION.LTR ? "active" : ""}`}>LTR Mode</button>
                            <button
                                value={LAYOUT_DIRECTION.RTL}
                                onClick={() => {
                                    dispatch(changeDirection(LAYOUT_DIRECTION.RTL));
                                }}
                                type="button" id="diractionTwo" name="dir" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutDirectionType === LAYOUT_DIRECTION.RTL ? "active" : ""}`}>RTL Mode</button>
                        </div>
                    </div>

                    {/* Content Width */}
                    <div className="mt-6">
                        <h5 className="mb-3 underline capitalize text-15">Content Width</h5>
                        <div className="flex gap-3">
                            <button
                                value={LAYOUT_CONTENT_WIDTH.FLUID}
                                onClick={() => {
                                    dispatch(changeLayoutContentWidth(LAYOUT_CONTENT_WIDTH.FLUID));
                                }}
                                type="button" id="datawidthOne" name="datawidth" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutContentWidthType === LAYOUT_CONTENT_WIDTH.FLUID ? "active" : ""}`}>Fluid</button>
                            <button
                                value={LAYOUT_CONTENT_WIDTH.BOXED}
                                onClick={() => {
                                    dispatch(changeLayoutContentWidth(LAYOUT_CONTENT_WIDTH.BOXED));
                                }}
                                type="button"
                                id="datawidthTwo" name="datawidth" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutContentWidthType === LAYOUT_CONTENT_WIDTH.BOXED ? "active" : ""}`}>Boxed</button>
                        </div>
                    </div>

                    {/* LEFT_SIDEBAR_SIZE_TYPES */}
                    {/* Sidebar Sizes */}
                    {layoutType === "vertical" && <div className="mt-6" id="sidebar-size">
                        <h5 className="mb-3 underline capitalize text-15">Sidebar Size</h5>
                        <div className="flex flex-wrap gap-3">
                            <button
                                value={LEFT_SIDEBAR_SIZE_TYPES.DEFAULT}
                                onClick={() => {
                                    dispatch(changeLeftsidebarSizeType(LEFT_SIDEBAR_SIZE_TYPES.DEFAULT));
                                }}
                                type="button" id="sidebarSizeOne" name="sidebarSize" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutSidebarSizeType === LEFT_SIDEBAR_SIZE_TYPES.DEFAULT ? "active" : ""}`}>Default</button>
                            <button
                                value={LEFT_SIDEBAR_SIZE_TYPES.COMPACT}
                                onClick={() => {
                                    dispatch(changeLeftsidebarSizeType(LEFT_SIDEBAR_SIZE_TYPES.COMPACT));
                                }}
                                type="button" id="sidebarSizeTwo" name="sidebarSize" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutSidebarSizeType === LEFT_SIDEBAR_SIZE_TYPES.COMPACT ? "active" : ""}`}>Compact</button>
                            <button
                                value={LEFT_SIDEBAR_SIZE_TYPES.SMALLICON}
                                onClick={() => {
                                    dispatch(changeLeftsidebarSizeType(LEFT_SIDEBAR_SIZE_TYPES.SMALLICON));
                                }}
                                type="button" id="sidebarSizeThree" name="sidebarSize" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutSidebarSizeType === LEFT_SIDEBAR_SIZE_TYPES.SMALLICON ? "active" : ""}`}>Small (Icon)</button>
                        </div>
                    </div>}

                    {/* Navigation Types */}
                    <div className="mt-6">
                        <h5 className="mb-3 underline capitalize text-15">Navigation Type</h5>
                        <div className="flex flex-wrap gap-3">
                            <button
                                value={LEFT_NAVIGATION_TYPES.STICKY}
                                onClick={() => {
                                    dispatch(changeNavigation(LEFT_NAVIGATION_TYPES.STICKY));
                                }}
                                type="button" id="navbarTwo" name="navbar" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutNavigationType === LEFT_NAVIGATION_TYPES.STICKY ? "active" : ""}`}>Sticky</button>
                            <button
                                value={LEFT_NAVIGATION_TYPES.SCROLL}
                                onClick={() => {
                                    dispatch(changeNavigation(LEFT_NAVIGATION_TYPES.SCROLL));
                                }}
                                type="button" id="navbarOne" name="navbar" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutNavigationType === LEFT_NAVIGATION_TYPES.SCROLL ? "active" : ""}`}>Scroll</button>
                            <button
                                value={LEFT_NAVIGATION_TYPES.BORDERED}
                                onClick={() => {
                                    dispatch(changeNavigation(LEFT_NAVIGATION_TYPES.BORDERED));
                                }}
                                type="button" id="navbarThree" name="navbar" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutNavigationType === LEFT_NAVIGATION_TYPES.BORDERED ? "active" : ""}`}>Bordered</button>
                            <button
                                value={LEFT_NAVIGATION_TYPES.HIDDEN}
                                onClick={() => {
                                    dispatch(changeNavigation(LEFT_NAVIGATION_TYPES.HIDDEN));
                                }}
                                type="button" id="navbarFour" name="navbar" className={`transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 ${layoutNavigationType === LEFT_NAVIGATION_TYPES.HIDDEN ? "active" : ""}`}>Hidden</button>
                        </div>
                    </div>

                    {/* Sidebar Colors */}
                    {layoutType === "vertical" && <div className="mt-6" id="sidebar-color">
                        <h5 className="mb-3 underline capitalize text-15">Sidebar Colors</h5>
                        <div className="flex flex-wrap gap-3">
                            <button
                                value={LEFT_SIDEBAR_COLOR_TYPES.LIGHT}
                                onClick={() => {
                                    dispatch(changeLeftSidebarColorType(LEFT_SIDEBAR_COLOR_TYPES.LIGHT));
                                }}
                                type="button" id="sidebarColorOne" name="sidebarColor" className={`flex items-center justify-center size-10 bg-white border rounded-md border-slate-200 group ${layoutSidebarColorType === LEFT_SIDEBAR_COLOR_TYPES.LIGHT ? "active" : ""}`}><Check className="size-5 hidden group-[.active]:inline-block text-slate-600" /></button>
                            <button
                                value={LEFT_SIDEBAR_COLOR_TYPES.DARK}
                                onClick={() => {
                                    dispatch(changeLeftSidebarColorType(LEFT_SIDEBAR_COLOR_TYPES.DARK));
                                }}
                                type="button" id="sidebarColorTwo" name="sidebarColor" className={`flex items-center justify-center size-10 border rounded-md border-zink-900 bg-zink-900 group ${layoutSidebarColorType === LEFT_SIDEBAR_COLOR_TYPES.DARK ? "active" : ""}`}><Check className="size-5 hidden group-[.active]:inline-block text-white" /></button>
                            <button
                                value={LEFT_SIDEBAR_COLOR_TYPES.BRAND}
                                onClick={() => {
                                    dispatch(changeLeftSidebarColorType(LEFT_SIDEBAR_COLOR_TYPES.BRAND));
                                }}
                                type="button" id="sidebarColorThree" name="sidebarColor" className={`flex items-center justify-center size-10 border rounded-md border-custom-800 bg-custom-800 group ${layoutSidebarColorType === LEFT_SIDEBAR_COLOR_TYPES.BRAND ? "active" : ""}`}><Check className="size-5 hidden group-[.active]:inline-block text-white" /></button>
                            <button
                                value={LEFT_SIDEBAR_COLOR_TYPES.MODERN}
                                onClick={() => {
                                    dispatch(changeLeftSidebarColorType(LEFT_SIDEBAR_COLOR_TYPES.MODERN));
                                }}
                                type="button" id="sidebarColorFour" name="sidebarColor" className={`flex items-center justify-center size-10 border rounded-md border-purple-950 bg-gradient-to-t from-red-400 to-purple-500 group ${layoutSidebarColorType === LEFT_SIDEBAR_COLOR_TYPES.MODERN ? "active" : ""}`}><Check className="size-5 hidden group-[.active]:inline-block text-white" /></button>
                        </div>
                    </div>}

                    {/* Topbar Colors */}
                    <div className="mt-6">
                        <h5 className="mb-3 underline capitalize text-15">Topbar Colors</h5>
                        <div className="flex flex-wrap gap-3">
                            <button
                                value={LAYOUT_TOPBAR_THEME_TYPES.LIGHT}
                                onClick={() => {
                                    dispatch(changeLayoutTopbarColor(LAYOUT_TOPBAR_THEME_TYPES.LIGHT));
                                }}
                                type="button" id="topbarColorOne" name="topbarColor" className={`flex items-center justify-center size-10 bg-white border rounded-md border-slate-200 group ${layoutTopbarColorType === LAYOUT_TOPBAR_THEME_TYPES.LIGHT ? "active" : ""}`}><Check className="size-5 hidden group-[.active]:inline-block text-slate-600" /></button>
                            <button
                                value={LAYOUT_TOPBAR_THEME_TYPES.DARK}
                                onClick={() => {
                                    dispatch(changeLayoutTopbarColor(LAYOUT_TOPBAR_THEME_TYPES.DARK));
                                }}
                                type="button" id="topbarColorTwo" name="topbarColor" className={`flex items-center justify-center size-10 border rounded-md border-zink-900 bg-zink-900 group ${layoutTopbarColorType === LAYOUT_TOPBAR_THEME_TYPES.DARK ? "active" : ""}`}><Check className="size-5 hidden group-[.active]:inline-block text-white" /></button>
                            <button
                                value={LAYOUT_TOPBAR_THEME_TYPES.BRAND}
                                onClick={() => {
                                    dispatch(changeLayoutTopbarColor(LAYOUT_TOPBAR_THEME_TYPES.BRAND));
                                }}
                                type="button" id="topbarColorThree" name="topbarColor" className={`flex items-center justify-center size-10 border rounded-md border-custom-800 bg-custom-800 group ${layoutTopbarColorType === LAYOUT_TOPBAR_THEME_TYPES.BRAND ? "active" : ""}`}><Check className="size-5 hidden group-[.active]:inline-block text-white" /></button>
                        </div>
                    </div>

                </Drawer.Body>
                <div className="flex items-center justify-between gap-3 p-4 border-t border-slate-200 dark:border-zink-500">
                    <button type="button" id="reset-layout" className="w-full transition-all duration-200 ease-linear text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100">Reset</button>
                    <a href="#!" className="w-full text-white transition-all duration-200 ease-linear bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100">Buy Now</a>
                </div>
            </Drawer>
        </React.Fragment>
    );
};

export default RightSidebar;
