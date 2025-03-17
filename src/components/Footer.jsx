import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles"; // To access the theme in the component

const Footer = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      sx={{
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "20px",
        background: `linear-gradient(45deg, ${theme.palette.primary.main}90, ${theme.palette.secondary.main}90)`, // Hero ile uyumlu gradient arka plan
        color: theme.palette.text.primary, // Tema ile uyumlu metin rengi
        textAlign: "center",
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.2)", // Hero ile uyumlu üst gölge
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Hero'daki buton animasyonuna benzer
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }} // Hero ile aynı spring animasyonu
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700, // Hero ile uyumlu kalınlık
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive
              letterSpacing: "0.05rem",
              background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile aynı gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Hero ile uyumlu gölge
            }}
          >
            © 2025 Rıdvan Şevki Karslı. Tüm hakları saklıdır.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 300,
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, // Responsive
              marginTop: "5px",
              display: "block",
              color: theme.palette.text.secondary, // Tema ile uyumlu ikincil renk
              textShadow: "0 1px 5px rgba(0, 0, 0, 0.1)", // Hafif gölge
            }}
          >
            Designed with ❤️ by Rıdvan Şevki Karslı
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;