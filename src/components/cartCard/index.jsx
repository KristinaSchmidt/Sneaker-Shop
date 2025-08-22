import { useCart } from "../../context/cartContext";
import styles from "./styles.module.css";

export default function CartCard({ product }) {
  const { deleteFromCart, removeFromCart } = useCart();
  const remove = deleteFromCart ?? removeFromCart;
  const { productId, name, price, image } = product;

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.img} />
      <div className={styles.info}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.row}>
          <span className={styles.price}><b>{price} €</b></span>
          <button className={styles.remove} onClick={() => remove(productId)}>×</button>
        </div>
      </div>
    </div>
  );
}