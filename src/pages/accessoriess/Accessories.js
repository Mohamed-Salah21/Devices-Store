import React, { useContext } from "react";
import "./accessories.scss";
import DataContext from "../../components/context/DataContext";
import AccessoriesProducts from "../../components/products/AccessoriesProducts";
const Accessories = () => {
  const { isDark } = useContext(DataContext);
  return (
    <section
      className={` accessories-page ${isDark ? "dark-theme" : "light-theme"} `}
    >
      <div className="accessories-container">
        <h3 className="h3"> accessories products </h3>
        <div className="products">
          <AccessoriesProducts />
        </div>
      </div>
    </section>
  );
};
export default Accessories;
