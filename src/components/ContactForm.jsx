import React from 'react';
import { Box, Container, Typography, TextField, Grid } from '@mui/material';
import TechButton from './TechButton';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
  const { translations, language } = useLanguage();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0a192f',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 'bold',
            mb: 2,
            fontFamily: 'monospace',
            textAlign: 'center',
          }}
        >
          {translations[language].contact.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            color: '#8892b0',
            fontSize: '1.1rem',
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          {translations[language].contact.description}
        </Typography>

        <Box
          component="form"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            p: 4,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={translations[language].contact.form.namePlaceholder}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(0, 229, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00e5ff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00e5ff',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#8892b0',
                    '&.Mui-focused': {
                      color: '#00e5ff',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={translations[language].contact.form.emailPlaceholder}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(0, 229, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00e5ff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00e5ff',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#8892b0',
                    '&.Mui-focused': {
                      color: '#00e5ff',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={translations[language].contact.form.messagePlaceholder}
                multiline
                rows={4}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(0, 229, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00e5ff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00e5ff',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#8892b0',
                    '&.Mui-focused': {
                      color: '#00e5ff',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TechButton
                  variant="outlined"
                  sx={{
                    minWidth: '200px',
                  }}
                >
                  {translations[language].contact.form.sendButton}
                </TechButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
