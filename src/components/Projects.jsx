import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import ProjectDialog from './ProjectDialog';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';
import { designTokens } from '../theme/ThemeProvider';

const Projects = () => {
  const { translations, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  useEffect(() => {
    setProjects([
      {
        title: translations[language].projects.project1.title,
        description: translations[language].projects.project1.description,
        image: '/images/project1.jpg',
        technologies: ['Spring Boot', 'PostgreSQL', 'Java', 'React', 'Swift'],
        github: 'https://github.com/ridvanKarsli/SagliktanWeb',
        demo: 'https://sagliktan.com',
      },
    ]);
  }, [language, translations]);

  const handleProjectClick = (project) => {
    navigate('/projects');
  };

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        background: designTokens.gradients.background,
        color: 'white',
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, ${designTokens.colors.primary[500]}08 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${designTokens.colors.accent[500]}06 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      {/* Optimized background particles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              backgroundColor: i % 2 === 0 
                ? designTokens.colors.accent[500] 
                : designTokens.colors.primary[500],
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 100}%`,
              opacity: 0.4,
              willChange: 'transform, opacity',
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                <Box
                  sx={{
                    background: designTokens.gradients.accent,
                    borderRadius: '16px',
                    p: 2,
                    mr: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CodeIcon 
                    sx={{ 
                      fontSize: '2rem', 
                      color: designTokens.colors.background.primary 
                    }} 
                  />
                </Box>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 700,
                    background: designTokens.gradients.accent,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {translations[language].projects.title}
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: designTokens.colors.text.secondary,
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                {translations[language].projects.description}
              </Typography>
            </Box>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      <ProjectDialog
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Box>
  );
};

export default Projects;
