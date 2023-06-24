import React from "react";
import BarIcon from "./BarIcon";
import {
  LuBrainCircuit,
  LuDownload,
  LuMessageSquarePlus,
} from "react-icons/lu";
import { SiAboutdotme } from "react-icons/si";
import { VscProject } from "react-icons/vsc";
const NavBar = () => {
  return (
    <section
      id="NavBar"
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-zinc-700 text-white shadow justify-around"
    >
      <BarIcon icon={<LuBrainCircuit />}>
        <caption>Knowledge</caption>{" "}
      </BarIcon>
      <BarIcon icon={<SiAboutdotme />}>
        <caption>About</caption>{" "}
      </BarIcon>
      <BarIcon icon={<VscProject />}>
        <caption>Portfolio</caption>{" "}
      </BarIcon>
      <BarIcon icon={<LuMessageSquarePlus />}>
        <caption>Contact Me</caption>{" "}
      </BarIcon>
      <BarIcon className="object-center" icon={<LuDownload />}>
        <caption>Resume</caption>{" "}
      </BarIcon>
    </section>
  );
};
export default NavBar;
