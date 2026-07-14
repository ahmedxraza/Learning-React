import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Profile</h1>
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>City: {user.city}</h3>
      <button
        onClick={() => {
          setUser({ ...user, name: "Hero" });
          console.log({ ...user });
        }}
      >
        Change name to HERO
      </button>
    </div>
  );
}

export default Profile;
