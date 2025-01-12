import React, { createContext } from "react";
const AppProvide = createContext();
// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  return (
    <div>
      <AppProvide.Provider value={{ name: "John Doe" }}>
        {children}
      </AppProvide.Provider>
    </div>
  );
};

export default AppProvider;