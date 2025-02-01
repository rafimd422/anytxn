"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#1f80f0" },
    secondary: { main: "#005bc4" },
    text: { primary: "#1B2B5A", secondary: "#4A5568" },
  },
  typography: {
    h3: { fontWeight: 700 },
    subtitle1: { fontSize: "0.9rem", textTransform: "uppercase" },
  },
});