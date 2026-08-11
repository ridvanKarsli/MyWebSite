import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Design Tokens - Premium Professional Dark Theme
// Brand palette: Deep Navy (base) + Electric Blue (primary accent) + Teal (secondary accent)
const designTokens = {
  colors: {
    // Primary palette - Deep Navy / Slate
    primary: {
      50: '#f8fafc',
      100: '#eef2f7',
      200: '#d7dee8',
      300: '#b5c0d1',
      400: '#8ea0b8',
      500: '#6b7d99',
      600: '#4f5f76',
      700: '#374559',
      800: '#1a2332',
      900: '#0a0e17',
    },
    // Accent colors - Electric Blue (primary brand color)
    accent: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    // Secondary accent - Teal (brand highlight color)
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    // Background colors - Professional dark navy theme
    background: {
      primary: '#0a0e17',
      secondary: '#10151f',
      tertiary: '#1a2332',
      paper: 'rgba(16, 21, 31, 0.97)',
      glass: 'rgba(16, 21, 31, 0.96)',
    },
    // Text colors
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      accent: '#3b82f6',
    },
    // Status colors
    status: {
      success: '#14b8a6',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },
  // Neutral, restrained shadows — no colored glow, corporate elevation only
  shadows: {
    glow: '0 6px 16px rgba(0, 0, 0, 0.3)',
    glowSoft: '0 3px 10px rgba(0, 0, 0, 0.22)',
    glowStrong: '0 10px 24px rgba(0, 0, 0, 0.35)',
    card: '0 2px 10px rgba(0, 0, 0, 0.3)',
    cardHover: '0 6px 18px rgba(0, 0, 0, 0.35)',
    subtle: '0 1px 3px rgba(0, 0, 0, 0.3)',
  },
  // Flat, restrained fills — brand color used as a solid accent, not a decorative rainbow gradient
  gradients: {
    primary: '#3b82f6',
    accent: '#3b82f6',
    background: '#0a0e17',
    subtle: 'rgba(59, 130, 246, 0.06)',
    overlay: 'linear-gradient(180deg, transparent 0%, rgba(10, 14, 23, 0.85) 100%)',
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
          background: 'rgba(59, 130, 246, 0.35)',
          color: designTokens.colors.text.primary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '11px 22px',
          fontWeight: 500,
          fontSize: '1rem',
          letterSpacing: '0.01em',
          transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
        },
        contained: {
          background: designTokens.colors.accent[500],
          color: '#ffffff',
          boxShadow: 'none',
          '&:hover': {
            background: designTokens.colors.accent[600],
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: designTokens.colors.accent[500],
          color: designTokens.colors.accent[500],
          background: 'transparent',
          '&:hover': {
            borderColor: designTokens.colors.accent[400],
            backgroundColor: `${designTokens.colors.accent[500]}10`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: designTokens.colors.background.secondary,
          borderRadius: 10,
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          boxShadow: designTokens.shadows.card,
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            boxShadow: designTokens.shadows.cardHover,
            borderColor: `${designTokens.colors.accent[500]}40`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: designTokens.colors.background.secondary,
          borderRadius: 10,
          border: `1px solid rgba(255, 255, 255, 0.08)`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            color: designTokens.colors.text.primary,
            background: designTokens.colors.background.secondary,
            transition: 'border-color 0.2s ease',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.12)',
            },
            '&:hover fieldset': {
              borderColor: `${designTokens.colors.accent[500]}50`,
            },
            '&.Mui-focused fieldset': {
              borderColor: designTokens.colors.accent[500],
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
          borderRadius: 8,
          background: designTokens.colors.background.tertiary,
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          color: designTokens.colors.text.primary,
          fontSize: '0.875rem',
          fontWeight: 500,
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
          '&:hover': {
            background: `${designTokens.colors.accent[500]}15`,
            borderColor: `${designTokens.colors.accent[500]}40`,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: designTokens.colors.text.secondary,
          borderRadius: 8,
          transition: 'color 0.2s ease, background-color 0.2s ease',
          '&:hover': {
            color: designTokens.colors.accent[500],
            backgroundColor: `${designTokens.colors.accent[500]}12`,
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
          background: designTokens.colors.background.secondary,
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 14, 23, 0.92)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid rgba(255, 255, 255, 0.08)`,
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