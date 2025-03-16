import React, { useState } from "react";
import { Grid, Box, Typography, Card, CardContent, Button, Modal } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "🌟 MoodMate", 
    description: "Duygusal zeka ile film, müzik, dizi ve podcast önerisi.", 
    details: "MoodMate, kullanıcının yazdığı yazıya göre duygusal durumunu analiz ederek ona uygun içerik önerileri sunan bir uygulamadır. Kullanıcı yazılarını analiz ederek en uygun film, müzik, dizi ve podcast önerilerini yapar." 
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
        background: "linear-gradient(to bottom, #000000 0%, #550000 15%, #990000 40%, #990000 60%, #550000 85%, #000000 100%)",
        color: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" gutterBottom>
          Projelerim
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <Card
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
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2, color: "#bbb" }}>
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#990000",
                      color: "#fff",
                      padding: "15px 30px",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      borderRadius: "50px",
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: "#770000",
                        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                        transform: "scale(1.05)",
                        transition: "all 0.3s ease",
                      },
                    }}
                    size="large"
                    onClick={() => handleOpen(project)}
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
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 3,
            padding: 4,
            maxWidth: "600px",
            width: "80%",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            {selectedProject?.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {selectedProject?.details}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#990000",
              color: "#fff",
              padding: "15px 30px",
              fontSize: "1.2rem",
              fontWeight: 600,
              textTransform: "uppercase",
              borderRadius: "50px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#770000",
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
            }}
            size="large"
            onClick={handleClose}
          >
            Kapat
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Projects;
