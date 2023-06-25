import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Four0FourPage from "./Four0FourPage";
import ContactForm from "./ContactForm";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import StartPage from "./HeroPage";
import { motion } from "framer-motion";
const LandingPage = () => {
  const location = useLocation();
  return (
    <>
      <div id="LandingPage">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
            <StartPage />
            </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
            <TechStack />

      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
            <AboutMe />

      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
            <Portfolio />

      </motion.div>


      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >

      <ContactForm />
      </motion.div>


      </div>
    </>
  );
};

export default LandingPage;
