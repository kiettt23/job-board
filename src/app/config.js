const config = {
  baseURL: process.env.REACT_APP_API_BASE,
  timeout: 5000, // Sau 5 giây không nhận được phản hồi → axios sẽ tự động reject với lỗi ECONNABORTED.
};

export default config;
