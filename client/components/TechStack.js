import React from "react";
import BarIcon from "./BarIcon";
import {
  DiJsBadge,
  DiReact,
  DiCss3,
  DiLinux,
  DiVisualstudio,
  DiPostgresql,
  DiPhotoshop,
} from "react-icons/di";
import { FaJava, FaGit, FaFigma } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandRedux, TbBrandTailwind } from "react-icons/tb";
import { SiSequelize, SiInsomnia } from "react-icons/si";

const TechStack = () => {
  return (
    <section className="flex items-center" id="TechStack">
      <h1>TechStack</h1>
      <div className="flex">
        <div className="columns-2">
          FrontEnd
          <BarIcon icon={<DiReact />}>
            <caption>React</caption>{" "}
          </BarIcon>
          <BarIcon icon={<TbBrandRedux />}>
            <caption>Redux</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiJsBadge />}>
            <caption>NodeJS</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiCss3 />}>
            <caption>CSS</caption>{" "}
          </BarIcon>
          <BarIcon icon={<TbBrandTailwind />}>
            <caption>TailwindCSS</caption>{" "}
          </BarIcon>
        </div>

        <div className="columns-2">
          BackEnd
          <BarIcon icon={<BsFiletypeSql />}>
            <caption>SQL</caption>{" "}
          </BarIcon>
          <BarIcon icon={<SiSequelize />}>
            <caption>Sequelize</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiPostgresql />}>
            <caption>Postgresql</caption>{" "}
          </BarIcon>
          <BarIcon icon={<FaJava />}>
            <caption>Java</caption>{" "}
          </BarIcon>
        </div>

        <div className="columns-2">
          Tools
          <BarIcon icon={<FaGit />}>
            <caption>Git</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiLinux />}>
            <caption>WSL</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiVisualstudio />}>
            <caption>Visual Studio Code</caption>{" "}
          </BarIcon>
          <BarIcon icon={<SiInsomnia />}>
            <caption>Insomnia</caption>{" "}
          </BarIcon>
          <BarIcon icon={<DiPhotoshop />}>
            <caption>Photoshop Suite</caption>{" "}
          </BarIcon>
        </div>

        <div className="columns-2">
          Design
          <BarIcon icon={<FaFigma />}>
            <caption>Figma</caption>{" "}
          </BarIcon>
        </div>
      </div>
    </section>
  );
};
export default TechStack;
