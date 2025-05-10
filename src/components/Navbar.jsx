import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useScrollTrigger, Slide } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {translations[language].nav.title}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.text} 
            onClick={() => navigate(item.path)}
            sx={{ 
              cursor: 'pointer',
              color: location.pathname === item.path ? '#00e5ff' : 'inherit'
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem>
          <Button
            onClick={toggleLanguage}
            sx={{
              color: '#00e5ff',
              borderColor: '#00e5ff',
              '&:hover': {
                borderColor: '#00e5ff',
                backgroundColor: 'rgba(0, 229, 255, 0.1)',
              },
            }}
            variant="outlined"
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
          backgroundColor: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              fontFamily: 'monospace',
              color: '#00e5ff'
            }}
          >
            {translations[language].nav.title}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  color: location.pathname === item.path ? '#00e5ff' : 'white',
                  mx: 1,
                  '&:hover': {
                    color: '#00e5ff',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
            <Button
              onClick={toggleLanguage}
              sx={{
                color: '#00e5ff',
                borderColor: '#00e5ff',
                mx: 1,
                '&:hover': {
                  borderColor: '#00e5ff',
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                },
              }}
              variant="outlined"
            >
              {language === 'en' ? 'TR' : 'EN'}
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
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
              width: 240,
              backgroundColor: '#0a192f',
              color: 'white'
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