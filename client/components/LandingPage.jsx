import React from "react";
import ContactForm from "./ContactForm.jsx";
import TechStack from "./TechStack.jsx";
import AboutMe from "./AboutMe.jsx";
import Portfolio from "./Portfolio.jsx";
import NavBar from "./NavBar.jsx";
import Profile from "./ProfileSideBar.jsx";

const LandingPage = () => {
  return (
    <>
      <div id="LandingPage">
        <NavBar />
        <Profile />
        <TechStack />
        <Portfolio />
        <AboutMe />
        <ContactForm />
      </div>
    </>
  );
};

export default LandingPage;
