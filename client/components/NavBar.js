import React from "react";
import BarIcon from "./BarIcon";
import {
  LuBrainCircuit,
  LuDownload,
  LuMessageSquarePlus,
} from "react-icons/lu";
import { SiAboutdotme } from "react-icons/si";
import { VscProject } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  //
  return (
    <section
      id="NavBar"
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-zinc-700 text-white shadow justify-around"
    >
      <NavLink to={"/Knowledge"}>
        <BarIcon icon={<LuBrainCircuit />}>
          <caption>Knowledge</caption>{" "}
        </BarIcon>
      </NavLink>
      <NavLink to={"/AboutMe"}>
        <BarIcon icon={<SiAboutdotme />}>
          <caption>About</caption>{" "}
        </BarIcon>
      </NavLink>
      <NavLink to={"/Portfolio"}>
        <BarIcon icon={<VscProject />}>
          <caption>Portfolio</caption>{" "}
        </BarIcon>
      </NavLink>
      <NavLink to={"/ContactMe"}>
        <BarIcon icon={<LuMessageSquarePlus />}>
          <caption>Contact Me</caption>{" "}
        </BarIcon>
      </NavLink>
      <NavLink to={"/Resume"}>
        <BarIcon className="object-center" icon={<LuDownload />}>
          <caption>Resume</caption>{" "}
        </BarIcon>
      </NavLink>
    </section>
  );
};
export default NavBar;
