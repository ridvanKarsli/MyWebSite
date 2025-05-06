import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Line } from 'react-chartjs-2';

const ProjectDialog = ({ project, onClose, chartOptions, chartData }) => {
  if (!project) return null;

  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#0a192f',
          color: 'white',
          borderRadius: '8px',
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
                    backgroundColor: 'rgba(0, 229, 255, 0.1)',
                    color: '#00e5ff',
                    px: 1,
                    py: 0.5,
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontFamily: 'monospace',
                  }}
                >
                  {tech}
                </Typography>
              ))}
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