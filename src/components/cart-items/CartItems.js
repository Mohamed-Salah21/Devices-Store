import React, { useContext } from "react";
import DataContext from "../context/DataContext";
const CartItems = () => {
  const { cartItems, increment, decrement, removeFromCart } =
    useContext(DataContext);
  return (
    <>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-informations">
              <div>
                <h4> {item.name} </h4>
                <p> ${item.price.toLocaleString()} </p>
              </div>
            </div>
            <div className="counter-quantity">
              <button
                className={`${item.quantity === 1 && "dis-active"}`}
                onClick={() => decrement(item)}
              >
                -
              </button>
              <span> {item.quantity} </span>
              <button
                className={`${item.quantity === 7 && "dis-active"}`}
                onClick={() => increment(item)}
              >
                +
              </button>
            </div>
            <div className="total-price">
              <span> ${(item.price * item.quantity).toLocaleString()}</span>
            </div>
            <div className="remove-item">
              <button onClick={() => removeFromCart(item)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItems;
