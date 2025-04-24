import { useState, useEffect } from "react";

import { BASE_URL } from "../config";
import Products from "./Products";
import Filters from "./Filters";

const Content = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [sort, setSort] = useState("all");
  const [priceFilter, setPriceFilter] = useState({min: "", max: ""})

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

    if (priceFilter) {
      if (priceFilter.min) {
        filtered = filtered.filter((product) => product.price >= priceFilter.min);
      }
      if (priceFilter.max) {
        filtered = filtered.filter((product) => product.price <= priceFilter.max);
      }
    }

    switch (sort) {
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

  }, [sort, initialProducts, searchQuery, priceFilter]);

  return (
    <div className="flex flex-col p-7">
      <Filters setSort={setSort} setPriceFilter={setPriceFilter} priceFilter={priceFilter} />
      <Products products={products} />
    </div>
  );
};

export default Content;
