// Cấu hình chung cho toàn project

// Backend API base URL
// Dùng biến môi trường khi deploy, fallback localhost khi dev
export const API_BASE_URL =
  process.env.REACT_APP_API_BASE || "http://localhost:5000";

// Axios config (không set timeout → mặc định = 0, tức là không giới hạn)
export const AXIOS_CONFIG = {
  baseURL: API_BASE_URL,
};

// Pagination
export const JOBS_PER_PAGE = 5;
