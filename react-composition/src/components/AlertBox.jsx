import React, { children } from "react";

function AlertBox({ children }) {
  return (
    <div className="bg-yellow-100 border-2 border-red-500 p-4">{children}</div>
  );
}

export default AlertBox;
