import { createTheme } from "@mui/material/styles";

// Tema oluşturuluyor
const theme = createTheme({
  palette: {
    mode: "dark", // Koyu tema
    background: {
      default: "#000000", // Arka plan rengini siyah yapıyoruz
      paper: "#1d1d1d", // Kağıt rengi hala koyu gri, isterseniz bunu da "#000000" yapabilirsiniz
    },
    primary: {
      main: "#f44336", // Koyu kırmızı
    },
    secondary: {
      main: "#6200ea", // Koyu mor
    },
    text: {
      primary: "#ffffff", // Yazı rengi beyaz
      secondary: "#bbbbbb", // İkinci dereceden yazılar için gri
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff", // Typography bileşenlerinin yazı rengini beyaz yapıyoruz
        },
      },
    },
  },
});

export default theme;
