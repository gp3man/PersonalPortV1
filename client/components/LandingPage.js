import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import StartPage from "./HeroPage";
import {MdDarkMode, MdOutlineDarkMode, MdLightMode, MdOutlineLightMode} from "react-icons/md"
import BarIcon from "./BarIcon";

const LandingPage = () => {
  return (
    <>
      <div id="LandingPage">
        {/* <BarIcon {icon={''}} /> */}
        <StartPage />
        <TechStack />
        <AboutMe />
        <Portfolio />
        <ContactForm />
      </div>
    </>
  );
};

export default LandingPage;
