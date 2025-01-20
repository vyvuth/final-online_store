import React, { createContext, useState } from "react";

// Create a context
const AppProvide = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState();

  const handleTabClick = () => {
    setActiveTab(false);
  };

  return (
    <AppProvide.Provider value={{ handleTabClick, activeTab }}>
      {children}
    </AppProvide.Provider>
  );
};

export default AppProvide;
