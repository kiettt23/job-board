import axios from "axios";
import { AXIOS_CONFIG } from "./config";

const api = axios.create(AXIOS_CONFIG);

// Debug log (chỉ nên dùng lúc dev, có thể bỏ khi deploy)
if (process.env.NODE_ENV === "development") {
  console.log("Axios baseURL:", api.defaults.baseURL);
}

export default api;
