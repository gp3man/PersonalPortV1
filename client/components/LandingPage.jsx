import React from "react";
import ContactForm from "./ContactForm.jsx";
import TechStack from "./TechStack.jsx";
import AboutMe from "./AboutMe.jsx";
import Portfolio from "./Portfolio.jsx"
import HeroPage from "./HeroPage.jsx";
import {MdDarkMode, MdOutlineDarkMode, MdLightMode, MdOutlineLightMode} from "react-icons/md"
import BarIcon from "./BarIcon.jsx";

const LandingPage = () => {

  return (
    <>
      <div className="snap-y snap-mandatory" id="LandingPage">
        {/* <BarIcon {icon={''}} /> */}
        {/* <HeroPage /> */}
        <TechStack />
        <AboutMe />
        <Portfolio />
        <ContactForm />
      </div>
    </>
  );
};

export default LandingPage;
