import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function ProductCart() {
  const { cartCounter, setCartCounter } = useContext(CartContext);
  return (
    <div>
      <h1>WireLess Headphone: $99</h1>
      <button
        onClick={() => {
          setCartCounter((cartCounter) => cartCounter + 1);
        }}
      >
        + Add to Cart
      </button>
      <button
        onClick={() => {
          if (cartCounter == 0) {
          } else {
            setCartCounter((cartCounter) => cartCounter - 1);
          }
        }}
      >
        - Remove
      </button>
    </div>
  );
}

export default ProductCart;
