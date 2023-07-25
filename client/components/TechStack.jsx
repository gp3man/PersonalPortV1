import React, { useEffect } from "react";
import BarIcon from "./BarIcon.jsx";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  DiJsBadge,
  DiReact,
  DiCss3,
  DiLinux,
  DiVisualstudio,
  DiPostgresql,
  DiPhotoshop,
} from "react-icons/di";
import { FaJava, FaGit, FaFigma } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandRedux, TbBrandTailwind } from "react-icons/tb";
import { SiSequelize, SiInsomnia } from "react-icons/si";

const TechStack = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  useEffect(() => {
    console.log("TechPage, inView =", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", bounce: 0.4, duration: 3 },
      });
    }
    if (!inView) {
      animation.start({ x: -300 });
    }
  }, [inView]);
  //future use
  // const FrontEnd = [
  //     {name: "React", icon: <DiReact />},
  //   ]
  // const BackEnd = []
  // const ToolsDesigns = []
  return (
    <motion.section
      ref={ref}
      animate={animation}
      className="page snap-start"
      id="TechStack"
    >
      <div className="uppercase text-4xl text-violet-600 m-6">Tech Stack</div>
      <div className="flex dark:text-slate-50">
        <div>
          FrontEnd
          <div className="columns-2 p-4">
            <BarIcon icon={<DiReact />} tooltip={"React"}></BarIcon>
            <BarIcon icon={<TbBrandRedux />} tooltip={"Redux"}></BarIcon>
            <BarIcon icon={<DiJsBadge />} tooltip={"NodeJS"}></BarIcon>
            <BarIcon icon={<DiCss3 />} tooltip={"CSS"}></BarIcon>
            <BarIcon
              icon={<TbBrandTailwind />}
              tooltip={"TailwindCSS"}
            ></BarIcon>
          </div>
        </div>

        <div>
          BackEnd
          <div className="columns-2 p-4">
            <BarIcon icon={<BsFiletypeSql />} tooltip={"SQL"}></BarIcon>
            <BarIcon icon={<SiSequelize />} tooltip={"Sequelize"}></BarIcon>
            <BarIcon icon={<DiPostgresql />} tooltip={"Postgresql"}></BarIcon>
            <BarIcon icon={<FaJava />} tooltip={"Java"}></BarIcon>
          </div>
        </div>

        <div>
          Tools
          <div className="columns-2 p-4">
            <BarIcon icon={<FaGit />} tooltip={"Git"}></BarIcon>
            <BarIcon icon={<DiLinux />} tooltip={"WSL"}></BarIcon>
            <BarIcon
              icon={<DiVisualstudio />}
              tooltip={"Visual Studio Code"}
            ></BarIcon>
            <BarIcon icon={<SiInsomnia />} tooltip={"Insomnia"}></BarIcon>
            <BarIcon icon={<DiPhotoshop />} tooltip={"PhotoShop"}></BarIcon>
          </div>
        </div>

        <div>
          Design
          <div className="columns-1 p-4">
            <BarIcon icon={<FaFigma />} tooltip={"Figma"}></BarIcon>
          </div>
        </div>
      </div>
      <div className="relative -z-10">
        <div className="absolute top-0 -left-4 w-32 h-32 bg-violet-600 rounded-full mix-blend-multiply blur-xl opacity-50 animate-blob animate-delay-2000"></div>
        <div className="absolute top-0 -right-4 h-32 w-32 bg-blue-300 rounded-full mix-blend-multiply blur-xl opacity-50 animate-blob animate-delay-8000"></div>
        <div className="absolute -bottom-8 left-4 h-32 w-32 bg-violet-800 rounded-full mix-blend-multiply blur-xl opacity-50 animate-blob animate-delay-4000"></div>
        <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-violet-400 rounded-full mix-blend-multiply blur-xl opacity-50 animate-blob animate-delay-6000"></div>
      </div>
      <div className="flex flex-wrap text-xl text-left w-2/3 pt-14">
        <p>
          <span className="text-bold text-violet-600">Looking Back: </span>Hey,
          there! I am a fullstack software developer that has been coding for
          10+ years, started when I was in highschool. The first language I
          learned was Java.
        </p>
        <p>
          <span className="text-bold text-violet-600">Where I Stand: </span> Now
          I am a certified fullstack developer well versed in: React, Redux,
          TailwindCss, FramerMotion and more, on the frontend. On the backend I
          know how to create and use api's, as well as creating and maintaining
          databases. If you add me to your team, no worries, I am very
          knowledgeable on using and maintaining a github organization.
        </p>
        <p>
          <span className="text-bold text-violet-600">Looking Forward:</span>
          After finishing up this portfolio site from scratch, I plan on working
          on more projects to expand my skills. This path will involve learning
          more about nosql and revisiting Java for expanding backend knowledge.
          For frontend knowledge, I will solidify understanding on Typescript
          and the Angular framework.
        </p>
      </div>
    </motion.section>
  );
};
export default TechStack;
