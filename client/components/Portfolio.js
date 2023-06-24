import React from "react";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <section id="Portfolio">
      <h1>Portfolio</h1>
    </section>
    </motion.div>
  );
};f
export default Portfolio;
