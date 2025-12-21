import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Design Tokens - Professional CV Theme
const designTokens = {
  colors: {
    // Primary palette - Professional Navy/Slate
    primary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b', // Main slate
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    // Accent colors - Sophisticated Blue
    accent: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // Main professional blue
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    // Background colors - Professional dark theme
    background: {
      primary: '#0f172a', // Deep navy
      secondary: '#1e293b', // Slate gray
      tertiary: '#334155', // Medium slate
      paper: 'rgba(30, 41, 59, 0.95)', // More solid
      glass: 'rgba(30, 41, 59, 0.8)', // Subtle glassmorphism
    },
    // Text colors
    text: {
      primary: '#f8fafc',
      secondary: '#e2e8f0',
      tertiary: '#94a3b8',
      accent: '#3b82f6',
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
    glow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.15)',
    glowSoft: '0 0 15px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)',
    glowStrong: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)',
    card: '0 4px 20px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.2)',
    cardHover: '0 8px 30px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(59, 130, 246, 0.2)',
    subtle: '0 1px 3px rgba(0, 0, 0, 0.2)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    accent: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    subtle: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)',
    overlay: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.8) 100%)',
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
    fontFamily: '"Inter", "Segoe UI", "Roboto", -apple-system, sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: designTokens.colors.text.primary,
      lineHeight: 1.15,
    },
    h2: {
      fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: designTokens.colors.text.primary,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
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