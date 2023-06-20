import React from "react";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import StartPage from "./StartPage";
const LandingPage = ()=>{

return(
  <div id="LandingPage">
    <NavBar />
    <StartPage />
    <TechStack />
    <AboutMe />
    <Portfolio />
    <ContactForm />
  </div>
)
}
export default LandingPage;
