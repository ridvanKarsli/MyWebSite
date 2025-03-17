import React, { useState } from "react";
import { Grid, Box, Typography, Card, CardContent, Button, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles"; // To access the theme in the component

const projects = [
  {
    title: "🌟 MoodMate",
    description: "Duygusal zeka ile film, müzik, dizi ve podcast önerisi.",
    details:
      "MoodMate, kullanıcının yazdığı yazıya göre duygusal durumunu analiz ederek ona uygun içerik önerileri sunan bir uygulamadır. Kullanıcı yazılarını analiz ederek en uygun film, müzik, dizi ve podcast önerilerini yapar.",
  },
];

const Projects = () => {
  const theme = useTheme(); // Access the current theme
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        background: theme.palette.background.default, // Hero ile uyumlu tema arka planı
        color: theme.palette.text.primary, // Tema ile uyumlu metin rengi
        position: "relative",
        overflow: "hidden", // Hero ile aynı taşma kontrolü
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Hero ile aynı animasyon
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 100 }} // Hero ile aynı spring animasyonu
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 900, // Hero ile uyumlu kalınlık
            background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile aynı gradient
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.1rem",
            textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge
            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" }, // Responsive tipografi
          }}
        >
          Projelerim
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Hero'daki buton animasyonuna benzer
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }} // Hafif gecikme farkı
            >
              <Card
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Hero ile uyumlu gölge
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`, // Hafif gradient arka plan
                  color: theme.palette.text.primary,
                  transition: "all 0.4s ease", // Hero ile uyumlu geçiş
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-3px)", // Hero ile aynı hover efekti
                    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge artışı
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark}30, ${theme.palette.secondary.dark}30)`, // Hover'da gradient değişimi
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive
                      letterSpacing: "0.05rem",
                      background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile uyumlu gradient
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Hafif gölge
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 2,
                      color: theme.palette.text.secondary, // Tema ile uyumlu ikincil renk
                      lineHeight: 1.6,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => handleOpen(project)}
                    sx={{
                      mt: 2,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, // Hero ile aynı gradient
                      color: "#fff",
                      padding: "12px 30px", // Hero ile uyumlu boyut
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
                    Detaylar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`, // Kartlarla uyumlu gradient
            color: theme.palette.text.primary,
            borderRadius: 3,
            padding: 4,
            maxWidth: "600px",
            width: "80%",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Hero ile uyumlu gölge
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile aynı gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge
            }}
          >
            {selectedProject?.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: theme.palette.text.secondary, // Tema ile uyumlu ikincil renk
              lineHeight: 1.6,
            }}
          >
            {selectedProject?.details}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleClose}
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, // Hero ile aynı gradient
              color: "#fff",
              padding: "12px 30px", // Hero ile uyumlu boyut
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
            Kapat
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Projects;