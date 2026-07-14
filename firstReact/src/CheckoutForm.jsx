import React, { useState } from "react";

function CheckoutForm() {
  // 1. Create your THREE state variables here!
  const [name, nameb] = useState("");
  const [tableNo, tableNob] = useState("");
  const [isOrderPlaced, isOrderPlacedb] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-700 w-96 shadow-2xl text-white">
        {/* 4. Wrap everything below in a Conditional Render based on isSubmitted! */}
        {isOrderPlaced == false ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold border-b border-zinc-700 pb-2">
              Complete Your Order
            </h2>

            <label className="text-sm text-gray-400">Name for order</label>
            {/* 2. Wire up the Name Input (value & onChange) */}
            <input
              type="text"
              placeholder="e.g. Raza"
              className="border border-zinc-600 bg-zinc-800 p-2 rounded focus:outline-none focus:border-orange-500"
              value={name}
              onChange={(e) => {
                nameb(e.target.value);
              }}
            />

            <label className="text-sm text-gray-400">Table Number</label>
            {/* 2. Wire up the Table Input (value & onChange) */}
            <input
              type="text"
              placeholder="e.g. 12"
              className="border border-zinc-600 bg-zinc-800 p-2 rounded focus:outline-none focus:border-orange-500"
              value={tableNo}
              onChange={(e) => {
                tableNob(e.target.value);
              }}
            />

            {/* 3. Wire up this button to change isSubmitted to true */}
            <button
              className="bg-orange-600 hover:bg-orange-700 font-bold py-3 mt-4 rounded-lg transition-colors"
              onClick={() => {
                isOrderPlacedb(!isOrderPlaced);
              }}
            >
              Place Order
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center gap-3 py-6">
            <div className="text-5xl mb-2">✅</div>
            <h2 className="text-2xl font-bold text-green-400">
              Order Confirmed!
            </h2>
            {/* Make this dynamic based on the typed state! */}
            <p className="text-lg text-gray-300">
              Thank you, <span className="text-white font-bold">{name}</span>!
            </p>
            <p className="text-gray-400">
              We will bring your food to Table{" "}
              <span className="text-white font-bold">#{tableNo}</span> shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutForm;
