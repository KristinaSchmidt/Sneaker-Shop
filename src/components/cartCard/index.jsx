import { useCart } from "../../context/cartContext";
import styles from "./styles.module.css";

export default function CartCard({ item }) {
  const { removeFromCart } = useCart();
  const price = Number(item.price ?? 0);

  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.title} className={styles.img} />

      <div className={styles.info}>
        <h4 className={styles.title}>{item.title}</h4>

        <div className={styles.row}>
          <span className={styles.price}><b>{price} €</b></span>

          <button
            className={styles.remove}
            onClick={() => removeFromCart(item.id)}
            aria-label="Aus Warenkorb entfernen"
          >
            🗑
          </button>
        </div>
      </div>
    </div>
  );
}