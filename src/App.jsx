import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Cart from "./components/Cart";
import Message from "./components/Message";
import { useContext } from "react";
import { CartContext } from "./context/cartContext";

function App() {
  const {message} = useContext(CartContext)
  
  return (
    <>
      {<Message messageData={message} /> }
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/cart"
          element={
            <Cart/>
          }
        />
      </Routes>
    </>
  );
}

export default App;
