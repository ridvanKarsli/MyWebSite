import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; // To access the theme in the component

const Hero = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: theme.palette.text.primary, // Using theme's text color
        padding: "0 20px",
        position: "relative",
        overflow: "hidden",
        background: theme.palette.background.default, // Using theme's background color
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Animasyonlu Başlık */}
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
              background: "linear-gradient(to right, #00ddeb, #ff007a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            RIDVAN ŞEVKİ KARSLI
          </Typography>

          {/* Alt Başlık */}
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
                color: theme.palette.text.secondary, // Using theme's secondary text color
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

          {/* Buton */}
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
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: "#fff",
                padding: "16px 40px",
                fontSize: "1.25rem",
                fontWeight: 700,
                textTransform: "uppercase",
                borderRadius: "50px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
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
