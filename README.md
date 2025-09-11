# Job Board 📋 (React + MUI v7 + React Router v7)

[![Live](https://img.shields.io/badge/Demo-Live-brightgreen)](https://jobboard-app.netlify.app/)
![stack](https://img.shields.io/badge/Stack-React%20%7C%20MUI%20v7%20%7C%20Router%20v7-blue)
![license](https://img.shields.io/badge/License-MIT-black)

A responsive **Job Board** web app built with **React + MUI v7 + React Router v7**.  
👉 **Live demo:** [https://jobboard-app.netlify.app/](https://jobboard-app.netlify.app/)

The app simulates a job board:

- Fetch jobs from a mock API (`json-server`) instead of static data.
- Display 5 jobs per page with pagination.
- Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop).
- Dark theme by default.
- **Job detail modal overlay** with background routing.

---

## Highlights

- Data fetching with **axios** from json-server.
- Responsive **navigation bar** (desktop & mobile).
- Functional **Grid v7 API** (no deprecation warnings).
- Error/loading states handled gracefully.
- Modal overlay job detail (background location).

---

## Screenshot

![screenshot](public/screenshot.png)

---

## What I learned

- How to set up **MUI v7 theme overrides** for dark mode.
- Using **Paper, AppBar, Box, Button, Chip, Divider, Grid v7 API**.
- Fetching API with **axios** and handling loading/error state.
- How to structure a React app with **Layout + Outlet (React Router v7)**.
- Implementing **modal routing** with `location.state.background`.

---

## Project structure

```
/ # project root
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── Layout.js
│ │ └── JobCard.js
│ ├── pages/
│ │ ├── Jobs.js           # Job list + pagination (API)
│ │ ├── JobDetail.js      # Fallback full page detail
│ │ └── JobDetailModal.js # Modal overlay detail
│ ├── app/
│ │ ├── apiService.js     # axios instance
│ │ └── config.js         # axios config
│ ├── theme/
│ │ └── theme.js          # Dark theme + overrides
│ ├── App.js
│ └── index.js
├── jobs.json             # Mock API data (served by json-server)
├── public/
│ └── screenshot.png
├── package.json
├── README.md
└── LICENSE
```

---

## Run locally

1. Clone repo:

   ```bash
   git clone https://github.com/kiettt23/job-board.git
   cd job-board
   ```

2. Install deps:

   ```bash
   npm install
   ```

3. Start mock API:

   ```bash
   npm run dev:api
   ```

   → runs at [http://localhost:4000/jobs](http://localhost:4000/jobs)

4. Start React app:
   ```bash
   npm start
   ```
   → runs at [http://localhost:3000](http://localhost:3000)

---

## Roadmap

- [x] Setup json-server + axios for API
- [x] Fetch jobs with pagination (5 per page)
- [x] Job detail modal overlay with background location
- [ ] Authentication (AuthContext + Login Modal)
- [ ] Functional pagination sync with URL `?page=2`
- [ ] Search/filter jobs (title/skills)
- [ ] Dark/light theme toggle
- [ ] Improve JobDetail page (city, salary, postedDate)
- [ ] Polish UI (hover states, spacing, clamp text, icons)
- [ ] Deploy CI/CD pipeline
- [ ] Unit tests (Jest + RTL)

---

## License

MIT — see [LICENSE](./LICENSE).
