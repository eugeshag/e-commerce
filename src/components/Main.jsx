import Header from "./Header";
import Content from "./Content";

const Main = ({ addToCart }) => {
  return (
    <div>
      <Header withInput={true} />
      <Content addToCart={addToCart} />
    </div>
  );
};

export default Main;
