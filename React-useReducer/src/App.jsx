import React, { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchAPI = () => {
      const URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

      fetch(URL)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setPokemon(data);
          // console.log(data.id);
          // console.log(data.name);
          // console.log(data.sprites.front_default);
          // console.log(data.types);
        })
        .catch(() => {
          console.log("Error occured");
        });
    };
    fetchAPI();
  }, []);
  console.log(pokemon);
  return <div></div>;
}

export default App;
