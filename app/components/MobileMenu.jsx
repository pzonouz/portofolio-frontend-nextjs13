"use client";

import Link from "next/link";
import { navbarMenu } from "../Constants/navbar";

import { useState } from "react";

const MobileMenu = () => {
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
        {Object.entries(navbarMenu).map(([L1Key, L1Value]) => {
          return (
            <div
              style={{ lineHeight: "4rem" }}
              className={`cursor-pointer w-full
             text-2xl ${
               L1MenuActive == L1Key
                 ? " bg-red-600 text-white border-b-2 border-red-600"
                 : ""
             }`}
              key={L1Key}
              onClick={() => {
                if (L1MenuActive == L1Key) {
                  setL1MenuActive(null);
                  return;
                }
                setL1MenuActive(L1Key);
                setL2MenuActive(null);
                setL3MenuActive(null);
              }}
            >
              <div className=" flex flex-row items-center justify-center gap-2">
                {Object.entries(L1Value).length ? (
                  <i
                    className={`${
                      !(L1MenuActive == L1Key) ? "fa fa-angle-down" : ""
                    }`}
                  ></i>
                ) : (
                  ""
                )}
                {L1Key}
              </div>
              <div
                id="L2 Menu"
                className={`${
                  L1MenuActive == L1Key ? "flex" : "hidden"
                } flex-col bg-slate-800 items-center justify-center w-full `}
              >
                {Object.entries(L1Value).map(([L2Key, L2Value]) => {
                  return (
                    <div
                      style={{ lineHeight: "4rem" }}
                      className={` text-center text-xl w-full ${
                        L2MenuActive == L2Key
                          ? " bg-red-600 text-white border-b-2 border-red-600"
                          : ""
                      }`}
                      key={L2Key}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (L2MenuActive === L2Key) {
                          setL2MenuActive(null);
                          return;
                        }
                        setL2MenuActive(L2Key);
                        setL3MenuActive(null);
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-center">
                        {Object.entries(L2Value).length ? (
                          <i
                            className={`${
                              !(L2MenuActive === L2Key)
                                ? "fa fa-angle-down"
                                : ""
                            }`}
                          ></i>
                        ) : (
                          ""
                        )}
                        {L2Key}
                      </div>
                      <div
                        id="L3 Menu"
                        className={`${
                          L2MenuActive === L2Key ? "flex" : "hidden"
                        } flex-col bg-slate-800 w-full items-center justify-center `}
                      >
                        {Object.entries(L2Value).map(([L3Key, L3Value]) => {
                          return (
                            <div
                              style={{ lineHeight: "4rem" }}
                              className={`${
                                L2MenuActive === L2Key ? "" : "hidden"
                              } w-full text-lg ${
                                L3MenuActive == L3Key
                                  ? " bg-red-600 text-white border-b-2 border-red-600"
                                  : ""
                              } `}
                              key={L3Key}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (L3MenuActive === L3Key) {
                                  setL3MenuActive(null);
                                  return;
                                }
                                setL3MenuActive(L3Key);
                              }}
                            >
                              <div className="flex flex-row gap-2 items-center justify-center">
                                {Object.entries(L3Value).length ? (
                                  <i
                                    className={`${
                                      !(L3MenuActive === L3Key)
                                        ? "fa fa-angle-down"
                                        : ""
                                    }`}
                                  ></i>
                                ) : (
                                  ""
                                )}
                                {L3Key}
                              </div>

                              <div
                                id="L4 Menu"
                                className={`${
                                  L3MenuActive === L3Key ? "flex" : "hidden"
                                } flex-col bg-slate-800 w-full items-center justify-center `}
                              >
                                {Object.entries(L3Value).map(([L4Key]) => {
                                  return (
                                    <Link
                                      href={`/vehicle-tech/products/${L4Key}`}
                                      style={{ lineHeight: "4rem" }}
                                      className={`${
                                        L3MenuActive === L3Key ? "" : "hidden"
                                      } text-center w-full text-sm  hover:bg-red-600 hover:text-white `}
                                      key={L4Key}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setL1MenuActive(null);
                                        setMobileMenuVisible(false);
                                      }}
                                    >
                                      {L4Key}
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
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
