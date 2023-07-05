import React, { useEffect } from "react";
import BarIcon from "./BarIcon.jsx";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ComputerMeme from "../../src/assets/Mymeme6.png";
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
  const handleScroll= (evt)=>{
    evt.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  return (
      <motion.section ref={ref} animate={animation} className="page" id="heroPage">
        <h1 className="text-7xl uppercase m-6">Gregory Pounds</h1>
        <h2 className="text-5xl uppercase bg-violet-500 text-slate-100 rounded-full m-6 p-2"> Software Developer</h2>
        <img className="w-24 h-24 rounded-full" src={ComputerMeme}/>
        <div className="flex content-around">
        <a href="https://github.com/gp3man" target="new" ><BarIcon icon={<ImGithub />}>
            <caption>GitHub</caption>{" "}
          </BarIcon></a>
          <a href="https://www.linkedin.com/in/gregory-pounds" target="new" ><BarIcon icon={<ImLinkedin />}>
            <caption>LinkedIn</caption>{" "}
          </BarIcon></a>
        </div>
        <button className="bg-violet-500 text-slate-100 rounded-3xl p-2 hover:bg-rose-400 hover:text-slate-800" onClick={handleScroll}>Contact</button>
      </motion.section>
  );
};
export default heroPage;
