import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "20px",
        backgroundColor: "#4e2c1d",
        color: "#f5f0e1",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              letterSpacing: "0.05rem",
              color: "#f5f0e1",
            }}
          >
            © 2025 Rıdvan Şevki Karslı. Tüm hakları saklıdır.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 300,
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              marginTop: "5px",
              display: "block",
              color: "#b08d57",
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