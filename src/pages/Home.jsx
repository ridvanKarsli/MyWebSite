import React from "react";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
    <Hero/>
    <FeatureList/>    
    <AboutSection/>    
    <Projects/>    
    <ContactForm/>    
    </>
  );
};

export default Home;
