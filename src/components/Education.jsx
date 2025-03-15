import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #000000, #ff0000)", // Siyah → Kırmızı geçişi
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Eğitim Bilgilerim
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.7, maxWidth: "700px", mx: "auto" }}
          >
            Eğitim hayatım boyunca bilgisayar bilimi ve mühendisliği alanında 
            derinlemesine bilgi edinmeyi ve kendimi geliştirmeyi hedefledim.
          </Typography>
        </motion.div>

        {/* Education List */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: 4,
                  background: "rgba(255, 255, 255, 0.1)", // Hafif transparan kart arka planı
                  backdropFilter: "blur(10px)", // Blur efekti
                  color: "#fff",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)", // Hover animasyonu
                    boxShadow: 8, // Hoverda gölge ekleme
                  },
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Kütahya Dumlupınar Üniversitesi
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
                  Bilgisayar Programcılığı - 2020 - 2022
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Mezuniyet Yılı: 2022
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: 4,
                  background: "rgba(255, 255, 255, 0.1)", // Hafif transparan kart arka planı
                  backdropFilter: "blur(10px)", // Blur efekti
                  color: "#fff",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)", // Hover animasyonu
                    boxShadow: 8, // Hoverda gölge ekleme
                  },
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Manisa Celal Bayar Üniversitesi
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
                  Bilgisayar Mühendisliği - 2022 - Devam Ediyor
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Öğrenim Durumu: Devam Ediyor
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
