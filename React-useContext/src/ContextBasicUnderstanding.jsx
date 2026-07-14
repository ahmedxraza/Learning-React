//basic understanding of how Context works

import React, { createContext, useContext, useState } from "./react";
const contextName = createContext();

function App() {
  const [userName] = useState({
    id: 101,
    details: { surename: "mansuri", city: "himmatnagar", state: "gujarat" },
  });
  return (
    <div>
      <contextName.Provider value={userName}>
        <h1>this is Component App</h1>
        <Component1 />
      </contextName.Provider>
    </div>
  );
}

function Component1() {
  return (
    <div>
      <h1>this is Component 1</h1>
      <Component2 />
    </div>
  );
}

function Component2() {
  return (
    <div>
      <h1>this is Component 2</h1>
      <Component3 />
    </div>
  );
}

function Component3() {
  const usingContextName = useContext(contextName);
  return (
    <div>
      <h1>this is Component 3</h1>
      <p>UseContext Name: {usingContextName.details.city}</p>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div>
      <h1>this is Component 4</h1>
    </div>
  );
}

export default App;
