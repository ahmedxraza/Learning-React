import React, { useState } from "react";
import AuthContext from "./context/AuthContext";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState({ name: "guest", role: "guest" });
  return (
    <div>
      <AuthContext.Provider value={{ user, setUser }}>
        <Header />
        <Dashboard />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
