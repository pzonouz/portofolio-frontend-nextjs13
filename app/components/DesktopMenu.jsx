"use client";
import { useState } from "react";
import Link from "next/link";

const DesktopMenu = ({ products }) => {
  const [L1MenuActive, setL1MenuActive] = useState(null);
  const [L2MenuActive, setL2MenuActive] = useState(null);
  const [L3MenuActive, setL3MenuActive] = useState(null);

  return (
    <div
      id="L1 Menu"
      className="hidden md:flex flex-row py-5 items-center justify-around w-2/3 mx-auto relative z-20"
    >
      <Link href="/">LOGO</Link>
      <div
        className={` relative flex flex-row-reverse gap-2 items-center cursor-pointer p-2 ${
          L1MenuActive == "Products" ? " text-red-600" : ""
        }`}
        key="1"
        onClick={() => {
          if (L1MenuActive == "Products") {
            setL1MenuActive(null);
            return;
          }
          setL1MenuActive("Products");
          setL2MenuActive(null);
          setL3MenuActive(null);
        }}
      >
        <i
          className={` cursor-pointer fa ${
            !(L1MenuActive == "Products") ? " fa-plus" : "fa-minus"
          }`}
        ></i>
        <Link
          onClick={(e) => {
            e.stopPropagation();
          }}
          href={`/products`}
        >
          محصولات
        </Link>
        <div
          id="L2 Menu"
          className={`${
            L1MenuActive == "Products" ? "flex" : "hidden"
          } absolute top-14 right-0 flex-col bg-slate-800 w-48 items-center justify-center `}
        >
          {Array.isArray(products)
            ? products.map((item1) => {
                return (
                  <div
                    className={` text-left h-8 cursor-default flex flex-row-reverse gap-2 items-center justify-between relative w-full px-2
                      ${
                        L2MenuActive == item1.id
                          ? " bg-red-600 text-white"
                          : "text-white"
                      }`}
                    key={item1.id}
                  >
                    {item1.children.length ? (
                      <i
                        onClick={(e) => {
                          e.stopPropagation();
                          if (L2MenuActive === item1.id) {
                            setL2MenuActive(null);
                            return;
                          }
                          setL2MenuActive(item1.id);
                          setL3MenuActive(null);
                        }}
                        className={` cursor-pointer fa ${
                          !(L2MenuActive === item1.id) ? "fa-plus" : "fa-minus"
                        }`}
                      ></i>
                    ) : (
                      ""
                    )}
                    <Link href={`/products/by_level1/${item1.id}`}>
                      {item1.name}
                    </Link>
                    <div
                      id="L3 Menu"
                      className={`${
                        L2MenuActive === item1.id ? "flex" : "hidden"
                      } absolute top-0 right-48 flex-col bg-slate-800 w-48 items-center justify-center `}
                    >
                      {item1.children.map((item2) => {
                        return (
                          <div
                            className={`${
                              L2MenuActive === item1.id ? "" : "hidden"
                            } h-8 flex flex-row-reverse gap-2 items-center justify-between p-2 relative w-full ${
                              L3MenuActive == item2.id
                                ? " bg-red-600 text-white"
                                : ""
                            } `}
                            key={item2.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (L3MenuActive === item2.id) {
                                setL3MenuActive(null);
                                return;
                              }
                              setL3MenuActive(item2.id);
                            }}
                          >
                            {item2.children.length ? (
                              <i
                                className={` cursor-pointer fa ${
                                  !(L3MenuActive === item2.id)
                                    ? "fa-plus"
                                    : "fa-minus"
                                }`}
                              ></i>
                            ) : (
                              ""
                            )}
                            <Link
                              onClick={(e) => {
                                e.stopPropagation();
                                setL1MenuActive(false);
                                setL2MenuActive(false);
                              }}
                              href={`/products/by_level2/${item2.id}`}
                            >
                              {item2.name}
                            </Link>

                            <div
                              id="L4 Menu"
                              className={`${
                                L3MenuActive === item2.id ? "flex" : "hidden"
                              } absolute top-0 right-48 flex-col bg-slate-800 w-48 items-center justify-center `}
                            >
                              {item2.children?.map((item3) => {
                                return (
                                  <Link
                                    href={`/products/by_level3/${item3.id}`}
                                    className={`${
                                      L3MenuActive === item2.id ? "" : "hidden"
                                    } h-8 flex flex-row gap-2 items-center justify-center relative w-full  hover:bg-red-600 hover:text-white `}
                                    key={item3.id}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setL1MenuActive(null);
                                    }}
                                  >
                                    {item3.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
