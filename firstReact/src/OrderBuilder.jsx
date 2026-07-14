import React, { use, useState } from "react";

function OrderBuilder() {
  // 1. Create your string state AND your array state here!
  const [foodName, BfoodName] = useState("");
  const [orderList, BorderList] = useState([]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 w-96 shadow-2xl text-white">
        <h2 className="text-xl font-bold mb-4 border-b border-zinc-700 pb-2">
          Build Your Order
        </h2>

        {/* --- The Input Area --- */}
        <div className="flex gap-2 mb-6">
          {/* 2. Wire this input up to your string state */}
          <input
            type="text"
            placeholder="e.g. Cold Coffee"
            className="border border-zinc-600 bg-zinc-800 p-2 rounded focus:outline-none focus:border-orange-500 flex-1"
            value={foodName}
            onChange={(e) => {
              BfoodName(e.target.value);
            }}
          />

          {/* 3. Wire this button up to update the array AND clear the input! */}
          <button
            className="bg-orange-600 hover:bg-orange-700 font-bold px-4 rounded transition-colors"
            onClick={() => {
              BorderList([...orderList, foodName]);
              BfoodName("");
            }}
          >
            Add
          </button>
        </div>

        {/* --- The List Display --- */}
        <div className="bg-zinc-800 rounded p-4 min-h-[150px]">
          <h3 className="text-gray-400 text-sm mb-2">Current Items:</h3>

          <ul className="list-disc list-inside space-y-1">
            {/* 4. Use .map() on your array state to generate these <li> tags dynamically! */}
            {orderList.map((item, index) => (
              <li key={index} className="text-orange-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderBuilder;
