import React from "react";
import BarIcon from "./BarIcon.jsx";
import {
  LuDownload,
  LuMessageSquarePlus,
} from "react-icons/lu";
import { VscProject } from "react-icons/vsc";
import resume from "../../src/assets/Resume.pdf"
import { NavLink } from "react-router-dom";
const NavBar = () => {
  //
  return (
    <section
      id="NavBar"
      className="fixed top-0 left-0 right-0 h-14 w-screen p-4 flex flex-row bg-zinc-700 text-white shadow con"
    >
      <p>Gregory Pounds</p>
      <div className="flex flex-row content-end">
      <p>Portfolio</p>
      <p>Contact</p>
      <p>Resume</p>
      </div>

      {/* <NavLink to={"/Portfolio"}>
        <BarIcon icon={<VscProject />}>
          <caption>Detailed Portfolio</caption>
        </BarIcon>
        </NavLink>

        <BarIcon icon={<LuMessageSquarePlus />}>
          <caption>Contact Me</caption>
        </BarIcon>

      <a download={resume}>
        <BarIcon icon={<LuDownload />}>
          <caption>Resume</caption>
        </BarIcon>
        </a> */}
    </section>
  );
};
export default NavBar;
