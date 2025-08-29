import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import { useCart } from "../../context/cartContext";
import axios from "axios";
import styles from "./styles.module.css";


function Main() {
  const [products, setProducts] = useState([]);
  const { addToCart, isInCart, removeFromCart } = useCart();

  async function fetchProducts() {
    const { data } = await axios.get(`${BASE_URL}/products`);
    setProducts(data || []);
  }

  useEffect(() => { fetchProducts(); }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Produkte</h1>
      <div className={styles.grid}>
        {products.map(({ id, image, name, price }) => (
          <div key={id} className={styles.gridCart}>
            <img src={image} alt={name} className={styles.productImage} />
            <h4 className={styles.cardTitle}>{name}</h4>
            <div className={styles.row}>
              <div className={styles.priceBox}>
                <span className={styles.priceLabel}>PREIS:</span>
                <span className={styles.price}><b>{price} €</b></span>
              </div>

              <button
                className={styles.iconBtn}
                type="button"
                onClick={() =>
                  isInCart?.(id)
                    ? removeFromCart(id)
                    : addToCart({ id, name, price, image })
                }
              >
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;