import axios from "axios";
import config from "./config";

console.log("API_BASE from env:", process.env.REACT_APP_API_BASE);
const api = axios.create(config);
console.log("Axios instance baseURL:", api.defaults.baseURL);

export default api;
