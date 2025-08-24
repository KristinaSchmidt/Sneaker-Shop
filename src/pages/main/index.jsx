import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";
import styles from "./styles.module.css";
import Plus from "../../assets/Plus.svg";

function Main() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`);
      setProducts(data || []);
    } catch (error) {
      console.error("Error occured when fetching products: ", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Produkte</h1>

      <div className={styles.grid}>
        {products.map(({ id, image, name, price }) => (
          <div className={styles.gridCart} key={id}>
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
      aria-label="Zum Warenkorb hinzufügen"
      title="Zum Warenkorb hinzufügen"
    >
      <img src={Plus} width="14" height="14" alt="" aria-hidden="true" />
    </button>
  </div>
</div>
        ))}
      </div>
    </main>
  );
}

export default Main;