import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const AboutSection = () => {
  const { translations, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

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
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 30%, ${designTokens.colors.accent[500]}08 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, ${designTokens.colors.primary[500]}06 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${designTokens.colors.accent[500]}10 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: '100%', height: '100%' }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 3,
                    fontFamily: 'monospace',
                    background: designTokens.gradients.accent,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-15px',
                      left: 0,
                      width: '100px',
                      height: '4px',
                      background: designTokens.gradients.accent,
                      borderRadius: '2px',
                      boxShadow: designTokens.shadows.glowSoft,
                    },
                  }}
                >
                  {translations[language].about.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: designTokens.colors.text.secondary,
                    mb: 3,
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    lineHeight: 1.8,
                  }}
                >
                  {translations[language].about.description}
                </Typography>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: designTokens.colors.text.secondary,
                      mb: 3,
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                      lineHeight: 1.8,
                      pl: 2,
                      borderLeft: `3px solid ${designTokens.colors.accent[500]}`,
                      background: `${designTokens.colors.accent[500]}05`,
                      py: 2,
                      borderRadius: '8px',
                    }}
                  >
                    {translations[language].about.journey.content1}
                  </Typography>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: designTokens.colors.text.secondary,
                      mb: 4,
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                      lineHeight: 1.8,
                      pl: 2,
                      borderLeft: `3px solid ${designTokens.colors.primary[500]}`,
                      background: `${designTokens.colors.primary[500]}05`,
                      py: 2,
                      borderRadius: '8px',
                    }}
                  >
                    {translations[language].about.journey.content2}
                  </Typography>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Box
                  sx={{
                    background: designTokens.colors.background.glass,
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    p: 4,
                    height: '100%',
                    border: `1px solid ${designTokens.colors.accent[500]}30`,
                    boxShadow: designTokens.shadows.card,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: designTokens.gradients.accent,
                      boxShadow: designTokens.shadows.glowSoft,
                    },
                    '&:hover': {
                      borderColor: `${designTokens.colors.accent[500]}50`,
                      boxShadow: designTokens.shadows.cardHover,
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      background: designTokens.gradients.accent,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 4,
                      fontFamily: 'monospace',
                      fontSize: { xs: '1.8rem', sm: '2.2rem' },
                      fontWeight: 700,
                    }}
                  >
                    {translations[language].about.timeline.title}
                  </Typography>
                  <Box sx={{ mb: 4 }}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: designTokens.colors.accent[500],
                          mb: 1.5,
                          fontFamily: 'monospace',
                          fontWeight: 600,
                          fontSize: '1.1rem',
                        }}
                      >
                        {translations[language].about.timeline.education.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: designTokens.colors.text.secondary,
                          mb: 2,
                          lineHeight: 1.8,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {translations[language].about.timeline.education.content}
                      </Typography>
                    </motion.div>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: designTokens.colors.primary[500],
                          mb: 1.5,
                          fontFamily: 'monospace',
                          fontWeight: 600,
                          fontSize: '1.1rem',
                        }}
                      >
                        {translations[language].about.timeline.experience.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: designTokens.colors.text.secondary,
                          mb: 2,
                          lineHeight: 1.8,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {translations[language].about.timeline.experience.content}
                      </Typography>
                    </motion.div>
                  </Box>
                  <Box>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: designTokens.colors.accent[400],
                          mb: 1.5,
                          fontFamily: 'monospace',
                          fontWeight: 600,
                          fontSize: '1.1rem',
                        }}
                      >
                        {translations[language].about.timeline.skills.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: designTokens.colors.text.secondary,
                          lineHeight: 1.8,
                        }}
                      >
                        {translations[language].about.timeline.skills.content}
                      </Typography>
                    </motion.div>
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
