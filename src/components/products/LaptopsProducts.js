import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import HandlerClicker from "../handler_clicker/HandlerClicker";
const LaptopsProducts = () => {
  const { productItems, searchInput } = useContext(DataContext);
  var laptops = productItems.filter((product) => product.type === "laptops");
  var laptopsFiltered = laptops.filter((product) =>
    product.name.toLowerCase().trim().includes(searchInput.toLowerCase())
  );
  return (
    <>
      {laptopsFiltered.map((product) => {
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
export default LaptopsProducts;
