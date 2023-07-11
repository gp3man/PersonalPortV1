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
      className="fixed top-0 left-0 right-0 h-14 w-screen p-4 flex flex-row opacity-80  bg-slate-600 dark:bg-gray-900 text-slate-300  dark:text-slate-100 shadow justify-around"
    >
      <div className="text-slate-950 dark:text-slate-50">
        <p>Gregory Pounds</p>
      </div>

      <div className="flex flex-row text-slate-300 dark:text-slate-200 pr-4  justify-around">
        <p className="border-violet-500 dark:border-violet-300 border-opacity-30 border-r-2 px-3 cursor-pointer">
          Portfolio
        </p>
        <a className="border-violet-500 dark:border-violet-300 border-opacity-30 border-r-2 px-3 cursor-pointer" onClick={handleScroll}>
          <p >
            Contact
          </p>
        </a>
        <a
          className="border-violet-500 dark:border-violet-300 border-opacity-30 border-r-2 px-3 cursor-crosshair"
          download={resume}
        >
          <BarIcon icon={<LuDownload />}>
            <caption>Resume</caption>
          </BarIcon>
        </a>
        <a id="moon" className="moon px-3 cursor-pointer">
          <BarIcon icon={<MdDarkMode />}>
            <caption>Dark Mode</caption>
          </BarIcon>
        </a>
        <a id="sun" className="sun hidden px-3 cursor-pointer">
          <BarIcon icon={<MdOutlineLightMode />}>
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
