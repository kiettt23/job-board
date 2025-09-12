# 📡 Job Board API (json-server)

Mock API cho dự án **Job Board**, chạy bằng [json-server](https://github.com/typicode/json-server).

---

## 📂 Project Structure
```
job-board-api/
├── jobs.json      # Data cho mock API
├── package.json   # Config json-server
└── README.md      # Tài liệu dự án
```

---

## 🚀 Run locally

1. Cài dependency:
   ```bash
   npm install
   ```

2. Chạy server:
   ```bash
   npm start
   ```

3. API mặc định chạy tại:
   - [http://localhost:4000/jobs](http://localhost:4000/jobs)

---

## 🌐 Deploy lên Render

1. Push repo này lên GitHub.
2. Truy cập [Render](https://render.com/) → **New Web Service**.
3. Kết nối repo, chọn **Node**.
4. Cấu hình:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Sau khi deploy thành công, API public sẽ có link ví dụ:
   ```
   https://job-board-api.onrender.com/jobs
   ```

---

## 🔗 Kết nối với Frontend

Trong repo **job-board (frontend)**, cập nhật file `.env`:

```env
# Khi chạy local
REACT_APP_API_BASE=http://localhost:4000

# Khi deploy Netlify
REACT_APP_API_BASE=https://job-board-api.onrender.com
```

---

## 📜 License
MIT
