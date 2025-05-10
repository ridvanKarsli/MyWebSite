import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E2E8F0',
    },
    secondary: {
      main: '#1E293B',
    },
    background: {
      default: '#0A192F',
      paper: '#1E293B',
    },
    text: {
      primary: '#E2E8F0',
      secondary: '#94A3B8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: '#E2E8F0',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#E2E8F0',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#E2E8F0',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#E2E8F0',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#E2E8F0',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#E2E8F0',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#E2E8F0',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#94A3B8',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 24px',
          fontWeight: 500,
          color: '#E2E8F0',
        },
        contained: {
          backgroundColor: '#1E293B',
          '&:hover': {
            backgroundColor: '#2D3A4F',
          },
        },
        outlined: {
          borderColor: '#1E293B',
          '&:hover': {
            borderColor: '#2D3A4F',
            backgroundColor: 'rgba(30, 41, 59, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E293B',
          borderRadius: 12,
          border: '1px solid rgba(226, 232, 240, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E293B',
          borderRadius: 12,
          border: '1px solid rgba(226, 232, 240, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            color: '#E2E8F0',
            '& fieldset': {
              borderColor: 'rgba(226, 232, 240, 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(226, 232, 240, 0.2)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#E2E8F0',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#94A3B8',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: 'rgba(226, 232, 240, 0.1)',
          border: '1px solid rgba(226, 232, 240, 0.1)',
          color: '#E2E8F0',
          '&:hover': {
            backgroundColor: 'rgba(226, 232, 240, 0.15)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#E2E8F0',
          '&:hover': {
            backgroundColor: 'rgba(226, 232, 240, 0.1)',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1E293B',
          border: '1px solid rgba(226, 232, 240, 0.1)',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiAlert-root': {
            backgroundColor: '#1E293B',
            border: '1px solid rgba(226, 232, 240, 0.1)',
            color: '#E2E8F0',
          },
        },
      },
    },
  },
});

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider; 