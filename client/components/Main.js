import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Four0FourPage from "./Four0FourPage";
import ContactForm from "./ContactForm";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import StartPage from "./HeroPage";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
const Main = () => {
  const location = useLocation();
  return (
    <>
      <div id="Main">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<Four0FourPage />} />
            <Route path="/" element={<StartPage />} />
            <Route path="/Knowledge" element={<TechStack />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/ContactMe" element={<ContactForm />} />
            <Route path="/Resume" element={<StartPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Main;
