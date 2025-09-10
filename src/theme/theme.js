import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#f97316",
      },
      secondary: {
        main: "#0ea5e9",
      },
    },
    shape: {
      borderRadius: 12,
    },
  });
