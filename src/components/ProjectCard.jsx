import React from 'react';
import { Card, CardContent, Typography, Box, Chip, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useLanguage } from '../context/LanguageContext';

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
        backgroundColor: 'rgba(10, 25, 47, 0.7)',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
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
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 30px rgba(0, 229, 255, 0.1)',
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
              fontFamily: 'monospace',
              color: '#00e5ff',
              mb: 2,
              fontSize: { xs: '1.2rem', sm: '1.4rem' },
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#8892b0',
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
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  color: '#00e5ff',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 229, 255, 0.2)',
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
            <Tooltip title={translations[language].projects.viewGithub}>
              <IconButton
                component="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translations[language].projects.viewGithub}
                onClick={(e) => e.stopPropagation()}
                sx={{
                  color: '#8892b0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#00e5ff',
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={translations[language].projects.viewDemo}>
              <IconButton
                component="a"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translations[language].projects.viewDemo}
                onClick={(e) => e.stopPropagation()}
                sx={{
                  color: '#8892b0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#00e5ff',
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  },
                }}
              >
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </CardContent>
      </motion.div>
    </Card>
  );
};

export default ProjectCard; 