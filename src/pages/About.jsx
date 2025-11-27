import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımda — Rıdvan Şevki Karslı</title>
        <meta 
          name="description" 
          content="Rıdvan Şevki Karslı'nın kariyeri, yazılım deneyimi, uzmanlık alanları ve kişisel yolculuğu. Java Backend Developer, Spring Boot uzmanı." 
        />
        <meta name="keywords" content="Rıdvan Karslı Hakkında, Java Developer Kariyer, Spring Boot Deneyim, Yazılım Geliştirici Profil" />
        <meta property="og:title" content="Hakkımda — Rıdvan Şevki Karslı" />
        <meta property="og:description" content="Rıdvan Şevki Karslı'nın kariyeri, yazılım deneyimi ve uzmanlık alanları." />
        <meta property="og:url" content="https://www.ridvankarsli.com/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ridvankarsli.com/about" />
      </Helmet>
      <Box>
        <About />
      </Box>
    </>
  );
};

export default AboutPage;
