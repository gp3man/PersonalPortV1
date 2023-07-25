import React, {useEffect} from "react";
import {  motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer'
import Greg from "../../src/assets/greg.jpg"
import PhotoCard from "./PhotographyCard.jsx";
const AboutMe = () => {
  const animation = useAnimation();
  const {ref, inView}= useInView({threshold: 0.1});
  useEffect(()=>{
    console.log('AboutPage, inView =', inView)
    if(inView){
      animation.start({x:0, transition:{type:"spring", bounce:0.4, duration:3}
      })
    }
    if(!inView){animation.start({x:-100}
      )}
  },[inView])
  return (
      <motion.section ref={ref} animate={animation} className="page px-14" id="AboutMe">
        <h1 className="uppercase text-4xl text-violet-600 m-6">About Me</h1>
        <img className="w-24 h-24 rounded-full" src={Greg}/>
        <p className="text-2xl text-left dark:text-slate-50 w-[88%] pt-14 font-extralight italic">
          Prior to my pivot into the tech industry I was immersed in the ups and
          down of being a retail/warehouse manager. After bumping my head, going
          full speed trying to make a living by climbing ladders, I took a hard
          look back and saw titles may have changed but my impact remained the
          same. Taking the my internal conflict of not making a difference on a
          macro level, I made the calculated leap of faith into the career of my
          dreams! I have now graduated my web development boot camp. I seek a
          path to create technologies that will impact and advance the human
          experience on this floating rock we all share.
        </p>
        <PhotoCard />
      </motion.section>
  );
};
export default AboutMe;
