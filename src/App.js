import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import WebsiteName from "./components/website-name/WebsiteName";
import { BrowserRouter } from "react-router-dom";
import api from "./components/api/api";
import DataContext from "./components/context/DataContext";
import Routes from "./components/routes/Routes";
import ScrollToTop from "./ScrollToTop";
import "./App.scss";
function App() {
  let { productItems } = api;
  const [isDark, setDarkMode] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearching] = useState("");
  const [isActive, setActivity] = useState(false);
  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };
  const increment = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id && product.quantity < 7
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : item
      )
    );
  };
  const decrement = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id && product.quantity > 1
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : item
      )
    );
  };
  // };
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const removeAllCartItems = () => setCartItems([]);
  var colorModeChanger = () => setDarkMode(!isDark);
  const toggleHandler = () => setActivity(!isActive);
  useEffect(() => {
    isDark
      ? (document.body.style.backgroundColor = "#20232a")
      : (document.body.style.backgroundColor = "#fff");
    window.onclick = () => isActive && setActivity(false);
  });
  return (
    <div id="App">
      <DataContext.Provider
        value={{
          productItems,
          colorModeChanger,
          isDark,
          cartItems,
          addToCart,
          removeFromCart,
          increment,
          decrement,
          searchInput,
          setSearching,
          isActive,
          setActivity,
          toggleHandler,
          removeAllCartItems,
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <WebsiteName />
          <Navbar />
          <Routes />
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}
export default App;
