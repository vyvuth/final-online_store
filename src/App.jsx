import Header from "./components/Header";
import AppProvider from "./store/AppProvider";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <AppProvider>
        <Header>
          <Header />
        </Header>
        <main style={{ height: "100vh" }}></main>
        <footer>
          <Footer />
        </footer>
      </AppProvider>
    </div>
  );
}

export default App;
