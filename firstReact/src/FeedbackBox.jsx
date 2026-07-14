import React, { useState } from "react";

function FeedbackBox() {
  const [counter, setCounter] = useState("");
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="bg-zinc-900 p-6 rounded-xl w-96 shadow-2xl text-white">
        <h2 className="text-xl font-bold mb-4">Cafe Feedback</h2>

        <textarea
          placeholder="Tell us about your experience..."
          className="w-full bg-zinc-800 border border-zinc-600 rounded p-3 focus:outline-none focus:border-orange-500 h-32 resize-none"
          value={counter}
          onChange={(e) => {
            setCounter(e.target.value);
          }}
        />

        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-400">
            {counter.length} / 100 characters
          </p>
          {counter.length <= 100 ? (
            <button className="bg-orange-600 hover:bg-orange-700 px-4 py-1 rounded font-bold transition-colors">
              Submit
            </button>
          ) : (
            <p className="text-red-400 text-xs ml-10">
              *Content should be less than 100 letters
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedbackBox;
