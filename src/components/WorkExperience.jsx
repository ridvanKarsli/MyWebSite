import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const WorkExperience = () => {
  const { translations, language } = useLanguage();

  const experiences = [
    {
      title: translations[language].workExperience.yalin.jobTitle,
      company: translations[language].workExperience.yalin.company,
      location: translations[language].workExperience.yalin.location,
      period: translations[language].workExperience.yalin.duration,
      type: translations[language].workExperience.yalin.type,
      description: translations[language].workExperience.yalin.description,
      technologies: ['Java', 'PostgreSQL', 'Backend Development', 'Real-time Systems', 'Data Processing', 'Control Algorithms'],
      achievements: translations[language].workExperience.yalin.achievements,
    },
    {
      title: translations[language].workExperience.emn.jobTitle,
      company: translations[language].workExperience.emn.company,
      location: translations[language].workExperience.emn.location,
      period: translations[language].workExperience.emn.duration,
      type: translations[language].workExperience.emn.type,
      description: translations[language].workExperience.emn.description,
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Kotlin', 'Swift', 'REST API', 'AI Integration'],
      achievements: translations[language].workExperience.emn.achievements,
    },
    {
      title: translations[language].workExperience.kalem.jobTitle,
      company: translations[language].workExperience.kalem.company,
      location: translations[language].workExperience.kalem.location,
      period: translations[language].workExperience.kalem.duration,
      type: translations[language].workExperience.kalem.type,
      description: translations[language].workExperience.kalem.description,
      technologies: ['Java', 'React', 'PostgreSQL', 'REST API', 'Web Development', 'Database Design'],
      achievements: translations[language].workExperience.kalem.achievements,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        background: designTokens.gradients.background,
        color: 'white',
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mb={2}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: '12px',
                background: designTokens.gradients.accent,
                display: 'flex',
              }}
            >
              <WorkIcon sx={{ fontSize: 28, color: 'white' }} />
            </Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: designTokens.colors.text.primary,
              }}
            >
              {translations[language].workExperience.title}
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              mb: 8,
              color: designTokens.colors.text.secondary,
              fontSize: { xs: '1rem', md: '1.125rem' },
              textAlign: 'center',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            {translations[language].workExperience.subtitle}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    sx={{
                      background: designTokens.colors.background.glass,
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      p: 4,
                      border: `1px solid ${designTokens.colors.accent[500]}30`,
                      boxShadow: designTokens.shadows.card,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: designTokens.gradients.accent,
                      },
                      '&:hover': {
                        borderColor: `${designTokens.colors.accent[500]}60`,
                        transform: 'translateY(-4px)',
                        boxShadow: designTokens.shadows.cardHover,
                      },
                    }}
                  >
                    <Grid container spacing={3}>
                      {/* Left: Main Info */}
                      <Grid item xs={12} md={8}>
                        <Stack direction="row" alignItems="flex-start" spacing={2} mb={2}>
                          <Box
                            sx={{
                              minWidth: 50,
                              height: 50,
                              borderRadius: '12px',
                              background: designTokens.gradients.accent,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <WorkIcon sx={{ color: 'white', fontSize: 28 }} />
                          </Box>
                          <Box flex={1}>
                            <Typography
                              variant="h4"
                              sx={{
                                color: designTokens.colors.text.primary,
                                fontWeight: 700,
                                mb: 0.5,
                                fontSize: { xs: '1.5rem', md: '1.75rem' },
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                color: designTokens.colors.accent[500],
                                fontWeight: 600,
                                mb: 1,
                              }}
                            >
                              {exp.company}
                            </Typography>
                            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                              <Chip
                                icon={<CalendarTodayIcon />}
                                label={exp.period}
                                size="small"
                                sx={{
                                  backgroundColor: `${designTokens.colors.accent[500]}15`,
                                  color: designTokens.colors.text.primary,
                                  fontWeight: 500,
                                  '& .MuiChip-icon': {
                                    color: designTokens.colors.accent[500],
                                  },
                                }}
                              />
                              <Chip
                                icon={<LocationOnIcon />}
                                label={exp.location}
                                size="small"
                                sx={{
                                  backgroundColor: `${designTokens.colors.accent[500]}15`,
                                  color: designTokens.colors.text.primary,
                                  fontWeight: 500,
                                  '& .MuiChip-icon': {
                                    color: designTokens.colors.accent[500],
                                  },
                                }}
                              />
                              <Chip
                                label={exp.type}
                                size="small"
                                sx={{
                                  backgroundColor: `${designTokens.colors.accent[500]}20`,
                                  color: designTokens.colors.accent[500],
                                  fontWeight: 600,
                                  border: `1px solid ${designTokens.colors.accent[500]}40`,
                                }}
                              />
                            </Stack>
                          </Box>
                        </Stack>

                        <Typography
                          variant="body1"
                          sx={{
                            color: designTokens.colors.text.secondary,
                            mb: 3,
                            lineHeight: 1.8,
                          }}
                        >
                          {exp.description}
                        </Typography>

                        <Divider sx={{ borderColor: `${designTokens.colors.accent[500]}20`, mb: 3 }} />

                        <Box>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: designTokens.colors.text.primary,
                              fontWeight: 600,
                              mb: 2,
                              textTransform: 'uppercase',
                              fontSize: '0.85rem',
                              letterSpacing: '0.5px',
                            }}
                          >
                            {translations[language].workExperience.keyAchievements}
                          </Typography>
                          <Stack spacing={1.5}>
                            {exp.achievements.map((achievement, idx) => (
                              <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                                <Box
                                  sx={{
                                    minWidth: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: designTokens.colors.accent[500],
                                    mt: 1,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: designTokens.colors.text.secondary,
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {achievement}
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </Box>
                      </Grid>

                      {/* Right: Technologies */}
                      <Grid item xs={12} md={4}>
                        <Paper
                          sx={{
                            p: 3,
                            background: `${designTokens.colors.accent[500]}08`,
                            borderRadius: '16px',
                            border: `1px solid ${designTokens.colors.accent[500]}20`,
                            height: '100%',
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: designTokens.colors.text.primary,
                              fontWeight: 600,
                              mb: 2,
                              textTransform: 'uppercase',
                              fontSize: '0.85rem',
                              letterSpacing: '0.5px',
                            }}
                          >
                            {translations[language].workExperience.technologiesUsed}
                          </Typography>
                          <Stack spacing={1}>
                            {exp.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: `${designTokens.colors.accent[500]}20`,
                                  color: designTokens.colors.accent[500],
                                  fontWeight: 500,
                                  border: `1px solid ${designTokens.colors.accent[500]}30`,
                                  justifyContent: 'flex-start',
                                  '&:hover': {
                                    backgroundColor: `${designTokens.colors.accent[500]}30`,
                                  },
                                }}
                              />
                            ))}
                          </Stack>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WorkExperience;

