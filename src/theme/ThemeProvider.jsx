import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Design Tokens - Modern Color Palette
const designTokens = {
  colors: {
    // Primary palette - Cyber blue theme
    primary: {
      50: '#e6f7ff',
      100: '#bae7ff',
      200: '#91d5ff',
      300: '#69c0ff',
      400: '#40a9ff',
      500: '#1890ff', // Main blue
      600: '#096dd9',
      700: '#0050b3',
      800: '#003a8c',
      900: '#002766',
    },
    // Accent colors - Neon cyan
    accent: {
      50: '#e6fffa',
      100: '#b3ffec',
      200: '#80ffdb',
      300: '#4dffca',
      400: '#1affb8',
      500: '#00e5ff', // Main cyan
      600: '#00b8d4',
      700: '#008ba3',
      800: '#005e72',
      900: '#003041',
    },
    // Background colors
    background: {
      primary: '#0a0f23', // Deeper navy
      secondary: '#111827', // Dark gray
      tertiary: '#1e293b', // Lighter dark
      paper: 'rgba(30, 41, 59, 0.8)', // Semi-transparent
      glass: 'rgba(15, 23, 42, 0.7)', // Glassmorphism
    },
    // Text colors
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      tertiary: '#64748b',
      accent: '#00e5ff',
    },
    // Status colors
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },
  shadows: {
    glow: '0 0 20px rgba(0, 229, 255, 0.3)',
    glowSoft: '0 0 10px rgba(0, 229, 255, 0.2)',
    card: '0 4px 20px rgba(0, 0, 0, 0.15)',
    cardHover: '0 8px 40px rgba(0, 0, 0, 0.25)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #1890ff 0%, #00e5ff 100%)',
    accent: 'linear-gradient(135deg, #00e5ff 0%, #1affb8 100%)',
    background: 'linear-gradient(135deg, #0a0f23 0%, #111827 100%)',
  },
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: designTokens.colors.accent[500],
      light: designTokens.colors.accent[400],
      dark: designTokens.colors.accent[600],
      contrastText: designTokens.colors.background.primary,
    },
    secondary: {
      main: designTokens.colors.primary[500],
      light: designTokens.colors.primary[400],
      dark: designTokens.colors.primary[600],
      contrastText: designTokens.colors.text.primary,
    },
    background: {
      default: designTokens.colors.background.primary,
      paper: designTokens.colors.background.paper,
    },
    text: {
      primary: designTokens.colors.text.primary,
      secondary: designTokens.colors.text.secondary,
    },
    success: {
      main: designTokens.colors.status.success,
    },
    warning: {
      main: designTokens.colors.status.warning,
    },
    error: {
      main: designTokens.colors.status.error,
    },
    info: {
      main: designTokens.colors.status.info,
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", system-ui, -apple-system, sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: designTokens.colors.text.primary,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: designTokens.colors.text.primary,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
      fontWeight: 600,
      color: designTokens.colors.text.primary,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
      fontWeight: 600,
      color: designTokens.colors.text.primary,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
      fontWeight: 500,
      color: designTokens.colors.text.primary,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
      fontWeight: 500,
      color: designTokens.colors.text.primary,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: designTokens.colors.text.secondary,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: designTokens.colors.text.tertiary,
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          background: designTokens.gradients.background,
          minHeight: '100vh',
        },
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: `${designTokens.colors.accent[500]} transparent`,
        },
        '*::-webkit-scrollbar': {
          width: '8px',
        },
        '*::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '*::-webkit-scrollbar-thumb': {
          background: designTokens.colors.accent[500],
          borderRadius: '4px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '12px 24px',
          fontWeight: 500,
          fontSize: '1rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        contained: {
          background: designTokens.gradients.accent,
          color: designTokens.colors.background.primary,
          boxShadow: designTokens.shadows.glowSoft,
          '&:hover': {
            boxShadow: designTokens.shadows.glow,
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: designTokens.colors.accent[500],
          color: designTokens.colors.accent[500],
          background: 'transparent',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            borderColor: designTokens.colors.accent[400],
            backgroundColor: `${designTokens.colors.accent[500]}15`,
            transform: 'translateY(-2px)',
            boxShadow: designTokens.shadows.glowSoft,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: designTokens.colors.background.glass,
          backdropFilter: 'blur(20px)',
          borderRadius: 16,
          border: `1px solid ${designTokens.colors.accent[500]}20`,
          boxShadow: designTokens.shadows.card,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: designTokens.shadows.cardHover,
            borderColor: `${designTokens.colors.accent[500]}40`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: designTokens.colors.background.glass,
          backdropFilter: 'blur(20px)',
          borderRadius: 16,
          border: `1px solid ${designTokens.colors.accent[500]}20`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            color: designTokens.colors.text.primary,
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderColor: `${designTokens.colors.accent[500]}30`,
            },
            '&:hover fieldset': {
              borderColor: `${designTokens.colors.accent[500]}50`,
            },
            '&.Mui-focused fieldset': {
              borderColor: designTokens.colors.accent[500],
              boxShadow: designTokens.shadows.glowSoft,
            },
          },
          '& .MuiInputLabel-root': {
            color: designTokens.colors.text.tertiary,
            '&.Mui-focused': {
              color: designTokens.colors.accent[500],
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: designTokens.colors.background.glass,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${designTokens.colors.accent[500]}30`,
          color: designTokens.colors.text.primary,
          fontSize: '0.875rem',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            background: `${designTokens.colors.accent[500]}20`,
            borderColor: `${designTokens.colors.accent[500]}50`,
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: designTokens.colors.text.secondary,
          borderRadius: 12,
          transition: 'all 0.3s ease',
          '&:hover': {
            color: designTokens.colors.accent[500],
            backgroundColor: `${designTokens.colors.accent[500]}15`,
            transform: 'translateY(-2px)',
            boxShadow: designTokens.shadows.glowSoft,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: designTokens.colors.background.glass,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${designTokens.colors.accent[500]}30`,
          borderRadius: 20,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 15, 35, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${designTokens.colors.accent[500]}20`,
        },
      },
    },
  },
});

// Export design tokens for use in components
export { designTokens };

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider; 