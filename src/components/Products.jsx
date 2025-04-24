import Product from "./Product";

const Products = ({products}) => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
