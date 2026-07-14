import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ auth }) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Login Page</h1>
      <button
        onClick={() => {
          navigate("/");
          setAuth(true);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
