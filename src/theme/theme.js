import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "dark") =>
  createTheme({
    palette: {
      mode,
      background: {
        default: "#000000", // nền tổng thể
        paper: "#262626", // màu Paper (card)
      },
      text: {
        primary: "#ffffff",
        secondary: "#aaaaaa",
      },
      primary: {
        main: "#f97316", // cam cho nút
        contrastText: "#ffffff",
      },
    },
    shape: { borderRadius: 12 },
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
        styleOverrides: { root: { backgroundColor: "#dc2626", color: "#fff" } }, // đỏ cho chip
      },
      MuiDivider: {
        styleOverrides: { root: { borderColor: "rgba(255,255,255,0.12)" } },
      },
    },
  });
