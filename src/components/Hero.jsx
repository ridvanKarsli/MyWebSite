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
        background: "linear-gradient(to right, #4e2c1d, #b08d57)", // global.css ile uyumlu arka plan
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
              color: "#4e2c1d", // global.css'deki başlık rengi
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
                color: "#4e2c1d", // global.css'deki paragraf rengi
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
                backgroundColor: "#b08d57", // global.css'deki buton arka planı
                color: "#4e2c1d", // global.css'deki buton yazı rengi
                border: "2px solid #4e2c1d", // global.css'deki buton kenarı
                padding: "10px 20px", // global.css ile uyumlu padding
                fontSize: "1.25rem",
                fontWeight: 700,
                textTransform: "uppercase",
                borderRadius: "4px", // global.css'de yuvarlaklık yok, ama isteğe bağlı eklenebilir
                cursor: "pointer", // global.css ile uyumlu
                "&:hover": {
                  backgroundColor: "#4e2c1d", // global.css'deki hover arka planı
                  color: "#fff", // global.css'deki hover yazı rengi
                  border: "2px solid #b08d57", // global.css'deki hover kenar rengi
                  transform: "translateY(-3px)", // Ekstra animasyon
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