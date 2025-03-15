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
        background: "linear-gradient(135deg, #6200ea, #f44336)", // Koyu kırmızı ve mor geçişi
        color: "white",
        padding: "0 20px",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" fontWeight="bold">
            Merhaba, Ben Rıdvan Şevki Karslı! 
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
            Yazılım dünyasında tutkulu bir geliştirici olarak yenilikçi projeler ile çözüm odaklı çalışmalar yapıyorum.
          </Typography>
          <Button variant="contained" color="secondary" size="large" href="/about">
            Daha Fazla Bilgi
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
