import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <Box
      sx={{
        py: 8,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "inherit", // global.css'deki body arka planını miras alır
        padding: "0 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: "#4e2c1d", // global.css'deki başlık rengi
              letterSpacing: "0.1rem",
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Eğitim Bilgilerim
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.7,
              maxWidth: "800px",
              mx: "auto",
              color: "#4e2c1d", // global.css'deki paragraf rengi
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    padding: "40px",
                    borderRadius: "8px",
                    transition: "transform 0.3s ease-in-out",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-10px)", // FeatureList ile uyumlu hover efekti
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#4e2c1d", // global.css'deki başlık rengi
                      marginBottom: "15px",
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                      letterSpacing: "0.05rem",
                    }}
                  >
                    {edu.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#4e2c1d", // global.css'deki paragraf rengi
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      mt: 1,
                    }}
                  >
                    {edu.period}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#4e2c1d", // global.css'deki paragraf rengi
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      mt: 2,
                    }}
                  >
                    {edu.status}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;