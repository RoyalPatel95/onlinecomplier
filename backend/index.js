import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS allow frontend (Vite default ports)
app.use(
  cors({
    origin: "https://online-complier.netlify.app",
    credentials: true,
  })
);
app.use(express.json());

// 🔑 Debug: Check if key loaded
if (!process.env.JUDGE0_KEY) {
  console.error("❌ JUDGE0_KEY missing in .env file!");
}

// ✅ 1. Languages route
app.get("/api/languages", async (req, res) => {
  try {
    const response = await fetch("https://judge0-ce.p.rapidapi.com/languages", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        "x-rapidapi-key": process.env.JUDGE0_KEY,
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching languages:", err.message);
    res.status(500).json({ error: "Languages fetch failed", details: err.message });
  }
});

// ✅ 2. Code submission (returns token) with base64
app.post("/api/run", async (req, res) => {
  const { language_id, source_code, stdin } = req.body;

  try {
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": process.env.JUDGE0_KEY,
        },
        body: JSON.stringify({
          language_id,
          source_code: Buffer.from(source_code).toString("base64"),
          stdin: Buffer.from(stdin).toString("base64"),
        }),
      }
    );

    const result = await response.json(); // { token }
    res.json(result);
  } catch (err) {
    console.error("❌ Compiler error:", err.message);
    res.status(500).json({ error: "Execution error", details: err.message });
  }
});

// ✅ 3. Get result by token (decode base64)
app.get("/api/result/:token", async (req, res) => {
  const { token } = req.params;
  try {
    const response = await fetch(
      `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": process.env.JUDGE0_KEY,
        },
      }
    );

    const data = await response.json();

    if (data.stdout) data.stdout = Buffer.from(data.stdout, "base64").toString("utf-8");
    if (data.stderr) data.stderr = Buffer.from(data.stderr, "base64").toString("utf-8");
    if (data.compile_output) data.compile_output = Buffer.from(data.compile_output, "base64").toString("utf-8");

    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching result:", err.message);
    res.status(500).json({ error: "Result fetch failed", details: err.message });
  }
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});

