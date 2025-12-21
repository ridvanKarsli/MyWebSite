import React from "react";
import { Helmet } from 'react-helmet-async';
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rıdvan Şevki Karslı — Java Backend & Full Stack Developer</title>
        <meta 
          name="description" 
          content="Rıdvan Şevki Karslı'nın kişisel web sitesi. Java Backend, Spring Boot, PostgreSQL, React ve Swift ile yazılım geliştirme, portföy projeleri ve iletişim bilgileri." 
        />
        <meta name="keywords" content="Rıdvan Karslı, Java Backend Developer, Spring Boot, Full Stack Developer, React, PostgreSQL, Yazılım Geliştirici, Portföy" />
        <meta property="og:title" content="Rıdvan Şevki Karslı — Java Backend & Full Stack Developer" />
        <meta property="og:description" content="Java Backend, Spring Boot, PostgreSQL, React ve Swift ile yazılım geliştirme uzmanı." />
        <meta property="og:url" content="https://www.ridvankarsli.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ridvankarsli.com/" />
      </Helmet>
      <Hero/>
      <WorkExperience/>
      <FeatureList/>    
      <Services/>
      <AboutSection/>    
      <Projects/>    
      <ContactForm/>    
    </>
  );
};

export default Home;
