import React, {useEffect} from "react";
import {  motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer'
const Greg = require("/assets/greg.jpg")
// import Greg from "/assets/greg.jpg"
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
      <motion.section ref={ref} animate={animation} className="page" id="AboutMe">
        <h1 className="uppercase text-4xl text-violet-600 m-6">About Me</h1>
        <img className="w-32 h-32" src={Greg} alt="profile picture"/>
        <h3>
          Prior to my pivot into the tech industry I was immersed in the ups and
          down of being a retail/warehouse manager. After bumping my head, going
          full speed trying to make a living by climbing ladders, I took a hard
          look back and saw titles may have changed but my impact remained the
          same. Taking the my internal conflict of not making a difference on a
          macro level, I made the calculated leap of faith into the career of my
          dreams! I have now graduated my web development boot camp. I seek a
          path to create technologies that will impact and advance the human
          experience on this floating rock we all share.
        </h3>
      </motion.section>
  );
};
export default AboutMe;
