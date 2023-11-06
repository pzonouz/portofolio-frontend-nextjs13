"use client";

import { useState, useEffect, useCallback } from "react";
import "./Events.css";
import { axiosClient } from "../utils/axios";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Loading from "./Loading";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [loading, setLoading] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState([]);

  const fetchEvents = async () => {
    setLoading(true);
    const response = await axiosClient.get("/events/");
    setLoading(false);
    setEvents(response.data);
  };
  const onSelect = useCallback((emblaApi, eventName) => {
    setCarouselIndex(emblaApi.selectedScrollSnap());
  }, []);
  useEffect(() => {
    fetchEvents();
  }, []);
  useEffect(() => {
    if (emblaApi) emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    // <div className=" px-[1rem] py-12 my-12  bg-gray-300">
    //   {events.map((event) => {
    //     return (
    //       <div>
    //         <div className=" text-center mb-4">{event.name}</div>
    //         <div key={event.id} className="h_iframe-aparat_embed_frame">
    //           <span style={{ display: "block", "padding-top": "57%" }}></span>
    //           <iframe
    //             src={event.video_link}
    //             allowFullScreen="true"
    //             webkitallowfullscreen="true"
    //             mozallowfullscreen="true"
    //           ></iframe>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <div>
      {loading ? <Loading /> : ""}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {events.map((event) => {
            return (
              <div className="embla__slide">
                <div>{event.name}</div>
                <div key={event.id} className="h_iframe-aparat_embed_frame">
                  <span
                    style={{ display: "block", "padding-top": "57%" }}
                  ></span>
                  <iframe
                    src={event.video_link}
                    allowFullScreen="true"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                  ></iframe>
                </div>
              </div>
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
export default Events;
