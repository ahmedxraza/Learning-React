// random quote generator
import React, { use } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function getJoke() {
    setIsLoading(true);
    const jokeApi = "https://randomuser.me/api/";
    fetch(jokeApi)
      .then((response) => {
        return response.json();
      })
      .then((jokeData) => {
        setJoke(
          jokeData.results[0].name.first + " " + jokeData.results[0].name.last
        );
        setIsLoading(false);
      })
      .catch(() => {
        setJoke("Failed to fetch");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <h1>random quote generator</h1>
      <p>{joke}</p>
      <button onClick={getJoke} disabled={isLoading}>
        {isLoading ? "Fetching the joke" : "Generate a joke"}
      </button>
    </div>
  );
}

export default App;
