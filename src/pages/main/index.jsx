import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";
import styles from "./styles.module.css";
import Plus from "../../assets/Plus.svg";

function Main() {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/productData`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error occured when fetching products: ", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.grid}>
        {products.map(({ id, image, name, price }) => {
          return (
            <div className={styles.gridCart} key={id}>
              <img src={products[0].image} alt={name} />
              <h1>{name}</h1>
              <h2>Price: {price}</h2>
             <button
              className="icon-btn"
              type="button"
              aria-label="In den Warenkorb hinzufügen"
              title="In den Warenkorb hinzufügen"
            >
              <img
              src={Plus}
              width="22"
              height="22"
              alt="Plus"
              aria-hidden="true"
            />
          </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
export default Main;