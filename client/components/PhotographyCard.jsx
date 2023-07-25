import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import p1 from "../../src/assets/img1.jpg"
import p2 from "../../src/assets/img2.jpg"
import p3 from "../../src/assets/img3.jpg"
import p4 from "../../src/assets/img4.jpg"
// import { HiMiniPhoto } from "react-icons/hi2";
const photos = [p1,p2,p3,p4]
const PhotoCard = ( ) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // const gotToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  return (
    <div>
      <h1 className="uppercase italic text-2xl font-bold text-violet-600 m-6">
        Photography
      </h1>
      <div className="flex">
        <div>
          <div className="mobi:min-w-[300px] md:min-w-[500px] lg:min-w-[800px] xl:min-w-[1000px] min-h-[300px] w-full m-auto py-16 px-4 relative group">
            <div
              style={{ backgroundImage: `url(${photos[currentIndex]})` }}
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
          {/* <div className="flex top-4 justify-center py-2">
            {photos.map((shot, slideIndex) => (
              <div
                key={slideIndex}
                className="text-2xl text-violet-700 cursor-pointer"
                onClick={() => gotToSlide(slideIndex)}
              >
                <HiMiniPhoto />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default PhotoCard;
