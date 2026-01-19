import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useScrollTrigger, Slide } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../theme/ThemeProvider';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const { translations, language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: translations[language].nav.home, path: '/' },
    { text: translations[language].nav.about, path: '/about' },
    { text: translations[language].nav.projects, path: '/projects' },
    { text: translations[language].nav.contact, path: '/contact' },
  ];

  const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Typography 
        variant="h6" 
        sx={{ 
          my: 3,
          background: designTokens.gradients.accent,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
        }}
      >
        {translations[language].nav.title}
      </Typography>
      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem 
              onClick={() => navigate(item.path)}
              sx={{ 
                cursor: 'pointer',
                color: location.pathname === item.path 
                  ? designTokens.colors.accent[500] 
                  : designTokens.colors.text.secondary,
                backgroundColor: location.pathname === item.path 
                  ? `${designTokens.colors.accent[500]}15` 
                  : 'transparent',
                borderRadius: '12px',
                mx: 2,
                mb: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: `${designTokens.colors.accent[500]}10`,
                  transform: 'translateX(5px)',
                },
              }}
            >
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: location.pathname === item.path ? 600 : 400,
                }}
              />
            </ListItem>
          </motion.div>
        ))}
        <ListItem sx={{ justifyContent: 'center', mt: 2 }}>
          <Button
            onClick={toggleLanguage}
            sx={{
              color: designTokens.colors.accent[500],
              borderColor: designTokens.colors.accent[500],
              borderWidth: '2px',
              '&:hover': {
                borderColor: designTokens.colors.accent[400],
                backgroundColor: `${designTokens.colors.accent[500]}15`,
                boxShadow: designTokens.shadows.glowSoft,
              },
            }}
            variant="outlined"
            fullWidth
          >
            {language === 'en' ? 'TR' : 'EN'}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(10, 15, 35, 0.7)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'none',
          borderBottom: `1px solid ${designTokens.colors.accent[500]}20`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: designTokens.gradients.accent,
            opacity: location.pathname === '/' ? 1 : 0.5,
          },
        }}
      >
        <Toolbar>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', sm: 'block' },
                background: designTokens.gradients.accent,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                fontSize: '1.3rem',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            >
              {translations[language].nav.title}
            </Typography>
          </motion.div>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: location.pathname === item.path 
                      ? designTokens.colors.accent[500] 
                      : designTokens.colors.text.secondary,
                    mx: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: '12px',
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: location.pathname === item.path 
                        ? 'translateX(-50%) scaleX(1)' 
                        : 'translateX(-50%) scaleX(0)',
                      width: '60%',
                      height: '2px',
                      background: designTokens.gradients.accent,
                      borderRadius: '2px',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      color: designTokens.colors.accent[500],
                      backgroundColor: `${designTokens.colors.accent[500]}10`,
                      '&::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    },
                  }}
                >
                  {item.text}
                </Button>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={toggleLanguage}
                sx={{
                  color: designTokens.colors.accent[500],
                  borderColor: designTokens.colors.accent[500],
                  borderWidth: '2px',
                  mx: 1,
                  px: 2,
                  py: 0.5,
                  borderRadius: '12px',
                  fontWeight: 600,
                  background: 'transparent',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    borderColor: designTokens.colors.accent[400],
                    backgroundColor: `${designTokens.colors.accent[500]}15`,
                    boxShadow: designTokens.shadows.glowSoft,
                  },
                }}
                variant="outlined"
              >
                {language === 'en' ? 'TR' : 'EN'}
              </Button>
            </motion.div>
          </Box>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { sm: 'none' },
                color: designTokens.colors.accent[500],
                '&:hover': {
                  backgroundColor: `${designTokens.colors.accent[500]}15`,
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </motion.div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 280,
              background: designTokens.colors.background.glass,
              backdropFilter: 'blur(20px)',
              color: 'white',
              borderLeft: `1px solid ${designTokens.colors.accent[500]}30`,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </HideOnScroll>
  );
};

export default Navbar; 