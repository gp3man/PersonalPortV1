import React from "react";
import { motion, useAnimation } from "framer-motion";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { TbFoldDown } from "react-icons/tb";
import BarIcon from "./BarIcon.jsx";
import Me6 from "../../src/assets/Mymeme6.png";
import I from "../../src/assets/img2.jpg";
const Profile = () => {
  const animation = useAnimation();
  const handleScroll = (evt) => {
    evt.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <motion.section
      className="flex flex-col min-h-screen m-1 pt-32 pb-14 content-center text-center items-center border border-violet-900 justify-items-center dark:text-slate-300 bg-cover bg-center bg-origin-border bg-fixed"
      id="Profile"
      style={{ backgroundImage: `url(${I})` }}
    >
      <img
        className="w-32 h-32 rounded-full animate- animate-bounce duration-300 space-x-4"
        src={Me6}
      />
      <h1 className="text-4xl uppercase m-6 font-bold">Gregory Pounds</h1>
      <h2 className="text-2xl uppercase bg-violet-500 dark:bg-violet-700 text-slate-100 rounded-full m-6 p-2">
        Software Developer
      </h2>

      <div className="flex content-evenly pt-2">
        <a href="https://github.com/gp3man" target="new">
          <BarIcon icon={<ImGithub />} tooltip={"GitHub"}></BarIcon>
        </a>
        <a href="https://www.linkedin.com/in/gregory-pounds" target="new">
          <BarIcon icon={<ImLinkedin />} tooltip={"LinkedIn"}></BarIcon>
        </a>
      </div>
      <button
        className="bg-violet-500 dark:bg-violet-700 text-slate-100 rounded-3xl p-2 hover:bg-blue-500 hover:text-slate-50 dark:hover:bg-blue-700 dark:hover:text-slate-50"
        onClick={handleScroll}
      >
        Contact
      </button>
      <p className="font-extralight text-slate-50 pt-16 text-xl">
        High level experience in web design and development knowledge.
      </p>
      <div className="flex flex-col absolute bottom-20 translate-y-full animate-pulse text-4xl">
        Scroll Down
        <BarIcon icon={<TbFoldDown />} />
      </div>
    </motion.section>
  );
};
export default Profile;
