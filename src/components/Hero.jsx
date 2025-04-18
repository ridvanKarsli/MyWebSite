import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1C2526", // Apply background from global.css
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" },
              fontWeight: 900,
              letterSpacing: "0.1rem",
              color: "#F5F0E1", // Apply the text color from global.css
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            RIDVAN ŞEVKİ KARSLI
          </Typography>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              variant="h5"
              sx={{
                mt: 3,
                mb: 5,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" },
                fontWeight: 300,
                color: "#F5F0E1", // Apply the text color from global.css
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.6,
                letterSpacing: "0.05rem",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Yazılım dünyasında yenilikçi çözümler üreten, tutkulu bir geliştirici olarak projelerinizde fark yaratıyorum.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/about"
              sx={{
                backgroundColor: "#B08D57", // Apply the button background color from global.css
                color: "#1C2526", // Apply the button text color from global.css
                border: "2px solid #B08D57", // Apply button border color
                fontWeight: 700,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                textTransform: "uppercase",
                letterSpacing: "0.05rem",
                padding: "12px 24px", // Wider padding
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#1C2526", // Hover color
                  color: "#B08D57", // Hover text color
                  border: "2px solid #B08D57", // Hover border color
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)", // Stronger shadow on hover
                  transition: "all 0.4s ease",
                },
              }}
            >
              Daha Fazla Bilgi
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
