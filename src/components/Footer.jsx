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
        backgroundColor: "#000000", // Arka plan tamamen siyah
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 -2px 5px rgba(255, 0, 0, 0.3)", // Kırmızımsı üst gölge efekti
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ fontWeight: "400", fontSize: "14px" }}>
          &copy; 2025 Rıdvan Şevki Karslı. Tüm hakları saklıdır.
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: "300", fontSize: "12px", marginTop: "5px", display: "block" }}>
          Designed with ❤️ by Rıdvan Şevki Karslı
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
