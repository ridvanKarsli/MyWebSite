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
        backgroundColor: "#000000", // Background changed to black
        color: "#f5f0e1",
        textAlign: "center",
        // Diagonal stripes using linear-gradient
        backgroundImage: `
          linear-gradient(45deg, #b08d57 10%, transparent 10%),
          linear-gradient(-45deg, #b08d57 10%, transparent 10%)
        `,
        backgroundSize: "20px 20px",
        backgroundPosition: "left, right",
        backgroundRepeat: "no-repeat",
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
            © 2025 Rıdvan Şevki Karslı.
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
            Rıdvan Şevki Karslı tarafından geliştirilmiştir.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;