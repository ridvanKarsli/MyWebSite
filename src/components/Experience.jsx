import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "inherit", // global.css'deki body arka planını miras alır (linear-gradient)
        textAlign: "center",
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
              color: "#f5f0e1", // global.css'deki başlık rengi (kırık beyaz)
              letterSpacing: "0.1rem",
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Deneyimlerim
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
              lineHeight: 1.6, // global.css ile uyumlu
              maxWidth: "800px",
              mx: "auto",
              color: "#f5f0e1", // global.css'deki paragraf rengi (kırık beyaz)
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            Yazılım geliştirme kariyerimde edindiğim deneyimlerle, teknoloji
            dünyasında her geçen gün daha da ilerliyorum. Hem profesyonel hem de
            bağımsız olarak çalıştım, her iki deneyimim de bana değerli beceriler
            kazandırdı.
          </Typography>
        </motion.div>

        {/* Experience List */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          {[
            {
              title: "Kalem Web Yazılım Ltd.",
              period: "Yazılım Mühendisi | 2022 - 2024",
              description:
                "Şirket içindeki yazılım geliştirme süreçlerinde aktif bir rol aldım. Web ve mobil uygulama projelerinde kullanılan teknolojilerle ilgili yenilikçi çözümler sundum. Takım çalışmasına dayalı projelerde liderlik yaparak, projelerin zamanında ve kaliteli bir şekilde tamamlanmasına katkı sağladım.",
            },
            {
              title: "Freelancer Yazılım Geliştirici",
              period: "2022 - Devam Ediyor",
              description:
                "Bağımsız bir yazılım geliştirici olarak, çeşitli projelerde çalıştım. Müşterilere özgü yazılım çözümleri sunarak, mobil ve web platformlarında çeşitli uygulamalar geliştirdim. Her projede müşteri memnuniyetini en üst seviyede tutmaya odaklandım.",
            },
            {
              title: "ENM Dijital",
              period: "Stajyer Yazılım Geliştirici | 2024 - Devam Ediyor",
              description:
                "ENM Dijital’de stajyer olarak çalışmaya başladım. Burada yazılım geliştirme süreçlerinde aktif olarak yer alıyor ve endüstri standartlarına uygun çözümler geliştirmek için deneyim kazanıyorum. Takım içinde aktif rol alarak profesyonel yazılım geliştirme dünyasında kendimi geliştirmeye devam ediyorum.",
            },
          ].map((exp, index) => (
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
                    // Background removed to make it transparent
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
                      color: "#f5f0e1", // global.css'deki başlık rengi (kırık beyaz)
                      marginBottom: "15px",
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                      letterSpacing: "0.05rem",
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#f5f0e1", // global.css'deki paragraf rengi (kırık beyaz)
                      fontSize: "1rem",
                      lineHeight: 1.6, // global.css ile uyumlu
                      mt: 1,
                    }}
                  >
                    {exp.period}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#f5f0e1", // global.css'deki paragraf rengi (kırık beyaz)
                      fontSize: "1rem",
                      lineHeight: 1.6, // global.css ile uyumlu
                      mt: 2,
                    }}
                  >
                    {exp.description}
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

export default Experience;
