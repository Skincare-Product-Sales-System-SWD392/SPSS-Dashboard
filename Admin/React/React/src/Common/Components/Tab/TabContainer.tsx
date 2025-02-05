import React, { ReactNode } from 'react';
import { TabContextProvider } from './TabContext';

interface TabContainerProps {
  children: ReactNode;
  defaultActiveKey: string;
}

const TabContainer: React.FC<TabContainerProps> = ({ children, defaultActiveKey }: TabContainerProps) => {
  return (
    <TabContextProvider defaultActiveKey={defaultActiveKey}>
      {children}
    </TabContextProvider>
  );
};

export { TabContainer };
