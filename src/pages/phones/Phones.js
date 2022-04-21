import React, { useContext } from "react";
import "./Phones.scss";
import DataContext from "../../components/context/DataContext";
import PhoneProducts from "../../components/products/PhoneProducts";
const Phones = () => {
  const { isDark } = useContext(DataContext);
  return (
    <section
      className={` phones-page ${isDark ? "dark-theme" : "light-theme"} `}
    >
      <div className="phones-container">
        <h3 className="h3"> phones products </h3>
        <div className="products">
          <PhoneProducts />
        </div>
      </div>
    </section>
  );
};
export default Phones;
