import React, { createContext, useContext, useState } from 'react';

export interface TabContextType {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  changeTab: (tab: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('useTabContext must be used within a TabContextProvider');
  }
  return context;
};

interface TabContextProviderProps {
  children: React.ReactNode;
  defaultActiveKey: string; // Define the defaultActiveKey prop
}

export const TabContextProvider: React.FC<TabContextProviderProps> = ({ children, defaultActiveKey }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActiveKey);

  const changeTab = (newTab: string) => {
    setActiveTab(newTab);
  };

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, changeTab }}>
      {children}
    </TabContext.Provider>
  );
};
