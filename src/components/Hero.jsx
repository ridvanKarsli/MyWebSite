import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { translations, language } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Code block animation
  const codeBlockVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        backgroundColor: '#0a192f',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
      }}
    >
      {/* Animated background elements */}
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              backgroundColor: '#00e5ff',
              opacity: 0.5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  fontFamily: 'monospace',
                  color: '#00e5ff',
                }}
              >
                {translations[language].hero.greeting}
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  fontFamily: 'monospace',
                  color: '#ccd6f6',
                }}
              >
                {translations[language].hero.name}
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 'bold',
                  mb: 4,
                  fontFamily: 'monospace',
                  color: '#8892b0',
                }}
              >
                {translations[language].hero.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  color: '#8892b0',
                  mb: 4,
                  maxWidth: '600px',
                }}
              >
                {translations[language].hero.description}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    color: '#00e5ff',
                    borderColor: '#00e5ff',
                    fontFamily: 'monospace',
                    minWidth: { xs: '200px', sm: '150px' },
                    '&:hover': {
                      borderColor: '#00e5ff',
                      backgroundColor: 'rgba(0, 229, 255, 0.1)',
                    },
                  }}
                >
                  {translations[language].hero.viewWork}
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    color: '#00e5ff',
                    borderColor: '#00e5ff',
                    fontFamily: 'monospace',
                    minWidth: { xs: '200px', sm: '150px' },
                    '&:hover': {
                      borderColor: '#00e5ff',
                      backgroundColor: 'rgba(0, 229, 255, 0.1)',
                    },
                  }}
                >
                  {translations[language].hero.contactMe}
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  mt: { xs: 3, md: 4 },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Button
                  component="a"
                  href="https://github.com/ridvankarsli"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                  aria-label="Visit my GitHub profile"
                  sx={{
                    color: '#8892b0',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#00e5ff',
                      textDecoration: 'none',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  component="a"
                  href="https://linkedin.com/in/ridvankarsli"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedInIcon />}
                  aria-label="Visit my LinkedIn profile"
                  sx={{
                    color: '#8892b0',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#00e5ff',
                      textDecoration: 'none',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  LinkedIn
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={codeBlockVariants}
              initial="initial"
              animate="animate"
            >
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '300px', sm: '350px', md: '400px' },
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: { xs: 4, md: 0 },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0) 100%)',
                    animation: 'gradient 3s ease infinite',
                  },
                  '@keyframes gradient': {
                    '0%': {
                      backgroundPosition: '0% 50%',
                    },
                    '50%': {
                      backgroundPosition: '100% 50%',
                    },
                    '100%': {
                      backgroundPosition: '0% 50%',
                    },
                  },
                }}
              >
                <motion.div
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                >
                  <CodeIcon 
                    sx={{ 
                      fontSize: { xs: 80, sm: 90, md: 100 }, 
                      color: '#00e5ff',
                      filter: 'drop-shadow(0 0 10px rgba(0, 229, 255, 0.3))',
                    }} 
                  />
                </motion.div>
                
                {/* Animated code lines */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    right: '10%',
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    color: '#8892b0',
                    opacity: 0.5,
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      style={{
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ color: '#00e5ff', marginRight: '0.5rem' }}>{'>'}</span>
                      <span style={{ color: '#8892b0' }}>
                        {`const ${['React', 'Node', 'TypeScript', 'MongoDB', 'Docker'][i]} = require('modern-web');`}
                      </span>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
