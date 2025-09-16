// -------------------- API Config --------------------
// Use environment variable when deployed, fallback localhost in dev
export const API_BASE_URL =
  process.env.REACT_APP_API_BASE || "http://localhost:5000";

// -------------------- Axios Config --------------------
export const AXIOS_CONFIG = {
  baseURL: API_BASE_URL, // no timeout → axios waits indefinitely
};
