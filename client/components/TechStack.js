import React from "react";
const TechStack = ()=>{

  return(
  <section className="flex items-center" id="TechStack">
  <h1>TechStack</h1>
  <div className="flex">
  <div className="columns-1">FrontEnd
      <ul>
      <li>React</li>
      <li>Redux</li>
      <li>NodeJs</li>
      <li>Css</li>
      <li>TailWindCss</li>
      </ul>
    </div>

      <div className="columns-2">BackEnd
        <ul>
          <li>Sql</li>
          <li>Sequalize</li>
          <li>Postgres</li>
          <li>Java</li>
        </ul>
      </div>

      <div className="columns-3">Tools
        <ul>
          <li>Git</li>
          <li>VsCode</li>
          <li>Insomnia</li>
          <li>PostBird</li>
          <li>PhotoShop</li>
          <li>LightRoom</li>
        </ul>
      </div>

      <div className="columns-4">Design
        <ul>
          <li>Figma</li>
          <li>ExcaliDraw</li>
        </ul>
      </div>
    </div>
  </section>
)
}
export default TechStack;
