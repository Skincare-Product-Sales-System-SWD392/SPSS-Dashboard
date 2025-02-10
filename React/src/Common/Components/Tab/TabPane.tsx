import React, { ElementType } from 'react';
import { useTabContext } from './TabContext';

interface TabPaneProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    as?: ElementType;
    eventKey : string;
}

const TabPane = ({ children, className,eventKey, as: Component = "div" }: TabPaneProps) => {
    const { activeTab } = useTabContext();
    return (
        <>
            <Component
                className={`tab-pane ${className ? className : ""} ${eventKey === activeTab ? "block" : "hidden"}`}
            >
                {children}
            </Component>
        </>
    );
};

export { TabPane };
