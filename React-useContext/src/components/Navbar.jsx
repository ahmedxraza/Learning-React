import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function Navbar() {
  const { cartCounter, setCartCounter } = useContext(CartContext);
  return (
    <div>
      <p>Cart Items:{cartCounter} </p>
      <button
        onClick={() => {
          setCartCounter(0);
        }}
      >
        Empty The Cart
      </button>
    </div>
  );
}

export default Navbar;
