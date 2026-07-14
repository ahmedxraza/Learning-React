import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Dashboard() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user.name);
  return (
    <div>
      <h1>DASHBOARD</h1>
      {user.role == "guest" && <p>Guest Content</p>}
      {user.role == "user" && <p>User Content</p>}
      {user.role == "admin" && <p>Admin Content</p>}
      {user.role == "" && <p>Logged out</p>}
    </div>
  );
}

export default Dashboard;
