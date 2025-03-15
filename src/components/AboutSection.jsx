import React from "react";
import { Box, Typography, Container } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#1d1d1d",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Hakkımda
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7, maxWidth: "700px", mx: "auto" }}>
          Ben, yazılım geliştirme konusunda tutkulu bir yazılımcıyım. Yaratıcı ve kullanıcı dostu çözümler sunarak
          teknolojiyi günlük yaşamda daha erişilebilir kılmayı amaçlıyorum. Teknolojinin hızla gelişen dünyasında, 
          her zaman yeni şeyler öğrenmeye ve uygulamaya açığım. Mobil uygulama geliştirme, web geliştirme ve 
          yapay zeka alanlarında projeler geliştirmeyi seviyorum.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
