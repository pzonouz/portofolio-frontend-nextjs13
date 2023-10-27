import React from "react";

const TopBar = () => {
  return (
    <div className=" bg-slate-800 flex flex-row items-center justify-between w-full h-8 text-white px-4">
      <div
        id="social-networks"
        className=" flex flex-row"
        style={{ gap: "1rem" }}
      >
        <a href="#" className="fa fa-telegram"></a>
        <a href="#" className="fa fa-whatsapp"></a>
        <a href="#" className="fa fa-instagram"></a>
      </div>
      <a href="tel:04135420988">04135420988</a>
    </div>
  );
};

export default TopBar;
