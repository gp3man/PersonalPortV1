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
        "An e-commerce website made for big and tall individuals. To browse application, use (USR: admin, PWD: 123). This was created alongside @justinpsiegel @Rhyan9311 @soloweshop243. We worked as a team to create a mock website that allows you to purchase clothing from our store. Though, the styling is wacky, we did a lot of heavy lifting in terms of creating the correct and proper database schema that will serve to the frontend react app. We plan on expanding on this app by fixing the styling, adding more items, and giving admin users extra controls over the database.",
      name: "Shop-A-Shaq",
      link: "https://graceshopperteam4.onrender.com/",
      github: "https://github.com/2301-gs-Team4/graceShopper",
    },
    {
      screenshots: [M2, M3, M1, M4],
      summary:
        "A silly survival game, yes, you play as a cat. This was created alongside @RayMangahas @Devontef213 @aaronsprayberry. We worked towards making our own creation of a game that anyone can enjoy. We plan to expand by creating more levels/maps, as well as adding more incentives to continue playing the game. This was a huge learning curve but it was definitely an eye opener to what it truly takes to create high quality game.",
      name: "Mr. Meowgi",
      link: "https://mr-meowgi.onrender.com/",
      github: "https://github.com/2301-FSA-Capstone-Team3/capstone_project",
    },
  ];
  return (
    <section className="page dark:text-slate-300" id="Portfolio">
      <NavBar />
      <h1 className="uppercase text-4xl text-violet-600 m-6">Portfolio</h1>
      <div className="h-[90%] w-[90%]">
        {projects.map((project) => {
          return <ProjectCard data={project} key={project.name} />;
        })}
      </div>
      <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
        More projects coming soon!
      </p>
    </section>
  );
};
export default LargePortfolio;
