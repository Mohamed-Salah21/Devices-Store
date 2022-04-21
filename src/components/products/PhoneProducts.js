import DataContext from "../context/DataContext";
import React, { useContext } from "react";
import HandlerClicker from "../handler_clicker/HandlerClicker";
const PhoneProducts = () => {
  const { productItems, searchInput } = useContext(DataContext);
  var phones = productItems.filter((product) => product.type === "phones");
  var phonesFiltered = phones.filter((product) =>
    product.name.toLowerCase().trim().includes(searchInput.toLowerCase())
  );
  return (
    <>
      {phonesFiltered.map((product) => {
        return (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-name">{product.name}</div>
            <div className="product-price">
              ${product.price.toLocaleString()}{" "}
            </div>
            <HandlerClicker product={product} />
          </div>
        );
      })}
    </>
  );
};
export default PhoneProducts;
