import React, { ElementType, ReactNode } from 'react';
import { useTabContext } from './TabContext';

interface NavItemProps {
    children: ReactNode;
    className: string;
    as?: ElementType;
    eventKey: string; // Make sure eventKey is a string
}

interface TabProps {
    onClick: () => void;
}

const NavItem = ({
    as: Component = "li",
    children,
    className,
    eventKey
}: NavItemProps) => {
    const { activeTab, changeTab } = useTabContext();

    return (
        <>
            <Component 
            className={`${className} ${eventKey === activeTab ? "active" : ""}`}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        // Define the props for the child component
                        const tabProps: TabProps = {
                            onClick: () => changeTab(eventKey), // Use the provided eventKey
                        };

                        return React.cloneElement(child, tabProps);
                    }
                    return null;
                })}
            </Component>
        </>
    );
};

export { NavItem };
