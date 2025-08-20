import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const BASE_URL = "https://664623b951e227f23aadf146.mockapi.io";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  async function fetchCartItems() {
    try {
      const response = await axios.get(`${BASE_URL}/cartData`);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error occured when fetching cart items: ", error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  // add item to cart
  // post -> BASE_URL/cartData
  // remove item from cart
  // delete -> BASE_URL/cartData/productId
  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;