import { useState } from "react";
import axios from "axios";

export default function StudentResult() {
  const [hallticket, setHallticket] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const getResult = async () => {
    try {
      const res = await axios.get(
        `https://admin-code-ka7c.onrender.com/`
      );
      setStudent(res.data);
      setError("");
    } catch (err) {
      setStudent(null);
      setError("Result not found");
    }
  };

  return (
    <div>
      <h2>Student Result</h2>

      <input
        placeholder="Enter Hall Ticket Number"
        onChange={e => setHallticket(e.target.value)}
      />
      <button onClick={getResult}>Get Result</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {student && (
        <div style={{ border: "1px solid black", padding: "10px" }}>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Hall Ticket:</b> {student.hallticket}</p>
          <p><b>Marks:</b> {student.marks}</p>
          <p><b>Result:</b> {student.marks >= 35 ? "PASS" : "FAIL"}</p>
        </div>
      )}
    </div>
  );
}
