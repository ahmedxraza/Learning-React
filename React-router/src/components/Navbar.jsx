import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/about">
        <li>About</li>
      </NavLink>
      <NavLink to="/dashboard">
        <li>Dashboard</li>
      </NavLink>
      <NavLink to="/login">
        <li>Login</li>
      </NavLink>
    </div>
  );
}

export default Navbar;
