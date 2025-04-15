import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Main from "./components/Main";
import Cart from "./components/Cart";
import Message from "./components/Message";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartInitialized, setIsCartInitialized] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (isCartInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isCartInitialized]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    setIsCartInitialized(true);
  }, []);

  const showMessage = (color, msg) => {
    setMessage({ color, msg });
    setTimeout(() => setMessage(null), 500);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showMessage("green", "Item was added to cart");
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      return updatedCart;
    });
    showMessage("red", "Item was removed from cart");
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity - 1;
          if (newQuantity > 0) {
            acc.push({ ...item, quantity: newQuantity });
          }
        } else {
          acc.push(item);
        }

        return acc;
      }, []);
    });

    showMessage("red", "Item was removed from cart");
  };

  return (
    <>
      <Message messageData={message} />
      <Routes>
        <Route path="/" element={<Main addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
