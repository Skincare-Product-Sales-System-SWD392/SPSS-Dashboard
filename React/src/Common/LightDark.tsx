import React from 'react';
import { Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLayoutMode, changeLayoutTopbarColor, changeLeftSidebarColorType } from 'slices/thunk';
import { createSelector } from '@reduxjs/toolkit';

const LightDark = () => {

    const dispatch = useDispatch<any>();

    const changeMode = (mode: any) => {
        dispatch(changeLayoutMode(mode));
        dispatch(changeLeftSidebarColorType(mode));
        dispatch(changeLayoutTopbarColor(mode));
    };

    // react-redux
    const selectLayoutState = (state: any) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout: any) => ({
            layoutModeType: layout.layoutModeType,
        })
    );

    const { layoutModeType } = useSelector(selectLayoutProperties);

    const mode = layoutModeType === "dark" ? "light" : "dark";

    return (
        <React.Fragment>
            <div className="relative flex items-center h-header">
                <button
                    type="button"
                    className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-200 ease-linear bg-topbar rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:text-topbar-item-dark"
                    id="light-dark-mode"
                    onClick={() => changeMode(mode)} >
                    <Sun className="inline-block size-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand" />
                </button>
            </div>
        </React.Fragment>
    );
};

export default LightDark;
