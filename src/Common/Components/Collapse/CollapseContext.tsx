import React, { createContext, useContext, useState } from 'react';

export interface CollapseContextType {
  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  handleCollapseToggle: () => void;
  isOpen?: any;
  toggle?: any;
}

const CollapseContext = createContext<CollapseContextType | undefined>(undefined);

export const useCollapseContext = () => {
  const context = useContext(CollapseContext);
  if (context === undefined) {
    throw new Error('useCollapseContext must be used within a CollapseContextProvider');
  }
  return context;
};

interface CollapseContextProviderProps {
  children: React.ReactNode;
  isOpen: any;
  toggle: () => void;
}

export const CollapseContextProvider: React.FC<CollapseContextProviderProps> = ({ isOpen, toggle, children }) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const handleCollapseToggle = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <CollapseContext.Provider value={{ isCollapse, setIsCollapse, handleCollapseToggle, isOpen, toggle }}>
      {children}
    </CollapseContext.Provider>
  );
};
