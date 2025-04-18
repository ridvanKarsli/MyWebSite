import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
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
        background: "inherit", // global.css'deki body arka planını miras alır (linear-gradient)
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
            sx={{
              fontWeight: 900,
              color: "#f5f0e1", // global.css'deki başlık rengi (kırık beyaz)
              letterSpacing: "0.1rem",
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Yeteneklerim
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
            Yazılım geliştirme dünyasında birçok alanda yeteneklerim ve
            deneyimlerimle projeler üretiyorum. Web geliştirmeden mobil uygulama
            geliştirmeye, API yazmaktan veri tabanı yönetimine kadar birçok
            teknolojiyi kullanarak çözümler üretiyorum.
          </Typography>
        </motion.div>

        {/* Skills List */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          {[
            {
              icon: <WebIcon sx={{ fontSize: 60, color: "#b08d57" }} />,
              title: "Web Geliştirme",
              description:
                "HTML, CSS, JavaScript, React ve Next.js gibi teknolojilerle modern ve kullanıcı dostu web uygulamaları geliştiriyorum.",
            },
            {
              icon: <PhoneAndroidIcon sx={{ fontSize: 60, color: "#b08d57" }} />,
              title: "Android Uygulama Geliştirme",
              description:
                "Kotlin ve Java kullanarak Android platformu için güçlü ve verimli mobil uygulamalar geliştiriyorum.",
            },
            {
              icon: <AppleIcon sx={{ fontSize: 60, color: "#b08d57" }} />,
              title: "iOS Uygulama Geliştirme",
              description:
                "Swift ve Objective-C ile iOS platformunda yenilikçi uygulamalar geliştirmekteyim.",
            },
            {
              icon: <CodeIcon sx={{ fontSize: 60, color: "#b08d57" }} />,
              title: "API Yazma",
              description: "Spring Boot kullanarak backend sistemler geliştirdim.",
            },
            {
              icon: <StorageIcon sx={{ fontSize: 60, color: "#b08d57" }} />,
              title: "Veritabanı Yönetimi",
              description:
                "PostgreSQL veritabanları ile verimli veri yönetimi sağlıyorum, veri yapıları ve optimizasyon konusunda deneyimim var.",
            },
          ].map((skill, index) => (
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
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "3rem",
                      color: "#b08d57", // global.css'deki bağlantı/a rengi (altın sarısı)
                      marginBottom: "20px",
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#f5f0e1", // global.css'deki başlık rengi (kırık beyaz)
                      marginBottom: "15px",
                    }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#f5f0e1", // global.css'deki paragraf rengi (kırık beyaz)
                      lineHeight: 1.6, // global.css ile uyumlu
                      fontSize: "1rem",
                    }}
                  >
                    {skill.description}
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

export default Skills;
