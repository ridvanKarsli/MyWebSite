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
  Backdrop,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { designTokens } from '../theme/ThemeProvider';

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

  // Enhanced animations for mobile menu
  const drawerVariants = {
    hidden: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const drawer = (
    <motion.div
      variants={drawerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Box
        sx={{
          width: 280,
          background: designTokens.colors.background.glass,
          backdropFilter: 'blur(20px)',
          height: '100%',
          borderLeft: `1px solid ${designTokens.colors.accent[500]}30`,
          position: 'relative',
        }}
      >
        {/* Header of drawer */}
        <Box
          sx={{
            p: 2,
            borderBottom: `1px solid ${designTokens.colors.accent[500]}20`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: designTokens.colors.accent[500],
              fontWeight: 600,
              fontSize: '1.2rem',
            }}
          >
            Menu
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: designTokens.colors.text.secondary,
              '&:hover': {
                color: designTokens.colors.accent[500],
                backgroundColor: `${designTokens.colors.accent[500]}15`,
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ pt: 2 }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <ListItem
                button
                component={RouterLink}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  py: 1.5,
                  px: 3,
                  margin: '4px 12px',
                  borderRadius: '12px',
                  borderLeft: location.pathname === item.path 
                    ? `3px solid ${designTokens.colors.accent[500]}` 
                    : '3px solid transparent',
                  backgroundColor: location.pathname === item.path 
                    ? `${designTokens.colors.accent[500]}15` 
                    : 'transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: `${designTokens.colors.accent[500]}20`,
                    transform: 'translateX(8px)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiTypography-root': {
                      color: location.pathname === item.path 
                        ? designTokens.colors.accent[500] 
                        : designTokens.colors.text.secondary,
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      fontSize: '1.1rem',
                    },
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
          
          <motion.div
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            custom={navItems.length}
          >
            <Box sx={{ px: 3, pt: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  toggleLanguage();
                  handleDrawerToggle();
                }}
                startIcon={<TranslateIcon />}
                sx={{
                  py: 1.5,
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              >
                {language === 'en' ? 'Türkçe' : 'English'}
              </Button>
            </Box>
          </motion.div>
        </List>
      </Box>
    </motion.div>
  );

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled
              ? designTokens.colors.background.glass
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            boxShadow: scrolled ? designTokens.shadows.card : 'none',
            borderBottom: scrolled 
              ? `1px solid ${designTokens.colors.accent[500]}20` 
              : 'none',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
              {/* Enhanced Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography
                  component={RouterLink}
                  to="/"
                  sx={{
                    textDecoration: 'none',
                    color: designTokens.colors.accent[500],
                    fontSize: '2rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    fontFamily: '"Inter", sans-serif',
                    position: 'relative',
                    padding: '0.5rem 1rem',
                    borderRadius: '12px',
                    background: `${designTokens.colors.accent[500]}10`,
                    border: `1px solid ${designTokens.colors.accent[500]}30`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: designTokens.colors.accent[400],
                      background: `${designTokens.colors.accent[500]}20`,
                      borderColor: `${designTokens.colors.accent[500]}50`,
                      boxShadow: designTokens.shadows.glowSoft,
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      background: designTokens.gradients.accent,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    RK
                  </Box>
                </Typography>
              </motion.div>

              {/* Mobile Navigation */}
              {isMobile ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <IconButton
                      onClick={toggleLanguage}
                      sx={{
                        color: designTokens.colors.text.secondary,
                        borderRadius: '12px',
                        '&:hover': {
                          color: designTokens.colors.accent[500],
                          backgroundColor: `${designTokens.colors.accent[500]}15`,
                        },
                      }}
                    >
                      <TranslateIcon />
                    </IconButton>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <IconButton
                      onClick={handleDrawerToggle}
                      sx={{
                        color: designTokens.colors.text.secondary,
                        borderRadius: '12px',
                        '&:hover': {
                          color: designTokens.colors.accent[500],
                          backgroundColor: `${designTokens.colors.accent[500]}15`,
                        },
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </motion.div>
                </Box>
              ) : (
                /* Desktop Navigation */
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        component={RouterLink}
                        to={item.path}
                        sx={{
                          color: location.pathname === item.path 
                            ? designTokens.colors.accent[500] 
                            : designTokens.colors.text.secondary,
                          position: 'relative',
                          px: 2,
                          py: 1,
                          borderRadius: '12px',
                          fontSize: '1rem',
                          fontWeight: location.pathname === item.path ? 600 : 400,
                          transition: 'all 0.3s ease',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: location.pathname === item.path ? '80%' : '0%',
                            height: '2px',
                            bottom: '6px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: designTokens.gradients.accent,
                            borderRadius: '1px',
                            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          },
                          '&:hover': {
                            color: designTokens.colors.accent[500],
                            backgroundColor: `${designTokens.colors.accent[500]}10`,
                            '&::after': {
                              width: '80%',
                            },
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={toggleLanguage}
                      startIcon={<TranslateIcon />}
                      variant="outlined"
                      sx={{
                        ml: 1,
                        px: 2,
                        py: 1,
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textTransform: 'none',
                      }}
                    >
                      {language === 'en' ? 'TR' : 'EN'}
                    </Button>
                  </motion.div>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <Backdrop
              open={mobileOpen}
              onClick={handleDrawerToggle}
              sx={{
                zIndex: theme.zIndex.drawer - 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(5px)',
              }}
            />
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: false,
                BackdropComponent: () => null, // Custom backdrop above
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 280,
                  background: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
