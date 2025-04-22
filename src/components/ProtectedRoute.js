// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// function ProtectedRoute({ children, allowedRoles }) {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) return <h1>Loading...</h1>;

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

// export default ProtectedRoute;
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles = [] }) { // ✅ Default to an empty array
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h1>Loading...</h1>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!Array.isArray(allowedRoles) || !allowedRoles.includes(user.role)) { // ✅ Ensure allowedRoles is an array
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
