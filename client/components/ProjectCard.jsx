import React from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
const ProjectCard = ({data}) => {
  const {screenshots, summary, name, link} = data
  return (
    <div className="border border-blue-700" >
      {/* {console.log(screenshots[0])} */}
      <h1 className="uppercase italic text-2xl font-bold text-violet-600 m-6">{name}</h1>
      <div className="max-h-[600px] max-w-[600px] w-full m-auto py-16 px-4 relative group">
        <div style={{ backgroundImage:`url(${screenshots[0]})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-slate-50 cursor-pointer"> <BsChevronCompactLeft size={30}/></div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-slate-50 cursor-pointer"> <BsChevronCompactRight size={30}/></div>
      </div>

      <a className="hover:text-blue-700" href={link} target="new">Go To Page</a>
      <p>{summary}</p>
    </div>
  );
};
export default ProjectCard;
