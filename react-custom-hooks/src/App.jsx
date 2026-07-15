import React from "react";
import { useState } from "react";

function App() {
  const { r, toggle } = useToggle();
  return (
    <div>
      <button onClick={toggle}>Click: {r.toString()}</button>
      <p>Light is {r ? "On" : "Off"}</p>
    </div>
  );
}

function useToggle() {
  const [r, setR] = useState(false);
  function toggle() {
    setR((r) => !r);
  }
  return { r, toggle };
}

export default App;
