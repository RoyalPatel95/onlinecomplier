import axios from "axios";

// ✅ Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 15000,
});

// ✅ Submit code and get token
export async function runCode({ language_id, source_code, stdin }) {
  try {
    const { data } = await api.post("/run", { language_id, source_code, stdin });
    return data; // { token }
  } catch (err) {
    console.error("❌ Error running code:", err.message);
    throw err;
  }
}

// ✅ Fetch result using token
export async function fetchResult(token) {
  try {
    const { data } = await api.get(`/result/${token}`);
    return data; // { stdout, stderr, compile_output, status }
  } catch (err) {
    console.error("❌ Error fetching result:", err.message);
    throw err;
  }
}

// ✅ Optional: Fetch language list
export async function fetchLanguages() {
  try {
    const { data } = await api.get("/languages");
    return data;
  } catch (err) {
    console.error("❌ Error fetching languages:", err.message);
    throw err;
  }
}
