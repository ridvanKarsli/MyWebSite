import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Code as CodeIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { translations, language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/ridvankarsli', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/ridvankarsli', label: 'LinkedIn' },
    { icon: <TwitterIcon />, url: 'https://twitter.com/ridvankarsli', label: 'Twitter' },
    { icon: <EmailIcon />, url: 'mailto:ridvankarsli@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { title: translations[language].footer.quickLinks.home, href: '#/' },
    { title: translations[language].footer.quickLinks.about, href: '#about' },
    { title: translations[language].footer.quickLinks.projects, href: '#projects' },
    { title: translations[language].footer.quickLinks.contact, href: '#contact' },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${designTokens.colors.background.secondary} 0%, ${designTokens.colors.background.primary} 100%)`,
        color: 'white',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: designTokens.gradients.accent,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 0%, ${designTokens.colors.accent[500]}05 0%, transparent 50%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      background: designTokens.gradients.accent,
                      borderRadius: '12px',
                      p: 1.5,
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CodeIcon sx={{ color: designTokens.colors.background.primary }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: designTokens.colors.accent[500],
                      fontWeight: 700,
                      fontSize: '1.5rem',
                    }}
                  >
                    {translations[language].footer.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: designTokens.colors.text.secondary,
                    mb: 3,
                    lineHeight: 1.7,
                    fontSize: '1rem',
                  }}
                >
                  {translations[language].footer.description}
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: designTokens.colors.accent[500],
                    mb: 3,
                    fontWeight: 600,
                    fontSize: '1.3rem',
                  }}
                >
                  {translations[language].footer.quickLinks.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={link.title}
                      whileHover={{ x: 10, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={link.href}
                        sx={{
                          color: designTokens.colors.text.secondary,
                          textDecoration: 'none',
                          fontSize: '1rem',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          p: 1,
                          borderRadius: '8px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: designTokens.colors.accent[500],
                            backgroundColor: `${designTokens.colors.accent[500]}10`,
                          },
                          '&::before': {
                            content: '"→"',
                            marginRight: '8px',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          },
                          '&:hover::before': {
                            opacity: 1,
                          },
                        }}
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: designTokens.colors.accent[500],
                    mb: 3,
                    fontWeight: 600,
                    fontSize: '1.3rem',
                  }}
                >
                  Connect
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: designTokens.colors.background.glass,
                          backdropFilter: 'blur(10px)',
                          border: `1px solid ${designTokens.colors.accent[500]}30`,
                          color: designTokens.colors.text.secondary,
                          width: 48,
                          height: 48,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: designTokens.colors.accent[500],
                            backgroundColor: `${designTokens.colors.accent[500]}15`,
                            borderColor: `${designTokens.colors.accent[500]}50`,
                            boxShadow: designTokens.shadows.glowSoft,
                          },
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <motion.div variants={itemVariants}>
            <Divider
              sx={{
                my: 4,
                borderColor: `${designTokens.colors.accent[500]}20`,
                background: `linear-gradient(90deg, transparent, ${designTokens.colors.accent[500]}30, transparent)`,
              }}
            />
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="body2"
                sx={{
                  color: designTokens.colors.text.tertiary,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {translations[language].footer.copyright.replace('❤️', '')}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    color: [
                      designTokens.colors.status.error,
                      designTokens.colors.accent[500],
                      designTokens.colors.status.error
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: '1.2rem' }} />
                </motion.div>
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
