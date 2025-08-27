import axios from "axios";
import dotenv from "dotenv";


dotenv.config();


const JUDGE0_URL = process.env.JUDGE0_URL || "https://ce.judge0.com";
const JUDGE0_KEY = process.env.JUDGE0_KEY || "";


const client = axios.create({
baseURL: JUDGE0_URL,
headers: JUDGE0_KEY
? {
// Example for RapidAPI or custom deployments; adjust header names as needed
"X-RapidAPI-Key": JUDGE0_KEY,
}
: {},
timeout: 60000,
});


export async function listLanguages() {
const { data } = await client.get("/languages");
return data;
}


// Create a submission
export async function createSubmission({ language_id, source_code, stdin }) {
const payload = {
language_id,
source_code,
stdin,
// You can also set expected_output, cpu_time_limit, memory_limit, etc.
};


const { data } = await client.post("/submissions", payload, {
params: { base64_encoded: false, wait: false },
});
return data; // { token }
}


// Get submission result by token
export async function getSubmission(token) {
const { data } = await client.get(`/submissions/${token}`, {
params: { base64_encoded: false, fields: "*" },
});
return data;
}