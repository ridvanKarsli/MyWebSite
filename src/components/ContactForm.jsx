import React, { useRef } from 'react';
import { Box, Container, Typography, TextField, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import TechButton from './TechButton';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const ContactForm = () => {
  const { translations, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      id="contact"
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
            radial-gradient(circle at 50% 50%, ${designTokens.colors.accent[500]}08 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
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
            {translations[language].contact.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: designTokens.colors.text.secondary,
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              textAlign: 'center',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            {translations[language].contact.description}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Box
            component="form"
            sx={{
              background: designTokens.colors.background.glass,
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              p: { xs: 3, md: 5 },
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
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <motion.div variants={itemVariants}>
                  <TextField
                    fullWidth
                    label={translations[language].contact.form.namePlaceholder}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: designTokens.colors.text.primary,
                        background: 'rgba(15, 23, 42, 0.5)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        '& fieldset': {
                          borderColor: `${designTokens.colors.accent[500]}30`,
                          borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                          borderColor: `${designTokens.colors.accent[500]}60`,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: designTokens.colors.accent[500],
                          boxShadow: designTokens.shadows.glowSoft,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: designTokens.colors.text.tertiary,
                        '&.Mui-focused': {
                          color: designTokens.colors.accent[500],
                        },
                      },
                    }}
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <motion.div variants={itemVariants}>
                  <TextField
                    fullWidth
                    label={translations[language].contact.form.emailPlaceholder}
                    variant="outlined"
                    type="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: designTokens.colors.text.primary,
                        background: 'rgba(15, 23, 42, 0.5)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        '& fieldset': {
                          borderColor: `${designTokens.colors.accent[500]}30`,
                          borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                          borderColor: `${designTokens.colors.accent[500]}60`,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: designTokens.colors.accent[500],
                          boxShadow: designTokens.shadows.glowSoft,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: designTokens.colors.text.tertiary,
                        '&.Mui-focused': {
                          color: designTokens.colors.accent[500],
                        },
                      },
                    }}
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div variants={itemVariants}>
                  <TextField
                    fullWidth
                    label={translations[language].contact.form.messagePlaceholder}
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: designTokens.colors.text.primary,
                        background: 'rgba(15, 23, 42, 0.5)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        '& fieldset': {
                          borderColor: `${designTokens.colors.accent[500]}30`,
                          borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                          borderColor: `${designTokens.colors.accent[500]}60`,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: designTokens.colors.accent[500],
                          boxShadow: designTokens.shadows.glowSoft,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: designTokens.colors.text.tertiary,
                        '&.Mui-focused': {
                          color: designTokens.colors.accent[500],
                        },
                      },
                    }}
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TechButton
                      variant="outlined"
                      sx={{
                        minWidth: '220px',
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                      }}
                    >
                      {translations[language].contact.form.sendButton}
                    </TechButton>
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactForm;
