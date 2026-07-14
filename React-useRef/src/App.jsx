import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query !== "") {
      const timer = setTimeout(() => {
        console.log("api fetch for: " + query);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      console.log("nothing");
    }
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
