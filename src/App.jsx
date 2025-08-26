import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Main from "./pages/main";
import Cart from "./pages/cart";
import Contacts from "./pages/contacts";
import CartProvider from "./context/cartContext";
import News from "./components/news/index";
import Footer from "./components/footer/index";


function App() {
  const location = useLocation();

  return (
    <div className="app">
      <div className="page">
      <Header />
      {location.pathname === "/" && <News />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<h1 style={{padding:24}}>404 Page Not Found</h1>} />
      </Routes>
      <Footer className="footer" />
      </div>
    </div>

  );
}

export default App;