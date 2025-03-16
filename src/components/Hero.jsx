import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(to bottom, #000000 0%, #550000 15%, #990000 40%, #990000 60%, #550000 85%, #000000 100%)",
        color: "white",
        padding: "0 20px",
      }}
    >
      <Container>
        {/* Animasyonlu Başlangıç */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              animation: "fadeIn 2s ease-out",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              letterSpacing: "2px",
              lineHeight: 1.2,
            }}
          >
            Merhaba, Ben Rıdvan Şevki Karslı!
          </Typography>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                mb: 4,
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                opacity: 0.8,
                letterSpacing: "0.1rem",
                fontWeight: 400,
              }}
            >
              Yazılım dünyasında tutkulu bir geliştirici olarak yenilikçi projeler ile çözüm odaklı çalışmalar yapıyorum.
            </Typography>
          </motion.div>

          {/* Hareketli Buton */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#990000",
                color: "#fff",
                padding: "15px 30px",
                fontSize: "1.2rem",
                fontWeight: 600,
                textTransform: "uppercase",
                borderRadius: "50px",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#770000",
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                },
              }}
              size="large"
              href="/about"
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
