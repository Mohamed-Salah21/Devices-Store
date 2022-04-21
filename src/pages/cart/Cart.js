import React, { useContext } from "react";
import DataContext from "../../components/context/DataContext";
import CartItems from "../../components/cart-items/CartItems";
import "./cart.scss";
import "./cart-media.scss";
const Cart = () => {
  var { cartItems, isDark, removeAllCartItems } = useContext(DataContext);
  var totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <section
      className={` cart-items-page ${isDark ? "dark-theme" : "light-theme"} `}
    >
      <div className="cart-items-container">
        <div className="formating-products-button">
          {cartItems.length > 1 && (
            <button onClick={() => removeAllCartItems()}>Delete All</button>
          )}
        </div>
        <CartItems />
        <div className="all-total-prices">
          <p>
            Subtotal (
            {cartItems.length === 1
              ? " 1 item "
              : ` ${cartItems.length} items `}
            )<h4> ${totalPrice.toLocaleString()}</h4>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Cart;
