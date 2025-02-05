import React, { ElementType } from "react";

interface DrawerProps {
    children: React.ReactNode;
    className?: string;
    as?: ElementType;
}

export const DrawerTitle = ({ children, className, as: Component = "h6" }: DrawerProps) => {
    return (
        <Component className={className ? className : ''}>
            {children}
        </Component>
    );
}


export const DrawerBody = ({ children, className, as: Component = "div" }: DrawerProps) => {
    return (
        <Component className={className ? className : ''}>
            {children}
        </Component>
    );
}


export const DrawerFooter = ({ children, className, as: Component = "div" }: DrawerProps) => {
    return (
        <Component className={className ? className : ''}>
            {children}
        </Component>
    );
}
