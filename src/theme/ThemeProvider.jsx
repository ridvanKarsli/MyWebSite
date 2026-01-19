import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Design Tokens - Premium Professional Dark Theme
const designTokens = {
  colors: {
    // Primary palette - Deep Slate
    primary: {
      50: '#f8fafc',
      100: '#eef2f7',
      200: '#d7dee8',
      300: '#b5c0d1',
      400: '#8ea0b8',
      500: '#6b7d99',
      600: '#4f5f76',
      700: '#374559',
      800: '#1f2a3a',
      900: '#0b0f1a',
    },
    // Accent colors - Indigo/Violet
    accent: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    // Background colors - Professional dark theme
    background: {
      primary: '#0b0f1a',
      secondary: '#111827',
      tertiary: '#1f2937',
      paper: 'rgba(17, 24, 39, 0.95)',
      glass: 'rgba(17, 24, 39, 0.8)',
    },
    // Text colors
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      accent: '#8b5cf6',
    },
    // Status colors
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#8b5cf6',
    },
  },
  shadows: {
    glow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.15)',
    glowSoft: '0 0 12px rgba(139, 92, 246, 0.2), 0 0 24px rgba(139, 92, 246, 0.08)',
    glowStrong: '0 0 30px rgba(139, 92, 246, 0.35), 0 0 60px rgba(139, 92, 246, 0.2)',
    card: '0 10px 30px rgba(0, 0, 0, 0.45), 0 2px 8px rgba(0, 0, 0, 0.25)',
    cardHover: '0 16px 40px rgba(0, 0, 0, 0.55), 0 4px 14px rgba(139, 92, 246, 0.25)',
    subtle: '0 1px 3px rgba(0, 0, 0, 0.3)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    accent: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #6d28d9 100%)',
    background: 'radial-gradient(1200px 800px at 80% 0%, rgba(139, 92, 246, 0.15), transparent 60%), radial-gradient(900px 700px at 0% 100%, rgba(99, 102, 241, 0.12), transparent 55%), #0b0f1a',
    subtle: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, transparent 100%)',
    overlay: 'linear-gradient(180deg, transparent 0%, rgba(11, 15, 26, 0.85) 100%)',
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
          color: designTokens.colors.text.primary,
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
        '::selection': {
          background: 'rgba(139, 92, 246, 0.35)',
          color: designTokens.colors.text.primary,
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
          letterSpacing: '0.01em',
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
            background: 'rgba(17, 24, 39, 0.6)',
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
    MuiLink: {
      styleOverrides: {
        root: {
          color: designTokens.colors.text.secondary,
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            color: designTokens.colors.accent[500],
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 'clamp(16px, 4vw, 32px)',
          paddingRight: 'clamp(16px, 4vw, 32px)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: `${designTokens.colors.accent[500]}20`,
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
          background: 'rgba(11, 15, 26, 0.8)',
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