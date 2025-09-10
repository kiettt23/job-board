# Job Board 📋 (React + MUI v5 + React Router v7)

[![Live](https://img.shields.io/badge/Demo-Live-brightgreen)](https://jobboard-app.netlify.app/)
![stack](https://img.shields.io/badge/Stack-React%20%7C%20MUI-blue)
![license](https://img.shields.io/badge/License-MIT-black)

A simple **Job Board mock website** built with **React + MUI v5 + React Router v7**.  
👉 **Live demo:** [https://jobboard-app.netlify.app/](https://jobboard-app.netlify.app/)

---

## Highlights

- Display **5 job postings** per page (title, ≤4 skills, description).
- Responsive **navigation bar** (desktop & mobile).
- Responsive **grid layout** (1 col mobile, 2 col tablet, 3 col desktop).
- **Dark theme** by default.
- **Pagination buttons** (non-functioning as base requirement).
- 🚀 **Job detail page** (basic info when clicking “Learn More”).

---

## Screenshot

![screenshot](public/screenshot.png)

---

## What I learned

- How to set up **MUI v5 theme overrides** for dark mode.
- Using **Paper, AppBar, Box, Button, Chip, Divider** to match design.
- How to structure a React app with **Layout + Outlet (React Router v7)**.
- Implementing **responsive Grid system** with breakpoints.
- Limiting array output (skills.slice(0,4)) to meet UI requirements.

---

## Project structure

```
/ # project root
├── src/
│ ├── components/
│ │ ├── Navbar.js # Responsive AppBar + search placeholder
│ │ ├── Layout.js # Layout wrapper with Navbar + Outlet
│ │ └── JobCard.js # Paper card for single job
│ ├── pages/
│ │ ├── Jobs.js # Job list + pagination (non-functioning)
│ │ └── JobDetail.js # Show job info by id
│ ├── data/
│ │ └── jobs.js # Static job dataset
│ ├── theme/
│ │ └── theme.js # Dark theme + overrides
│ ├── App.js # Router configuration
│ └── index.js # Entry point (ThemeProvider, CssBaseline)
├── public/
│ └── screenshot.png # UI screenshot
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
2. Install & run:
   ```bash
   npm install
   npm start
   ```

---

## Roadmap

- [ ] 🚀 Functional pagination (state + URL sync with ?page=2)
- [ ] 🚀 Dark/light theme toggle (save to localStorage)
- [ ] Search/filter jobs (title/skills)
- [ ] Improve JobDetail page (full data: city, salary, postedDate)
- [ ] Polish UI (hover states, spacing, clamp text, icons)
- [ ] Deploy CI/CD pipeline (auto deploy on push)
- [ ] Add unit tests (Jest + React Testing Library)

---

## License

MIT — see [LICENSE](./LICENSE).
