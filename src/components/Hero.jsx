import React from "react";
import { Box, Container, Typography, Button, Grid, Chip, Stack } from "@mui/material";
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const Hero = () => {
  const { translations, language } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  // Minimal professional animations
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

  const skills = ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Swift', 'REST API'];

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        background: designTokens.gradients.background,
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 0 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 80% 20%, ${designTokens.colors.accent[500]}08 0%, transparent 50%)`,
          pointerEvents: 'none',
        },
      }}
    >
      {/* Subtle background grid */}
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

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div variants={itemVariants}>
                  <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Chip 
                      icon={<LocationOnIcon />}
                      label={translations[language].hero.location}
                      variant="outlined"
                    sx={{
                        borderColor: designTokens.colors.accent[500],
                        color: designTokens.colors.text.secondary,
                      }}
                    />
                  </Stack>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                      fontWeight: 700,
                      mb: 2,
                      color: designTokens.colors.text.primary,
                      lineHeight: 1.2,
                    }}
                  >
                    {translations[language].hero.name}
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                      fontWeight: 600,
                      mb: 3,
                      color: designTokens.colors.accent[500],
                      lineHeight: 1.3,
                    }}
                  >
                    {translations[language].hero.title}
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      color: designTokens.colors.text.secondary,
                      mb: 4,
                      maxWidth: '600px',
                      lineHeight: 1.7,
                    }}
                  >
                    {translations[language].hero.description}
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Stack direction="row" spacing={1} flexWrap="wrap" mb={4} useFlexGap>
                    {skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="medium"
                    sx={{
                          background: designTokens.colors.background.glass,
                          backdropFilter: 'blur(10px)',
                          border: `1px solid ${designTokens.colors.accent[500]}30`,
                          color: designTokens.colors.text.primary,
                          fontWeight: 500,
                          mb: 1,
                        }}
                      />
                    ))}
                  </Stack>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<EmailIcon />}
                    onClick={() => scrollToSection('contact')}
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: designTokens.gradients.accent,
                      boxShadow: designTokens.shadows.glowSoft,
                      mb: 4,
                      '&:hover': {
                        boxShadow: designTokens.shadows.glow,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {translations[language].hero.contactMe}
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Stack direction="row" spacing={2}>
                    {[
                      { icon: GitHubIcon, url: 'https://github.com/ridvanKarsli', label: 'GitHub' },
                      { icon: LinkedInIcon, url: 'https://linkedin.com/in/ridvan-karsli-44a783294', label: 'LinkedIn' },
                      { icon: EmailIcon, url: 'mailto:rdvn.35050@gmail.com', label: 'Email' },
                    ].map((social) => (
                      <Button
                        key={social.label}
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<social.icon />}
                          sx={{
                            color: designTokens.colors.text.tertiary,
                          fontSize: '0.9rem',
                            fontWeight: 500,
                            textTransform: 'none',
                          transition: 'all 0.2s',
                            '&:hover': {
                              color: designTokens.colors.accent[500],
                            transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          {social.label}
                        </Button>
                    ))}
                  </Stack>
                </motion.div>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
            <motion.div
                variants={itemVariants}
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <Box
                sx={{
                  width: '100%',
                    height: { xs: '300px', sm: '350px', md: '450px' },
                  background: designTokens.colors.background.glass,
                  backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                  border: `1px solid ${designTokens.colors.accent[500]}30`,
                  display: 'flex',
                    flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                    p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: designTokens.shadows.card,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                      height: '4px',
                      background: designTokens.gradients.accent,
                    },
                  }}
                >
                  <WorkIcon 
                      sx={{ 
                      fontSize: { xs: 100, sm: 120, md: 150 }, 
                        color: designTokens.colors.accent[500],
                      filter: `drop-shadow(0 0 20px ${designTokens.colors.accent[500]}40)`,
                      mb: 3,
                    }} 
                  />
                  <Typography
                    variant="h4"
                  sx={{
                      color: designTokens.colors.text.primary,
                      fontWeight: 700,
                      textAlign: 'center',
                      mb: 2,
                    }}
                  >
                    {translations[language].hero.backendDeveloper}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: designTokens.colors.text.secondary,
                      textAlign: 'center',
                      maxWidth: '300px',
                    }}
                  >
                    {translations[language].hero.backendSpecialty}
                  </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
