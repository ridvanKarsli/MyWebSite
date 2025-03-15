import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box, useMediaQuery, Drawer } from "@mui/material"; 
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; 

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openMenu, setOpenMenu] = useState(false); // Hamburger menüsünü açma kapama durumu

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const MenuItems = () => (
    <>
      <Button
        component={Link}
        to="/"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: "600",
          fontSize: isMobile ? "1rem" : "1.1rem",
          textTransform: "none",
          fontFamily: "'Poppins', sans-serif",
          "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: "transparent",
            transform: "scale(1.05)", // Hover animasyonu
          },
        }}
      >
        Anasayfa
      </Button>
      <Button
        component={Link}
        to="/about"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: "600",
          fontSize: isMobile ? "1rem" : "1.1rem",
          textTransform: "none",
          fontFamily: "'Poppins', sans-serif",
          "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: "transparent",
            transform: "scale(1.05)",
          },
        }}
      >
        Hakkında
      </Button>
      <Button
        component={Link}
        to="/contact"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: "600",
          fontSize: isMobile ? "1rem" : "1.1rem",
          textTransform: "none",
          fontFamily: "'Poppins', sans-serif",
          "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: "transparent",
            transform: "scale(1.05)",
          },
        }}
      >
        İletişim
      </Button>
    </>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
                color: theme.palette.primary.main,
                fontSize: isMobile ? "1.3rem" : "1.8rem",
                textAlign: "left",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Rıdvan ŞK
            </Typography>
          </Box>

          {/* Menü Butonları */}
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
                color: theme.palette.text.primary,
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
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
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
