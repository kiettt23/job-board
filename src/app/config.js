// Cấu hình chung cho toàn project

// Backend API base URL
// Dùng biến môi trường khi deploy, fallback localhost khi dev
export const API_BASE_URL =
  process.env.REACT_APP_API_BASE || "http://localhost:5000";

// Axios config
export const AXIOS_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 5000, // Sau 5 giây không nhận được phản hồi → axios sẽ tự động reject với lỗi ECONNABORTED.
};

// Pagination
export const JOBS_PER_PAGE = 5;
