"use client";
import { useEffect, useState } from "react";
import Lightbox from "react-spring-lightbox";
import Loading from "@/app/components/Loading";
import Image from "next/image";

const Project = ({ project, loading }) => {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    project.images?.map((item) => {
      setImages((prevState) => [
        ...prevState,
        { src: item.image, loading: "lazy", alt: item.name },
      ]);
    });
  }, [project]);
  useEffect(() => {
    const keyUpHandler = (e) => {};
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keydown", keyUpHandler);
    };
  }, []);
  return (
    <div
      className="mt-6  items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      {loading ? <Loading /> : ""}
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image width={800} height={800} src={project.image} />
        </div>
        <div className=" flex flex-col ga-10">
          <div className=" text-4xl mx-2 text-center"> {project.name}</div>
          <div id="preamble" className=" text-gray-600 px-4">
            {project.preamble}
          </div>
          <Lightbox
            isOpen={isOpen}
            // onPrev={gotoPrevious}
            // onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
          />
          <div className=" font-bold text-lg text-red-600 text-center my-4">
            <div>گالری تصاویر</div>
            <div className=" text-gray-700 text-[0.75rem] -mt-2">
              برای بزرگنمایی دوبار کلیک کنید
            </div>
          </div>
          <div
            id="Gallery"
            className=" grid grid-cols-2 gap-2 mx-[1rem] px-[1rem]"
          >
            {images.map((item, index) => {
              return (
                <Image
                  width={600}
                  height={600}
                  className=" "
                  src={item.src}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                    setCurrentIndex(index);
                  }}
                />
              );
            })}
          </div>
          <div className=" font-bold text-lg text-red-600 text-center my-4">
            <div>گالری ویديوها</div>
          </div>
          <div className=" grid grid-cols-1 gap-4 mx-[1rem] px-[1rem]">
            {project.videos?.map((item) => {
              return (
                <video controls>
                  return <source src={item.video} type="video/mp4"></source>;
                  مرورگرشما این ویديو را پشتیبانی نمیکند
                </video>
              );
            })}
          </div>
          {/* {project.projectType != "Sr" ? (
            <ul
              id="descriptions"
              className=" mt-8   tracking-wider w-full px-4 flex flex-col items-start justify-center"
            >
              <li className=" text-white bg-red-600 w-full py-2 px-2 rounded-t-lg">
                {project.projectType == "Pt" ? "مشخصات فنی" : ""}
                {project.projectType == "Cl" ? "مشخصات کلاس" : ""}
              </li>
              {project.descriptions?.map((item) => {
                return (
                  <li className=" odd:bg-gray-200 even:text-gray-800 px-2 py-2 w-full">
                    {item.field}
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )} */}
        </div>
      </div>

      <div className=" mt-16 p-2 bg-gray-200 w-full flex flex-col md:flex-row items-center justify-around gap-3">
        <i className=" mt-6 fa fa-phone fa-5x text-center"></i>
        <div>
          <div className=" mt-6"> نیاز به مشاوره دارید؟</div>
          <div className="mt-6 text-gray-600 ">
            جهت استعلام قیمت محصولات، مشاوره خرید و هر سوال دیگر میتوانید با ما
            بطور مستقیم در ارتباط دارید.
          </div>
        </div>
        <div>
          <div className=" text-center text-gray-600 text-2xl font-bold tracking-wide">
            09146160216
          </div>
          <div className=" text-center text-gray-600">
            آقای محمدنژاد-مدیر فروش
          </div>
          <div className=" mt-6 text-center text-2xl font-bold tracking-wide text-gray-600">
            09147868011
          </div>
          <div className=" text-center text-gray-600">آقای ساجدی -مدیر فنی</div>
        </div>
      </div>
    </div>
  );
};
export default Project;
