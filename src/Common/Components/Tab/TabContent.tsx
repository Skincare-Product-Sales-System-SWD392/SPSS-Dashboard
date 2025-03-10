import React, { ElementType, ReactNode } from 'react';

interface TabContentProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}
const TabContent = ({ children, as: Component = "div", className }: TabContentProps) => {
  return (
    <Component
      className={className}
    >
      {children}
    </Component>
  );
};

export { TabContent };
