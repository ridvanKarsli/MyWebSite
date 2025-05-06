import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import TechButton from './TechButton';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { translations, language } = useLanguage();

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'MongoDB',
    'SQL',
    'Git',
    'Docker',
    'AWS',
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
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                mb: 2,
                fontFamily: 'monospace',
              }}
            >
              {translations[language].about.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: '#8892b0',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              {translations[language].about.journey.content1}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: '#8892b0',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              {translations[language].about.journey.content2}
            </Typography>
            <TechButton
              variant="outlined"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              {translations[language].about.downloadResume}
            </TechButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                p: 4,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.5rem',
                  color: '#00e5ff',
                  mb: 3,
                  fontFamily: 'monospace',
                }}
              >
                {translations[language].about.timeline.skills.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                {skills.map((skill) => (
                  <Typography
                    key={skill}
                    sx={{
                      backgroundColor: 'rgba(0, 229, 255, 0.1)',
                      color: '#00e5ff',
                      px: 2,
                      py: 1,
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      fontFamily: 'monospace',
                    }}
                  >
                    {skill}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
