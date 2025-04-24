import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Cart from "./components/Cart";
import Message from "./components/Message";

function App() {
  return (
    <>
      {/* <Message messageData={message} /> */}
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
