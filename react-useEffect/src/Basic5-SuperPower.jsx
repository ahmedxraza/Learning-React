import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Active");
  useEffect(() => {
    if (status === "Cooldown") {
      const time = setTimeout(() => {
        setStatus("Active");
      }, 3000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [status]);
  return (
    <div>
      <center>
        <button
          onClick={() => {
            setStatus("Cooldown");
          }}
        >
          {status === "Active" ? "Use Power" : "Cooling Down"}
        </button>
      </center>
    </div>
  );
}

export default App;
