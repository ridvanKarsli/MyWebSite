import React from "react";
import { Box, Container, Typography, Button, Grid, useTheme } from "@mui/material";
import { motion, useInView } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const Hero = () => {
  const { translations, language } = useLanguage();
  const theme = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Floating animation for the visual element
  const floatingAnimation = {
    y: [-20, 20, -20],
    rotate: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Particle animation
  const particleVariants = {
    animate: {
      y: [0, -100, -200],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  };

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
          background: `radial-gradient(circle at 20% 80%, ${designTokens.colors.accent[500]}15 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${designTokens.colors.primary[500]}15 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, ${designTokens.colors.accent[500]}05 0%, transparent 50%)`,
          pointerEvents: 'none',
        },
      }}
    >
      {/* Enhanced animated background particles with multiple layers */}
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
        {/* Large glowing particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            style={{
              position: 'absolute',
              width: Math.random() * 6 + 3 + 'px',
              height: Math.random() * 6 + 3 + 'px',
              backgroundColor: i % 3 === 0 ? designTokens.colors.accent[500] : 
                              i % 3 === 1 ? designTokens.colors.primary[500] : 
                              designTokens.colors.accent[400],
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 100}%`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 3 === 0 ? designTokens.colors.accent[500] : designTokens.colors.primary[500]}`,
            }}
            animate={{
              y: [0, -Math.random() * 200 - 100, -Math.random() * 400 - 200],
              opacity: [0, Math.random() * 0.8 + 0.2, 0],
              scale: [0, Math.random() * 0.5 + 0.5, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
        
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            style={{
              position: 'absolute',
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? designTokens.colors.accent[500] : designTokens.colors.primary[500]}20 0%, transparent 70%)`,
              filter: 'blur(20px)',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 0.5 + 1.2, 1],
              opacity: [0.3, Math.random() * 0.3 + 0.2, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>

      {/* Enhanced floating geometric shapes with glow */}
      {[
        { top: '10%', right: '10%', size: 120, shape: 'square', color: designTokens.colors.accent[500], delay: 0 },
        { bottom: '20%', left: '5%', size: 80, shape: 'circle', color: designTokens.colors.primary[500], delay: 1 },
        { top: '60%', right: '5%', size: 60, shape: 'triangle', color: designTokens.colors.accent[400], delay: 2 },
        { bottom: '10%', right: '30%', size: 100, shape: 'square', color: designTokens.colors.primary[400], delay: 0.5 },
      ].map((shape, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            [shape.top ? 'top' : 'bottom']: shape.top || shape.bottom,
            [shape.right ? 'right' : 'left']: shape.right || shape.left,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: 0.15,
            pointerEvents: 'none',
            filter: `blur(${shape.size / 10}px)`,
          }}
        >
          <motion.div
            animate={{
              y: [-30, 30, -30],
              rotate: shape.shape === 'square' ? [0, 180, 360] : [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
            style={{
              width: '100%',
              height: '100%',
              border: `3px solid ${shape.color}`,
              borderRadius: shape.shape === 'circle' ? '50%' : shape.shape === 'triangle' ? '0' : '20px',
              boxShadow: `0 0 ${shape.size / 2}px ${shape.color}40`,
              clipPath: shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            }}
          />
        </Box>
      ))}

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div variants={textVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: designTokens.colors.accent[500],
                      fontFamily: '"Fira Code", monospace',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      mb: 2,
                      fontWeight: 400,
                    }}
                  >
                    {translations[language].hero.greeting}
                  </Typography>
                </motion.div>

                <motion.div 
                  variants={textVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                      fontWeight: 800,
                      mb: 1,
                      background: designTokens.gradients.accent,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1.1,
                      letterSpacing: '-0.03em',
                      textShadow: `0 0 30px ${designTokens.colors.accent[500]}30`,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-10px',
                        left: 0,
                        width: '100px',
                        height: '4px',
                        background: designTokens.gradients.accent,
                        borderRadius: '2px',
                        boxShadow: designTokens.shadows.glowSoft,
                      },
                    }}
                  >
                    {translations[language].hero.name}
                  </Typography>
                </motion.div>

                <motion.div variants={textVariants}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
                      fontWeight: 600,
                      mb: 3,
                      color: designTokens.colors.text.secondary,
                      lineHeight: 1.2,
                    }}
                  >
                    {translations[language].hero.title}
                  </Typography>
                </motion.div>

                <motion.div variants={textVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      color: designTokens.colors.text.tertiary,
                      mb: 4,
                      maxWidth: '600px',
                      lineHeight: 1.7,
                    }}
                  >
                    {translations[language].hero.description}
                  </Typography>
                </motion.div>

                <motion.div variants={buttonVariants}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexDirection: { xs: 'column', sm: 'row' },
                      mb: 4,
                    }}
                  >
                    <motion.div
                      variants={buttonVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: designTokens.shadows.glow,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        onClick={() => scrollToSection('projects')}
                        startIcon={<RocketLaunchIcon />}
                        sx={{
                          minWidth: { xs: '200px', sm: '220px' },
                          py: 1.8,
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          background: designTokens.gradients.accent,
                          boxShadow: designTokens.shadows.glowSoft,
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            transition: 'left 0.5s',
                          },
                          '&:hover::before': {
                            left: '100%',
                          },
                          '&:hover': {
                            boxShadow: designTokens.shadows.glow,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {translations[language].hero.viewWork}
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      variants={buttonVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: designTokens.shadows.glowSoft,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outlined"
                        onClick={() => scrollToSection('contact')}
                        startIcon={<EmailIcon />}
                        sx={{
                          minWidth: { xs: '200px', sm: '220px' },
                          py: 1.8,
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          borderWidth: '2px',
                          borderColor: designTokens.colors.accent[500],
                          color: designTokens.colors.accent[500],
                          background: 'transparent',
                          backdropFilter: 'blur(10px)',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 'inherit',
                            padding: '2px',
                            background: designTokens.gradients.accent,
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            opacity: 0,
                            transition: 'opacity 0.3s',
                          },
                          '&:hover::before': {
                            opacity: 1,
                          },
                          '&:hover': {
                            backgroundColor: `${designTokens.colors.accent[500]}15`,
                            transform: 'translateY(-2px)',
                            boxShadow: designTokens.shadows.glowSoft,
                          },
                        }}
                      >
                        {translations[language].hero.contactMe}
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>

                <motion.div variants={textVariants}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 3,
                      justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    {[
                      { icon: GitHubIcon, url: 'https://github.com/ridvankarsli', label: 'GitHub' },
                      { icon: LinkedInIcon, url: 'https://linkedin.com/in/ridvankarsli', label: 'LinkedIn' },
                    ].map((social, index) => (
                      <motion.div
                        key={social.label}
                        variants={socialVariants}
                        whileHover="hover"
                        style={{ display: 'inline-block' }}
                      >
                        <Button
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<social.icon />}
                          aria-label={`Visit my ${social.label} profile`}
                          sx={{
                            color: designTokens.colors.text.tertiary,
                            fontSize: '1rem',
                            fontWeight: 500,
                            textTransform: 'none',
                            '&:hover': {
                              color: designTokens.colors.accent[500],
                            },
                          }}
                        >
                          {social.label}
                        </Button>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={textVariants}
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '350px', sm: '400px', md: '500px' },
                  background: designTokens.colors.background.glass,
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: `1px solid ${designTokens.colors.accent[500]}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: { xs: 4, md: 0 },
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: designTokens.shadows.card,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                      radial-gradient(circle at 30% 30%, ${designTokens.colors.accent[500]}15 0%, transparent 60%),
                      radial-gradient(circle at 70% 70%, ${designTokens.colors.primary[500]}10 0%, transparent 60%)
                    `,
                    animation: 'float 8s ease-in-out infinite',
                  },
                  '@keyframes float': {
                    '0%, 100%': {
                      transform: 'rotate(0deg)',
                    },
                    '50%': {
                      transform: 'rotate(5deg)',
                    },
                  },
                }}
              >
                {/* Central Code Icon */}
                <motion.div
                  animate={floatingAnimation}
                  style={{
                    position: 'relative',
                    zIndex: 3,
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <CodeIcon 
                      sx={{ 
                        fontSize: { xs: 120, sm: 150, md: 180 }, 
                        color: designTokens.colors.accent[500],
                        filter: `drop-shadow(0 0 30px ${designTokens.colors.accent[500]}) drop-shadow(0 0 60px ${designTokens.colors.accent[500]}50)`,
                        background: designTokens.gradients.accent,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }} 
                    />
                  </motion.div>
                </motion.div>
                
                {/* Animated code lines */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '8%',
                    right: '8%',
                    fontFamily: '"Fira Code", monospace',
                    fontSize: { xs: '0.7rem', md: '0.85rem' },
                    color: designTokens.colors.text.tertiary,
                    opacity: 0.8,
                    zIndex: 2,
                  }}
                >
                  {[
                    'const developer = {',
                    '  name: "Ridvan Karsli",',
                    '  skills: ["React", "Node.js"],',
                    '  passion: "Clean Code",',
                    '  status: "Building...",',
                    '};'
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: i * 0.3 + 0.5,
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      style={{
                        marginBottom: '0.6rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: designTokens.colors.accent[500],
                          marginRight: '0.5rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {i === 0 || i === 5 ? '' : '  '}
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          color: i === 0 || i === 5 ? designTokens.colors.primary[400] : 
                                line.includes(':') ? designTokens.colors.text.secondary : 
                                designTokens.colors.text.tertiary,
                        }}
                      >
                        {line}
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                {/* Decorative Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '60px',
                    height: '60px',
                    border: `2px solid ${designTokens.colors.accent[500]}`,
                    borderRadius: '12px',
                    opacity: 0.3,
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      transition: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: `1px solid ${designTokens.colors.primary[500]}`,
                      borderRadius: '12px',
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '15%',
                    width: '40px',
                    height: '40px',
                    border: `2px solid ${designTokens.colors.primary[500]}`,
                    borderRadius: '50%',
                    opacity: 0.2,
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: designTokens.colors.primary[500],
                      borderRadius: '50%',
                    }}
                  />
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

export default Hero;
