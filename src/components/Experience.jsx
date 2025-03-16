import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Experience = () => {
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
            Deneyimlerim
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
            Yazılım geliştirme kariyerimde edindiğim deneyimlerle, teknoloji dünyasında her geçen gün daha da ilerliyorum. 
            Hem profesyonel hem de bağımsız olarak çalıştım, her iki deneyimim de bana değerli beceriler kazandırdı.
          </Typography>
        </motion.div>

        {/* Experience List */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          {/* Kalem Web Yazılım Ltd. */}
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
                  Kalem Web Yazılım Ltd.
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
                  Yazılım Mühendisi | 2022 - 2024
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Şirket içindeki yazılım geliştirme süreçlerinde aktif bir rol aldım. 
                  Web ve mobil uygulama projelerinde kullanılan teknolojilerle ilgili 
                  yenilikçi çözümler sundum. Takım çalışmasına dayalı projelerde liderlik 
                  yaparak, projelerin zamanında ve kaliteli bir şekilde tamamlanmasına katkı sağladım.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Freelancer İşler */}
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
                  Freelancer Yazılım Geliştirici
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
                  2022 - Devam Ediyor
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Bağımsız bir yazılım geliştirici olarak, çeşitli projelerde çalıştım. 
                  Müşterilere özgü yazılım çözümleri sunarak, mobil ve web platformlarında 
                  çeşitli uygulamalar geliştirdim. Her projede müşteri memnuniyetini en üst 
                  seviyede tutmaya odaklandım.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* ENM Dijital Staj */}
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
                  ENM Dijital
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
                  Stajyer Yazılım Geliştirici | 2024 - Devam Ediyor
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  ENM Dijital’de stajyer olarak çalışmaya başladım. Burada yazılım geliştirme 
                  süreçlerinde aktif olarak yer alıyor ve endüstri standartlarına uygun çözümler 
                  geliştirmek için deneyim kazanıyorum. Takım içinde aktif rol alarak profesyonel 
                  yazılım geliştirme dünyasında kendimi geliştirmeye devam ediyorum.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
