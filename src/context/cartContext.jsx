import { createContext, useEffect, useState, useContext, useMemo } from "react";
import axios from "axios";

export const BASE_URL = "https://68808f32f1dcae717b628047.mockapi.io";
const CART_RESOURCE = `${BASE_URL}/cartData`;

const CartContext = createContext(null);
export function useCart() { return useContext(CartContext); }

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchCartItems() {
    try {
      setLoading(true);
      const { data } = await axios.get(CART_RESOURCE);
      setCartItems(data || []);
    } catch (error) {
      console.error("Error occurred when fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchCartItems(); }, []);

  // Ist P im Warenkorb?//
  const isInCart = (productId) =>
    cartItems.some((i) => i.productId === productId || i.id === productId);

  // Hinzufügen//
  const addToCart = async (product) => {
    try {
      const productId = product.id;
      const title = product.name ?? product.title ?? "Ohne Titel";
      const price = Number(product.price ?? 0);
      const image = product.image ?? "";

      const existing = cartItems.find(
        (i) => i.productId === productId || i.id === productId
      );

      if (existing) {
        const updated = { ...existing, qty: (existing.qty ?? 1) + 1 };

        setCartItems((prev) => prev.map((i) => (i.id === existing.id ? updated : i)));

        await axios.put(`${CART_RESOURCE}/${existing.id}`, updated);
        console.log("Quantity increased for", title);
      } else {
        const payload = { productId, title, price, image, qty: 1 };


        const tempId = `temp_${Date.now()}`;
        const tempItem = { id: tempId, ...payload };
        setCartItems((prev) => [...prev, tempItem]);

        const { data } = await axios.post(CART_RESOURCE, payload);


        setCartItems((prev) =>
          prev.map((i) => (i.id === tempId ? data : i))
        );
        console.log("Added to cart:", title);
      }
    } catch (e) {
      console.error("addToCart failed:", e);

    }
  };

  const updateQty = async (id, qty) => {
    try {
      const item = cartItems.find((i) => i.id === id);
      if (!item) return;
      const newQty = Math.max(1, Number(qty) || 1);
      const updated = { ...item, qty: newQty };


      setCartItems((prev) => prev.map((i) => (i.id === id ? updated : i)));
      await axios.put(`${CART_RESOURCE}/${id}`, updated);
    } catch (e) {
      console.error("updateQty failed:", e);
    }
  };

  const removeFromCart = async (id) => {
    try {

      const prev = cartItems;
      setCartItems((p) => p.filter((i) => i.id !== id));

      await axios.delete(`${CART_RESOURCE}/${id}`);
    } catch (e) {
      console.error("removeFromCart failed:", e);

    }
  };

  const clearCart = async () => {
    try {
      const toDelete = [...cartItems];
      setCartItems([]);
      await Promise.all(toDelete.map((i) => axios.delete(`${CART_RESOURCE}/${i.id}`)));
    } catch (e) {
      console.error("clearCart failed:", e);
    }
  };

  const { totalItems, totalPrice } = useMemo(() => {
  let items = 0;
  let sumCents = 0;

  for (const i of cartItems) {
    const qty = Number(i.qty ?? 1);
    const price = Number(i.price ?? 0);
    items += qty;
    sumCents += Math.round(price * 100) * qty;
  }

  return {
    totalItems: items,
    totalPrice: sumCents / 100,
  };
}, [cartItems]);

  const value = {
    cartItems,
    loading,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    refetchCart: fetchCartItems,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;