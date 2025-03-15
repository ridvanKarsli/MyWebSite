import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // LinkedIn simgesi
import MailIcon from "@mui/icons-material/Mail"; // Mail simgesi

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #000000, #ff0000)", // Siyah → Kırmızı geçişi
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
            sx={{ lineHeight: 1.7, maxWidth: "700px", mx: "auto" }}
          >
            Ben, yazılım geliştirme konusunda tutkulu bir yazılımcıyım. Yaratıcı ve kullanıcı dostu çözümler sunarak
            teknolojiyi günlük yaşamda daha erişilebilir kılmayı amaçlıyorum. Teknolojinin hızla gelişen dünyasında, 
            her zaman yeni şeyler öğrenmeye ve uygulamaya açığım. Mobil uygulama geliştirme, web geliştirme ve 
            yapay zeka alanlarında projeler geliştirmeyi seviyorum.
          </Typography>
        </motion.div>

        {/* Social Links */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              href="https://github.com/ridvanKarsli"
              target="_blank"
              startIcon={<GitHubIcon />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  borderColor: "#ff0000",
                  color: "#ff0000",
                },
              }}
            >
              GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              href="https://www.instagram.com/ridvanskarsli/"
              target="_blank"
              startIcon={<InstagramIcon />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  borderColor: "#ff0000",
                  color: "#ff0000",
                },
              }}
            >
              Instagram
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              href="https://www.linkedin.com/in/rıdvan-karslı-44a783294/"
              target="_blank"
              startIcon={<LinkedInIcon />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  borderColor: "#ff0000",
                  color: "#ff0000",
                },
              }}
            >
              LinkedIn
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              href="mailto:rden.35050@gmail.com"
              target="_blank"
              startIcon={<MailIcon />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  borderColor: "#ff0000",
                  color: "#ff0000",
                },
              }}
            >
              E-posta
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
