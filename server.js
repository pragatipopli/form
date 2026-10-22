
import express from "express";

const app = express();

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.post("/api/students", (req, res) => {
  console.log("Received data:", req.body);

  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and course are required",
    });
  }

  res.status(201).json({
    message: "Student registered successfully",
    student: { name, course },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
