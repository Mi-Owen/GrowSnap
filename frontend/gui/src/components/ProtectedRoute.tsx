import React from "react";
import { Navigate } from "react-router-dom";
import { User } from "firebase/auth";

interface ProtectedRouteProps {
  user: User | null;
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
  if (!user) {
    // Redirige al login si no hay usuario
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
