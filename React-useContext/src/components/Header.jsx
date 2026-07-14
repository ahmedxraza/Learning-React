import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Header() {
  const { user, setUser } = useContext(AuthContext);

  function loginAsUser() {
    console.log("Login as User: " + user.name);
    setUser({ name: "User John", role: "user" });
  }
  function loginAsAdmin() {
    console.log("Login as Admin: " + user.name);
    setUser({ name: "Admin", role: "admin" });
  }
  function logout() {
    console.log("Logged out");
    setUser({ name: "", role: "" });
  }

  return (
    <div>
      <h1>Header</h1>
      <button onClick={loginAsUser}>Login As User</button>
      <button onClick={loginAsAdmin}>Login As Admin</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Header;
