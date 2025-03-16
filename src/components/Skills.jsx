import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Language";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AppleIcon from "@mui/icons-material/Apple";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";

const Skills = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(to bottom, #000000 0%, #550000 15%, #990000 40%, #990000 60%, #550000 85%, #000000 100%)", // Siyah → Kırmızı geçişi
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
            Yeteneklerim
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
            Yazılım geliştirme dünyasında bir çok alanda yeteneklerim ve deneyimlerimle projeler üretiyorum. 
            Web geliştirmeden mobil uygulama geliştirmeye, API yazmaktan veri tabanı yönetimine kadar birçok 
            teknolojiyi kullanarak çözümler üretiyorum.
          </Typography>
        </motion.div>

        {/* Skills List */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          {/* Web Development */}
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
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)", // Hover animasyonu
                    boxShadow: 8, // Hoverda gölge ekleme
                  },
                }}
              >
                <WebIcon sx={{ fontSize: 60, color: "#ff0000" }} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  Web Geliştirme
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  HTML, CSS, JavaScript, React ve Next.js gibi teknolojilerle
                  modern ve kullanıcı dostu web uygulamaları geliştiriyorum.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Android Development */}
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
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)", // Hover animasyonu
                    boxShadow: 8, // Hoverda gölge ekleme
                  },
                }}
              >
                <PhoneAndroidIcon sx={{ fontSize: 60, color: "#ff0000" }} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  Android Uygulama Geliştirme
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Kotlin ve Java kullanarak Android platformu için güçlü ve verimli mobil uygulamalar geliştiriyorum.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* IOS Development */}
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
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)", // Hover animasyonu
                    boxShadow: 8, // Hoverda gölge ekleme
                  },
                }}
              >
                <AppleIcon sx={{ fontSize: 60, color: "#ff0000" }} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  iOS Uygulama Geliştirme
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Swift ve Objective-C ile iOS platformunda yenilikçi uygulamalar geliştirmekteyim.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* API Development */}
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
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)", // Hover animasyonu
                    boxShadow: 8, // Hoverda gölge ekleme
                  },
                }}
              >
                <CodeIcon sx={{ fontSize: 60, color: "#ff0000" }} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  API Yazma
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Spring Boot kullanarak backend sistemler geliştirdim.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Database */}
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
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)", // Hover animasyonu
                    boxShadow: 8, // Hoverda gölge ekleme
                  },
                }}
              >
                <StorageIcon sx={{ fontSize: 60, color: "#ff0000" }} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  Database Yönetimi
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  PostgreSQL veritabanları ile verimli veri yönetimi sağlıyorum, veri yapıları ve optimizasyon konusunda deneyimim var.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
