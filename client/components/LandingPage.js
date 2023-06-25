import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import StartPage from "./HeroPage";
import { AnimatePresence, motion, useInView } from "framer-motion";

const LandingPage = () => {
  const location = useLocation();
  const pageAnimate={
    offscreen:{x:-100},
    onscreen:{x:0, transition:{type:"spring", bounce:0.4, duration:3}}
  }
  // const {ref, inView}= useInView();
  // useEffect(()=>{
  //   console.log('use effect hook, inView =', inView)
  // },[])
  return (
    <>
      <div id="LandingPage">
    <AnimatePresence>
      <motion.div
      initial={"offscreen"}
      animate={"onscreen"}
      variants={pageAnimate}
    >
      <StartPage />
      </motion.div>
      <motion.div
      initial={"offscreen"}
      animate={"onscreen"}
      variants={pageAnimate}
      >
            <TechStack />
      </motion.div>
      <motion.div
      initial={"offscreen"}
      animate={"onscreen"}
      variants={pageAnimate}
      >
            <AboutMe />
      </motion.div>
      <motion.div
      initial={"offscreen"}
      animate={"onscreen"}
      variants={pageAnimate}
      >
            <Portfolio />
      </motion.div>
      <motion.div
      initial={"offscreen"}
      animate={"onscreen"}
      variants={pageAnimate}
      >
      <ContactForm />
      </motion.div>
      </AnimatePresence>
      </div>
    </>
  );
};

export default LandingPage;
