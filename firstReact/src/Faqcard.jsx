import React, { useState } from "react";

function FaqCard() {
  // 1. Create your state here!
  const [a, b] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10 p-6 border-2 border-zinc-700 rounded-xl bg-zinc-900 w-96 mx-auto gap-4">
      {/* The Question */}
      <h2 className="text-xl font-bold text-white">
        What is the use of the children prop?
      </h2>
      {/* The Button */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold w-full"
        // 2. Add your onClick trigger here!
        onClick={() => {
          b(!a);
          console.log(a);
        }}
      >
        {/* 3. (Extra Credit) Make this text dynamic! */}
        {a ? "Hide Answer" : "Show Answer"}
      </button>
      {/* The Answer */}
      {/* 4. Wrap this paragraph in a Conditional Render so it only shows when open */}
      {a ? (
        <p className="text-gray-300 text-center">
          It is used to pass UI elements or blocks of HTML to fill in the
          structure of a wrapper component!
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default FaqCard;
