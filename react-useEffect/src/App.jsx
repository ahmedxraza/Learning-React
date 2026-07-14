//

import React, { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState("");
  const [saveMsg, setSaveMsg] = useState("");

  useEffect(() => {
    if (characters === "") {
      setCharacters("");
      return;
    } else {
      const timer = setTimeout(() => {
        setSaveMsg("Auto save successfully");
      }, 2000);

      const timer2 = setTimeout(() => {
        setSaveMsg("");
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [characters]);

  return (
    <div>
      <center>
        <textarea
          name=""
          id=""
          placeholder="type here"
          value={characters}
          onChange={(e) => {
            setCharacters(e.target.value);
          }}
        ></textarea>
        <p>Characters: {characters.length}</p>
        <p>{saveMsg}</p>
      </center>
    </div>
  );
}

export default App;
