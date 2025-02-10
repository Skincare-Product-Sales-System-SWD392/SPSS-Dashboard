import React, { createContext, useContext, useState } from 'react';

export interface AlertContextType {
  isAlert: boolean;
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>;
  handleAlertToggle: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within a AlertContextProvider');
  }
  return context;
};

interface AlertContextProviderProps {
  children: React.ReactNode;
  className?: string;
  Component?: any;
}

export const AlertContextProvider: React.FC<AlertContextProviderProps> = ({ children, className, Component }) => {
  const [isAlert, setIsAlert] = useState<boolean>(true);

  const handleAlertToggle = () => {
    setIsAlert(!isAlert);
  };

  return (
    <AlertContext.Provider value={{ isAlert, setIsAlert, handleAlertToggle }}>
      <Component
        className={`${className ? className : ""} ${!isAlert ? "hidden" : ""}`}
      >
        {children}
      </Component>
    </AlertContext.Provider>
  );
};
