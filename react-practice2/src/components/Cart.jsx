import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>

            <p>Price: ₹{item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <button onClick={() => increaseQuantity(item.id)}>+</button>

            <button onClick={() => decreaseQuantity(item.id)}>-</button>

            <hr />
          </div>
        ))
      )}

      <h2>Total Price: ₹{totalPrice}</h2>
    </div>
  );
}

export default Cart;
