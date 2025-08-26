import { useCart } from "../../context/cartContext";
import CartCard from "../../components/cartCard";
import styles from "./styles.module.css";

export default function Cart() {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className={styles.container}>
      <h2>Warenkorb</h2>

      <div className={styles.list}>
        {cartItems.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </div>

      <aside className={styles.total}>
        <h3>Gesamtübersicht</h3>

        {cartItems.map((i) => {
          const qty = Number(i.qty ?? 1);
          const price = Number(i.price ?? 0);
          const lineTotal = price * qty;
          return (
            <div key={i.id} className={styles.itemRow}>
              <span className={styles.itemTitle}>
                {i.title}{qty > 1 ? ` × ${qty}` : ""}
              </span>
              <b className={styles.itemAmount}>{lineTotal} €</b>
            </div>
          );
        })}

        <div className={styles.line}></div>

        <div className={styles.sumRow}>
          <span>Gesamtsumme:</span>
          <b>{totalPrice} €</b>
        </div>
      </aside>
    </div>
  );
}