import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { HiMiniPhoto } from "react-icons/hi2";
const ProjectCard = ({ data }) => {
  const { screenshots, summary, name, link } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? screenshots.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === screenshots.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const gotToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div>
      <h1 className="uppercase italic text-2xl font-bold text-violet-600 m-6">
        {name}
      </h1>
      <div className="flex">
        <div>
          <div className="min-h-[300px] min-w-[500px] w-full m-auto py-16 px-4 relative group">
            <div
              style={{ backgroundImage: `url(${screenshots[currentIndex]})` }}
              className="absolute top-0 left-0 w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-slate-50 cursor-pointer">
              {" "}
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-slate-50 cursor-pointer">
              {" "}
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
          <div className="flex top-4 justify-center py-2">
            {screenshots.map((screenshot, slideIndex) => (
              <div
                key={slideIndex}
                className="text-2xl text-violet-700 cursor-pointer"
                onClick={() => gotToSlide(slideIndex)}
              >
                <HiMiniPhoto />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/6 h-1/6 pl-10 flex-wrap text-right">
          <p>{summary}</p>
          <a
            className="italic align-text-bottom hover:text-blue-700 pt-10"
            href={link}
            target="new"
          >
            Go To Page
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
