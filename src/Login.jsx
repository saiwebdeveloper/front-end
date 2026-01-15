import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(
        "https://admin-code-ka7c.onrender.com/login", // 🔥 FIX HERE
        { username, password }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard", { replace: true });

    } catch (err) {
      alert("Invalid login");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}
