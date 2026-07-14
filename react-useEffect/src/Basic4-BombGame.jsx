import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Ticking");
  useEffect(() => {
    if (status == "Ticking") {
      const time = setTimeout(() => {
        setStatus("BOOM");
      }, 3000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [status]);
  return (
    <div>
      <button
        onClick={() => {
          setStatus("Defused");
        }}
      >
        Click here to defuse
      </button>
      <p>{status}</p>
    </div>
  );
}

export default App;
