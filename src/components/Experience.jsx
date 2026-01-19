import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const Experience = () => {
  const { translations, language } = useLanguage();

  const experience = [
    {
      title: translations[language].about.timeline.experience.title1,
      company: translations[language].about.timeline.experience.company1,
      period: '2022 - Present',
      description: translations[language].about.timeline.experience.description1,
    },
    {
      title: translations[language].about.timeline.experience.title2,
      company: translations[language].about.timeline.experience.company2,
      period: '2021 - 2022',
      description: translations[language].about.timeline.experience.description2,
    },
  ];

  return (
    <Box
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
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(${designTokens.colors.accent[500]}05 1px, transparent 1px), linear-gradient(90deg, ${designTokens.colors.accent[500]}05 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 2,
            textAlign: 'center',
            color: designTokens.colors.text.primary,
          }}
        >
          {translations[language].about.timeline.experience.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            color: designTokens.colors.text.secondary,
            fontSize: '1.1rem',
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          {translations[language].about.timeline.experience.subtitle}
        </Typography>

        <Grid container spacing={4}>
          {experience.map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  background: designTokens.colors.background.glass,
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  border: `1px solid ${designTokens.colors.accent[500]}30`,
                  boxShadow: designTokens.shadows.card,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 2, color: designTokens.colors.accent[500] }}
                >
                  <WorkIcon sx={{ fontSize: 32 }} />
                </Stack>
                <Typography
                  variant="h5"
                  sx={{
                    color: designTokens.colors.accent[500],
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  {exp.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: designTokens.colors.text.secondary,
                    mb: 1,
                  }}
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: designTokens.colors.text.tertiary,
                    mb: 2,
                  }}
                >
                  {exp.period}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: designTokens.colors.text.secondary,
                  }}
                >
                  {exp.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
