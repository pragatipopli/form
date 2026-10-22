
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, course }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      console.log(data);
      alert("Student registered successfully!");

      setName("");
      setCourse("");
    } catch (error) {
      console.error("Error:", error);
      alert("Error: " + error.message);
    }
  }

  return (
    <div className="container">
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Course Name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
