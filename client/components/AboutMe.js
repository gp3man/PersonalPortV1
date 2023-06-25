import React from "react";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const {ref, inView} = useInView
  return (
      <section className="page" id="AboutMe">
        <h1>AboutMe</h1>
        <img src="Greg.jpg" />
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
      </section>
  );
};
export default AboutMe;
