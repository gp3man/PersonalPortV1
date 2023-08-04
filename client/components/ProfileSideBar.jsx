import React from "react";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { TbFoldDown } from "react-icons/tb";
import BarIcon from "./BarIcon.jsx";
import Me6 from "../../src/assets/Mymeme6.png";
import I from "../../src/assets/img2.jpg";
const Profile = () => {
  const handleScroll = (evt) => {
    evt.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <section
      className="mobi:bg-cover flex flex-col min-h-screen m-1 pt-32 pb-14 content-center text-center items-center justify-items-center dark:text-slate-300 bg-center bg-origin-border bg-fixed"
      id="Profile"
      style={{ backgroundImage: `url(${I})` }}
    >
      <img
        className="w-32 h-32 rounded-full animate- animate-bounce space-x-4 duration-1000"
        src={Me6}
      />
      <h1 className="text-4xl uppercase m-6 bg-gradient-to-t from-yellow-500 to-slate-100 bg-clip-text text-transparent shadow-2xl font-bold translate-y-5">
        Gregory Pounds
      </h1>
      <h2 className="text-2xl uppercase bg-violet-500 dark:bg-violet-700 text-slate-50 rounded-full m-6 p-2 shadow-3xl">
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
      <div className="flex flex-col absolute mobi:bottom-10 sm:bottom-20 text-slate-100 translate-y-full animate-pulse text-4xl">
        Scroll Down
        <BarIcon icon={<TbFoldDown size={120} />} />
      </div>
    </section>
  );
};
export default Profile;
