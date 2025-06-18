import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h1>Loading...</h1>;

  // IF USER NOT FOUND
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!Array.isArray(allowedRoles) || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
