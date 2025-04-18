import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [openMenu, setOpenMenu] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / 500, 0.5);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMenuToggle = () => setOpenMenu(!openMenu);
  const handleMenuItemClick = () => setOpenMenu(false);

  const MenuItems = () => (
    <>
      {["/", "/about"].map((path, index) => (
        <Button
          key={index}
          variant="contained"
          component={Link}
          to={path}
          onClick={handleMenuItemClick}
          sx={{
            backgroundColor: "#b08d57", // Altın rengi
            color: "#000000", // Siyah yazı
            border: "2px solid #b08d57",
            fontWeight: 700,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            textTransform: "uppercase",
            letterSpacing: "0.05rem",
            padding: "10px 20px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#000000", // Hover'da siyah arka plan
              color: "#b08d57", // Altın rengi metin
              border: "2px solid #b08d57",
              transform: "translateY(-3px)",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
              transition: "all 0.4s ease",
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
        padding: isMobile ? "8px 0" : "20px", // Padding eklenmesi
        transition: "all 0.3s ease",
        opacity: opacity,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Şeffaf siyah arka plan
        backdropFilter: "blur(5px)", // Hafif bulanıklaştırma efekti
        boxShadow: "none", // Gölgeyi kaldırma
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
                background: "linear-gradient(to right, #ffffff, #000000)", // Beyazdan siyaha gradient
                padding: "5px", // Gradientin logoyu çevrelemesi için padding
                borderRadius: "8px", // Kenarları yumuşatmak için
                "&:hover": {
                  filter: "brightness(1.2)",
                },
              }}
            >
              <img
                src="/RLogo.jpg"
                alt="Logo"
                style={{
                  height: isMobile ? "70px" : "80px", // Büyük logo
                  width: "auto",
                }}
              />
            </Box>
          </motion.div>

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

          <Box sx={{ display: isMobile ? "block" : "none" }}>
            <IconButton
              sx={{
                color: "#ffffff", // Menü iconu rengi
                fontSize: "2rem",
                "&:hover": { color: "#b08d57" }, // Hover'da altın rengi
              }}
              onClick={handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={openMenu}
        onClose={handleMenuToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "200px",
            padding: "10px",
            backgroundColor: "#000000", // Arka plan siyah
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
