// src/theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Cor principal (azul)
    },
    secondary: {
      main: "#dc004e", // Cor secundária (vermelho)
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
