import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRouteAdmin({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser.role !== "admin") {
    return <Navigate to={"/"} />;
  }
  return children;
}
