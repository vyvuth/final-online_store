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
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

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

  // Product-API
  const [productAPI, setProductAPI] = useState([]);
  const APIProduct = async () => {
    try {
      const res = await axios.get(
        "https://product-api-pee3.onrender.com/product"
      );
      setProductAPI(res.data);
      console.log(data);
    } catch (e) {
      console.log("Error message: " + e.message);
    }
  };
  useEffect(() => {
    APIProduct();
  }, []);
  // Add to cart 1

  const addToCart = (productId) => {
    const productAdd = product.find((e) => e.id === productId);
    if (productAdd) {
      const isExist = cart.find((e) => e.id === productId);
      if (isExist) {
        toast("Product has been added please check your ordering...😚", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });
      } else {
        toast.success("Product add succesful...🥰", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });
      }
      setCart((prev) => {
        const isProduct = prev.some((e) => e.id === productId);
        if (isProduct) {
          return prev.map((e) =>
            e.id === productId
              ? { ...e, qty: e.qty + 1, subtotal: (e.qty + 1) * e.price }
              : e
          );
        } else {
          return [
            ...prev,
            { ...productAdd, qty: 1, subtotal: productAdd.price },
          ];
        }
      });
    }
  };
  //all-products;
  const addToCarts = (productId) => {
    const productAdd = productAPI.find((e) => e.id === productId);
    if (productAdd) {
      const isExist = cart.find((e) => e.id === productId);
      if (isExist) {
        toast("Product has been added please check your ordering...😚", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });
      } else {
        toast.success("Product add succesful...🥰", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });
      }
      setCart((prev) => {
        const isProduct = prev.some((e) => e.id === productId);
        if (isProduct) {
          return prev.map((e) =>
            e.id === productId
              ? { ...e, qty: e.qty + 1, subtotal: (e.qty + 1) * e.price }
              : e
          );
        } else {
          return [
            ...prev,
            { ...productAdd, qty: 1, subtotal: productAdd.price },
          ];
        }
      });
    }
  };

  const productDelete = (productId) => {
    setCart((prevCart) => prevCart.filter((e) => e.id !== productId));

    toast.success("Product deleted successfully...💥", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  // increment the value
  const handleQty = (productId, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? {
              ...item,
              qty: Number(newQty),
              subtotal: item.price * Number(newQty),
            }
          : item
      )
    );
  };

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
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
        cart,
        productDelete,
        productAPI,
        addToCarts,
        handleQty,
      }}
    >
      {children}
    </AppProvide.Provider>
  );
};

export default AppProvide;
