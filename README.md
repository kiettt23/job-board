# Job Board API (Mock) 🚀

![json-server](https://img.shields.io/badge/json--server-v1.0-orange)
![license](https://img.shields.io/badge/License-MIT-black)

A lightweight mock **REST API** built with [json-server](https://github.com/typicode/json-server).  
This backend provides job data for the **Job Board frontend** project.

---

## 📌 About

- Serves job listings from `jobs.json`.
- Used together with the frontend repo `job-board`.
- Fast prototyping of APIs without building a full backend.

---

## ✨ Features

- REST API endpoints for job data.
- Supports pagination, filtering, and search (provided by json-server).
- Easy to deploy on **Render** or run locally.

---

## 🛠 Tech Stack

- **Backend**: json-server
- **Language**: JavaScript (Node.js)
- **Hosting**: Render (free tier)

---

## 📂 Project Structure

```
job-board-api/
 ├── jobs.json        # mock job data
 ├── package.json     # dependencies + scripts
 ├── README.md        # documentation
 └── .gitignore
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run local server
npm run dev
# → http://localhost:4000/jobs
```

Default endpoint:

- `GET /jobs` → list all jobs
- `GET /jobs/:id` → get job by id

---

## 📦 Deployment (Render)

1. Create new **Web Service** on [Render](https://render.com).
2. Connect this repo.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. The API will be live at:
   ```
   https://job-board-gjsx.onrender.com/jobs
   ```

---

## 📅 Roadmap

- [x] Provide jobs.json dataset
- [x] Deploy on Render
- [ ] Add more job fields (salary, posted date, company)
- [ ] Support auth middleware (optional)

---

## 📜 License

MIT — see [LICENSE](./LICENSE).
