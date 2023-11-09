"use client";
import Link from "next/link";

const FixedMenu = () => {
  return (
    <div className="z-50 fixed bottom-3 left-16  ">
      <Link
        href="/"
        className="absolute bottom-16 right-0 cursor-pointer fa fa-home text-3xl fa-2x  p-3 rounded-full bg-red-600 text-white  opacity-50 hover:opacity-100"
      ></Link>
      <div
        onClick={() => {
          window.scroll(0, 0);
        }}
        className=" absolute bottom-0 right-0 cursor-pointer fa fa-chevron-up text-3xl fa-2x  p-3 rounded-full bg-red-600 text-white opacity-50 hover:opacity-100"
      ></div>
    </div>
  );
};
export default FixedMenu;
