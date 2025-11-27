import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Grid,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Line } from 'react-chartjs-2';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';

const ProjectDialog = ({ project, onClose, chartOptions, chartData }) => {
  const { translations, language } = useLanguage();
  if (!project) return null;

  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: designTokens.colors.background.glass,
          backdropFilter: 'blur(20px)',
          color: 'white',
          borderRadius: '24px',
          border: `1px solid ${designTokens.colors.accent[500]}30`,
          boxShadow: designTokens.shadows.cardHover,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            color: '#00e5ff',
            fontFamily: 'monospace',
          }}
        >
          {project.title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: '#8892b0',
            '&:hover': {
              color: '#00e5ff',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%',
                overflow: 'hidden',
                borderRadius: '8px',
                mb: 3,
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: '#8892b0',
                mb: 3,
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
                <Typography
                  key={tech}
                  sx={{
                    backgroundColor: `${designTokens.colors.accent[500]}15`,
                    color: designTokens.colors.accent[500],
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    border: `1px solid ${designTokens.colors.accent[500]}30`,
                  }}
                >
                  {tech}
                </Typography>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              {project.github && (
                <Button
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  sx={{
                    color: designTokens.colors.accent[500],
                    borderColor: designTokens.colors.accent[500],
                    borderWidth: '2px',
                    '&:hover': {
                      borderColor: designTokens.colors.accent[400],
                      backgroundColor: `${designTokens.colors.accent[500]}15`,
                      boxShadow: designTokens.shadows.glowSoft,
                    },
                  }}
                >
                  {translations[language].projects.viewGithub}
                </Button>
              )}
              {project.demo && (
                <Button
                  component="a"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<LaunchIcon />}
                  sx={{
                    background: designTokens.gradients.accent,
                    boxShadow: designTokens.shadows.glowSoft,
                    '&:hover': {
                      boxShadow: designTokens.shadows.glow,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {translations[language].projects.viewDemo}
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                p: 3,
                height: '100%',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#00e5ff',
                  fontFamily: 'monospace',
                  mb: 3,
                }}
              >
                Project Statistics
              </Typography>
              <Box sx={{ mb: 3 }}>
                {Object.entries(project.stats)
                  .filter(([key]) => key !== 'growth')
                  .map(([key, value]) => (
                    <Typography
                      key={key}
                      variant="body2"
                      sx={{
                        color: '#8892b0',
                        fontFamily: 'monospace',
                        mb: 1,
                      }}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                    </Typography>
                  ))}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: '#00e5ff',
                  fontFamily: 'monospace',
                  mb: 2,
                }}
              >
                Growth Over Time
              </Typography>
              <Box sx={{ height: '200px' }}>
                <Line options={chartOptions} data={chartData(project.stats.growth)} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog; 