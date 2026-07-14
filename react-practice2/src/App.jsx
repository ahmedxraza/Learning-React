import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext } from "./components/CartContext";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 30000,
    },
    {
      id: 3,
      name: "Mouse",
      price: 1000,
    },
  ];

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ products, cart, setCart }}>
      <Navbar />
      <hr />
      <Products />
      <hr />
      <Cart />
    </CartContext.Provider>
  );
}

export default App;
