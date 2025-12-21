import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AboutSection = () => {
  const { translations, language } = useLanguage();
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const highlights = [
    translations[language].about.keyStrengths?.item1 || 'Backend Development Specialist',
    translations[language].about.keyStrengths?.item2 || 'Spring Boot & Java Expert',
    translations[language].about.keyStrengths?.item3 || 'RESTful API Design',
    translations[language].about.keyStrengths?.item4 || 'Database Optimization',
    translations[language].about.keyStrengths?.item5 || 'Microservices Architecture',
  ];

  return (
    <Box
      component="section"
      id="about"
      ref={ref}
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
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: '12px',
                      background: designTokens.gradients.accent,
                      display: 'flex',
                    }}
                  >
                    <PersonIcon sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                      fontWeight: 700,
                      color: designTokens.colors.text.primary,
                    }}
                  >
                    {translations[language].about.title}
                  </Typography>
                </Stack>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: designTokens.colors.text.secondary,
                    mb: 3,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.8,
                  }}
                >
                  {translations[language].about.description}
                </Typography>

                <Paper
                  sx={{
                    p: 3,
                    mb: 3,
                    background: designTokens.colors.background.glass,
                    backdropFilter: 'blur(20px)',
                    borderRadius: '16px',
                    border: `1px solid ${designTokens.colors.accent[500]}30`,
                    borderLeft: `4px solid ${designTokens.colors.accent[500]}`,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: designTokens.colors.text.secondary,
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                    }}
                  >
                    {translations[language].about.journey.content1}
                  </Typography>
                </Paper>

                <Paper
                  sx={{
                    p: 3,
                    background: designTokens.colors.background.glass,
                    backdropFilter: 'blur(20px)',
                    borderRadius: '16px',
                    border: `1px solid ${designTokens.colors.accent[500]}30`,
                    borderLeft: `4px solid ${designTokens.colors.accent[600]}`,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: designTokens.colors.text.secondary,
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                    }}
                  >
                    {translations[language].about.journey.content2}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    background: designTokens.colors.background.glass,
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    p: 4,
                    border: `1px solid ${designTokens.colors.accent[500]}30`,
                    boxShadow: designTokens.shadows.card,
                    position: 'relative',
                    height: '100%',
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
                  <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: '12px',
                        background: designTokens.gradients.accent,
                        display: 'flex',
                      }}
                    >
                      <TrendingUpIcon sx={{ color: 'white', fontSize: 28 }} />
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        color: designTokens.colors.text.primary,
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                      }}
                    >
                      {translations[language].about.keyStrengths?.title || 'Key Strengths'}
                    </Typography>
                  </Stack>

                  <Stack spacing={2}>
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: '12px',
                            background: `${designTokens.colors.accent[500]}10`,
                            border: `1px solid ${designTokens.colors.accent[500]}20`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            transition: 'all 0.3s',
                            '&:hover': {
                              background: `${designTokens.colors.accent[500]}15`,
                              borderColor: `${designTokens.colors.accent[500]}40`,
                              transform: 'translateX(8px)',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: designTokens.colors.accent[500],
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              color: designTokens.colors.text.primary,
                              fontWeight: 500,
                            }}
                          >
                            {highlight}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>

                  <Box sx={{ mt: 4, pt: 3, borderTop: `1px solid ${designTokens.colors.accent[500]}20` }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: designTokens.colors.text.tertiary,
                        textAlign: 'center',
                        fontStyle: 'italic',
                      }}
                    >
                      "{translations[language].about.keyStrengths?.quote || 'Building robust and scalable backend solutions'}"
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
