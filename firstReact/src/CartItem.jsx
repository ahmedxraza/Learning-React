import React, { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(4);
  const [total, setTotal] = useState(quantity * price);
  return (
    <div className="flex flex-col items-center mt-20 text-white">
      <div className="bg-zinc-900 p-6 rounded-xl w-80 shadow-2xl">
        <h2 className="text-xl font-bold mb-1">Cappuccino</h2>
        <p className="text-gray-400 mb-6">Price: ${price} each</p>

        {/* --- The Controls --- */}
        <div className="flex justify-between items-center bg-zinc-800 p-2 rounded-lg mb-6">
          <button
            className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded font-bold text-xl transition-colors"
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>

          <span className="text-2xl font-bold">{quantity}</span>

          <button
            className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded font-bold text-xl transition-colors"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>

        {/* --- The Total --- */}
        <div className="border-t border-zinc-700 pt-4 flex justify-between items-center">
          <span className="text-lg text-gray-300">Total:</span>

          <span className="text-2xl font-bold text-green-400">
            ${quantity * price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
