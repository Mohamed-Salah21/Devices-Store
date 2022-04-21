import React, { useContext } from "react";
import DataContext from "../../components/context/DataContext";
import HomeProducts from "../../components/products/HomeProducts";
import "./home.scss";
const Home = () => {
  const { isDark } = useContext(DataContext);
  return (
    <div className={` home ${isDark ? "dark-theme" : "light-theme"} `}>
      <div className="home-container">
        <h3 className="h3"> all products </h3>
        <div className="products">
          <HomeProducts />
        </div>
      </div>
    </div>
  );
};
export default Home;
