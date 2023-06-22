import React from "react";
import BarIcon from "./BarIcon";
import { ImGithub, ImLinkedin } from "react-icons/im";

const StartPage = ()=>{
return(
  <section id="StartPage">
      <h1>Gregory Pounds</h1>
      <h2>Software Developer</h2>
      <BarIcon icon={<ImGithub />}><caption>GitHub</caption> </BarIcon>
      <BarIcon icon={<ImLinkedin />}><caption>LinkedIn</caption> </BarIcon>
      <button>Contact</button>
  </section>
)
}
export default StartPage;
