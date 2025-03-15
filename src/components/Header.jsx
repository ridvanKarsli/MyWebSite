import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openMenu, setOpenMenu] = useState(false);

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
          fontWeight: "600",
          fontSize: isMobile ? "1rem" : "1.1rem",
          textTransform: "none",
          fontFamily: "'Poppins', sans-serif",
          "&:hover": {
            color: "#ff0000",
            backgroundColor: "transparent",
            transform: "scale(1.05)",
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
          fontWeight: "600",
          fontSize: isMobile ? "1rem" : "1.1rem",
          textTransform: "none",
          fontFamily: "'Poppins', sans-serif",
          "&:hover": {
            color: "#ff0000",
            backgroundColor: "transparent",
            transform: "scale(1.05)",
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
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.8)",
        padding: isMobile ? "10px 0" : "15px 0",
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
          {/* Logo ve Başlık */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                component={Link}
                to="/"
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #000, #ff0000)", // Siyah & Kırmızı başlık rengi
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  cursor: "pointer",
                }}
              >
                Rıdvan ŞK
              </Typography>
            </motion.div>
          </Box>

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
            <Button
              sx={{
                color: "#fff",
                fontSize: "1.8rem",
                textTransform: "none",
                fontFamily: "'Poppins', sans-serif",
                "&:hover": {
                  backgroundColor: "transparent",
                  transform: "scale(1.05)",
                },
              }}
              onClick={handleMenuToggle}
            >
              ☰
            </Button>
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
            width: "250px",
            padding: "20px",
            backgroundColor: "#000",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.8)",
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
