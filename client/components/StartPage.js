import React, { useRef } from "react";
import BarIcon from "./BarIcon";
import { ImGithub, ImLinkedin } from "react-icons/im";
const StartPage = () => {
  return (
    <section id="StartPage">
      <h1 className="text-5xl">Gregory Pounds</h1>
      <h2 className="text-3xl"> Software Developer</h2>
      <div className="flex content-between">
        <BarIcon icon={<ImGithub />}>
          <caption>GitHub</caption>{" "}
        </BarIcon>
        <BarIcon icon={<ImLinkedin />}>
          <caption>LinkedIn</caption>{" "}
        </BarIcon>
      </div>
      <button>Contact</button>
    </section>
  );
};
export default StartPage;
