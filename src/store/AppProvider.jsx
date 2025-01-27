import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";
import { toast } from "react-toastify";

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
  const [loadings, setLoadings] = useState(false);
  const [product, setProduct] = useState([]);
  const FetchAPI = async () => {
    setLoadings(true);
    try {
      const res = await axios.get(
        "https://cardproduct-efnr.onrender.com/cards"
      );
      setProduct(res.data);
      console.log(data);
    } catch (e) {
      console.log("Error message: " + e.message);
    } finally {
      setLoadings(false);
    }
  };

  useEffect(() => {
    FetchAPI();
  }, []);

  // Fetch API OF brands
  const [brand, setBrand] = useState([]);
  const API = async () => {
    try {
      const res = await axios.get("https://brand-card.onrender.com/brands");
      setBrand(res.data);
      console.log(data);
    } catch (e) {
      console.log("Error message: " + e.message);
    }
  };

  useEffect(() => {
    API();
  }, []);

  // Add to cart
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (productId) => {
    const productAdd = product.find((e) => e.id === productId);
    if (productAdd) {
      const isExist = cart.find((e) => e.id === productId);
      if (isExist) {
        toast("Product has been added please check your ordering...😚", {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
        });
      } else {
        toast.success("Product add succesful...🥰", {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
        });
      }
      setCart((prev) => {
        const isProduct = prev.some((e) => e.id === productId);
        if (isProduct) {
          return prev.map((e) =>
            e.id === productId ? { ...e, qty: e.qty + 1 } : e
          );
        } else {
          return [...prev, { ...productAdd, qty: 1 }];
        }
      });
    }
  };
  const productCount = () => {
    return cart.reduce((e, prev) => e + prev.qty, 0);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <AppProvide.Provider
      value={{
        handleTabClick,
        activeTab,
        product,
        brand,
        loadings,
        addToCart,
        productCount,
      }}
    >
      {children}
    </AppProvide.Provider>
  );
};

export default AppProvide;
