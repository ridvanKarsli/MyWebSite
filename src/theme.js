import { createTheme } from "@mui/material/styles";

// Tema oluşturuluyor
const theme = createTheme({
  palette: {
    mode: "dark", // Koyu tema
    background: {
      default: "#000000", // Arka plan rengini siyah yapıyoruz
      paper: "#1d1d1d", // Kağıt rengi hala koyu gri
    },
    primary: {
      main: "#3e2723", // Koyu kahverengi
    },
    secondary: {
      main: "#ffd700", // Altın sarısı
    },
    text: {
      primary: "#ffd700", // Altın sarısı metin rengi
      secondary: "#bbbbbb", // İkinci dereceden yazılar için gri
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 900, // Başlık için kalın yazı
      fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" }, // Responsive boyutlandırma
      background: "linear-gradient(to right, #3e2723, #ffd700)", // Koyu kahverengi + altın sarısı gradient
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.1rem",
      textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Hafif gölge
    },
    body1: {
      color: "#ffd700", // Altın sarısı metin rengi
      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" },
      fontWeight: 300,
      lineHeight: 1.6,
      letterSpacing: "0.05rem",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Hafif gölge
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffd700", // Typography bileşenlerinin yazı rengini altın sarısı yapıyoruz
        },
      },
    },
  },
});

export default theme;
