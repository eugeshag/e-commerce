import { useState, useEffect } from "react";
import { CartContext } from "./cartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartInitialized, setIsCartInitialized] = useState(false);
  
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
    };
  
    const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
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
    };
  
    return (
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, decreaseQuantity}}
      >
        {children}
      </CartContext.Provider>
    );
  };
  