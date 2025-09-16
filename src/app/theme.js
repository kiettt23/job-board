// -------------------- Imports --------------------
import { createTheme } from "@mui/material/styles";

// -------------------- Theme Factory --------------------
export const getTheme = (mode = "dark") =>
  createTheme({
    palette: {
      mode,
      background: {
        default: "#000000",
        paper: "#262626",
      },
      text: {
        primary: "#ffffff",
        secondary: "#aaaaaa",
      },
      primary: {
        main: "#f97316",
        contrastText: "#ffffff",
      },
    },
    shape: { borderRadius: 12 },

    // -------------------- Component Overrides --------------------
    components: {
      MuiPaper: {
        styleOverrides: {
          root: { boxShadow: "0 6px 16px rgba(0,0,0,0.6)" },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { fontWeight: 600, textTransform: "uppercase" },
        },
      },
      MuiChip: {
        styleOverrides: {
          // Brand color for skills chips
          root: { backgroundColor: "#dc2626", color: "#fff" },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: { borderColor: "rgba(255,255,255,0.12)" },
        },
      },
    },
  });
