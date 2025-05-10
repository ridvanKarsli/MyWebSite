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
} from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';

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

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0a192f',
        color: 'white',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'monospace',
                  color: '#00e5ff',
                  mb: 2,
                }}
              >
                {translations[language].footer.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#8892b0',
                  mb: 2,
                }}
              >
                {translations[language].footer.description}
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'monospace',
                  color: '#00e5ff',
                  mb: 2,
                }}
              >
                {translations[language].footer.quickLinks.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      sx={{
                        color: '#8892b0',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#00e5ff',
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'monospace',
                  color: '#00e5ff',
                  mb: 2,
                }}
              >
                {translations[language].footer.quickLinks.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((link, index) => (
                  <IconButton
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#8892b0',
                      '&:hover': {
                        color: '#00e5ff',
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#8892b0',
            }}
          >
            {translations[language].footer.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
