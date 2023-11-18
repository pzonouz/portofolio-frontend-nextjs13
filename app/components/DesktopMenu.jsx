"use client";
import { useState } from "react";
import Link from "next/link";
import "./DesktopMenu.css";

const DesktopMenu = ({ parts, services, classes }) => {
  return (
    <div className="">
      <div className="hidden md:flex flex-col overflow-hidden bg-red-600/90 text-white w-full py-8 justify-center text-center relative">
        <Link href="/" className=" text-4xl">
          گروه جاویدان صنعت
        </Link>
        <Link href="/" className=" text">
          تجهیزات،خدمات،کالیبراسیون،آموزش
        </Link>
        <Link href="/">
          <img
            src="/arm200.png"
            className=" h-[8.5rem] absolute top-1/2 -right-1 -translate-y-1/2"
          />
        </Link>
      </div>
      <div
        id="L1 Menu"
        className="hidden md:flex flex-row py-5 items-center justify-around w-2/3 mx-auto relative z-20"
      >
        {/* <Link href="/">LOGO</Link> */}
        <div
          className={` text-lg relative flex flex-row-reverse gap-2 items-center p-2 `}
          key="1"
        >
          <Link
            href={`/products/parts`}
            className="peer hover:text-red-600 hover:font-bold"
          >
            محصولات
          </Link>
          <div
            id="L2 Menu"
            className={` bg-white hidden hover:flex peer-hover:flex inAnimation absolute right-0 top-8 flex-col w-48 items-start justify-center align-middle `}
          >
            {Array.isArray(parts)
              ? parts.map((item1) => {
                  return (
                    <div
                      className={`group/level1 hover:text-red-600 border-b-[1px] border-gray-200 w-48 flex flex-row-reverse gap-2 justify-start relative px-2
                      `}
                      key={item1.id}
                    >
                      <Link
                        href={`/products/by_level1/${item1.id}`}
                        className=" w-48"
                      >
                        {item1.name}
                      </Link>
                      <div
                        id="L3 Menu"
                        className={`hidden bg-white group-hover/level1:flex  hover:flex absolute inAnimation  right-48 flex-col w-48 items-start justify-center px-2 align-middle `}
                      >
                        {item1.children.map((item2) => {
                          return (
                            <div
                              key={item2.id}
                              className=" group/level2 w-full text-black hover:text-red-600 border-b-[1px] border-gray-200 flex flex-row-reverse gap-2 justify-start relative px-2"
                            >
                              <Link
                                href={`/products/by_level2/${item2.id}`}
                                className=" w-full"
                              >
                                {item2.name}
                              </Link>

                              <div
                                id="L4 Menu"
                                className={`hidden bg-white group-hover/level2:flex  hover:flex absolute inAnimation right-44 flex-col w-48 items-start justify-center px-2 align-middle`}
                              >
                                {item2.children?.map((item3) => {
                                  return (
                                    <Link
                                      href={`/products/by_level3/${item3.id}`}
                                      className={` text-black hover:text-red-600 border-b-[1px] border-gray-200 flex flex-row-reverse gap-2 justify-start relative px-2 `}
                                      key={item3.id}
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
        <div
          className={` text-lg relative flex flex-row-reverse gap-2 items-center p-2 `}
          key="2"
        >
          <Link
            href={`/products/services`}
            className="peer hover:text-red-600 hover:font-bold"
          >
            خدمات۳۶۰
          </Link>
          <div
            id="L2 Menu"
            className={` bg-white hidden hover:flex peer-hover:flex inAnimation absolute right-0 top-8 flex-col w-48 items-start justify-center align-middle `}
          >
            {Array.isArray(services)
              ? services.map((item1) => {
                  return (
                    <div
                      className={`group/level1 hover:text-red-600 border-b-[1px] border-gray-200 w-48 flex flex-row-reverse gap-2 justify-start relative px-2
                      `}
                      key={item1.id}
                    >
                      <Link
                        href={`/products/by_level1/${item1.id}`}
                        className=" w-48"
                      >
                        {item1.name}
                      </Link>
                      <div
                        id="L3 Menu"
                        className={`hidden bg-white group-hover/level1:flex  hover:flex absolute inAnimation  right-48 flex-col w-48 items-start justify-center px-2 align-middle `}
                      >
                        {item1.children.map((item2) => {
                          return (
                            <div
                              key={item2.id}
                              className=" group/level2 w-full text-black hover:text-red-600 border-b-[1px] border-gray-200 flex flex-row-reverse gap-2 justify-start relative px-2"
                            >
                              <Link
                                href={`/products/by_level2/${item2.id}`}
                                className=" w-full"
                              >
                                {item2.name}
                              </Link>

                              <div
                                id="L4 Menu"
                                className={`hidden bg-white group-hover/level2:flex  hover:flex absolute inAnimation right-44 flex-col items-start justify-center px-2 align-middle`}
                              >
                                {item2.children?.map((item3) => {
                                  return (
                                    <Link
                                      href={`/products/by_level3/${item3.id}`}
                                      className={` text-black hover:text-red-600 border-b-[1px] border-gray-200 flex flex-row-reverse gap-2 w-full justify-start relative px-2 `}
                                      key={item3.id}
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
        <div
          className={` text-lg relative flex flex-row-reverse gap-2 items-center p-2 `}
          key="2"
        >
          <Link
            href={`/products/classes`}
            className="peer hover:text-red-600 hover:font-bold"
          >
            آموزشگاه فنی حرفه ای
          </Link>
          <div
            id="L2 Menu"
            className={` bg-white hidden hover:flex peer-hover:flex inAnimation absolute right-0 top-8 flex-col w-48 items-start justify-center align-middle `}
          >
            {Array.isArray(classes)
              ? classes.map((item1) => {
                  return (
                    <div
                      className={`group/level1 hover:text-red-600 border-b-[1px] border-gray-200 w-48 flex flex-row-reverse gap-2 justify-start relative px-2
                      `}
                      key={item1.id}
                    >
                      <Link
                        href={`/products/by_level1/${item1.id}`}
                        className=" w-48"
                      >
                        {item1.name}
                      </Link>
                      <div
                        id="L3 Menu"
                        className={`hidden bg-white group-hover/level1:flex  hover:flex absolute inAnimation  right-48 flex-col w-48 items-start justify-center px-2 align-middle `}
                      >
                        {item1.children.map((item2) => {
                          return (
                            <div
                              key={item2.id}
                              className=" group/level2 w-full text-black hover:text-red-600 border-b-[1px] border-gray-200 flex flex-row-reverse gap-2 justify-start relative px-2"
                            >
                              <Link
                                href={`/products/by_level2/${item2.id}`}
                                className=" w-full"
                              >
                                {item2.name}
                              </Link>

                              <div
                                id="L4 Menu"
                                className={`hidden bg-white group-hover/level2:flex  hover:flex absolute inAnimation right-44 flex-col items-start justify-center px-2 align-middle`}
                              >
                                {item2.children?.map((item3) => {
                                  return (
                                    <Link
                                      href={`/products/by_level3/${item3.id}`}
                                      className={` text-black hover:text-red-600 border-b-[1px] border-gray-200 flex flex-row-reverse gap-2 w-full justify-start relative px-2 `}
                                      key={item3.id}
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
        </div>{" "}
        <div
          className={` text-lg relative flex flex-row-reverse gap-2 items-center p-2 `}
          key="2"
        >
          <Link
            href={`/products/projects`}
            className="peer hover:text-red-600 hover:font-bold"
          >
            پروژه ها
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
