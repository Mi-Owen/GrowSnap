// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Cargando…</div>;
  return user ? children : <Navigate to="/login" replace />;
}
