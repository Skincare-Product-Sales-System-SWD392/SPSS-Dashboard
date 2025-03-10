import React, { ElementType } from 'react';
import { useCollapseContext } from './CollapseContext';

interface CollapseTriggerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    as?: ElementType;
    href?: string;
}

const CollapseTrigger = ({ children, className, as: Component = "button", ...props }: CollapseTriggerProps) => {
    const { isCollapse, isOpen, toggle, handleCollapseToggle } = useCollapseContext();
    const addShowClass = (isOpen ? isOpen : isCollapse) ? "show" : "";
    return (
        <>
            <Component
                {...props}
                className={`${addShowClass} ${className ? className : ""}`}
                onClick={toggle ? toggle : handleCollapseToggle}
            >
                {children}
            </Component>
        </>
    );
};

export { CollapseTrigger };
