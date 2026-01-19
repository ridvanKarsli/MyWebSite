import React from "react";
import { Helmet } from 'react-helmet-async';
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import AboutSection from "../components/AboutSection";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rıdvan Şevki Karslı — Java Backend Developer</title>
        <meta 
          name="description" 
          content="Rıdvan Şevki Karslı'nın kişisel web sitesi. Java Backend, Spring Boot, PostgreSQL, REST API ve üretim odaklı yazılım geliştirme." 
        />
        <meta name="keywords" content="Rıdvan Karslı, Java Backend Developer, Spring Boot, REST API, PostgreSQL, Yazılım Geliştirici, Portföy" />
        <meta property="og:title" content="Rıdvan Şevki Karslı — Java Backend Developer" />
        <meta property="og:description" content="Java Backend, Spring Boot, PostgreSQL, React ve Swift ile yazılım geliştirme uzmanı." />
        <meta property="og:url" content="https://www.ridvankarsli.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ridvankarsli.com/" />
      </Helmet>
      <Hero/>
      <AboutSection/>
      <FeatureList/>
      <Skills/>
      <Projects/>
      <WorkExperience/>
      <ContactForm/>
    </>
  );
};

export default Home;
