"use client";
import { carousel } from "../Constants/carousel";

import { useState, useEffect } from "react";

const Carousel = () => {
  const [slideNumber, setSlideNumber] = useState(carousel[0].id);
  const rightClickHandler = () => {
    if (slideNumber > carousel.length - 1) {
      setSlideNumber(carousel[0].id);
      return;
    }
    setSlideNumber(slideNumber + 1);
  };
  const leftClickHandler = () => {
    if (slideNumber < carousel[0].id + 1) {
      setSlideNumber(carousel.length);
      return;
    }
    setSlideNumber(slideNumber - 1);
  };
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      rightClickHandler();
    }, 5000);
    return () => {
      clearInterval(carouselInterval);
    };
  }, [slideNumber]);
  return (
    <div
      id="container"
      className="relative w-screen md:w-2/3  mx-auto h-[10rem] flex flex-row items-center justify-between -z-10"
    >
      {/* <div
        className="absolute bg-gray-300 opacity-40 hover:opacity-100 w-10 h-10 rounded-full hidden md:flex flex-row items-center justify-center cursor-pointer"
        onClick={rightClickHandler}
      >
        <div className="fa fa-angle-right fa-2x "></div>
      </div> */}
      {carousel?.map((item) => {
        return (
          <div
            key={item.id}
            className={`absolute  transition-all duration-[2s] ${
              slideNumber == item.id ? " opacity-100" : " opacity-0"
            } `}
          >
            <img
              src={item.image}
              className="w-screen sm:h-[20rem] md:h-[30rem] relative -z-20"
            />
          </div>
        );
      })}
      {/* <div
        className="absolute left-0 opacity-40 hover:opacity-100 bg-gray-300 w-10 h-10 rounded-full hidden md:flex flex-row items-center justify-center cursor-pointer"
        onClick={leftClickHandler}
      >
        <div className="fa fa-angle-left fa-2x"></div>
      </div> */}
      <div
        id="dots"
        className=" absolute flex flex-row gap-2 -bottom-12 left-1/2 -translate-x-1/2"
      >
        {carousel?.map((item) => {
          return (
            <div
              key={item.id}
              className={` cursor-pointer w-3 h-3 rounded-full border-2 border-red-700 ${
                slideNumber == item.id ? " bg-red-700" : ""
              }`}
              onClick={() => setSlideNumber(item.id)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
