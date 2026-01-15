import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // While checking token
  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  // Not logged in → go to admin login
  if (!isAuthenticated) {
    return <Navigate to="/owner-login-9876" replace />;
  }

  // Logged in → allow access
  return children;
}
