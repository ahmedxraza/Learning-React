import React, { useState } from "react";

function App() {
  return (
    <div>
      <MyComp />
    </div>
  );
}

function MyComp() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <p>Counter : {count}</p>
      <button onClick={increment}>Click</button>
    </>
  );
}

export default App;
