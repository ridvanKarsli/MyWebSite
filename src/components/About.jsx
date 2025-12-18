import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { translations, language } = useLanguage();

  // Optimized animation variants
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Removed floating animation for better performance

  const timelineItems = [
    {
      icon: <SchoolIcon />,
      title: translations[language].about.timeline.education.title,
      content: translations[language].about.timeline.education.content,
      year: '2018-2022',
    },
    {
      icon: <WorkIcon />,
      title: translations[language].about.timeline.experience.title,
      content: translations[language].about.timeline.experience.content,
      year: '2022-Present',
    },
    {
      icon: <CodeIcon />,
      title: translations[language].about.timeline.skills.title,
      content: translations[language].about.timeline.skills.content,
      year: 'Ongoing',
    },
  ];

  const features = translations[language].about.features.items.map((feature, index) => ({
    ...feature,
    icon: index === 0 ? <WorkIcon /> : 
          index === 1 ? <PhoneIcon /> : 
          index === 2 ? <BrushIcon /> : 
          <StorageIcon />
  }));

  return (
    <Box
      component="section"
      id="about"
      sx={{
        backgroundColor: '#0a192f',
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 50%)',
          animation: 'pulse 8s ease-in-out infinite',
        },
        '@keyframes pulse': {
          '0%': { opacity: 0.3 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 0.3 },
        },
      }}
    >
      {/* Optimized background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              backgroundColor: '#00e5ff',
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              y: [0, -80],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </Box>

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
            {translations[language].about.title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: '#8892b0',
              mb: 6,
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            {translations[language].about.description}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: 'rgba(10, 25, 47, 0.7)',
                    p: 4,
                    borderRadius: '8px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <div>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontFamily: 'monospace',
                        color: '#00e5ff',
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <StarIcon /> {translations[language].about.journey.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#8892b0',
                        mb: 3,
                        lineHeight: 1.8,
                      }}
                    >
                      {translations[language].about.journey.content1}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#8892b0',
                        lineHeight: 1.8,
                      }}
                    >
                      {translations[language].about.journey.content2}
                    </Typography>
                  </div>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: 'rgba(10, 25, 47, 0.7)',
                    p: 4,
                    borderRadius: '8px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <div>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontFamily: 'monospace',
                        color: '#00e5ff',
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <CodeIcon /> {translations[language].about.timeline.title}
                    </Typography>
                    <Box sx={{ position: 'relative' }}>
                      {timelineItems.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 3,
                              position: 'relative',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: '12px',
                                top: '24px',
                                bottom: '-12px',
                                width: '2px',
                                backgroundColor: 'rgba(0, 229, 255, 0.2)',
                                display: index === timelineItems.length - 1 ? 'none' : 'block',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: 'rgba(0, 229, 255, 0.1)',
                                borderRadius: '50%',
                                p: 1,
                                mr: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#00e5ff',
                              }}
                            >
                              {item.icon}
                            </Box>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontFamily: 'monospace',
                                  color: '#00e5ff',
                                  fontSize: '1rem',
                                  mb: 0.5,
                                }}
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: '#8892b0',
                                  fontSize: '0.9rem',
                                  mb: 0.5,
                                }}
                              >
                                {item.content}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: '#00e5ff',
                                  fontFamily: 'monospace',
                                  fontSize: '0.8rem',
                                }}
                              >
                                {item.year}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </div>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ mt: 4 }}
        >
          <Grid container spacing={4}>
            {features.map((feature, index) => (
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
                    {feature.icon}
                  </Box>
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 