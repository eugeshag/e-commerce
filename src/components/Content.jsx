import Filters from "./Filters";
import Products from "./Products";

const Content = ({ addToCart}) => {
  return (
    <div className="flex flex-col p-7">
      <Products addToCart={addToCart} />
    </div>
  );
};

export default Content;
