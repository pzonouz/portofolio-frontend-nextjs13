"use client";

import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axios";
import Link from "next/link";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrands = async () => {
      const response = await axiosClient.get("/products/brands/");
      setBrands(response.data);
    };
    fetchBrands();
  }, []);
  return (
    <div className=" mt-32 flex flex-col">
      <div className=" text-red-600 font-bold text-2xl text-center">
        جاویدان صنعت
      </div>
      {brands?.map((item) => {
        return (
          <div className="flex flex-col mt-20 items-center gap-6 bg-[url('/public/hero-pattern.svg')]">
            <div>نماینده محصولات {item.name} در شمالغرب کشور</div>
            <Link
              href="#"
              className=" bg-black text-white px-4 py-2 rounded-md
             cursor-pointer hover:bg-red-600 transition-colors duration-500"
            >
              نمایش محصولات
            </Link>
            <img src={`${item.image}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
