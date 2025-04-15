import { useState } from "react";

import Header from "./Header";
import Content from "./Content";

const Main = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Header withInput={true} setSearchQuery={setSearchQuery} />
      <Content addToCart={addToCart} searchQuery={searchQuery} />
    </div>
  );
};

export default Main;
