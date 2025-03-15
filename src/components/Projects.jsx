import React from "react";
import { Grid, Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const projects = [
  { title: "🚀 Proje 1", description: "Yenilikçi ve modern proje.", link: "#" },
  { title: "📱 Proje 2", description: "Mobil dostu ve şık tasarım.", link: "#" },
  { title: "🛡️ Proje 3", description: "Güvenlik ve hız odaklı.", link: "#" },
];

const Projects = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, textAlign: "center", backgroundColor: "#121212" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
        Projelerim
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 100%)`, 
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
                  color="secondary"
                  sx={{ mt: 3 }}
                  href={project.link}
                >
                  Detaylar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
