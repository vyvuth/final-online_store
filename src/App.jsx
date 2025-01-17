import React from "react";
import Header from "./components/Header";
import { AppProvider } from "./store/AppProvider"; // Ensure you are importing the correct provider
import "./App.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <footer className=" mt-3">
          <Footer />
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
