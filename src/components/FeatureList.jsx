import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';
import { useLanguage } from '../context/LanguageContext';

const FeatureList = () => {
  const { translations, language } = useLanguage();

  const features = translations[language].about.features.items.map((feature, index) => ({
    icon: [<CodeIcon />, <DevicesIcon />, <BrushIcon />, <SpeedIcon />][index],
    title: feature.title,
    description: feature.description,
  }));

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
      <Container maxWidth="lg">
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
          {translations[language].about.features.title}
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
          {translations[language].about.description}
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <Box sx={{ mb: 2, color: '#00e5ff' }}>{feature.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#00e5ff',
                    mb: 2,
                    fontFamily: 'monospace',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#8892b0',
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureList;
