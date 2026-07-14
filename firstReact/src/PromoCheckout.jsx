import React, { useState } from "react";

function PromoCheckout() {
  const [promoCode, setPromoCode] = useState("");
  const [isApplicable, setIsApplicable] = useState(false);
  const [total, setTotal] = useState(20);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="flex flex-col items-center mt-20 text-white">
      <div className="bg-zinc-900 p-8 rounded-xl w-96 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 border-b border-zinc-700 pb-2">
          Checkout
        </h2>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Enter promo code..."
            className="border border-zinc-600 bg-zinc-800 p-2 rounded focus:outline-none focus:border-orange-500 flex-1 uppercase"
            value={promoCode}
            onChange={(e) => {
              setPromoCode(e.target.value);
            }}
          />
          <button
            className="bg-orange-600 hover:bg-orange-700 font-bold px-4 rounded transition-colors"
            onClick={() => {
              if (promoCode == "") {
                console.log("Empty Value");
                setErrorMsg("Please Enter Promo Code");

                console.log("isapplicable TRUE");
              } else if (promoCode == "COFFEE50") {
                setIsApplicable(true);
                setErrorMsg("Promo Code Applied :)");
                console.log("isapplicable TRUE");
              } else {
                setIsApplicable(false);
                setErrorMsg("Wrong Promo Code :(");
                console.log("isapplicable FALSE");
              }
            }}
          >
            Apply
          </button>
        </div>
        {isApplicable ? (
          <div className="h-6 mb-4 text-green-400">{errorMsg}</div>
        ) : errorMsg !== "" ? (
          <div className="h-6 mb-4 text-red-400">{errorMsg}</div>
        ) : (
          <div className="h-6 mb-4">{errorMsg}</div>
        )}
        <div className="border-t border-zinc-700 pt-4 flex justify-between items-center mt-4">
          <span className="text-xl text-gray-300">Total:</span>

          {/* Change this price based on the boolean state! */}
          <span className="text-3xl font-bold text-white">
            ${isApplicable == true ? total / 2 : total}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PromoCheckout;
