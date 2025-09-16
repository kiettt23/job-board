// -------------------- Imports --------------------
import axios from "axios";
import { AXIOS_CONFIG } from "./axiosConfig";

// -------------------- Axios Instance --------------------
const api = axios.create(AXIOS_CONFIG);

// Debug only in development
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-console
  console.log("Axios baseURL:", api.defaults.baseURL);
}

export default api;
