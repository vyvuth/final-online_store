import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

// Create a context
const AppProvide = createContext();

// Create a provider component
// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState();
  // tap  process
  const handleTabClick = () => {
    setActiveTab(false);
  };
  // Fetch API OF PRODUCT
  const [product, setProduct] = useState([]);
  const FetchAPI = async () => {
    try {
      const res = await axios.get(
        "https://cardproduct-efnr.onrender.com/cards"
      );
      setProduct(res.data);
      console.log(data);
    } catch (e) {
      console.log("Error message: " + e.message);
    }
  };

  useEffect(() => {
    FetchAPI();
  }, []);

  return (
    <AppProvide.Provider value={{ handleTabClick, activeTab, product }}>
      {children}
    </AppProvide.Provider>
  );
};

export default AppProvide;
