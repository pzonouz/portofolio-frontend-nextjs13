"use client";
import { useState, useEffect, useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./EmblaCarousel.css";
import Loading from "./Loading";
import { axiosClient } from "../utils/axios";
import Link from "next/link";
import Image from "next/image";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [loading, setLoading] = useState(false);
  const [carousel, setCarousel] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState([]);

  const fetchCarousel = async () => {
    setLoading(true);
    const response = await axiosClient.get("/products/carousel/");
    setCarousel(response.data);
    setLoading(false);
  };
  const onSelect = useCallback((emblaApi, eventName) => {
    setCarouselIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    fetchCarousel();
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="px-[1rem] mt-5 md:mt-0">
      {loading ? <Loading /> : ""}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {carousel.map((item) => {
            return (
              <Link
                href={`/products/by_id/${item.id}`}
                key={item.id}
                className="embla__slide"
              >
                <Image
                  width={700}
                  height={700}
                  src={item.image}
                  alt={item.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="relative">
          <div className=" flex flex-row gap-2  absolute bottom-3 right-1/2 translate-x-1/2">
            {emblaApi?.scrollSnapList().map((item, index) => {
              return (
                <div
                  key={index}
                  className={` w-4 h-4 border-[2px] rounded-full cursor-pointer  ${
                    carouselIndex == index
                      ? "bg-red-600 border-red-600"
                      : " border-gray-600/30  "
                  }  `}
                  onClick={() => {
                    emblaApi.scrollTo(index);
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
