import React, { useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const FeatureList = () => {
  const { translations, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = translations[language].about.features.items.map((feature, index) => ({
    icon: [<CodeIcon />, <StorageIcon />, <DevicesIcon />][index],
    title: feature.title,
    description: feature.description,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
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
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, ${designTokens.colors.accent[500]}08 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, ${designTokens.colors.primary[500]}06 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              mb: 2,
              fontFamily: 'monospace',
              textAlign: 'center',
              background: designTokens.gradients.accent,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {translations[language].about.features.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 8,
              color: designTokens.colors.text.secondary,
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              textAlign: 'center',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            {translations[language].about.description}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      background: designTokens.colors.background.glass,
                      backdropFilter: 'blur(20px)',
                      borderRadius: '24px',
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
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: designTokens.gradients.accent,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover': {
                        borderColor: `${designTokens.colors.accent[500]}60`,
                        boxShadow: designTokens.shadows.cardHover,
                        '&::before': {
                          transform: 'scaleX(1)',
                        },
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        mb: 3,
                        color: designTokens.colors.accent[500],
                        fontSize: '3.5rem',
                        filter: `drop-shadow(0 0 15px ${designTokens.colors.accent[500]}40)`,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        background: designTokens.gradients.accent,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: designTokens.colors.text.secondary,
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FeatureList;
