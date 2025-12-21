import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import FolderIcon from '@mui/icons-material/Folder';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { designTokens } from '../theme/ThemeProvider';

const Projects = () => {
  const { translations, language } = useLanguage();
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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
      }}
    >
      {/* Grid background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(${designTokens.colors.accent[500]}05 1px, transparent 1px), linear-gradient(90deg, ${designTokens.colors.accent[500]}05 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mb={2}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: '12px',
                    background: designTokens.gradients.accent,
                    display: 'flex',
                  }}
                >
                  <FolderIcon sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem' },
                    fontWeight: 700,
                    color: designTokens.colors.text.primary,
                  }}
                >
                  {translations[language].projects.title}
                </Typography>
              </Stack>
              <Typography
                variant="h5"
                sx={{
                  color: designTokens.colors.text.secondary,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.7,
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
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      background: designTokens.colors.background.glass,
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      border: `1px solid ${designTokens.colors.accent[500]}30`,
                      boxShadow: designTokens.shadows.card,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: `${designTokens.colors.accent[500]}60`,
                        transform: 'translateY(-8px)',
                        boxShadow: designTokens.shadows.cardHover,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: designTokens.gradients.accent,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 200,
                        background: designTokens.gradients.subtle,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <FolderIcon
                        sx={{
                          fontSize: 80,
                          color: designTokens.colors.accent[500],
                          opacity: 0.3,
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          display: 'flex',
                          gap: 1,
                        }}
                      >
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            '&:hover': {
                              background: designTokens.colors.accent[500],
                            },
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        {project.demo && (
                          <IconButton
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              background: 'rgba(0, 0, 0, 0.5)',
                              backdropFilter: 'blur(10px)',
                              color: 'white',
                              '&:hover': {
                                background: designTokens.colors.accent[500],
                              },
                            }}
                          >
                            <LaunchIcon />
                          </IconButton>
                        )}
                      </Box>
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{
                          color: designTokens.colors.text.primary,
                          fontWeight: 700,
                          mb: 2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: designTokens.colors.text.secondary,
                          mb: 3,
                          flexGrow: 1,
                          lineHeight: 1.7,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: `${designTokens.colors.accent[500]}15`,
                              color: designTokens.colors.accent[500],
                              fontWeight: 500,
                              border: `1px solid ${designTokens.colors.accent[500]}30`,
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/projects')}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                fontWeight: 600,
                borderWidth: '2px',
                borderColor: designTokens.colors.accent[500],
                color: designTokens.colors.accent[500],
                '&:hover': {
                  borderWidth: '2px',
                  backgroundColor: `${designTokens.colors.accent[500]}15`,
                  transform: 'translateY(-2px)',
              },
            }}
          >
            {translations[language].projects.viewAllProjects}
          </Button>
        </Box>
      </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
