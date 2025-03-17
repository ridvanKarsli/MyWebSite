import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles"; // To access the theme in the component

const Education = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      sx={{
        py: 8,
        height: "100vh", // Hero ile aynı tam ekran yüksekliği
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: theme.palette.background.default, // Hero ile uyumlu tema arka planı
        color: theme.palette.text.primary, // Tema ile uyumlu metin rengi
        padding: "0 20px",
        position: "relative",
        overflow: "hidden", // Hero ile aynı taşma kontrolü
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Hero ile aynı animasyon
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }} // Hero ile aynı spring animasyonu
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontWeight: 900, // Hero ile uyumlu kalınlık
              background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile aynı gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.1rem",
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" }, // Responsive tipografi
            }}
          >
            Eğitim Bilgilerim
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Hero'daki alt başlık animasyonuna benzer
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }} // Hero ile uyumlu gecikme
        >
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.7,
              maxWidth: "800px", // Hero ile uyumlu genişlik
              mx: "auto",
              color: theme.palette.text.secondary, // Tema ile uyumlu ikincil renk
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Hero ile aynı gölge
            }}
          >
            Eğitim hayatım boyunca bilgisayar bilimi ve mühendisliği alanında 
            derinlemesine bilgi edinmeyi ve kendimi geliştirmeyi hedefledim.
          </Typography>
        </motion.div>

        {/* Education List */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          {[
            {
              title: "Kütahya Dumlupınar Üniversitesi",
              period: "Bilgisayar Programcılığı - 2020 - 2022",
              status: "Mezuniyet Yılı: 2022",
            },
            {
              title: "Manisa Celal Bayar Üniversitesi",
              period: "Bilgisayar Mühendisliği - 2022 - Devam Ediyor",
              status: "Öğrenim Durumu: Devam Ediyor",
            },
          ].map((edu, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Hero'daki buton animasyonuna benzer
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }} // Hafif gecikme farkı
              >
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Hero ile uyumlu gölge
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`, // Hafif gradient arka plan
                    color: theme.palette.text.primary,
                    transition: "all 0.4s ease", // Hero ile uyumlu geçiş
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-3px)", // Hero ile aynı hover efekti
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge artışı
                      background: `linear-gradient(45deg, ${theme.palette.primary.dark}30, ${theme.palette.secondary.dark}30)`, // Hover'da gradient değişimi
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive
                      letterSpacing: "0.05rem",
                      background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile uyumlu gradient
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Hafif gölge
                    }}
                  >
                    {edu.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      color: theme.palette.text.secondary, // Tema ile uyumlu ikincil renk
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive
                    }}
                  >
                    {edu.period}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 2,
                      color: theme.palette.text.secondary, // Tema ile uyumlu ikincil renk
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive
                    }}
                  >
                    {edu.status}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;