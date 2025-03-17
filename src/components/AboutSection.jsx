import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles"; // To access the theme in the component
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

const AboutSection = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      sx={{
        py: 10,
        backgroundImage: "url('/path/to/hero-image.jpg')", // Arka plan resmi (yer tutucu)
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: theme.palette.text.primary, // Hero ile uyumlu tema rengi
        textAlign: "center",
        height: "100vh", // Hero gibi tam ekran yüksekliği
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden", // Hero ile aynı taşma kontrolü
      }}
    >
      {/* Overlay for text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)", // Hero'daki gibi koyu overlay
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        {/* Animasyonlu Başlık */}
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Hero ile aynı animasyon başlangıcı
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }} // Hero ile aynı spring animasyonu
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile aynı gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.1rem",
              fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" }, // Hero ile uyumlu responsive boyutlar
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge
            }}
          >
            Hakkımda
          </Typography>
        </motion.div>

        {/* Animasyonlu Metin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Hero'daki alt başlık animasyonuna benzer
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }} // Hero ile aynı gecikme
        >
          <Typography
            variant="h6"
            sx={{
              lineHeight: 1.7,
              maxWidth: "800px", // Hero ile uyumlu genişlik
              mx: "auto",
              color: theme.palette.text.secondary, // Tema ile uyumlu ikincil renk
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" }, // Hero ile aynı responsive boyutlar
              letterSpacing: "0.05rem",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Hero ile aynı gölge
            }}
          >
            Kütahya Dumlupınar Üniversitesi Bilgisayar Programcılığı mezunu, ardından Manisa Celal Bayar Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Eğitim hayatımda yazılım geliştirme, algoritma tasarımı ve çözümü üzerine yoğunlaştım ve modern yazılım tekniklerinde uzmanlık kazandım. Profesyonel kariyerime Kalem Web Software'de web geliştirici olarak başladım ve burada takım çalışması, proje yönetimi gibi önemli deneyimler edindim. Şu anda ENM Digital'de Stajyer olarak çalışıyorum.
          </Typography>
        </motion.div>

        {/* Sosyal Medya Butonları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Hero'daki buton animasyonuna benzer
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }} // Hero ile aynı gecikme
        >
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            {[
              { icon: <GitHubIcon />, label: "GitHub", link: "https://github.com/ridvanKarsli" },
              { icon: <InstagramIcon />, label: "Instagram", link: "https://www.instagram.com/ridvanskarsli/" },
              { icon: <LinkedInIcon />, label: "LinkedIn", link: "https://www.linkedin.com/in/rıdvan-karslı-44a783294/" },
              { icon: <MailIcon />, label: "E-posta", link: "mailto:rden.35050@gmail.com" },
            ].map((item, index) => (
              <Grid item key={index}>
                <Button
                  variant="contained" // Hero'daki butonla uyumlu dolu stil
                  href={item.link}
                  target="_blank"
                  startIcon={item.icon}
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, // Hero ile aynı gradient
                    color: "#fff",
                    padding: "12px 30px", // Hero'daki butona benzer boyut
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" }, // Responsive
                    fontWeight: 700,
                    textTransform: "uppercase",
                    borderRadius: "50px", // Hero ile aynı yuvarlak kenar
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Hero ile aynı gölge
                    "&:hover": {
                      background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`, // Hero ile aynı hover gradient
                      transform: "translateY(-3px)", // Hero ile aynı hover efekti
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge artışı
                      transition: "all 0.4s ease", // Hero ile aynı geçiş süresi
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