import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const Skills = () => {
  const { translations, language } = useLanguage();

  const skillsContent = translations[language].about.timeline.skills.content || '';
  const skillList = skillsContent
    .split(',')
    .map((skill) => skill.trim())
    .filter(Boolean);

  return (
    <Box
      component="section"
      id="skills"
      sx={{
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
        <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: designTokens.colors.text.primary,
                }}
              >
                {translations[language].about.timeline.skills.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: designTokens.colors.text.secondary,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.7,
                }}
              >
                {translations[language].about.skillsSection?.subtitle || translations[language].about.description}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper
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
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {skillList.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      background: `${designTokens.colors.accent[500]}10`,
                      border: `1px solid ${designTokens.colors.accent[500]}30`,
                      color: designTokens.colors.text.primary,
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
