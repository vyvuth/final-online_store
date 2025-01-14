import Header from "./components/Header";
import AppProvider from "./store/AppProvider";
import "./App.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import AppProvide from "./store/AppProvider";

function App() {
  return (
    <div>
      <AppProvide.Provider>
        <Header>
          <Header />
        </Header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </AppProvide.Provider>
    </div>
  );
}

export default App;
