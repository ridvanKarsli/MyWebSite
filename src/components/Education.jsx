import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { translations, language } = useLanguage();

  const education = [
    {
      degree: translations[language].about.timeline.education.degree1,
      school: translations[language].about.timeline.education.school1,
      period: '2022 - Present',
      description: translations[language].about.timeline.education.description1,
    },
    {
      degree: translations[language].about.timeline.education.degree2,
      school: translations[language].about.timeline.education.school2,
      period: '2019 - 2022',
      description: translations[language].about.timeline.education.description2,
    },
  ];

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
          {translations[language].about.timeline.education.title}
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
          {translations[language].about.timeline.education.subtitle}
        </Typography>

        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                <Box sx={{ mb: 2, color: '#00e5ff' }}>
                  <SchoolIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#00e5ff',
                    mb: 2,
                    fontFamily: 'monospace',
                  }}
                >
                  {edu.degree}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#8892b0',
                    mb: 1,
                    fontFamily: 'monospace',
                  }}
                >
                  {edu.school}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#8892b0',
                    mb: 2,
                    fontFamily: 'monospace',
                  }}
                >
                  {edu.period}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#8892b0',
                  }}
                >
                  {edu.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
