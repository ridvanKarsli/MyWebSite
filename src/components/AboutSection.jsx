import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        height: "100vh", // Tam ekran yüksekliği
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "inherit", // global.css'deki body arka planını miras alır (linear-gradient)
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        {/* Animasyonlu Başlık */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: "#f5f0e1", // global.css'deki başlık rengi (kırık beyaz)
              letterSpacing: "0.1rem",
              fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" },
            }}
          >
            Hakkımda
          </Typography>
        </motion.div>

        {/* Animasyonlu Metin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="h6"
            sx={{
              lineHeight: 1.6, // global.css ile uyumlu
              maxWidth: "800px",
              mx: "auto",
              color: "#f5f0e1", // global.css'deki paragraf rengi (kırık beyaz)
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" },
              letterSpacing: "0.05rem",
            }}
          >
            Kütahya Dumlupınar Üniversitesi Bilgisayar Programcılığı mezunu,
            ardından Manisa Celal Bayar Üniversitesi Bilgisayar Mühendisliği
            öğrencisiyim. Eğitim hayatımda yazılım geliştirme, algoritma tasarımı
            ve çözümü üzerine yoğunlaştım ve modern yazılım tekniklerinde
            uzmanlık kazandım. Profesyonel kariyerime Kalem Web Software'de web
            geliştirici olarak başladım ve burada takım çalışması, proje yönetimi
            gibi önemli deneyimler edindim. Şu anda ENM Digital'de Stajyer olarak
            çalışıyorum.
          </Typography>
        </motion.div>

        {/* Sosyal Medya Butonları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            {[
              {
                icon: <GitHubIcon />,
                label: "GitHub",
                link: "https://github.com/ridvanKarsli",
              },
              {
                icon: <InstagramIcon />,
                label: "Instagram",
                link: "https://www.instagram.com/ridvanskarsli/",
              },
              {
                icon: <LinkedInIcon />,
                label: "LinkedIn",
                link: "https://www.linkedin.com/in/rıdvan-karslı-44a783294/",
              },
              {
                icon: <MailIcon />,
                label: "E-posta",
                link: "mailto:rden.35050@gmail.com",
              },
            ].map((item, index) => (
              <Grid item key={index}>
                <Button
                  variant="contained"
                  href={item.link}
                  target="_blank"
                  startIcon={item.icon}
                  sx={{
                    backgroundColor: "#b08d57", // global.css'deki buton arka planı
                    color: "#4e2c1d", // global.css'deki buton yazı rengi
                    border: "2px solid #4e2c1d", // global.css'deki buton kenarı
                    padding: "10px 20px", // global.css ile uyumlu
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                    fontWeight: 700,
                    textTransform: "uppercase",
                    cursor: "pointer", // global.css ile uyumlu
                    "&:hover": {
                      backgroundColor: "#4e2c1d", // global.css'deki hover arka planı
                      color: "#f5f0e1", // global.css'deki hover yazı rengi (kırık beyaz)
                      border: "2px solid #b08d57", // global.css'deki hover kenar rengi
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;