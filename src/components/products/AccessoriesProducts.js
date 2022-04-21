import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import HandlerClicker from "../handler_clicker/HandlerClicker";
const AccessoriesProducts = () => {
  const { productItems, searchInput } = useContext(DataContext);
  var accessories = productItems.filter(
    (product) => product.type === "accessories"
  );
  var accessoriesFilter = accessories.filter((product) =>
    product.name.toLowerCase().trim().includes(searchInput.toLowerCase())
  );
  return (
    <>
      {accessoriesFilter.map((product) => {
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
export default AccessoriesProducts;
