import React, { useState } from "react";
import { Grid, Box, Typography, Button, Modal } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MoodMate",
    description: "Duygusal zeka ile film, müzik, dizi ve podcast önerisi.",
    details:
      "MoodMate, kullanıcının yazdığı yazıya göre duygusal durumunu analiz ederek ona uygun içerik önerileri sunan bir uygulamadır. Kullanıcı yazılarını analiz ederek en uygun film, müzik, dizi ve podcast önerilerini yapar.",
  },
];

const Projects = () => {
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
        background: "inherit", // global.css'deki body arka planını miras alır (linear-gradient)
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 900,
            color: "#f5f0e1", // global.css'deki başlık rengi (kırık beyaz)
            letterSpacing: "0.1rem",
            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Projelerim
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
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
                  // backgroundColor removed to make it transparent
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
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#f5f0e1", // global.css'deki paragraf rengi (kırık beyaz)
                    lineHeight: 1.6, // global.css ile uyumlu
                    fontSize: "1rem",
                    mt: 2,
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
                    backgroundColor: "#b08d57",
                    color: "#000000",
                    border: "2px solid #b08d57",
                    fontWeight: 700,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                    textTransform: "uppercase",
                    letterSpacing: "0.05rem",
                    padding: "10px 20px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#000000",
                      color: "#b08d57",
                      border: "2px solid #b08d57",
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
                      transition: "all 0.4s ease",
                    },
                  }}
                >
                  Detaylar
                </Button>
              </Box>
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
            backgroundColor: "#000000", // global.css'deki input/textarea arka planı
            color: "#f5f0e1", // global.css'deki input/textarea yazı rengi (kırık beyaz)
            border: "2px solid #b08d57", // global.css'deki input/textarea kenar rengi
            borderRadius: 3,
            padding: 4,
            maxWidth: "600px",
            width: "80%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#f5f0e1", // global.css'deki başlık rengi (kırık beyaz)
            }}
          >
            {selectedProject?.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "#f5f0e1", // global.css'deki paragraf rengi (kırık beyaz)
              lineHeight: 1.6, // global.css ile uyumlu
            }}
          >
            {selectedProject?.details}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleClose}
            sx={{
              backgroundColor: "#b08d57",
              color: "#000000",
              border: "2px solid #b08d57",
              fontWeight: 700,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
              textTransform: "uppercase",
              letterSpacing: "0.05rem",
              padding: "10px 20px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#b08d57",
                border: "2px solid #b08d57",
                transform: "translateY(-3px)",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
                transition: "all 0.4s ease",
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