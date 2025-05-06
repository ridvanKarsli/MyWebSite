import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLanguage } from '../context/LanguageContext';
import TranslateIcon from '@mui/icons-material/Translate';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { language, toggleLanguage, translations } = useLanguage();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pages = [
    { title: translations[language].nav.home, path: '/' },
    { title: translations[language].nav.about, path: '/about' },
    { title: translations[language].nav.projects, path: '/projects' },
    { title: translations[language].nav.contact, path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        component="a"
        href="/"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 2,
          textDecoration: 'none',
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            color: '#00e5ff',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          RIDVAN KARSLI
        </Typography>
      </Box>
      <List>
        {pages.map((page) => (
          <ListItem
            key={page.title}
            component="a"
            href={page.path}
            sx={{
              color: '#8892b0',
              '&:hover': {
                color: '#00e5ff',
                backgroundColor: 'rgba(0, 229, 255, 0.1)',
              },
            }}
          >
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
        <ListItem
          onClick={toggleLanguage}
          sx={{
            color: '#8892b0',
            cursor: 'pointer',
            '&:hover': {
              color: '#00e5ff',
              backgroundColor: 'rgba(0, 229, 255, 0.1)',
            },
          }}
        >
          <ListItemText primary={language === 'en' ? 'Türkçe' : 'English'} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(10, 25, 47, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
              mr: 2,
            }}
          >
            <Typography
              variant="h6"
              component="h1"
              sx={{
                color: '#00e5ff',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              RIDVAN KARSLI
            </Typography>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              sx={{ color: '#8892b0' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 240,
                  backgroundColor: '#0a192f',
                  borderRight: '1px solid rgba(0, 229, 255, 0.1)',
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Mobile Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Typography
              variant="h6"
              component="h1"
              sx={{
                color: '#00e5ff',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}
            >
              RIDVAN KARSLI
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component="a"
                href={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  color: '#8892b0',
                  display: 'block',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                  mx: 1,
                  '&:hover': {
                    color: '#00e5ff',
                    backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
            <IconButton
              onClick={toggleLanguage}
              sx={{
                color: '#8892b0',
                ml: 1,
                '&:hover': {
                  color: '#00e5ff',
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                },
              }}
            >
              <TranslateIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
