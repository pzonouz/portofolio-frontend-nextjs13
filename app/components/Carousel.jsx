"use client";
import { useState, useEffect } from "react";
import { axiosClient } from "../utils/axios";
import Loading from "./Loading";
import Image from "next/image";

const Carousel = () => {
  const [loading, setLoading] = useState(false);
  const [carousel, setCarousel] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);

  const fetchCarousel = async () => {
    setLoading(true);
    const response = await axiosClient.get("/products/carousel/");
    setCarousel(response.data);
    setLoading(false);
  };

  const rightClickHandler = () => {
    if (slideNumber > carousel.length - 2) {
      setSlideNumber(0);
      return;
    }
    setSlideNumber(slideNumber + 1);
    return;
  };

  const leftClickHandler = () => {
    if (slideNumber == 0) {
      setSlideNumber(carousel.length - 1);
      return;
    }
    setSlideNumber(slideNumber - 1);
  };

  useEffect(() => {
    fetchCarousel();
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      rightClickHandler();
    }, 5000);
    return () => {
      clearInterval(carouselInterval);
    };
  }, [slideNumber, carousel]);

  return (
    <div
      id="carousel"
      className=" relative  md:w-2/3 mt-12 h-48  mx-auto flex flex-row items-center justify-between"
    >
      {loading ? <Loading /> : ""}

      {carousel?.map((item, index) => {
        return (
          <div
            key={index}
            className={`absolute overflow-hidden h-40 transition-all ease-in-out duration-[2s] ${
              slideNumber == index ? " opacity-100" : " opacity-0"
            } `}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-screen h-36 my-auto -z-20"
            />
          </div>
        );
      })}

      <div
        id="dots"
        className=" absolute flex flex-row-reverse gap-2 bottom-1  left-1/2 -translate-x-1/2 z-50"
      >
        {carousel?.map((item, index) => {
          return (
            <div
              key={index}
              className={` transition duration-1000 ease-in-out flex flex-row items-center justify-center cursor-pointer w-6 h-6 rounded-lg border-2 border-red-600 z-50 ${
                slideNumber == index
                  ? " bg-red-600 text-white"
                  : " text-red-600"
              }`}
              onClick={() => setSlideNumber(index)}
            >
              {index}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
