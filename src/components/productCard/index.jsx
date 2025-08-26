import { useCart } from "../../context/cartContext";
import styles from "./styles.module.css";

function ProductCard({ product }) {
  const { isInCart, addToCart, removeFromCart } = useCart();


  const id = product.id;
  const displayName = product.name ?? product.title ?? "Ohne Titel";
  const image = product.image;
  const price = product.price;

  const inCart = isInCart?.(id);

  return (
    <div className={styles.card}>
      <img src={image} alt={displayName} className={styles.img} />
      <h4 className={styles.title}>{displayName}</h4>

      <div className={styles.row}>
        <span className={styles.price}><b>{price} €</b></span>

        <button
  type="button"
  onClick={() => {
    alert("Button wurde geklickt!");  // << Test
  }}
>
  Test
</button>
      </div>
    </div>
  );
}

export default ProductCard;