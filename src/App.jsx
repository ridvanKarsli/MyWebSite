import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
  );
};

export default App;
