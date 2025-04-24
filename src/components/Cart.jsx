import { useContext } from "react";
import Header from "./Header";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity } =
    useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center text-4xl font-bold">
          {" "}
          Cart is empty
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex justify-between p-7 pt-0">
        <div className="mr-10">
          {cart.map((item) => {
            const { id, title, price, image, quantity } = item;
            return (
              <div
                key={id}
                className="mt-7 flex justify-between rounded-2xl border-1 border-gray-100 p-10 shadow-md"
              >
                <img
                  className="mr-5 h-60 w-60 object-contain"
                  src={image}
                  alt="Product image"
                />
                <div className="mr-5 flex flex-1 flex-col">
                  <div className="text-xl font-bold">{title}</div>
                  <div className="text-xl font-bold text-yellow-500">
                    {price} $
                  </div>
                  <div className="mt-5 flex w-fit items-center rounded-2xl border-2 border-gray-100 px-4 py-2">
                    <button
                      onClick={() => {
                        addToCart(item);
                      }}
                      className="mr-2 cursor-pointer rounded-4xl text-2xl duration-200 hover:bg-gray-100"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        role="presentation"
                        focusable="false"
                      >
                        <path
                          fill="#3A3A3A"
                          fillRule="evenodd"
                          d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div className="mr-2 text-xl">{quantity}</div>
                    <button
                      onClick={() => {
                        decreaseQuantity(item.id);
                      }}
                      className="cursor-pointer rounded-4xl text-2xl duration-200 hover:bg-gray-100"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        role="presentation"
                        focusable="false"
                      >
                        <path
                          fill="#3A3A3A"
                          fillRule="evenodd"
                          d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <button
                  className="h-5 cursor-pointer"
                  onClick={() => {
                    removeFromCart(id);
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0a2 2 0 0 1 1.995 1.85L14 2v2h6v2h-2.081L17 17a3 3 0 0 1-2.824 2.995L14 20H6c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L2.08 6H0V4h6V2A2 2 0 0 1 7.85.005L8 0zm3.913 6H4.086L5 17a1 1 0 0 0 .883.993L6 18h8c.515 0 .94-.39.997-.959l.006-.124zM9 8v8H7V8zm4 0v8h-2V8zm-1-6H8v2h4z"
                    ></path>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-7 flex h-30 flex-1 items-center rounded-2xl border-1 border-gray-100 p-10 shadow-md">
          <div className="text-4xl font-bold">Total:</div>
          <div className="ml-3 text-4xl font-bold text-yellow-500">
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}{" "}
            $
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
