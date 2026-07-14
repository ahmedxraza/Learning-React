import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Cart Items: {totalItems}</h2>
    </div>
  );
}

export default Navbar;
