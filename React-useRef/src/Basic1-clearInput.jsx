import React, { useRef } from "react";

function App() {
  const theMsg = useRef("");
  return (
    <div>
      <center>
        <input type="text" ref={theMsg} />
        <br />
        <button
          onClick={() => {
            alert("The messege sent: " + theMsg.current.value);
            theMsg.current.value = "";
          }}
        >
          Click
        </button>
      </center>
    </div>
  );
}

export default App;
