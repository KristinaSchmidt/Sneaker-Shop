import { useCart } from "../../context/cartContext";
import styles from "./styles.module.css";

function ProductCard({ product }) {
  const { isInCart, addToCart, removeFromCart } = useCart();
  const { id, name, image, price } = product;
  const inCart = isInCart?.(id);

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.img} />
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.row}>
        <span className={styles.price}><b>{price} €</b></span>
        <button
          className={`${styles.btn} ${inCart ? styles.inCart : ""}`}
          onClick={() => (inCart ? removeFromCart(id) : addToCart(product))}
          aria-label={inCart ? "Remove from cart" : "Add to cart"}
          title={inCart ? "Убрать из корзины" : "Добавить в корзину"}
        >
          {inCart ? "−" : "+"}
        </button>
      </div>
    </div>
  );
}
export default ProductCard;