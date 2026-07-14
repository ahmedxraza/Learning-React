import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Navbar</h1>
      <h3>Welcome, {user.name}</h3>
    </div>
  );
}

export default Navbar;
