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
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger menü ikonu

const Header = () => {
  const theme = useTheme(); // Access the current theme
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
      {["/", "/about"].map((path, index) => (
        <Button
          key={index}
          component={Link}
          to={path}
          onClick={handleMenuItemClick}
          sx={{
            color: theme.palette.text.primary, // Tema ile uyumlu metin rengi
            fontWeight: 700,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive
            textTransform: "uppercase",
            letterSpacing: "0.05rem",
            padding: "8px 16px",
            borderRadius: "50px", // Hero ile uyumlu yuvarlak kenar
            "&:hover": {
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, // Hero ile uyumlu gradient
              color: "#fff",
              transform: "translateY(-2px)", // Hero ile benzer hover efekti
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)", // Hafif gölge
              transition: "all 0.4s ease", // Hero ile uyumlu geçiş
            },
          }}
        >
          {path === "/" ? "Anasayfa" : "Hakkında"}
        </Button>
      ))}
    </>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: `linear-gradient(45deg, ${theme.palette.primary.main}90, ${theme.palette.secondary.main}90)`, // Hero ile uyumlu gradient arka plan
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Hero ile uyumlu gölge
        padding: isMobile ? "8px 0" : "12px 0",
        transition: "all 0.3s ease",
        opacity: opacity, // Dinamik opaklık korunuyor
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
            initial={{ opacity: 0, y: -20 }} // Hero ile uyumlu animasyon
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }} // Hero ile aynı spring animasyonu
          >
            <Typography
              component={Link}
              to="/"
              variant="h5"
              sx={{
                fontWeight: 900, // Hero ile uyumlu kalınlık
                color: theme.palette.text.primary, // Tema ile uyumlu renk
                letterSpacing: "0.1rem",
                fontFamily: "'Roboto', sans-serif",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }, // Responsive
                background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile aynı gradient
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge
                "&:hover": {
                  transform: "scale(1.05)", // Hover efekti
                  transition: "all 0.4s ease", // Hero ile uyumlu geçiş
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
                color: theme.palette.text.primary, // Tema ile uyumlu renk
                fontSize: "2rem",
                "&:hover": {
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, // Hero ile uyumlu gradient
                  transform: "scale(1.1)", // Hafif büyüme
                  transition: "all 0.4s ease", // Hero ile uyumlu geçiş
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
            background: `linear-gradient(45deg, ${theme.palette.primary.main}90, ${theme.palette.secondary.main}90)`, // Hero ile uyumlu gradient
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Hero ile uyumlu gölge
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <MenuItems />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;