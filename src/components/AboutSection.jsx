import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { translations, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component="section"
      id="about"
      sx={{
        backgroundColor: '#0a192f',
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 'bold',
                    mb: 2,
                    fontFamily: 'monospace',
                    color: '#00e5ff',
                  }}
                >
                  {translations[language].about.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#8892b0',
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  {translations[language].about.description}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#8892b0',
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  {translations[language].about.journey.content1}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#8892b0',
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  {translations[language].about.journey.content2}
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    p: 4,
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#00e5ff',
                      mb: 3,
                      fontFamily: 'monospace',
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                    }}
                  >
                    {translations[language].about.timeline.title}
                  </Typography>
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00e5ff',
                        mb: 1,
                        fontFamily: 'monospace',
                      }}
                    >
                      {translations[language].about.timeline.education.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#8892b0',
                        mb: 2,
                      }}
                    >
                      {translations[language].about.timeline.education.content}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00e5ff',
                        mb: 1,
                        fontFamily: 'monospace',
                      }}
                    >
                      {translations[language].about.timeline.experience.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#8892b0',
                        mb: 2,
                      }}
                    >
                      {translations[language].about.timeline.experience.content}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00e5ff',
                        mb: 1,
                        fontFamily: 'monospace',
                      }}
                    >
                      {translations[language].about.timeline.skills.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#8892b0',
                      }}
                    >
                      {translations[language].about.timeline.skills.content}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
