import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ProjectCard from '../components/ProjectCard';
import ProjectDialog from '../components/ProjectDialog';
import { useLanguage } from '../context/LanguageContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Projects = () => {
  const { translations, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    setProjects([
      {
        title: translations[language].projects.project1.title,
        description: translations[language].projects.project1.description,
        image: '/projects/taskmanager.jpg',
        technologies: ['Spring Boot', 'PostgreSQL', 'Java', 'Swift', 'React'],
        github: 'https://github.com/ridvanKarsli/SagliktanWeb',
        demo: 'https://sagliktan.com',
        stats: {
          users: '5K+',
          tasks: '50K+',
          growth: [20, 35, 50, 65, 80, 95],
        },
      },
    ]);
  }, [language, translations]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#8892b0',
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#8892b0',
        },
      },
    },
  };

  const chartData = (growth) => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: growth,
        borderColor: '#00e5ff',
        backgroundColor: 'rgba(0, 229, 255, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  });

  return (
    <>
      <Helmet>
        <title>Projelerim — Rıdvan Şevki Karslı</title>
        <meta 
          name="description" 
          content="Rıdvan Şevki Karslı'nın geliştirdiği projeler. Spring Boot, Java, PostgreSQL, React ve Swift teknolojileriyle oluşturulmuş yazılım projeleri." 
        />
        <meta name="keywords" content="Rıdvan Karslı Projeler, Java Projeler, Spring Boot Projeler, React Projeler, Yazılım Portföy" />
        <meta property="og:title" content="Projelerim — Rıdvan Şevki Karslı" />
        <meta property="og:description" content="Spring Boot, Java, PostgreSQL, React ve Swift ile geliştirilmiş yazılım projeleri." />
        <meta property="og:url" content="https://www.ridvankarsli.com/projects" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ridvankarsli.com/projects" />
      </Helmet>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0a192f',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              mb: 2,
              fontFamily: 'monospace',
              textAlign: 'center',
              color: 'white',
            }}
          >
            {translations[language].projects.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: '#8892b0',
              fontSize: '1.1rem',
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            {translations[language].projects.description}
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          chartOptions={chartOptions}
          chartData={chartData}
        />
      </Container>
    </Box>
    </>
  );
};

export default Projects; 