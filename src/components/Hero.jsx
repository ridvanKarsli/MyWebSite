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
    // First try to find element by ID
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for navbar
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // If element not found, try scrolling after a short delay (for dynamic content)
      setTimeout(() => {
        const retryElement = document.getElementById(sectionId);
        if (retryElement) {
          const offset = 100;
          const elementPosition = retryElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.15,
      },
    },
    tap: {
      scale: 0.97,
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.15,
      },
    },
  };

  // Optimized floating animation
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
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
      {/* Optimized animated background particles */}
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
        {/* Reduced particles for better performance */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              backgroundColor: i % 2 === 0 ? designTokens.colors.accent[500] : designTokens.colors.primary[500],
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 100}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              y: [0, -Math.random() * 300 - 200],
              opacity: [0, 0.6, 0],
              scale: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Reduced floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            style={{
              position: 'absolute',
              width: Math.random() * 80 + 40 + 'px',
              height: Math.random() * 80 + 40 + 'px',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? designTokens.colors.accent[500] : designTokens.colors.primary[500]}15 0%, transparent 70%)`,
              filter: 'blur(20px)',
              willChange: 'transform',
            }}
            animate={{
              y: [0, Math.random() * 60 - 30, 0],
              x: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </Box>

      {/* Optimized floating geometric shapes */}
      {[
        { top: '10%', right: '10%', size: 100, shape: 'square', color: designTokens.colors.accent[500] },
        { bottom: '20%', left: '5%', size: 70, shape: 'circle', color: designTokens.colors.primary[500] },
      ].map((shape, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            [shape.top ? 'top' : 'bottom']: shape.top || shape.bottom,
            [shape.right ? 'right' : 'left']: shape.right || shape.left,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: 0.1,
            pointerEvents: 'none',
            filter: `blur(${shape.size / 12}px)`,
          }}
        >
          <motion.div
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: '100%',
              height: '100%',
              border: `2px solid ${shape.color}`,
              borderRadius: shape.shape === 'circle' ? '50%' : '15px',
              willChange: 'transform',
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
                {/* Central Code Icon - Optimized */}
                <motion.div
                  animate={floatingAnimation}
                  style={{
                    position: 'relative',
                    zIndex: 3,
                    willChange: 'transform',
                  }}
                >
                  <CodeIcon 
                    sx={{ 
                      fontSize: { xs: 120, sm: 150, md: 180 }, 
                      color: designTokens.colors.accent[500],
                      filter: `drop-shadow(0 0 20px ${designTokens.colors.accent[500]}80)`,
                    }} 
                  />
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
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: i * 0.15 + 0.3,
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      style={{
                        marginBottom: '0.6rem',
                        display: 'flex',
                        alignItems: 'center',
                        willChange: 'transform, opacity',
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

                {/* Simplified Decorative Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '50px',
                    height: '50px',
                    border: `2px solid ${designTokens.colors.accent[500]}`,
                    borderRadius: '12px',
                    opacity: 0.2,
                    zIndex: 1,
                  }}
                />
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
