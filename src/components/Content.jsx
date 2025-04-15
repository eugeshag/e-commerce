import { useState, useEffect } from "react";

import { BASE_URL } from "../config";
import Products from "./Products";
import Filters from "./Filters";

const Content = ({ addToCart, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(BASE_URL + "products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setInitialProducts(data);
      })
      .catch((error) => console.error("Cant load products", error));
  }, []);

  useEffect(() => {
    let filtered = [...initialProducts];

    switch (filter) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setProducts(filtered)

  }, [filter, initialProducts, searchQuery]);

  return (
    <div className="flex flex-col p-7">
      <Filters setFilter={setFilter} />
      <Products addToCart={addToCart} products={products} />
    </div>
  );
};

export default Content;
