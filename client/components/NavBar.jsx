import React from "react";
import BarIcon from "./BarIcon.jsx";
import { LuDownload} from "react-icons/lu";
import {
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";
import resume from "../../src/assets/Resume.pdf";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  //
  return (
    <section
      id="NavBar"
      className="fixed top-0 left-0 right-0 h-14 w-screen p-4 z-40 flex flex-row opacity-100 dark:opacity-80 bg-slate-600 dark:bg-gray-900 text-slate-300  dark:text-slate-100  shadow justify-around"
    >
      <div className="text-violet-500 dark:text-slate-50 cursor-crosshair">
        <p>Gregory Pounds</p>
      </div>

      <div className="flex flex-row text-slate-300 dark:text-slate-200 pr-4  justify-around">
        <NavLink to={"/Portfolio"}>
          <p className="border-violet-500 hover:text-blue-400 dark:border-violet-300 border-opacity-30 border-r-2 px-3 cursor-crosshair">
            Portfolio
          </p>
        </NavLink>
        <a
          className="border-violet-500 dark:border-violet-300 border-opacity-30 border-r-2 px-3 cursor-crosshair"
          onClick={handleScroll}
        >
          <p className="hover:text-blue-400">Contact</p>
        </a>
        <a
          className="border-violet-500 dark:border-violet-300 border-opacity-30 border-r-2 px-3 cursor-crosshair"
          href={resume}
          download="GregoryPounds_Resume"
        >
          <BarIcon icon={<LuDownload />}>
            <caption>Resume</caption>
          </BarIcon>
        </a>
        <a className="moon px-3 cursor-crosshair">
          <BarIcon icon={<MdDarkMode />}>
          </BarIcon>
        </a>
        <a className="sun hidden px-3 cursor-crosshair">
          <BarIcon icon={<MdLightMode />}>
          </BarIcon>
        </a>
      </div>
    </section>
  );
};
const handleScroll = (evt) => {
  evt.preventDefault();
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
export default NavBar;
