import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menü ikonu

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openMenu, setOpenMenu] = useState(false);
  const [opacity, setOpacity] = useState(1);

  // Scroll eventini izleyerek opaklık seviyesini güncelle
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / 500, 0.5); // Scroll 500px'den sonra %50'ye kadar saydamlaşır
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const handleMenuItemClick = () => {
    setOpenMenu(false); // Menü öğesine tıklandığında menüyü kapat
  };

  const MenuItems = () => (
    <>
      <Button
        component={Link}
        to="/"
        onClick={handleMenuItemClick}
        sx={{
          color: "#fff",
          fontWeight: "500",
          fontSize: "1.1rem",
          textTransform: "uppercase",
          letterSpacing: "0.05rem",
          fontFamily: "'Roboto', sans-serif",
          "&:hover": {
            color: "#ff1744", // Kırmızı highlight
            backgroundColor: "transparent",
            transform: "scale(1.05)",
            transition: "all 0.3s ease",
          },
        }}
      >
        Anasayfa
      </Button>
      <Button
        component={Link}
        to="/about"
        onClick={handleMenuItemClick}
        sx={{
          color: "#fff",
          fontWeight: "500",
          fontSize: "1.1rem",
          textTransform: "uppercase",
          letterSpacing: "0.05rem",
          fontFamily: "'Roboto', sans-serif",
          "&:hover": {
            color: "#ff1744",
            backgroundColor: "transparent",
            transform: "scale(1.05)",
            transition: "all 0.3s ease",
          },
        }}
      >
        Hakkında
      </Button>
    </>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#000", // Tamamen siyah arka plan
        boxShadow: "none", // Gölgeyi kaldırdık
        padding: isMobile ? "8px 0" : "12px 0", // Daha ince header
        transition: "all 0.3s ease",
        opacity: opacity, // Opaklık burada dinamik olarak ayarlandı
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0",
          }}
        >
          {/* Başlık */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }} // Yavaşça yazılacak animasyon
          >
            <Typography
              component={Link}
              to="/"
              variant="h5"
              sx={{
                fontWeight: "600",
                color: "#fff",
                letterSpacing: "2px",
                fontFamily: "'Roboto', sans-serif",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                display: "inline-block",
                "&::after": {
                  content: "''",
                  display: "block",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#ff1744", // Kırmızı alt çizgi
                  marginTop: "5px",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              Rıdvan
            </Typography>
          </motion.div>

          {/* Menü Butonları - Masaüstü için */}
          <Box
            sx={{
              display: isMobile ? "none" : "flex",
              gap: 3,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <MenuItems />
          </Box>

          {/* Hamburger Menü - Mobilde görünür */}
          <Box sx={{ display: isMobile ? "block" : "none" }}>
            <IconButton
              sx={{
                color: "#fff",
                fontSize: "2rem",
                "&:hover": {
                  backgroundColor: "transparent",
                  transform: "scale(1.1)",
                },
              }}
              onClick={handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobilde Hamburger Menüsü */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={handleMenuToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "200px", // Küçük bir alan açılacak
            padding: "10px",
            backgroundColor: "#000", // Koyu siyah
            boxShadow: "none", // Gölgeyi kaldırdık
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <MenuItems />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
