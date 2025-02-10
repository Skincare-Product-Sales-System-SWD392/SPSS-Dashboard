import React, { ElementType } from 'react';
import { useCollapseContext } from './CollapseContext';

interface CollapseContentProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    as?: ElementType;
}

const CollapseContent = ({ children, className, as: Component = "div" }: CollapseContentProps) => {
    const { isCollapse, isOpen } = useCollapseContext();
    return (
        <>
        {(isOpen ? isOpen : isCollapse) && (
            <Component
                className={`collapsible-content ${className ? className : ""}`}
            >
                {children}
            </Component>
        )}
        </>
    );
};

export { CollapseContent };
