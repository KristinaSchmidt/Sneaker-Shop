import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";


export const BASE_URL = "https://68808f32f1dcae717b628047.mockapi.io";

const CartContext = createContext();
const CART_RESOURCE = `${BASE_URL}/cartData`;


export function useCart() {
  return useContext(CartContext);
}


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  async function fetchCartItems() {
    try {
       const { data } = await axios.get(CART_RESOURCE);
      setCartItems(data || []);
    } catch (error) {
      console.error("Error occurred when fetching cart items:", error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;



// add item to cart
  // post -> BASE_URL/cartData
  // remove item from cart
  // delete -> BASE_URL/cartData/productId