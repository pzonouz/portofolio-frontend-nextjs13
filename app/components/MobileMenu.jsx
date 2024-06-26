"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const MobileMenu = ({ parts, services, classes }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileMenuSlide, setMobileMenuSlide] = useState(false);
  const [L1MenuActive, setL1MenuActive] = useState(null);
  const [L2MenuActive, setL2MenuActive] = useState(null);
  const [L3MenuActive, setL3MenuActive] = useState(null);

  const mobileToggleClickHandler = () => {
    if (mobileMenuVisible) {
      setMobileMenuSlide(false);
      setTimeout(() => {
        setMobileMenuVisible(false);
      }, 1000);
    } else {
      setMobileMenuVisible(true);
      setL1MenuActive(false);
      setL2MenuActive(false);
      setL3MenuActive(false);
      setMobileMenuSlide(true);
    }
  };
  return (
    <div className="md:hidden">
      <div className=" relative overflow-hidden h-16 flex flex-row items-center bg-red-600">
        <div
          id="mobileMenuToggle"
          className=" cursor-pointer"
          onClick={mobileToggleClickHandler}
        >
          <div
            className={`${
              mobileMenuVisible
                ? ""
                : "fa fa-bars fa-lg text-white bg-red-600 p-2 pr-4"
            }`}
          ></div>
        </div>
        <div className="theme-text-color font-bold pr-4 flex flex-col items-center">
          <Link href="/">گروه جاویدان صنعت</Link>
          <Link href="/" className=" text-[0.7rem]">
            فردای روشن خدمات
          </Link>
        </div>
        <Link href="/" className="text-lg cursor-pointer absolute left-0">
          <Image
            width={256}
            height={216}
            src="/arm2000.png"
            alt="logo"
            className="h-[4.5rem] w-[5.5rem]"
          />
        </Link>
      </div>
      <div
        className={`top-0 fixed w-screen h-screen bg-gray-200/60 z-30
        ${mobileMenuVisible ? "translate-x-0" : "translate-x-full"}`}
        id="menu-back"
        onClick={mobileToggleClickHandler}
      >
        <div
          id="L1 Menu"
          className={` transition-transform duration-[1s] ease-in-out ${
            mobileMenuSlide ? "translate-x-0" : "translate-x-80"
          } w-80 h-screen md:hidden flex-col absolute items-center justify-around
          text-white mx-auto
          theme-menu-background-color
          theme-menu-text-color`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              lineHeight: "3rem",
              borderBottom: "solid 1px rgb(156 163 175)",
            }}
            className={`w-full
         text-2xl `}
          >
            <Link
              onClick={() => {
                mobileToggleClickHandler();
              }}
              className="px-4 flex flex-row items-center justify-between"
              href="/"
            >
              صفحه اصلی
            </Link>
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              lineHeight: "3rem",
              borderBottom: "solid 1px rgb(156 163 175)",
            }}
            className={`w-full
             text-2xl ${
               L1MenuActive == "products"
                 ? "theme-menu-selected-background-color"
                 : ""
             }`}
            key={1}
          >
            <div className={`px-4 flex flex-row items-center justify-between`}>
              <Link
                className=""
                href="/products/parts"
                onClick={() => {
                  setMobileMenuVisible(false);
                }}
              >
                محصولات
              </Link>
              {parts?.length ? (
                <div
                  className=" cursor-pointer transition-all duration-500 ease-in-out"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (L1MenuActive == "parts") {
                      setL1MenuActive(null);
                      return;
                    }
                    setL1MenuActive("parts");
                    setL2MenuActive(null);
                    setL3MenuActive(null);
                  }}
                >
                  {!(L1MenuActive == "parts") ? <div>+</div> : <div>-</div>}
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              id="L2 Menu"
              className={`${
                L1MenuActive == "parts" ? "flex" : "hidden"
              } flex-col theme-menu-background-color items-center justify-center w-full `}
            >
              {Array.isArray(parts) ? (
                parts?.map((item1) => {
                  return (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      style={{
                        lineHeight: "3rem",
                        borderBottom: "solid 1px rgb(156 163 175)",
                      }}
                      className={` text-center text-xl w-full ${
                        L2MenuActive == item1.name
                          ? " theme-menu-selected-background-color theme-menu-text-color border-b-2"
                          : ""
                      }`}
                      key={item1.id}
                    >
                      <div className="flex flex-row-reverse items-center justify-between px-8">
                        {item1.children.length ? (
                          <div
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (L2MenuActive == item1.name) {
                                setL2MenuActive(null);
                                return;
                              }
                              setL2MenuActive(item1.name);
                              setL3MenuActive(null);
                            }}
                          >
                            {!(L2MenuActive === item1.name) ? (
                              <div>+</div>
                            ) : (
                              <div>-</div>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                        <Link
                          className={`${
                            item1.children.length
                              ? " "
                              : "w-full self-start text-right"
                          }`}
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
                        } flex-col theme-menu-background-color w-full items-center justify-center `}
                      >
                        {item1.children?.map((item2) => {
                          return (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                lineHeight: "3rem",
                                borderBottom: "solid 1px rgb(156 163 175)",
                              }}
                              className={`${
                                L2MenuActive === item1.name ? "" : "hidden"
                              } w-full text-lg ${
                                L3MenuActive == item2.name
                                  ? " theme-menu-selected-background-color border-b-2"
                                  : ""
                              } `}
                              key={item2.id}
                            >
                              <div className="flex flex-row-reverse items-center justify-between px-12">
                                {item2.children.length ? (
                                  <div
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (L3MenuActive == item2.name) {
                                        setL3MenuActive(null);
                                        return;
                                      }
                                      setL3MenuActive(item2.name);
                                    }}
                                  >
                                    {!(L3MenuActive === item2.name) ? (
                                      <div>+</div>
                                    ) : (
                                      <div>-</div>
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                                <Link
                                  className={`${
                                    item2.children.length
                                      ? " "
                                      : "w-full self-start text-right"
                                  }`}
                                  onClick={() => setMobileMenuVisible(false)}
                                  href={`/products/by_level2/${item2.id}`}
                                >
                                  {item2.name}
                                </Link>
                              </div>

                              <div
                                id="L4 Menu"
                                className={`${
                                  L3MenuActive === item2.name
                                    ? "flex"
                                    : "hidden"
                                } flex-col theme-menu-background-color w-full items-center justify-center `}
                              >
                                {item2.children?.map((item3) => {
                                  return (
                                    <Link
                                      href={`/products/by_level3/${item3.id}`}
                                      style={{
                                        lineHeight: "3rem",
                                        borderBottom:
                                          "solid 1px rgb(156 163 175)",
                                      }}
                                      className={`${
                                        L3MenuActive === item2.name
                                          ? ""
                                          : "hidden"
                                      } theme-menu-selected-background-color text-center w-full text-sm `}
                                      key={item3.id}
                                      onClick={(e) => {
                                        e.stopPropagation();
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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              lineHeight: "3rem",
              borderBottom: "solid 1px rgb(156 163 175)",
            }}
            className={`w-full
             text-2xl ${
               L1MenuActive == "services"
                 ? "theme-menu-selected-background-color"
                 : ""
             }`}
            key={2}
          >
            <div className={`px-4 flex flex-row items-center justify-between`}>
              <Link
                className=""
                href="/products/services/"
                onClick={() => {
                  setMobileMenuVisible(false);
                }}
              >
                خدمات ۳۶۰
              </Link>
              {services.length ? (
                <div
                  className=" cursor-pointer transition-all duration-500 ease-in-out"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (L1MenuActive == "services") {
                      setL1MenuActive(null);
                      return;
                    }
                    setL1MenuActive("services");
                    setL2MenuActive(null);
                    setL3MenuActive(null);
                  }}
                >
                  {!(L1MenuActive == "services") ? <div>+</div> : <div>-</div>}
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              id="L2 Menu"
              className={`${
                L1MenuActive == "services" ? "flex" : "hidden"
              } flex-col theme-menu-background-color items-center justify-center w-full `}
            >
              {Array.isArray(services) ? (
                services?.map((item1) => {
                  return (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      style={{
                        lineHeight: "3rem",
                        borderBottom: "solid 1px rgb(156 163 175)",
                      }}
                      className={` text-center text-xl w-full ${
                        L2MenuActive == item1.name
                          ? " theme-menu-selected-background-color theme-menu-text-color border-b-2"
                          : ""
                      }`}
                      key={item1.id}
                    >
                      <div className="flex flex-row-reverse items-center justify-between px-8">
                        {item1.children.length ? (
                          <div
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (L2MenuActive == item1.name) {
                                setL2MenuActive(null);
                                return;
                              }
                              setL2MenuActive(item1.name);
                              setL3MenuActive(null);
                            }}
                          >
                            {!(L2MenuActive === item1.name) ? (
                              <div>+</div>
                            ) : (
                              <div>-</div>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                        <Link
                          className={`${
                            item1.children.length
                              ? " "
                              : "w-full self-start text-right"
                          }`}
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
                        } flex-col theme-menu-background-color w-full items-center justify-center `}
                      >
                        {item1.children?.map((item2) => {
                          return (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                lineHeight: "3rem",
                                borderBottom: "solid 1px rgb(156 163 175)",
                              }}
                              className={`${
                                L2MenuActive === item1.name ? "" : "hidden"
                              } w-full text-lg ${
                                L3MenuActive == item2.name
                                  ? " theme-menu-selected-background-color border-b-2"
                                  : ""
                              } `}
                              key={item2.id}
                            >
                              <div className="flex flex-row-reverse items-center justify-between px-12">
                                {item2.children.length ? (
                                  <div
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (L3MenuActive == item2.name) {
                                        setL3MenuActive(null);
                                        return;
                                      }
                                      setL3MenuActive(item2.name);
                                    }}
                                  >
                                    {!(L3MenuActive === item2.name) ? (
                                      <div>+</div>
                                    ) : (
                                      <div>-</div>
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                                <Link
                                  className={`${
                                    item2.children.length
                                      ? " "
                                      : "w-full self-start text-right"
                                  }`}
                                  onClick={() => setMobileMenuVisible(false)}
                                  href={`/products/by_level2/${item2.id}`}
                                >
                                  {item2.name}
                                </Link>
                              </div>

                              <div
                                id="L4 Menu"
                                className={`${
                                  L3MenuActive === item2.name
                                    ? "flex"
                                    : "hidden"
                                } flex-col theme-menu-background-color w-full items-center justify-center `}
                              >
                                {item2.children?.map((item3) => {
                                  return (
                                    <Link
                                      href={`/products/by_level3/${item3.id}`}
                                      style={{
                                        lineHeight: "3rem",
                                        borderBottom:
                                          "solid 1px rgb(156 163 175)",
                                      }}
                                      className={`${
                                        L3MenuActive === item2.name
                                          ? ""
                                          : "hidden"
                                      } theme-menu-selected-background-color text-center w-full text-sm `}
                                      key={item3.id}
                                      onClick={(e) => {
                                        e.stopPropagation();
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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              lineHeight: "3rem",
              borderBottom: "solid 1px rgb(156 163 175)",
            }}
            className={`w-full
             text-2xl ${
               L1MenuActive == "classes"
                 ? "theme-menu-selected-background-color"
                 : ""
             }`}
            key={3}
          >
            <div className={`px-4 flex flex-row items-center justify-between`}>
              <Link
                className=""
                href="/products/classes"
                onClick={() => {
                  setMobileMenuVisible(false);
                }}
              >
                آموزش
              </Link>
              {classes.length ? (
                <div
                  className=" cursor-pointer transition-all duration-500 ease-in-out"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (L1MenuActive == "classes") {
                      setL1MenuActive(null);
                      return;
                    }
                    setL1MenuActive("classes");
                    setL2MenuActive(null);
                    setL3MenuActive(null);
                  }}
                >
                  {!(L1MenuActive == "classes") ? <div>+</div> : <div>-</div>}
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              id="L2 Menu"
              className={`${
                L1MenuActive == "classes" ? "flex" : "hidden"
              } flex-col theme-menu-background-color items-center justify-center w-full `}
            >
              {Array.isArray(classes) ? (
                classes?.map((item1) => {
                  return (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      style={{
                        lineHeight: "3rem",
                        borderBottom: "solid 1px rgb(156 163 175)",
                      }}
                      className={` text-center text-xl w-full ${
                        L2MenuActive == item1.name
                          ? " theme-menu-selected-background-color theme-menu-text-color border-b-2"
                          : ""
                      }`}
                      key={item1.id}
                    >
                      <div className="flex flex-row-reverse items-center justify-between px-8">
                        {item1.children.length ? (
                          <div
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (L2MenuActive == item1.name) {
                                setL2MenuActive(null);
                                return;
                              }
                              setL2MenuActive(item1.name);
                              setL3MenuActive(null);
                            }}
                          >
                            {!(L2MenuActive === item1.name) ? (
                              <div>+</div>
                            ) : (
                              <div>-</div>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                        <Link
                          className={`${
                            item1.children.length
                              ? " "
                              : "w-full self-start text-right"
                          }`}
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
                        } flex-col theme-menu-background-color w-full items-center justify-center `}
                      >
                        {item1.children?.map((item2) => {
                          return (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                lineHeight: "3rem",
                                borderBottom: "solid 1px rgb(156 163 175)",
                              }}
                              className={`${
                                L2MenuActive === item1.name ? "" : "hidden"
                              } w-full text-lg ${
                                L3MenuActive == item2.name
                                  ? " theme-menu-selected-background-color border-b-2"
                                  : ""
                              } `}
                              key={item2.id}
                            >
                              <div className="flex flex-row-reverse items-center justify-between px-12">
                                {item2.children.length ? (
                                  <div
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (L3MenuActive == item2.name) {
                                        setL3MenuActive(null);
                                        return;
                                      }
                                      setL3MenuActive(item2.name);
                                    }}
                                  >
                                    {!(L3MenuActive === item2.name) ? (
                                      <div>+</div>
                                    ) : (
                                      <div>-</div>
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                                <Link
                                  className={`${
                                    item2.children.length
                                      ? " "
                                      : "w-full self-start text-right"
                                  }`}
                                  onClick={() => setMobileMenuVisible(false)}
                                  href={`/products/by_level2/${item2.id}`}
                                >
                                  {item2.name}
                                </Link>
                              </div>

                              <div
                                id="L4 Menu"
                                className={`${
                                  L3MenuActive === item2.name
                                    ? "flex"
                                    : "hidden"
                                } flex-col theme-menu-background-color w-full items-center justify-center `}
                              >
                                {item2.children?.map((item3) => {
                                  return (
                                    <Link
                                      href={`/products/by_level3/${item3.id}`}
                                      style={{
                                        lineHeight: "3rem",
                                        borderBottom:
                                          "solid 1px rgb(156 163 175)",
                                      }}
                                      className={`${
                                        L3MenuActive === item2.name
                                          ? ""
                                          : "hidden"
                                      } theme-menu-selected-background-color text-center w-full text-sm `}
                                      key={item3.id}
                                      onClick={(e) => {
                                        e.stopPropagation();
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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              lineHeight: "3rem",
              borderBottom: "solid 1px rgb(156 163 175)",
            }}
            className={`w-full
             text-2xl ${
               L1MenuActive == "classes"
                 ? "theme-menu-selected-background-color"
                 : ""
             }`}
            key={3}
          >
            <div className={`px-4 flex flex-row items-center justify-between`}>
              <Link className="" href="/projects/">
                پروژه ها
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
