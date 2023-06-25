import React, { useRef } from "react";
import BarIcon from "./BarIcon";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { motion } from "framer-motion";
const heroPage = () => {
  return (
      <section className="page " id="heroPage">
        <h1 className="text-7xl">Gregory Pounds</h1>
        <h2 className="text-5xl"> Software Developer</h2>
        <div className="flex content-around">
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
export default heroPage;
