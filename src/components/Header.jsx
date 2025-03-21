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
          component={Link}
          to={path}
          onClick={handleMenuItemClick}
          sx={{
            backgroundColor: "#b08d57",
            color: "#4e2c1d",
            border: "2px solid #4e2c1d",
            fontWeight: 700,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            textTransform: "uppercase",
            letterSpacing: "0.05rem",
            padding: "10px 20px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#4e2c1d",
              color: "#f5f0e1",
              border: "2px solid #b08d57",
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
        backgroundColor: "#4e2c1d",
        padding: isMobile ? "8px 0" : "20px",
        transition: "all 0.3s ease",
        opacity: opacity,
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
            <Typography
              component={Link}
              to="/"
              variant="h5"
              sx={{
                fontWeight: 900,
                color: "#f5f0e1",
                letterSpacing: "0.1rem",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                "&:hover": {
                  color: "#b08d57",
                },
              }}
            >
              Rıdvan
            </Typography>
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
                color: "#f5f0e1",
                fontSize: "2rem",
                "&:hover": { color: "#b08d57" },
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
            backgroundColor: "#4e2c1d",
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