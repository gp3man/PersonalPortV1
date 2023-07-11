import React from "react";
import BarIcon from "./BarIcon.jsx";
import { LuDownload, LuMessageSquarePlus } from "react-icons/lu";
import {
  MdDarkMode,
  MdOutlineDarkMode,
  MdLightMode,
  MdOutlineLightMode,
} from "react-icons/md";
import resume from "../../src/assets/Resume.pdf";
import { VscProject } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  //
  return (
    <section
      id="NavBar"
      className="fixed top-0 left-0 right-0 h-14 w-screen p-4 flex flex-row bg-zinc-700 text-white shadow justify-around"
    >
      <div>
        <p className="text-slate-300">Gregory Pounds</p>
      </div>
      
      <div className="flex flex-row text-slate-300 pr-4  justify-around">
        <p className="border-violet-500 border-opacity-30 border-r-2 px-3">
          Portfolio
        </p>
        <a onClick={handleScroll}>
          <p className="border-violet-500 border-opacity-30 border-r-2 px-3">
            Contact
          </p>
        </a>
        <a
          className="border-violet-500 border-opacity-30 border-r-2 px-3"
          download={resume}
        >
          <BarIcon icon={<LuDownload />}>
            <caption>Resume</caption>
          </BarIcon>
        </a>
        <a className="px-3">
          <BarIcon className="align-middle " icon={<MdDarkMode />}>
            <caption>Light Mode</caption>
          </BarIcon>
        </a>
        {/* <p className="px-3">Resume</p> */}
      </div>

      {/* <NavLink to={"/Portfolio"}>
        <BarIcon icon={<VscProject />}>
          <caption>Detailed Portfolio</caption>
        </BarIcon>
        </NavLink>

        <BarIcon icon={<LuMessageSquarePlus />}>
          <caption>Contact Me</caption>
        </BarIcon> */}
    </section>
  );
};
const handleScroll = (evt) => {
  evt.preventDefault();
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
export default NavBar;
