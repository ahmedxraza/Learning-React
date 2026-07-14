import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Hello {user.name}</h3>
    </div>
  );
}

export default Dashboard;
