"use client";
import { useState } from "react";
import Link from "next/link";

import { navbarMenu } from "../Constants/navbar";

const DesktopMenu = () => {
  const [L1MenuActive, setL1MenuActive] = useState(null);
  const [L2MenuActive, setL2MenuActive] = useState(null);
  const [L3MenuActive, setL3MenuActive] = useState(null);

  return (
    <div
      id="L1 Menu"
      className="hidden md:flex flex-row py-5 items-center justify-around w-2/3 mx-auto"
    >
      <Link href="/">LOGO</Link>
      {Object.entries(navbarMenu).map(([L1Key, L1Value]) => {
        return (
          <div
            className={` relative flex flex-row gap-2 items-center cursor-pointer p-2 ${
              L1MenuActive == L1Key ? " bg-red-600 text-white" : ""
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
            <div
              id="L2 Menu"
              className={`${
                L1MenuActive == L1Key ? "flex" : "hidden"
              } absolute top-14 right-0 flex-col bg-slate-800 w-44 items-center justify-center `}
            >
              {Object.entries(L1Value).map(([L2Key, L2Value]) => {
                return (
                  <div
                    className={`h-8 flex flex-row gap-2 items-center justify-center relative w-full 
                      ${L2MenuActive == L2Key ? " bg-red-600 text-white" : ""}`}
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
                    {Object.entries(L2Value).length ? (
                      <i
                        className={`${
                          !(L2MenuActive === L2Key) ? "fa fa-angle-down" : ""
                        }`}
                      ></i>
                    ) : (
                      ""
                    )}
                    {L2Key}

                    <div
                      id="L3 Menu"
                      className={`${
                        L2MenuActive === L2Key ? "flex" : "hidden"
                      } absolute top-0 right-44 flex-col bg-slate-800 w-44 items-center justify-center `}
                    >
                      {Object.entries(L2Value).map(([L3Key, L3Value]) => {
                        return (
                          <div
                            className={`${
                              L2MenuActive === L2Key ? "" : "hidden"
                            } h-8 flex flex-row gap-2 items-center justify-center relative w-full ${
                              L3MenuActive == L3Key
                                ? " bg-red-600 text-white"
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

                            <div
                              id="L4 Menu"
                              className={`${
                                L3MenuActive === L3Key ? "flex" : "hidden"
                              } absolute top-0 right-44 flex-col bg-slate-800 w-44 items-center justify-center `}
                            >
                              {Object.entries(L3Value).map(([L4Key]) => {
                                return (
                                  <Link
                                    href={`/vehicle-tech/products/${L4Key}`}
                                    className={`${
                                      L3MenuActive === L3Key ? "" : "hidden"
                                    } h-8 flex flex-row gap-2 items-center justify-center relative w-full  hover:bg-red-600 hover:text-white `}
                                    key={L4Key}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setL1MenuActive(null);
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
  );
};

export default DesktopMenu;
