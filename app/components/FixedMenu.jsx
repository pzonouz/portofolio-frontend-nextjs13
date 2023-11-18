"use client";
import Link from "next/link";

const FixedMenu = () => {
  return (
    <div className="z-50 fixed bottom-3 left-16  ">
      <Link
        href="/"
        className="absolute bottom-16 right-0 cursor-pointer fa fa-home text-3xl fa-3x text-red-600  p-3 rounded-ful  opacity-50 hover:opacity-100"
      ></Link>
      <div
        onClick={() => {
          window.scroll(0, 0);
        }}
        className=" absolute bottom-0 right-0 cursor-pointer fa fa-chevron-circle-up text-3xl fa-3x text-red-600  p-2 rounded-full opacity-50 hover:opacity-100"
      ></div>
    </div>
  );
};
export default FixedMenu;
