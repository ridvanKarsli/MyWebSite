import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "20px",
        backgroundColor: "#1d1d1d", // Daha koyu bir arka plan rengi
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)", // Üst kenarda hafif gölge efekti
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ fontWeight: "400", fontSize: "14px" }}>
          &copy; 2025 Rıdvan Şevki karslı. Tüm hakları saklıdır.
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: "300", fontSize: "12px", marginTop: "5px" }}>
          Designed with love by Rıdvan Şevki Karslı
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
