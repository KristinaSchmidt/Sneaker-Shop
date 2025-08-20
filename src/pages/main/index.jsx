import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";


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
    <main>
      {/* <News /> */}
      <h1>Products</h1>
      <div>
        {products.map(({ id, name, image, price }) => {
          // <ProductCard>
          return (
            <div key={id}>
              <h1>{name}</h1>
              <img src={products[0].image} alt={name} />
              <h2>Price: {price}</h2>
            </div>
          );
        })}
      </div>
    </main>
  );
}
export default Main;