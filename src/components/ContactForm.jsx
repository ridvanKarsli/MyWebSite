import React, { useRef, useState } from 'react';
import { Box, Container, Typography, TextField, Grid, Button, Stack, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const ContactForm = () => {
  const { translations, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    { icon: EmailIcon, label: 'Email', value: 'rdvn.35050@gmail.com', link: 'mailto:rdvn.35050@gmail.com' },
    { icon: LinkedIn, label: 'LinkedIn', value: '/ridvan-karsli-44a783294', link: 'https://linkedin.com/in/ridvan-karsli-44a783294' },
    { icon: GitHub, label: 'GitHub', value: '/ridvanKarsli', link: 'https://github.com/ridvanKarsli' },
  ];

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
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              color: designTokens.colors.text.primary,
            }}
          >
            {translations[language].contact.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: designTokens.colors.text.secondary,
              fontSize: { xs: '1rem', md: '1.125rem' },
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            {translations[language].contact.description}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Methods */}
          <Grid item xs={12} md={4}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Stack spacing={3}>
                {contactMethods.map((method, index) => (
                  <motion.div key={method.label} variants={itemVariants}>
                    <Paper
                      component="a"
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        p: 3,
                        background: designTokens.colors.background.glass,
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${designTokens.colors.accent[500]}30`,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: `${designTokens.colors.accent[500]}60`,
                          transform: 'translateY(-4px)',
                          boxShadow: designTokens.shadows.cardHover,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '12px',
                          background: designTokens.gradients.accent,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <method.icon sx={{ fontSize: 28, color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: designTokens.colors.text.primary,
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {method.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: designTokens.colors.text.secondary }}
                        >
                          {method.value}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  background: designTokens.colors.background.glass,
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  p: { xs: 3, md: 4 },
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
                    height: '3px',
                    background: designTokens.gradients.accent,
                  },
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <motion.div variants={itemVariants}>
                      <TextField
                        fullWidth
                        name="name"
                        label={translations[language].contact.form.namePlaceholder}
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <motion.div variants={itemVariants}>
                      <TextField
                        fullWidth
                        name="email"
                        label={translations[language].contact.form.emailPlaceholder}
                        variant="outlined"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <TextField
                        fullWidth
                        name="message"
                        label={translations[language].contact.form.messagePlaceholder}
                        multiline
                        rows={6}
                        variant="outlined"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<SendIcon />}
                        sx={{
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          background: designTokens.gradients.accent,
                          boxShadow: designTokens.shadows.glowSoft,
                          '&:hover': {
                            boxShadow: designTokens.shadows.glow,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {translations[language].contact.form.sendButton}
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
