import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import StudentResult from "./StudentResult";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 STUDENT RESULT PAGE */}
        <Route path="/" element={<StudentResult />} />

        {/* 🔐 SECRET ADMIN LOGIN */}
        <Route path="/owner-login-9876" element={<Login />} />

        {/* 👑 ADMIN DASHBOARD (PROTECTED) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
