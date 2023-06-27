import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  return (
    <motion.section ref={ref} animate={animation} className="page" id="Portfolio">
      <h1 className="uppercase">Portfolio</h1>
    </motion.section>
  );
};
export default Portfolio;
