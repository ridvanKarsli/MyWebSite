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
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

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

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: '#0a192f',
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              mb: 2,
              fontFamily: 'monospace',
              textAlign: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #00e5ff, transparent)',
              },
            }}
          >
            {translations[language].contact.title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#8892b0',
              fontSize: { xs: '1.1rem', md: '1.2rem' },
            }}
          >
            {translations[language].contact.description}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  backgroundColor: 'rgba(10, 25, 47, 0.7)',
                  p: 4,
                  borderRadius: '8px',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'monospace',
                    color: '#00e5ff',
                    mb: 3,
                  }}
                >
                  {translations[language].contact.form.title}
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label={translations[language].contact.form.namePlaceholder}
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00e5ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00e5ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label={translations[language].contact.form.emailPlaceholder}
                    variant="outlined"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00e5ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00e5ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
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
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00e5ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00e5ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#00e5ff',
                      color: '#0a192f',
                      '&:hover': {
                        backgroundColor: '#00b8d4',
                      },
                      fontFamily: 'monospace',
                      fontSize: '1rem',
                      py: 1.5,
                    }}
                  >
                    {translations[language].contact.form.sendButton}
                  </Button>
                </form>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box
                sx={{
                  backgroundColor: 'rgba(10, 25, 47, 0.7)',
                  p: 4,
                  borderRadius: '8px',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'monospace',
                    color: '#00e5ff',
                    mb: 3,
                  }}
                >
                  {translations[language].contact.contactInfo.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: 'rgba(0, 229, 255, 0.1)',
                            borderRadius: '50%',
                            p: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#00e5ff',
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontFamily: 'monospace',
                              color: '#00e5ff',
                              mb: 0.5,
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Link
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: '#8892b0',
                              textDecoration: 'none',
                              '&:hover': {
                                color: '#00e5ff',
                              },
                            }}
                          >
                            {info.content}
                          </Link>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={!!status.message}
        autoHideDuration={6000}
        onClose={() => setStatus({ type: '', message: '' })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setStatus({ type: '', message: '' })}
          severity={status.type}
          sx={{
            width: '100%',
            backgroundColor: status.type === 'success' ? '#00e5ff' : '#f44336',
            color: '#0a192f',
          }}
        >
          {status.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 