import React, { useEffect, useState } from "react";

function App() {
  const [showNotification, setshowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const waiting = setTimeout(() => {
        setshowNotification(false);
      }, 1000);

      return () => {
        clearTimeout(waiting);
      };
    }
  }, [showNotification]);
  return (
    <div>
      <h1>{showNotification ? "SUCCESSFULLY SAVED" : ""}</h1>
      <button
        onClick={() => {
          setshowNotification(true);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
