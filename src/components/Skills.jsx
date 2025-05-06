import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { translations, language } = useLanguage();

  const skillCategories = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: '#00e5ff' }} />,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Material-UI', level: 85 },
        { name: 'TailwindCSS', level: 80 },
      ],
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40, color: '#00e5ff' }} />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 70 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40, color: '#00e5ff' }} />,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Wireframing', level: 85 },
        { name: 'Prototyping', level: 80 },
        { name: 'User Research', level: 75 },
      ],
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: '#00e5ff' }} />,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 70 },
        { name: 'Mobile UI', level: 80 },
        { name: 'App Store', level: 70 },
        { name: 'Play Store', level: 70 },
        { name: 'PWA', level: 80 },
      ],
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#00e5ff' }} />,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'AWS', level: 65 },
        { name: 'Linux', level: 70 },
        { name: 'NPM', level: 85 },
      ],
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#00e5ff' }} />,
      title: 'Performance & Testing',
      skills: [
        { name: 'Jest', level: 80 },
        { name: 'React Testing', level: 75 },
        { name: 'Performance', level: 80 },
        { name: 'SEO', level: 75 },
        { name: 'Analytics', level: 70 },
        { name: 'Debugging', level: 85 },
      ],
    },
  ];

  const skills = [
    {
      category: translations[language].about.timeline.skills.frontend.title,
      items: translations[language].about.timeline.skills.frontend.items,
    },
    {
      category: translations[language].about.timeline.skills.backend.title,
      items: translations[language].about.timeline.skills.backend.items,
    },
    {
      category: translations[language].about.timeline.skills.tools.title,
      items: translations[language].about.timeline.skills.tools.items,
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
          {translations[language].about.timeline.skills.title}
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
          {translations[language].about.timeline.skills.subtitle}
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skillGroup, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                  <CodeIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#00e5ff',
                    mb: 3,
                    fontFamily: 'monospace',
                  }}
                >
                  {skillGroup.category}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: 'center',
                  }}
                >
                  {skillGroup.items.map((skill) => (
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
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
