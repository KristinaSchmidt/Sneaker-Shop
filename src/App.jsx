import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/header";
import Main from "./pages/main";
import Cart from "./pages/cart";
import Contacts from "./pages/contacts";
import CartProvider from "./context/cartContext";


function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        <Main></Main>
        {/* Footer */}
      </div>
    </CartProvider>
  );
}

export default App;