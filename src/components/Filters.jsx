import { useEffect } from "react";
import { BASE_URL } from "../config";

const Filters = () => {
  useEffect(() => {
    fetch(BASE_URL + "categories/");
  }, []);
  return <div>Filters</div>;
};

export default Filters;
