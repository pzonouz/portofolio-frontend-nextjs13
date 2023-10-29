"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MobileMenu = ({ menu }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [L1MenuActive, setL1MenuActive] = useState(null);
  const [L2MenuActive, setL2MenuActive] = useState(null);
  const [L3MenuActive, setL3MenuActive] = useState(null);

  const mobileToggleClickHandler = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  useEffect(() => {}, [menu]);
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
                : "fa fa-bars fa-2x text-white bg-red-700 p-2"
            }`}
          ></div>
        </div>
        <div className="text-white bg-red-700 px-4 py-2 rounded-md cursor-pointer">
          پرتال مشتریان
        </div>
        <Link href="/" className="text-lg cursor-pointer">
          LOGO
        </Link>
      </div>
      <div
        id="L1 Menu"
        className={`${
          mobileMenuVisible ? "flex" : "hidden"
        } md:hidden top-28 flex-col absolute  w-full items-center justify-around text-white mx-auto bg-slate-800`}
      >
        {Object.entries(menu).map(([L1Key, L1Value]) => {
          return (
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ lineHeight: "4rem" }}
              className={`w-full
             text-2xl ${
               L1MenuActive == L1Key
                 ? " bg-red-600 text-white border-b-2 border-red-600"
                 : ""
             }`}
              key={L1Key}
            >
              <div
                className={`flex flex-row-reverse items-center justify-between px-4`}
              >
                {Object.entries(L1Value).length ? (
                  <i
                    onClick={(e) => {
                      e.stopPropagation();
                      if (L1MenuActive == L1Key) {
                        setL1MenuActive(null);
                        return;
                      }
                      setL1MenuActive(L1Key);
                      setL2MenuActive(null);
                      setL3MenuActive(null);
                    }}
                    className={` cursor-pointer fa ${
                      !(L1MenuActive == L1Key)
                        ? "fa-plus-square"
                        : "fa-minus-square"
                    }`}
                  ></i>
                ) : (
                  ""
                )}
                <Link href="/products">{L1Key}</Link>
              </div>
              <div
                id="L2 Menu"
                className={`${
                  L1MenuActive == L1Key ? "flex" : "hidden"
                } flex-col bg-slate-800 items-center justify-center w-full `}
              >
                {Array.isArray(L1Value) ? (
                  L1Value.map((item1) => {
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
                          <Link href={`/categoryL1/${item1.slug}`}>
                            {item1.name}
                          </Link>
                        </div>
                        <div
                          id="L3 Menu"
                          className={`${
                            L2MenuActive === item1.name ? "flex" : "hidden"
                          } flex-col bg-slate-800 w-full items-center justify-center `}
                        >
                          {item1.children.map((item2) => {
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
                                      className={`fa ${
                                        !(L3MenuActive === item2.name)
                                          ? "fa-plus-square"
                                          : "fa-minus-square"
                                      }`}
                                    ></i>
                                  ) : (
                                    ""
                                  )}
                                  {item2.name}
                                </div>

                                <div
                                  id="L4 Menu"
                                  className={`${
                                    L3MenuActive === item2.name
                                      ? "flex"
                                      : "hidden"
                                  } flex-col bg-slate-800 w-full items-center justify-center `}
                                >
                                  {item2.children.map((item3) => {
                                    return (
                                      <Link
                                        href={`/products/${item3.key}`}
                                        style={{ lineHeight: "4rem" }}
                                        className={`${
                                          L3MenuActive === item2.name
                                            ? ""
                                            : "hidden"
                                        } text-center w-full text-sm  hover:bg-red-600 hover:text-white `}
                                        key={item3.id}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setL1MenuActive(null);
                                          setMobileMenuVisible(false);
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
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
