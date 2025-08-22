import { useCart } from "../../context/cartContext";
import CartCard from "../../components/cartCard/index";
import styles from "./styles.module.css";

export default function Cart() {
  const { cartItems, setCartItems } = useCart();

 

 

  return (
    <div className={styles.container}>
      <h2>Shopping Cart</h2>
      <div className={styles.list}>
        {cartItems.map(item => <CartCard key={item.id} product={item} />)}
      </div>
      
    </div>
  );
}