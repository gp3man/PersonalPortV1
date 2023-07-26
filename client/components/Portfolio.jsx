import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard.jsx";
import M1 from "../../src/assets/Mr-m1.PNG";
import M2 from "../../src/assets/Mr-m2.PNG";
import M3 from "../../src/assets/Mr-m3.PNG";
import M4 from "../../src/assets/Mr-m4.PNG";
import Shop1 from "../../src/assets/Shop-A-Shaq1.PNG";
import Shop2 from "../../src/assets/Shop-A-Shaq2.PNG";
import Shop3 from "../../src/assets/Shop-A-Shaq3.PNG";
const Portfolio = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    // console.log("PortPage, inView =", inView);
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 5 },
      });
    }
    if (!inView) {
      animation.start({ x: -200, opacity: 0 });
    }
  }, [inView]);
  const projects = [
    {
      screenshots: [Shop1, Shop2, Shop3],
      summary:
        "An e-commerce website for big and tall individuals. Demo(Username:Admin, Pw: 1234)",
      name: "Shop-A-Shaq",
      link: "https://graceshopperteam4.onrender.com/",
    },
    {
      screenshots: [M1, M2, M3, M4],
      summary: "A silly survival game, yes, you play as a cat.",
      name: "Mr. Meowgi",
      link: "https://mr-meowgi.onrender.com/",
    },
  ];
  return (
    <motion.section
      ref={ref}
      animate={animation}
      className="page dark:text-slate-300 snap-start"
      id="Portfolio"
    >
      <h1 className="uppercase text-4xl text-violet-600 m-6">Portfolio</h1>
      <div className="h-[90%] w-[90%]">
        {projects.map((project, idx) => {
          return <ProjectCard data={project} key={idx} />;
        })}
      </div>
    </motion.section>
  );
};
export default Portfolio;
