import { createTheme } from "@mui/material/styles";

// Tema oluşturuluyor
const theme = createTheme({
    palette: {
      mode: "dark", // Koyu tema
      background: {
        default: "#121212",
        paper: "#1d1d1d",
      },
      primary: {
        main: "#f44336", // Koyu kırmızı
      },
      secondary: {
        main: "#6200ea", // Koyu mor
      },
      text: {
        primary: "#ffffff",
        secondary: "#bbbbbb",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#fff",
          },
        },
      },
    },
  });

export default theme;
