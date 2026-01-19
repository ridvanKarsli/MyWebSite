import React from 'react';
import { Card, CardContent, Typography, Box, Chip, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const ProjectCard = ({ project, onClick }) => {
  const { translations, language } = useLanguage();

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        background: designTokens.colors.background.glass,
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        border: `1px solid ${designTokens.colors.accent[500]}20`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${designTokens.colors.accent[500]}15 0%, transparent 100%)`,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: designTokens.shadows.cardHover,
          borderColor: `${designTokens.colors.accent[500]}40`,
          '&::before': {
            opacity: 1,
          },
        },
      }}
    >
      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
      >
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              color: designTokens.colors.text.primary,
              mb: 2,
              fontSize: { xs: '1.2rem', sm: '1.4rem' },
              fontWeight: 600,
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: designTokens.colors.text.secondary,
              mb: 3,
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            {project.description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              mb: 3,
            }}
          >
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: `${designTokens.colors.accent[500]}12`,
                  color: designTokens.colors.accent[300],
                  fontSize: '0.8rem',
                  '&:hover': {
                    backgroundColor: `${designTokens.colors.accent[500]}20`,
                  },
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'flex-end',
            }}
          >
            {project.github && (
              <Tooltip title={translations[language].projects.viewGithub}>
                <IconButton
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={translations[language].projects.viewGithub}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: designTokens.colors.text.tertiary,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: designTokens.colors.accent[500],
                      transform: 'translateY(-2px)',
                      backgroundColor: `${designTokens.colors.accent[500]}12`,
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            )}
            {project.demo && (
              <Tooltip title={translations[language].projects.viewDemo}>
                <IconButton
                  component="a"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={translations[language].projects.viewDemo}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: designTokens.colors.text.tertiary,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: designTokens.colors.accent[500],
                      transform: 'translateY(-2px)',
                      backgroundColor: `${designTokens.colors.accent[500]}12`,
                    },
                  }}
                >
                  <LaunchIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </CardContent>
      </motion.div>
    </Card>
  );
};

export default ProjectCard; 