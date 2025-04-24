import { useContext } from "react";
import cart_icon from "../assets/icons/cart-plus-solid.svg";
import { CartContext } from "../context/cartContext";

const Product = ({ product }) => {
  const { title, price, image } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border-1 border-gray-100 p-5 shadow-md">
      <img
        className="m-auto h-60 object-contain"
        src={image}
        alt="Product image"
      />
      <div className="mt-10 flex items-center justify-between">
        <div className="mr-10">
          <div className="text-4 font-bold">{title}</div>
          <div className="text-4 mt-1 font-bold text-yellow-500">{price} $</div>
        </div>
        <button
          onClick={() => {
            addToCart(product);
          }}
          className="mt-1 flex-none cursor-pointer rounded-4xl bg-gray-100 p-3 duration-200 hover:bg-gray-200"
        >
          <img src={cart_icon} alt="Add to cart" />
        </button>
      </div>
    </div>
  );
};

export default Product;
