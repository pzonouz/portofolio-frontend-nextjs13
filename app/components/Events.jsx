"use client";

import { useState, useEffect, useCallback } from "react";
import "./Events.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Events = ({ events }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [carouselIndex, setCarouselIndex] = useState([]);

  const onSelect = useCallback((emblaApi, eventName) => {
    setCarouselIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className=" md:col-span-full mt-10 mx-[1rem]">
      <div className=" text-center text-2xl font-bold text-red-600">
        رویدادها
      </div>
      <div className="embla-events" ref={emblaRef}>
        <div className="embla__container-events">
          {events.map((event) => {
            return (
              <div key={event.id} className="embla__slide-events">
                <div className=" px-4">{event.name}</div>
                <Image src={event.image} width={800} height={800} />
              </div>
            );
          })}
        </div>
        {/* <div className="relative">
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
        </div> */}
      </div>
    </div>
  );
};
export default Events;
