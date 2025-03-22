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
        background: "inherit",
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
              color: "#f5f0e1",
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
                color: "#f5f0e1",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.6,
                letterSpacing: "0.05rem",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Yazılım dünyasında yenilikçi çözümler üreten, tutkulu bir
              geliştirici olarak projelerinizde fark yaratıyorum.
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
                backgroundColor: "#b08d57",
                color: "#000000",
                border: "2px solid #b08d57",
                fontWeight: 700,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                textTransform: "uppercase",
                letterSpacing: "0.05rem",
                padding: "10px 20px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#000000",
                  color: "#b08d57",
                  border: "2px solid #b08d57",
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