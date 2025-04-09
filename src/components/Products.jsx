import { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";
import { BASE_URL } from "../config";

const Products = ({ addToCart}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + "products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Cant load products", error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
