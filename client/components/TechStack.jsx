import React, { useEffect } from "react";
import BarIcon from "./BarIcon.jsx";
import {  motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer'
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
  const {ref, inView}= useInView({threshold: 0.1});
  useEffect(()=>{
    console.log('TechPage, inView =', inView)
    if(inView){
      animation.start({x:0, transition:{type:"spring", bounce:0.4, duration:3}
      })
    }
    if(!inView){animation.start({x:-300}
      )}
  },[inView])
  //future use
  // const FrontEnd = [
  //     {name: "React", icon: <DiReact />},
  //   ]
  // const BackEnd = []
  // const ToolsDesigns = []
  return (
    <motion.section ref={ref} animate={animation} className="page snap-start" id="TechStack">
      <div className="uppercase text-4xl text-violet-600 m-6">
      Tech Stack
      </div>
      <div className="flex dark:text-slate-50">
        <div>
          FrontEnd
          <div className="columns-2 p-4 ">
          <BarIcon icon={<DiReact />}>
            <caption>React</caption>{" "}
          </BarIcon>
          <BarIcon icon={<TbBrandRedux />}>
            <caption>Redux</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiJsBadge />}>
            <caption>NodeJS</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiCss3 />}>
            <caption>CSS</caption>{" "}
          </BarIcon>
          <BarIcon icon={<TbBrandTailwind />}>
            <caption>TailwindCSS</caption>{" "}
          </BarIcon></div>
        </div>

        <div >
          BackEnd
          <div className="columns-2 p-4 ">
          <BarIcon icon={<BsFiletypeSql />}>
            <caption>SQL</caption>{" "}
          </BarIcon>
          <BarIcon icon={<SiSequelize />}>
            <caption>Sequelize</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiPostgresql />}>
            <caption>Postgresql</caption>{" "}
          </BarIcon>
          <BarIcon icon={<FaJava />}>
            <caption>Java</caption>{" "}
          </BarIcon></div>
        </div>

        <div>
          Tools
          <div className="columns-2 p-4 ">
          <BarIcon icon={<FaGit />}>
            <caption>Git</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiLinux />}>
            <caption>WSL</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiVisualstudio />}>
            <caption>Visual Studio Code</caption>{" "}
          </BarIcon>
          <BarIcon icon={<SiInsomnia />}>
            <caption>Insomnia</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiPhotoshop />}>
            <caption>PhotoShop Suite</caption>{" "}
          </BarIcon></div>
        </div>

        <div>
          Design
          <div className="columns-1 p-4 ">
          <BarIcon icon={<FaFigma />}>
            <caption>Figma</caption>{" "}
          </BarIcon></div>
        </div>
      </div>
    </motion.section>
  );
};
export default TechStack;
