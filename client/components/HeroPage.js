import React, { useEffect } from "react";
import BarIcon from "./BarIcon";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const heroPage = () => {
  const animation = useAnimation();
  const {ref, inView}= useInView({threshold: 0.1});
  useEffect(()=>{
    console.log('HeroPage, inView =', inView)
    if(inView){
      animation.start({x:0, transition:{type:"spring", bounce:0.4, duration:3}
      })
    }
    if(!inView){animation.start({x:-100}
      )}
  },[inView])
  return (
      <motion.section ref={ref} animate={animation} className="page" id="heroPage">
        <h1 className="text-7xl uppercase m-6">Gregory Pounds</h1>
        <h2 className="text-5xl uppercase bg-violet-500 text-slate-100 rounded-full m-6 p-2"> Software Developer</h2>
        <div className="flex content-around">
          <BarIcon icon={<ImGithub />}>
            <caption>GitHub</caption>{" "}
          </BarIcon>
          <BarIcon icon={<ImLinkedin />}>
            <caption>LinkedIn</caption>{" "}
          </BarIcon>
        </div>
        <button className="bg-violet-500 text-slate-100 rounded-3xl p-2 hover:bg-rose-400 hover:text-slate-800">Contact</button>
      </motion.section>
  );
};
export default heroPage;
