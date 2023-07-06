import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ImGithub, ImLinkedin } from "react-icons/im";
import BarIcon from "./BarIcon.jsx";
import { useInView } from "react-intersection-observer";
import Greg from "../../src/assets/greg.jpg";
const Profile = () => {
  const animation = useAnimation();
  const handleScroll= (evt)=>{
    evt.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  return (
    <motion.section className="page" id="Profile">
      <img className="w-14 h-14 rounded-full" src={Greg} />
      <h1 className="text-3xl uppercase m-6">Gregory Pounds</h1>
      <h2 className="text-2xl uppercase bg-violet-500 text-slate-100 rounded-full m-6 p-2">
        {" "}
        Software Developer
      </h2>
      <p>High level experience in web design and development knowledge.</p>

      <div className="flex content-around">
        <a href="https://github.com/gp3man" target="new">
          <BarIcon icon={<ImGithub />}>
            <caption>GitHub</caption>{" "}
          </BarIcon>
        </a>
        <a href="https://www.linkedin.com/in/gregory-pounds" target="new">
          <BarIcon icon={<ImLinkedin />}>
            <caption>LinkedIn</caption>{" "}
          </BarIcon>
        </a>
      </div>
      <button
        className="bg-violet-500 text-slate-100 rounded-3xl p-2 hover:bg-rose-400 hover:text-slate-800"
        onClick={handleScroll}
      >
        Contact
      </button>
    </motion.section>
  );
};
export default Profile;
// flex flex-col left-0 -top-24 h-screen pt-4 w-1/4 border border-red-900 content-center align-bottom
