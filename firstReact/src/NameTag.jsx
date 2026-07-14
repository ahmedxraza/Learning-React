import React, { useState } from "react";

function NameTag() {
  // 1. Create your state here!
  const [a, b] = useState("");
  return (
    <div className="flex flex-col items-center mt-10 gap-8">
      {/* The Input Field */}
      <input
        type="text"
        placeholder="Type your name here..."
        className="border-2 border-zinc-600 bg-zinc-800 text-white p-3 rounded-lg w-80 focus:outline-none focus:border-green-500"
        // 2. Lock the value to your state
        value={a}
        // 3. Add your onChange trigger here to update the state!
        onChange={(e) => {
          b(e.target.value);
        }}
      />

      {/* The Live Display (The Cup) */}
      <div className="h-48 w-48 rounded-full border-8 border-zinc-200 bg-orange-100 flex items-center justify-center shadow-2xl">
        {/* 4. Display the state here. (Extra Credit: Make it say "Guest" if empty!) */}
        <p className="text-2xl font-bold text-zinc-800 tracking-wide">
          {a == "" ? "Guest" : a}
        </p>
      </div>
    </div>
  );
}

export default NameTag;
