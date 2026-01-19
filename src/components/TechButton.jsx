import React from 'react';
import { Button, styled } from '@mui/material';

const TechButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  padding: '12px 24px',
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '10px',
  fontSize: '1rem',
  textTransform: 'none',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)',
    transition: 'all 0.5s ease',
  },
  '&:hover': {
    backgroundColor: 'rgba(139, 92, 246, 0.12)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
    '&::before': {
      left: '100%',
    },
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  '&.Mui-disabled': {
    borderColor: 'rgba(139, 92, 246, 0.3)',
    color: 'rgba(139, 92, 246, 0.3)',
  },
}));

export default TechButton; 