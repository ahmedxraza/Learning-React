import React, { use, useState } from "react";
import { UserContext } from "./components/UserContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState({
    name: "raza",
    age: 21,
    city: "HMT",
  });

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Dashboard />
        <Profile />
      </UserContext.Provider>
    </div>
  );
}

export default App;
