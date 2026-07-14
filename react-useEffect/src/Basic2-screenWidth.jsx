import React, { useState, useEffect } from "react";

function App() {
  const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    function handleResize() {
      setScreenWidth(window.innerWidth);
      console.log(window.innerWidth);
    }
    return () => {
      window.removeEventListener;
    };
  }, []);

  return (
    <div className=" text-2xl font-bold">
      <p>{ScreenWidth}</p>
    </div>
  );
}

export default App;
