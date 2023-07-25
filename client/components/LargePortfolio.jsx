import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import M1 from "../../src/assets/Mr-m1.PNG";
import M2 from "../../src/assets/Mr-m2.PNG";
import M3 from "../../src/assets/Mr-m3.PNG";
import M4 from "../../src/assets/Mr-m4.PNG";
import Shop1 from "../../src/assets/Shop-A-Shaq1.PNG";
import Shop2 from "../../src/assets/Shop-A-Shaq2.PNG";
import Shop3 from "../../src/assets/Shop-A-Shaq3.PNG";
import NavBar from "./NavBar.jsx";
const LargePortfolio = () => {
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
    <section className="page dark:text-slate-300 snap-start" id="Portfolio">
      <NavBar />
      <h1 className="uppercase text-4xl text-violet-600 m-6">Portfolio</h1>
      <div className="h-[90%] w-[90%]">
        {projects.map((project) => {
          return <ProjectCard data={project} key={project.name} />;
        })}
      </div>
    </section>
  );
};
export default LargePortfolio;