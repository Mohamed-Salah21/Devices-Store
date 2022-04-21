import React, { useContext } from "react";
import "./laptops.scss";
import DataContext from "../../components/context/DataContext";
import LaptopsProducts from "../../components/products/LaptopsProducts";
const Laptops = () => {
  const { isDark } = useContext(DataContext);
  return (
    <section
      className={`laptops-page ${isDark ? "dark-theme" : "light-theme"}`}
    >
      <div className="laptops-container">
        <h3 className="h3"> laptops products </h3>
        <div className="products">
          <LaptopsProducts />
        </div>
      </div>
    </section>
  );
};
export default Laptops;
