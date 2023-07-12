import React from "react";
import { motion } from "framer-motion";
import screenFrame from "../../src/assets/screenFrame.png"
const ProjectCard = ({data}) => {
  const {screenshots, summary, name, link} = data
  return (
    <div id="ProjectCard" >
      <h1 className="uppercase italic text-2xl font-bold text-violet-600 m-6">{name}</h1>
      <div className="relative">
        <img className="w-auto h-auto relative aspect-auto z-10" src={screenFrame} /><img className="w-fit aspect-auto absolute object-fill top-1 z-20 translate-x-20" src={screenshots}/>
      </div>

      <a className="hover:text-blue-700" href={link} target="new">Go To Page</a>
      <p>{summary}</p>
    </div>
  );
};
export default ProjectCard;
