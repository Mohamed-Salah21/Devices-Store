import "./navbar.scss";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "../context/DataContext";
const Navbar = () => {
  var { colorModeChanger, isDark, cartItems, isActive, toggleHandler } =
    useContext(DataContext);
  return (
    <nav className={` main-nav ${!isDark ? "dark-theme" : "light-theme"} `}>
      <div className="nav-container">
        <NavLink to="/" className="devices-store-link-sm">
          Devices Store
        </NavLink>
        <div className={`first ${isActive ? "active" : "dis-active"} `}>
          <NavLink exact to="/">
            home
          </NavLink>
          <NavLink to="/laptops"> laptops </NavLink>
          <NavLink to="/phones"> phones </NavLink>
          <NavLink to="/accessories">Accessories </NavLink>
        </div>
        <button className="toggler" onClick={toggleHandler}>
          {isActive ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>

        <div className="last">
          <button onClick={colorModeChanger}>
            {isDark ? (
              <i className="fas fa-sun mode-clicker "></i>
            ) : (
              <i className="fas fa-moon mode-clicker "></i>
            )}
          </button>
          <NavLink to="/cart">
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="lengths">
                <span>{cartItems.length}</span>
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
