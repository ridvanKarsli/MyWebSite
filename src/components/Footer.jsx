import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Copyright as CopyrightIcon,
} from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { translations, language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/ridvanKarsli', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/ridvan-karsli-44a783294', label: 'LinkedIn' },
    { icon: <EmailIcon />, url: 'mailto:rdvn.35050@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { title: translations[language].footer.quickLinks.home, href: '/' },
    { title: translations[language].footer.quickLinks.about, href: '/about' },
    { title: translations[language].footer.quickLinks.projects, href: '/projects' },
    { title: translations[language].footer.quickLinks.contact, href: '/contact' },
  ];

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
      component="footer"
      sx={{
        background: designTokens.gradients.background,
        color: 'white',
        py: 6,
        position: 'relative',
        borderTop: `1px solid ${designTokens.colors.accent[500]}20`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <Typography
                variant="h5"
                sx={{
                  color: designTokens.colors.text.primary,
                  fontWeight: 700,
                  mb: 2,
                  fontSize: '1.5rem',
                }}
              >
                {translations[language].footer.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: designTokens.colors.text.secondary,
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                {translations[language].footer.description}
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialLinks.map((link) => (
                  <IconButton
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: designTokens.colors.text.secondary,
                      border: `1px solid ${designTokens.colors.accent[500]}30`,
                      transition: 'all 0.3s',
                      '&:hover': {
                        color: designTokens.colors.accent[500],
                        borderColor: designTokens.colors.accent[500],
                        backgroundColor: `${designTokens.colors.accent[500]}10`,
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <Typography
                variant="h6"
                sx={{
                  color: designTokens.colors.text.primary,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                {translations[language].footer.quickLinks.title}
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    sx={{
                      color: designTokens.colors.text.secondary,
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: designTokens.colors.accent[500],
                        paddingLeft: '8px',
                      },
                    }}
                  >
                    {link.title}
                  </Link>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <Typography
                variant="h6"
                sx={{
                  color: designTokens.colors.text.primary,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Contact
              </Typography>
              <Stack spacing={1.5}>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: designTokens.colors.text.tertiary,
                      fontSize: '0.85rem',
                    }}
                  >
                    Email
                  </Typography>
                  <Link
                    href="mailto:rdvn.35050@gmail.com"
                    sx={{
                      color: designTokens.colors.text.secondary,
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      '&:hover': {
                        color: designTokens.colors.accent[500],
                      },
                    }}
                  >
                    rdvn.35050@gmail.com
                  </Link>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: designTokens.colors.text.tertiary,
                      fontSize: '0.85rem',
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: designTokens.colors.text.secondary,
                      fontSize: '0.95rem',
                    }}
                  >
                    Izmir / Bornova
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 4,
            borderColor: `${designTokens.colors.accent[500]}20`,
          }}
        />

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            component="div"
            sx={{
              color: designTokens.colors.text.tertiary,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <CopyrightIcon sx={{ fontSize: '1rem' }} />
            {currentYear} {translations[language].footer.copyright.replace('❤️', '').replace('©', '').trim()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
