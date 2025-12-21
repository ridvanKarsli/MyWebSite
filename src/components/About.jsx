import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { translations, language } = useLanguage();

  // Minimal professional animations
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
      },
    },
  };

  const timelineItems = [
    {
      icon: <SchoolIcon />,
      title: translations[language].about.timeline.education.title,
      content: translations[language].about.timeline.education.content,
      year: '2018-2022',
      color: designTokens.colors.accent[500],
    },
    {
      icon: <WorkIcon />,
      title: translations[language].about.timeline.experience.title,
      content: translations[language].about.timeline.experience.content,
      year: '2022-Present',
      color: designTokens.colors.accent[600],
    },
    {
      icon: <CodeIcon />,
      title: translations[language].about.timeline.skills.title,
      content: translations[language].about.timeline.skills.content,
      year: 'Ongoing',
      color: designTokens.colors.accent[400],
    },
  ];

  const skills = {
    backend: ['Java', 'Spring Boot', 'REST API', 'Microservices', 'PostgreSQL', 'MySQL'],
    frontend: ['React', 'JavaScript', 'HTML/CSS', 'Material-UI'],
    mobile: ['Swift', 'iOS Development'],
    tools: ['Git', 'Docker', 'Jenkins', 'Postman'],
  };

  return (
    <Box
      component="section"
      id="about"
      sx={{
        background: designTokens.gradients.background,
        color: 'white',
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid background */}
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
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem' },
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              color: designTokens.colors.text.primary,
            }}
          >
            {translations[language].about.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: designTokens.colors.text.secondary,
              mb: 8,
              textAlign: 'center',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.7,
            }}
          >
            {translations[language].about.description}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Professional Journey */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  background: designTokens.colors.background.glass,
                  backdropFilter: 'blur(20px)',
                  p: 4,
                  borderRadius: '20px',
                  height: '100%',
                  border: `1px solid ${designTokens.colors.accent[500]}30`,
                  boxShadow: designTokens.shadows.card,
                  position: 'relative',
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
                <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: '12px',
                      background: designTokens.gradients.accent,
                      display: 'flex',
                    }}
                  >
                    <EmojiEventsIcon sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: designTokens.colors.text.primary,
                      fontWeight: 700,
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                    }}
                  >
                    {translations[language].about.journey.title}
                  </Typography>
                </Stack>

                <Typography
                  variant="body1"
                  sx={{
                    color: designTokens.colors.text.secondary,
                    mb: 2,
                    lineHeight: 1.8,
                  }}
                >
                  {translations[language].about.journey.content1}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: designTokens.colors.text.secondary,
                    lineHeight: 1.8,
                  }}
                >
                  {translations[language].about.journey.content2}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Timeline */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  background: designTokens.colors.background.glass,
                  backdropFilter: 'blur(20px)',
                  p: 4,
                  borderRadius: '20px',
                  height: '100%',
                  border: `1px solid ${designTokens.colors.accent[500]}30`,
                  boxShadow: designTokens.shadows.card,
                  position: 'relative',
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
                <Typography
                  variant="h4"
                  sx={{
                    color: designTokens.colors.text.primary,
                    mb: 3,
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                  }}
                >
                  {translations[language].about.timeline.title}
                </Typography>
                <Box sx={{ position: 'relative', pl: 2 }}>
                  {timelineItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 3,
                          mb: index !== timelineItems.length - 1 ? 4 : 0,
                          position: 'relative',
                        }}
                      >
                        {/* Timeline Line & Icon */}
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: 50,
                              height: 50,
                              borderRadius: '12px',
                              background: item.color,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '1.5rem',
                              boxShadow: `0 0 20px ${item.color}40`,
                              zIndex: 2,
                            }}
                          >
                            {item.icon}
                          </Box>
                          {index !== timelineItems.length - 1 && (
                            <Box
                              sx={{
                                width: '2px',
                                flex: 1,
                                minHeight: '60px',
                                background: `linear-gradient(180deg, ${item.color}60, ${designTokens.colors.accent[500]}20)`,
                                mt: 1,
                              }}
                            />
                          )}
                        </Box>

                        {/* Content */}
                        <Box flex={1} sx={{ pb: 2 }}>
                          <Stack direction="row" alignItems="center" spacing={1.5} mb={1}>
                            <Typography
                              variant="h6"
                              sx={{
                                color: designTokens.colors.text.primary,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Chip
                              label={item.year}
                              size="small"
                              sx={{
                                height: 24,
                                backgroundColor: `${item.color}20`,
                                color: item.color,
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                border: `1px solid ${item.color}40`,
                              }}
                            />
                          </Stack>
                          <Typography
                            variant="body2"
                            sx={{
                              color: designTokens.colors.text.secondary,
                              lineHeight: 1.8,
                              whiteSpace: 'pre-line',
                              fontSize: '0.95rem',
                            }}
                          >
                            {item.content}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: designTokens.colors.text.primary,
                mb: 4,
                fontWeight: 700,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2rem' },
              }}
            >
              {translations[language].common.technicalSkills}
            </Typography>
            <Grid container spacing={3}>
              {Object.entries(skills).map(([category, skillList]) => (
                <Grid item xs={12} sm={6} md={3} key={category}>
                  <Paper
                    sx={{
                      p: 3,
                      background: designTokens.colors.background.glass,
                      backdropFilter: 'blur(20px)',
                      borderRadius: '16px',
                      border: `1px solid ${designTokens.colors.accent[500]}30`,
                      height: '100%',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: `${designTokens.colors.accent[500]}60`,
                        transform: 'translateY(-4px)',
                        boxShadow: designTokens.shadows.cardHover,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: designTokens.colors.accent[500],
                        mb: 2,
                        fontWeight: 600,
                        textTransform: 'capitalize',
                      }}
                    >
                      {translations[language].skillCategories[category] || category}
                    </Typography>
                    <Stack spacing={1}>
                      {skillList.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: `${designTokens.colors.accent[500]}15`,
                            color: designTokens.colors.text.primary,
                            fontWeight: 500,
                            justifyContent: 'flex-start',
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
