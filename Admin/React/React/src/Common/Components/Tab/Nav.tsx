import React, { ElementType } from 'react';
import { NavItem as Item } from "./NavItem";

interface NavProps {
    children: React.ReactNode;
    className: string;
    as?: ElementType;
}

const Nav = ({
    children,
    className,
    as : Component = "ul"
}: NavProps) => {
    return (
        <>
            <Component
                className={className}
            >
                {children}
            </Component>
        </>
    );
};



Nav.Item = Item;

export { Nav };
