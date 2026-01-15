import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [hallticket, setHallticket] = useState("");
  const [marks, setMarks] = useState("");

  // 🔐 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/owner-login-9876", { replace: true });
  };

  useEffect(() => {
    axios.get("https://admin-code-ka7c.onrender.com/")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  const addStudent = async () => {
    await axios.post("https://admin-code-ka7c.onrender.com/", {
      name,
      hallticket,
      marks
    });

    // Refresh list without reload
    const res = await axios.get("https://admin-code-ka7c.onrender.com/");
    setStudents(res.data);

    // Clear inputs
    setName("");
    setHallticket("");
    setMarks("");
  };

  return (
    <div style={{ padding: "20px" }}>
      
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Admin Dashboard</h2>

        {/* 🔴 LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      <hr />

      {/* ADD STUDENT */}
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Hall Ticket"
        value={hallticket}
        onChange={e => setHallticket(e.target.value)}
      />

      <input
        placeholder="Marks"
        value={marks}
        onChange={e => setMarks(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <hr />

      {/* STUDENT LIST */}
      <ul>
        {students.map(s => (
          <li key={s._id}>
            {s.name} | {s.hallticket} | {s.marks}
          </li>
        ))}
      </ul>

    </div>
  );
}
