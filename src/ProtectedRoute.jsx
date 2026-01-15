import { Navigate } from "react-router-dom";

/**
 * Protects admin routes using JWT token
 * If token exists → allow access
 * If not → redirect to admin login
 */
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // If token not found, redirect to secret admin login
  if (!token) {
    return <Navigate to="/owner-login-9876" replace />;
  }

  // If token exists, allow access
  return children;
}
