import DataContext from "../context/DataContext";
import { useContext } from "react";
const HandlerClicker = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(DataContext);
  const productInCart = cartItems.find((item) => item.id === product.id);
  return (
    <button
      className="product-button"
      onClick={() =>
        !productInCart ? addToCart(product) : removeFromCart(product)
      }
    >
      {!productInCart ? "add to cart" : "remove from cart"}
    </button>
  );
};
export default HandlerClicker;
