import React from "react";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import StartPage from "./StartPage";
const LandingPage = ()=>{

return(
  <section className="ml-24"id="LandingPage">
    <NavBar />
      <StartPage />
      <TechStack />
      <AboutMe />
      <Portfolio />
      <ContactForm />
  </section>
)
}
export default LandingPage;
