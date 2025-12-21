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
  Stack,
  Paper,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import FolderIcon from '@mui/icons-material/Folder';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const Projects = () => {
  const { translations, language } = useLanguage();
  const [projects, setProjects] = useState([]);

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
        },
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
          background: designTokens.gradients.background,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 12, md: 15 },
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
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
                variant="h1"
            component="h1"
            sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: designTokens.colors.text.primary,
            }}
          >
            {translations[language].projects.title}
          </Typography>
            </Stack>
          <Typography
            variant="body1"
            sx={{
                mb: 8,
                color: designTokens.colors.text.secondary,
                fontSize: { xs: '1rem', md: '1.125rem' },
              textAlign: 'center',
                maxWidth: '700px',
              mx: 'auto',
                lineHeight: 1.7,
            }}
          >
            {translations[language].projects.description}
          </Typography>
        </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4}>
          {projects.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
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
                      {/* Project Image/Icon Area */}
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
                        
                        {/* Action Buttons */}
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
                              transition: 'all 0.3s',
                              '&:hover': {
                                background: designTokens.colors.accent[500],
                                transform: 'scale(1.1)',
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
                                transition: 'all 0.3s',
                                '&:hover': {
                                  background: designTokens.colors.accent[500],
                                  transform: 'scale(1.1)',
                                },
                              }}
                            >
                              <LaunchIcon />
                            </IconButton>
                          )}
                        </Box>

                        {/* Stats Badge */}
                        {project.stats && (
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 16,
                              left: 16,
                              display: 'flex',
                              gap: 1,
                            }}
                          >
                            {Object.entries(project.stats).filter(([key]) => key !== 'growth').map(([key, value]) => (
                              <Chip
                                key={key}
                                label={value}
                                size="small"
                                sx={{
                                  background: 'rgba(0, 0, 0, 0.5)',
                                  backdropFilter: 'blur(10px)',
                                  color: 'white',
                                  fontWeight: 600,
                                  textTransform: 'capitalize',
                                }}
                              />
                            ))}
                          </Box>
                        )}
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

          {/* Empty State for More Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Paper
              sx={{
                mt: 6,
                p: 4,
                background: designTokens.colors.background.glass,
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: `1px solid ${designTokens.colors.accent[500]}30`,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: designTokens.colors.text.primary,
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                More Projects Coming Soon
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: designTokens.colors.text.secondary,
                }}
              >
                Currently working on exciting new projects with cutting-edge technologies
              </Typography>
            </Paper>
          </motion.div>
      </Container>
    </Box>
    </>
  );
};

export default Projects; 
