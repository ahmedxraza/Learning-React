import React, { children } from "react";
import AlertBox from "./components/AlertBox";

function App() {
  return (
    <div>
      <AlertBox>
        <h3>Warning!!!</h3>
        <p>Battery Low</p>
      </AlertBox>
    </div>
  );
}

export default App;
