import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  IconButton,
  useTheme,
  useMediaQuery,
  Link,
  Card,
  CardContent,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { translations, language } = useLanguage();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setStatus({ type: 'success', message: translations[language].contact.form.success });
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: translations[language].contact.contactInfo.email,
      content: 'rdvn.35050@gmail.com',
      link: 'mailto:rdvn.35050@gmail.com',
    },
    {
      icon: <PhoneIcon />,
      title: translations[language].contact.contactInfo.phone,
      content: '05536999119',
      link: 'tel:05536999119',
    },
    {
      icon: <LocationIcon />,
      title: translations[language].contact.contactInfo.location,
      content: 'izmir türkiye',
      link: 'https://maps.google.com/?q=izmir türkiye',
    },
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        background: designTokens.gradients.background,
        color: 'white',
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 25% 25%, ${designTokens.colors.accent[500]}10 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, ${designTokens.colors.primary[500]}08 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                textAlign: 'center',
                position: 'relative',
                background: designTokens.gradients.accent,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: designTokens.gradients.accent,
                  borderRadius: '2px',
                },
              }}
            >
              {translations[language].contact.title}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 8,
                color: designTokens.colors.text.secondary,
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {translations[language].contact.description}
            </Typography>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `radial-gradient(circle at 10% 20%, ${designTokens.colors.accent[500]}05 0%, transparent 50%)`,
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: designTokens.colors.accent[500],
                        mb: 3,
                        fontWeight: 600,
                      }}
                    >
                      {translations[language].contact.form.title}
                    </Typography>
                    
                    <Box component="form" onSubmit={handleSubmit} sx={{ '& > *': { mb: 3 } }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <TextField
                          fullWidth
                          label={translations[language].contact.form.namePlaceholder}
                          variant="outlined"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <TextField
                          fullWidth
                          label={translations[language].contact.form.emailPlaceholder}
                          variant="outlined"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <TextField
                          fullWidth
                          label={translations[language].contact.form.messagePlaceholder}
                          variant="outlined"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          startIcon={<SendIcon />}
                          sx={{
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                          }}
                        >
                          {translations[language].contact.form.sendButton}
                        </Button>
                      </motion.div>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div 
                variants={cardVariants}
                style={{ height: '100%' }}
              >
                <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                  <CardContent sx={{ p: 4, height: '100%' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: designTokens.colors.accent[500],
                        mb: 4,
                        fontWeight: 600,
                      }}
                    >
                      {translations[language].contact.contactInfo.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={info.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.02, x: 10 }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 3,
                              p: 2,
                              borderRadius: '16px',
                              background: `${designTokens.colors.accent[500]}08`,
                              border: `1px solid ${designTokens.colors.accent[500]}20`,
                              transition: 'all 0.3s ease',
                              cursor: info.link ? 'pointer' : 'default',
                              '&:hover': {
                                background: `${designTokens.colors.accent[500]}15`,
                                borderColor: `${designTokens.colors.accent[500]}30`,
                                transform: 'translateY(-2px)',
                                boxShadow: designTokens.shadows.glowSoft,
                              },
                              ...(info.link
                                ? {
                                    textDecoration: 'none',
                                    color: 'inherit',
                                  }
                                : {}),
                            }}
                            component={info.link ? Link : Box}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Box
                              sx={{
                                background: designTokens.gradients.accent,
                                borderRadius: '16px',
                                p: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: designTokens.colors.background.primary,
                                minWidth: '56px',
                                minHeight: '56px',
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  color: designTokens.colors.accent[500],
                                  mb: 0.5,
                                  fontWeight: 600,
                                  fontSize: '1.1rem',
                                }}
                              >
                                {info.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{
                                  color: designTokens.colors.text.secondary,
                                  fontSize: '1rem',
                                  fontWeight: 500,
                                }}
                              >
                                {info.content}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={!!status.message}
        autoHideDuration={6000}
        onClose={() => setStatus({ type: '', message: '' })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Alert
            onClose={() => setStatus({ type: '', message: '' })}
            severity={status.type}
            icon={status.type === 'success' ? <CheckCircleIcon /> : undefined}
            sx={{
              width: '100%',
              borderRadius: '12px',
              background: status.type === 'success' 
                ? designTokens.gradients.accent 
                : `linear-gradient(135deg, ${designTokens.colors.status.error} 0%, #c53030 100%)`,
              color: designTokens.colors.background.primary,
              fontWeight: 600,
              boxShadow: designTokens.shadows.card,
              border: `1px solid ${status.type === 'success' ? designTokens.colors.accent[400] : designTokens.colors.status.error}`,
              '& .MuiAlert-icon': {
                color: designTokens.colors.background.primary,
              },
              '& .MuiAlert-action': {
                color: designTokens.colors.background.primary,
              },
            }}
          >
            {status.message}
          </Alert>
        </motion.div>
      </Snackbar>
    </Box>
  );
};

export default Contact; 