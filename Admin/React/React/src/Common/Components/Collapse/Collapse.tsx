import React, { ElementType } from 'react';
import { CollapseTrigger } from './CollapseTrigger';
import { CollapseContent } from './CollapseContent';
import { CollapseContextProvider } from './CollapseContext';

interface CollapseProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    as?: ElementType;
    isOpen?: any;
    toggle?: any;
}

const Collapse = ({ children, isOpen, toggle, className, as: Component = "div" }: CollapseProps) => {
    return (
        <>
            <CollapseContextProvider isOpen={isOpen} toggle={toggle}>
                <Component
                    className={`collapsible ${className ? className : ""}`}
                >
                    {children}
                </Component>
            </CollapseContextProvider>
        </>
    );
};

export default Object.assign(Collapse, {
    Trigger: CollapseTrigger,
    Content: CollapseContent
});
