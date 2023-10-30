"use client";

import { useState } from "react";

import { products } from "../Constants/products";

const Page = () => {
  const [L1Open, setL1OPen] = useState(false);
  const [L2Open, setL2OPen] = useState(false);
  const [L3Open, setL3OPen] = useState(false);
  const [L1CreateOpen, setL1CreateOpen] = useState(false);

  const [L1MenuKey, setL1MenuKey] = useState(null);
  const [L1Insert, setL1Insert] = useState("");
  const [L2MenuKey, setL2MenuKey] = useState(null);
  const [L3MenuKey, setL3MenuKey] = useState(null);

  return (
    <div className="flex flex-col mt-6 mx-6">
      <div id="L1 Insert New">
        <div
          onClick={() => {
            setL1CreateOpen(!L1CreateOpen);
          }}
          className={` ${
            L1CreateOpen ? "hidden" : ""
          } text-[8px] py-1 px-2 bg-green-800 w-14 text-center text-white cursor-pointer`}
        >
          اضافه کردن
        </div>
        <div
          onClick={() => {
            setL1CreateOpen(!L1CreateOpen);
          }}
          className={`${
            L1CreateOpen ? "" : "hidden"
          } text-[8px] py-1 px-2 bg-red-800 w-14 text-center text-white cursor-pointer`}
        >
          بستن
        </div>{" "}
        <div
          id="L1 Create"
          className={` flex flex-row my-2 items-center gap-2 ${
            L1CreateOpen ? "" : "hidden"
          }`}
        >
          <input
            type="text"
            value={L1Insert}
            onChange={(e) => {
              setL1Insert(e.target.value);
            }}
          ></input>
          <div
            onClick={() => {
              Object.entries(products)?.map((item) => {
                if (item.includes(L1Insert)) {
                  alert("قبلا وارد شده است");
                  return;
                }
                products[L1Insert] = {};
              });
            }}
            className="text-[8px] py-1 px-2 bg-green-800 w-14 text-center text-white cursor-pointer"
          >
            اضافه کردن
          </div>
        </div>
      </div>
      <div id="L1">
        {Object.entries(products)?.map(([key, value]) => {
          return (
            <div key={key}>
              <div className=" flex flex-row items-center gap-2">
                <div
                  onClick={() => {
                    setL1MenuKey(key);
                    setL1OPen(!L1Open);
                  }}
                  className={`cursor-pointer ${
                    Object.entries(value).length
                      ? `${
                          L1Open && L1MenuKey == key
                            ? "fa fa-minus"
                            : "fa fa-plus"
                        }`
                      : "hidden"
                  }`}
                ></div>
                <div>{key}</div>
              </div>
              <div
                id="L2"
                className={`${
                  L1Open && L1MenuKey == key ? "flex flex-col" : "hidden"
                }`}
              >
                {Object.entries(value)?.map(([key, value]) => {
                  return (
                    <div key={key}>
                      <div
                        key={key}
                        className="mr-4 flex flex-row items-center gap-2"
                      >
                        <div
                          onClick={() => {
                            setL2MenuKey(key);
                            setL2OPen(!L2Open);
                          }}
                          className={`cursor-pointer ${
                            Object.entries(value).length
                              ? `${
                                  L1Open && L1MenuKey == key
                                    ? "fa fa-minus"
                                    : "fa fa-plus"
                                }`
                              : "hidden"
                          }`}
                        ></div>
                        <div>{key}</div>
                      </div>
                      <div
                        id="L3"
                        className={`${
                          L2Open && L2MenuKey == key
                            ? "flex flex-col"
                            : "hidden"
                        }`}
                      >
                        {Object.entries(value)?.map(([key, value]) => {
                          return (
                            <div key={key}>
                              <div
                                key={key}
                                className="mr-8 flex flex-row items-center gap-2"
                              >
                                <div
                                  onClick={() => {
                                    setL3MenuKey(key);
                                    setL3OPen(!L3Open);
                                  }}
                                  className={`cursor-pointer ${
                                    Object.entries(value).length
                                      ? `${
                                          L2Open && L2MenuKey == key
                                            ? "fa fa-minus"
                                            : "fa fa-plus"
                                        }`
                                      : "hidden"
                                  }`}
                                ></div>
                                <div>{key}</div>
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

export default Page;
