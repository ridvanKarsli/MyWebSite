import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from "./theme/ThemeProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { LanguageProvider } from './context/LanguageContext';
import { Box } from "@mui/material";

const App = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider>
          <Router>
          <Box
            sx={{
              minHeight: '100vh',
              pt: { xs: '80px', md: '100px' },
            }}
          >
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          </Box>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
