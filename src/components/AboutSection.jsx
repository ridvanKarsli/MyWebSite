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
        py: 8,
        background: "linear-gradient(to bottom, #000000 0%, #550000 15%, #990000 40%, #990000 60%, #550000 85%, #000000 100%)", // Kırmızı → Siyah geçişi
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
            Hakkımda
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.7, maxWidth: "700px", mx: "auto", color: "#ddd" }}
          >
Kütahya Dumlupınar Üniversitesi Bilgisayar Programcılığı mezunu, ardından Manisa Celal Bayar Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Eğitim hayatımda yazılım geliştirme, algoritma tasarımı ve çözümü üzerine yoğunlaştım ve modern yazılım tekniklerinde uzmanlık kazandım. Profesyonel kariyerime Kalem Web Software'de web geliştirici olarak başladım ve burada takım çalışması, proje yönetimi gibi önemli deneyimler edindim. Şu anda ENM Digital'de Stajyer olarak çalışıyorum.
          </Typography>
        </motion.div>

        {/* Sosyal Medya Butonları */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          {[
            { icon: <GitHubIcon />, label: "GitHub", link: "https://github.com/ridvanKarsli" },
            { icon: <InstagramIcon />, label: "Instagram", link: "https://www.instagram.com/ridvanskarsli/" },
            { icon: <LinkedInIcon />, label: "LinkedIn", link: "https://www.linkedin.com/in/rıdvan-karslı-44a783294/" },
            { icon: <MailIcon />, label: "E-posta", link: "mailto:rden.35050@gmail.com" }
          ].map((item, index) => (
            <Grid item key={index}>
              <Button
                variant="outlined"
                color="secondary"
                href={item.link}
                target="_blank"
                startIcon={item.icon}
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  "&:hover": {
                    borderColor: "#ff0000",
                    background: "#ff0000",
                    color: "#000",
                  },
                }}
              >
                {item.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
