import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ auth }) {
  if (!auth) {
    return <Navigate to="/Login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
