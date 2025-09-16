# Job Board 📋 (React + MUI v7 + React Router v7)

[![Live](https://img.shields.io/badge/Demo-Live-brightgreen)](https://jobboard-app.netlify.app/)
![stack](https://img.shields.io/badge/Stack-React%20%7C%20MUI%20v7%20%7C%20Router%20v7-blue)
![license](https://img.shields.io/badge/License-MIT-black)

A responsive **Job Board** web app built with **React + MUI v7 + React Router v7**.

> This project simulates a job board to practice React Router advanced patterns and MUI UI building:
>
> - Modal routing with background location
> - Fake authentication and redirect flow
> - Search + pagination UX

---

## 📌 About

The Job Board allows users to browse job listings, search by keyword, and view job details in a modal overlay. Authentication is implemented with a fake login flow (`admin/demo123`). The project demonstrates a professional **feature-based architecture** suitable for scaling and portfolio presentation.

---

## ✨ Features

- Fetch jobs from mock API (`json-server` hosted on Render).
- Job list with **pagination** (5 per page).
- **Authentication**: fake login (`admin/demo123`).
- If unauthenticated → clicking a job opens **LoginModal** (via route).
- **Login route `/login`** with redirect back to the previous page.
- **Search bar in Navbar** to filter jobs by title/description.
- **Job detail modal overlay** using background routing.
- Custom **dark theme** with MUI overrides.
- Responsive grid layout (mobile → desktop).

---

## 🖼️ Screenshot

![Job Board Screenshot](./public/screenshot.png)

---

## 🛠 Tech Stack

- **Frontend**: React 19, React Router v7, MUI v7
- **Backend (mock)**: json-server
- **HTTP Client**: axios
- **Deploy**: Netlify (frontend) + Render (mock API)

---

## 📂 Project Structure (Feature-based)

```
src/
 ├── app/
 │   ├── api/
 │   │   ├── apiService.js     # axios instance
 │   │   └── axiosConfig.js    # axios baseURL config
 │   ├── contexts/
 │   │   └── AuthContext.js    # global authentication context
 │   ├── constants.js          # global constants (e.g. JOBS_PER_PAGE)
 │   └── theme.js              # MUI theme config
 ├── features/
 │   ├── jobs/
 │   │   ├── Jobs.js
 │   │   ├── JobDetail.js
 │   │   └── JobDetailModal.js
 │   └── auth/
 │       └── LoginModal.js
 ├── components/
 │   ├── Navbar.js
 │   ├── Layout.js
 │   └── JobCard.js
 ├── App.js
 └── index.js
```

---

## 🚀 Getting Started

```bash
# Clone repo
git clone https://github.com/kiettt23/job-board.git
cd job-board

# Install deps
npm install

# Start mock API
npm run dev:api
# → http://localhost:4000/jobs

# Start React app
npm start
# → http://localhost:3000
```

**Login credentials**

- Username: `admin`
- Password: `demo123`

---

## 📅 Roadmap

### ✅ Completed

- v0.1.0: Job list + detail modal (API)
- v0.2.0: Pagination + AuthContext
- v0.2.1: Global login modal
- v0.3.0: Search job (title/description)
- v0.3.1: Move search bar to Navbar
- v0.4.0: Map LoginModal to `/login` route + redirect flow
- v0.4.x: UI polish (Navbar alignment)

### 🔜 Planned

- v0.5.0: **Server-side pagination** with `/jobs?_page=&_limit=`
- v0.6.0: Dark/light theme toggle
- v0.7.0: Improve JobDetail (city, salary, postedDate)
- v0.8.0: CI/CD pipeline (Netlify + Render)
- v0.9.0: Unit tests (Jest + RTL)

---

## 📝 Working Rules

- **Architecture**: feature-based for scalability and clarity.
- **Code style**: sectioned comments (`// -------------------- State --------------------`) to improve readability.
- **Workflow**: setup → code → debug → deploy.
- **Commit**: follow convention (`feat`, `fix`, `refactor`, `docs`, `style`, `chore`).
- **Debug**: read logs, isolate bug, understand before using AI.
- **Docs**: README clear, with setup & demo link.
- **Repo**: clean (gitignore, no junk files).

---

## 📜 License

MIT — see [LICENSE](./LICENSE).
