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
import TestPage from "./pages/TestPage.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contect" element={<Contect />} />
        </Route>
        <Route path="/*" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
