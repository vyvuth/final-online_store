import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./Home/Home.jsx";
import Product from "./pages/Product.jsx";
import Contect from "./pages/Contect.jsx";
import Cart from "./components/Cart.jsx";
import MyAccount from "./pages/MyAccount.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<MyAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
