// -------------------- Imports --------------------
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "./app/theme"; // moved to app/theme

// -------------------- Render Root --------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Global theme + CSS reset */}
    <ThemeProvider theme={getTheme("dark")}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
