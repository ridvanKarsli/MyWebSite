import React from 'react';
import { Button, styled } from '@mui/material';

const TechButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  padding: '12px 24px',
  backgroundColor: 'transparent',
  color: '#00e5ff',
  border: '2px solid #00e5ff',
  borderRadius: '4px',
  fontFamily: 'monospace',
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
    background: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.2), transparent)',
    transition: 'all 0.5s ease',
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 229, 255, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 229, 255, 0.3)',
    '&::before': {
      left: '100%',
    },
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  '&.Mui-disabled': {
    borderColor: 'rgba(0, 229, 255, 0.3)',
    color: 'rgba(0, 229, 255, 0.3)',
  },
}));

export default TechButton; 