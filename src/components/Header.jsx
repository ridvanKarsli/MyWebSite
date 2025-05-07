import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { language, translations, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { path: '/', label: translations[language].nav.home },
    { path: '/about', label: translations[language].nav.about },
    { path: '/projects', label: translations[language].nav.projects },
    { path: '/contact', label: translations[language].nav.contact },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        background: 'rgba(17, 34, 64, 0.95)',
        backdropFilter: 'blur(10px)',
        height: '100%',
        borderRight: '1px solid rgba(0, 229, 255, 0.1)',
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            component={RouterLink}
            to={item.path}
            key={item.path}
            onClick={handleDrawerToggle}
            sx={{
              borderLeft: location.pathname === item.path ? '3px solid #00e5ff' : 'none',
              '&:hover': {
                background: 'rgba(0, 229, 255, 0.1)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                color: location.pathname === item.path ? '#00e5ff' : '#8892b0',
                '&:hover': {
                  color: '#00e5ff',
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={() => {
            toggleLanguage();
            handleDrawerToggle();
          }}
          sx={{
            '&:hover': {
              background: 'rgba(0, 229, 255, 0.1)',
            },
          }}
        >
          <ListItemText
            primary={language === 'en' ? 'Türkçe' : 'English'}
            sx={{
              color: '#8892b0',
              '&:hover': {
                color: '#00e5ff',
              },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled
            ? 'rgba(10, 25, 47, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 229, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: '#00e5ff',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontFamily: '"Roboto Mono", monospace',
                position: 'relative',
                padding: '0.5rem 1rem',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: '2px solid #00e5ff',
                  borderRadius: '4px',
                  opacity: 0.3,
                  transition: 'all 0.3s ease',
                },
                '&:hover': {
                  color: '#00b0ff',
                  '&::before': {
                    opacity: 0.6,
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              <span style={{ color: '#00e5ff' }}>R</span>
              <span style={{ color: '#8892b0' }}>K</span>
            </Typography>

            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  onClick={toggleLanguage}
                  sx={{
                    color: '#00e5ff',
                    '&:hover': {
                      color: '#00b0ff',
                    },
                  }}
                >
                  <TranslateIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: '#00e5ff',
                    '&:hover': {
                      color: '#00b0ff',
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        color: location.pathname === item.path ? '#00e5ff' : '#8892b0',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: location.pathname === item.path ? '100%' : '0%',
                          height: '2px',
                          bottom: 0,
                          left: 0,
                          backgroundColor: '#00e5ff',
                          transition: 'width 0.3s ease-in-out',
                        },
                        '&:hover': {
                          color: '#00e5ff',
                          '&::after': {
                            width: '100%',
                          },
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={toggleLanguage}
                    startIcon={<TranslateIcon />}
                    sx={{
                      color: '#8892b0',
                      '&:hover': {
                        color: '#00e5ff',
                      },
                    }}
                  >
                    {language === 'en' ? 'Türkçe' : 'English'}
                  </Button>
                </motion.div>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            background: 'rgba(10, 25, 47, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
