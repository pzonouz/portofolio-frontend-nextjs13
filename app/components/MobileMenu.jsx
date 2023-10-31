"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MobileMenu = ({ products }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [L1MenuActive, setL1MenuActive] = useState(null);
  const [L2MenuActive, setL2MenuActive] = useState(null);
  const [L3MenuActive, setL3MenuActive] = useState(null);

  const mobileToggleClickHandler = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  return (
    <div className="md:hidden">
      <div className="relative flex flex-row items-center justify-around pt-5">
        <div
          id="mobileMenuToggle"
          className=" cursor-pointer"
          onClick={mobileToggleClickHandler}
        >
          <div
            className={`${
              mobileMenuVisible
                ? "fa fa-close fa-2x text-white bg-black p-2"
                : "fa fa-bars fa-2x text-white bg-red-600 p-2"
            }`}
          ></div>
        </div>
        <div className="text-white bg-red-600 px-4 py-2 rounded-md cursor-pointer">
          پرتال مشتریان
        </div>
        <Link href="/" className="text-lg cursor-pointer">
          LOGO
        </Link>
      </div>
      <div
        id="L1 Menu"
        className={` z-10 ${
          mobileMenuVisible ? "flex" : "hidden"
        } md:hidden top-28 flex-col absolute  w-full items-center justify-around text-white mx-auto bg-slate-800`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ lineHeight: "4rem" }}
          className={`w-full
             text-2xl ${
               L1MenuActive == "products"
                 ? " bg-red-600 text-white border-b-2 border-red-600"
                 : ""
             }`}
          key={1}
        >
          <div
            className={`flex flex-row-reverse items-center justify-between px-4`}
          >
            {products.length ? (
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  if (L1MenuActive == "products") {
                    setL1MenuActive(null);
                    return;
                  }
                  setL1MenuActive("products");
                  setL2MenuActive(null);
                  setL3MenuActive(null);
                }}
                className={` cursor-pointer fa ${
                  !(L1MenuActive == "products")
                    ? "fa-plus-square"
                    : "fa-minus-square"
                }`}
              ></i>
            ) : (
              ""
            )}
            <Link
              href="/products"
              onClick={() => {
                setMobileMenuVisible(false);
              }}
            >
              محصولات
            </Link>
          </div>
          <div
            id="L2 Menu"
            className={`${
              L1MenuActive == "products" ? "flex" : "hidden"
            } flex-col bg-slate-800 items-center justify-center w-full `}
          >
            {Array.isArray(products) ? (
              products?.map((item1) => {
                return (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    style={{ lineHeight: "4rem" }}
                    className={` text-center text-xl w-full ${
                      L2MenuActive == item1.name
                        ? " bg-red-600 text-white border-b-2 border-red-600"
                        : ""
                    }`}
                    key={item1.id}
                  >
                    <div className="flex flex-row-reverse items-center justify-between px-8">
                      {item1.children.length ? (
                        <i
                          onClick={(e) => {
                            e.stopPropagation();
                            if (L2MenuActive === item1.name) {
                              setL2MenuActive(null);
                              return;
                            }
                            setL2MenuActive(item1.name);
                            setL3MenuActive(null);
                          }}
                          className={` cursor-pointer fa ${
                            !(L2MenuActive === item1.name)
                              ? "fa-plus-square"
                              : "fa-minus-square"
                          }`}
                        ></i>
                      ) : (
                        ""
                      )}
                      <Link
                        onClick={() => setMobileMenuVisible(false)}
                        href={`/products/by_level1/${item1.id}`}
                      >
                        {item1.name}
                      </Link>
                    </div>
                    <div
                      id="L3 Menu"
                      className={`${
                        L2MenuActive === item1.name ? "flex" : "hidden"
                      } flex-col bg-slate-800 w-full items-center justify-center `}
                    >
                      {item1.children?.map((item2) => {
                        return (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            style={{ lineHeight: "4rem" }}
                            className={`${
                              L2MenuActive === item1.name ? "" : "hidden"
                            } w-full text-lg ${
                              L3MenuActive == item2.name
                                ? " bg-red-600 text-white border-b-2 border-red-600"
                                : ""
                            } `}
                            key={item2.id}
                          >
                            <div className="flex flex-row-reverse items-center justify-between px-12">
                              {item2.children.length ? (
                                <i
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (L3MenuActive === item2.name) {
                                      setL3MenuActive(null);
                                      return;
                                    }
                                    setL3MenuActive(item2.name);
                                  }}
                                  className={` cursor-pointer fa ${
                                    !(L3MenuActive === item2.name)
                                      ? "fa-plus-square"
                                      : "fa-minus-square"
                                  }`}
                                ></i>
                              ) : (
                                ""
                              )}
                              <Link
                                onClick={() => setMobileMenuVisible(false)}
                                href={`/products/by_level2/${item2.id}`}
                              >
                                {item2.name}
                              </Link>
                            </div>

                            <div
                              id="L4 Menu"
                              className={`${
                                L3MenuActive === item2.name ? "flex" : "hidden"
                              } flex-col bg-slate-800 w-full items-center justify-center `}
                            >
                              {item2.children?.map((item3) => {
                                return (
                                  <Link
                                    href={`/products/by_level3/${item3.id}`}
                                    style={{ lineHeight: "4rem" }}
                                    className={`${
                                      L3MenuActive === item2.name
                                        ? ""
                                        : "hidden"
                                    } text-center w-full text-sm  hover:bg-red-600 hover:text-white `}
                                    key={item3.id}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setMobileMenuVisible(false);
                                      // setL1MenuActive(null);
                                      // setMobileMenuVisible(false);
                                      // setMobileMenuVisible(false);
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
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
