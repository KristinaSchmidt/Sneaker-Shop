import { useCart } from "../../context/cartContext";
import CartCard from "../../components/cartCard";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!cartItems.length) return;
    navigate("/login"); // oder "/checkout"
  };

  return (
    <div className={styles.container}>
      <h2>Warenkorb</h2>

      <div className={styles.content}>
        {/* Linke Spalte: Artikel */}
        <div className={styles.list}>
          {cartItems.length ? (
            cartItems.map((item) => <CartCard key={item.id} item={item} />)
          ) : (
            <p className={styles.empty}>Dein Warenkorb ist leer.</p>
          )}
        </div>

        {/* Rechte Spalte: Gesamtübersicht */}
        <aside className={styles.total}>
          <h3>Gesamtübersicht</h3>

          {cartItems.map((i) => (
            <div key={i.id} className={styles.itemRow}>
              <span className={styles.itemTitle}>{i.title}</span>
              <b className={styles.itemAmount}>{i.price} €</b>
            </div>
          ))}

          <div className={styles.line} />

          <div className={styles.sumRow}>
            <span>Gesamtsumme:</span>
            <b>{totalPrice} €</b>
          </div>

          <button
            className={styles.buy}
            onClick={handleCheckout}
            disabled={!cartItems.length}
            aria-disabled={!cartItems.length}
          >
            Jetzt kaufen
          </button>
        </aside>
      </div>
    </div>
  );
}