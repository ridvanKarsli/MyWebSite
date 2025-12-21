import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const Services = () => {
  const { translations, language } = useLanguage();
  const ref = useRef(null);

  const services = translations[language].about.services.items.map((service, index) => ({
    icon: [<WebIcon />, <StorageIcon />, <BuildIcon />][index],
    title: service.title,
    description: service.description,
    color: [designTokens.colors.accent[500], designTokens.colors.accent[600], designTokens.colors.accent[400]][index],
  }));

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
      id="services"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: designTokens.gradients.background,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 15 },
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              color: designTokens.colors.text.primary,
            }}
          >
            {translations[language].about.services.title}
          </Typography>
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
            {translations[language].about.services.subtitle}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    sx={{
                      background: designTokens.colors.background.glass,
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: `1px solid ${designTokens.colors.accent[500]}30`,
                      boxShadow: designTokens.shadows.card,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${service.color}, transparent)`,
                      },
                      '&:hover': {
                        borderColor: `${designTokens.colors.accent[500]}60`,
                        transform: 'translateY(-8px)',
                        boxShadow: designTokens.shadows.cardHover,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 90,
                        height: 90,
                        borderRadius: '18px',
                        background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                        border: `2px solid ${service.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        color: service.color,
                        fontSize: '3rem',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: designTokens.colors.text.primary,
                        mb: 2,
                        fontWeight: 700,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: designTokens.colors.text.secondary,
                        lineHeight: 1.7,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
