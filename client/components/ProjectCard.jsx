import React from "react";
import { motion } from "framer-motion";
const ProjectCard = ({data}) => {
  const {screenshots, summary, name, link} = data
  return (
    <div id="ProjectCard" >
      <h1 className="uppercase text-4xl text-violet-600 m-6">{name}</h1>
      <img src={screenshots}/>
      <a className="hover:text-rose-500" href={link} target="new">Go To Page</a>
      <p>{summary}</p>
    </div>
  );
};
export default ProjectCard;
