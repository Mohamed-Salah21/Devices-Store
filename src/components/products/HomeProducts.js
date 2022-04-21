import { useContext } from "react";
import DataContext from "../context/DataContext";
import HandlerClicker from "../handler_clicker/HandlerClicker";
const HomeProducts = () => {
  const { productItems, searchInput } = useContext(DataContext);
  const filtered = productItems.filter(
    (product) =>
      product.name.trim().toLowerCase().includes(searchInput.toLowerCase()) ||
      product.type.trim().toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      {filtered.map((product) => {
        return (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-name">{product.name}</div>
            <div className="product-price">
              ${product.price.toLocaleString()}
            </div>
            <HandlerClicker product={product} />
          </div>
        );
      })}
    </>
  );
};
export default HomeProducts;
