import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard.jsx";
import M1 from "../../src/assets/Mr-m1.PNG"
import Shop1 from "../../src/assets/Shop-A-Shaq1.PNG"
const Portfolio = () => {
  const animation = useAnimation();
  const {ref, inView}= useInView({threshold: 0.3});
  useEffect(()=>{
    console.log('PortPage, inView =', inView)
    if(inView){
      animation.start({x:0, transition:{type:"spring", bounce:0.4, duration:3}
      })
    }
    if(!inView){animation.start({x:-100}
      )}
  },[inView])
  const projects =[
    {
      screenshots: Shop1,
      summary: "An e-commerce website using frontend and backend tech",
      name: "Shop-A-Shaq",
      link: "https://graceshopperteam4.onrender.com/"
    },
    {
      screenshots: M1,
      summary: "A survial game created using javascript",
      name: "Mr. Meowgi",
      link: "https://mr-meowgi.onrender.com/"
    }
  ]
  return (
    <motion.section ref={ref} animate={animation} className="page" id="Portfolio">
      <h1 className="uppercase text-4xl text-violet-600 m-6">Portfolio</h1>
      <div>
      {projects.map((project)=>{
        return <ProjectCard data={project} key={project.name}/>
      })}
      </div>
    </motion.section>
  );
};
export default Portfolio;
