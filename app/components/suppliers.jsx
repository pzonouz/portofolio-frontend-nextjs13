"use client";
import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axios";
import Image from "next/image";

const Suppliers = () => {
  const [brands, setBrands] = useState([]);
  const fetchBrands = async () => {
    const response = await axiosClient.get("/products/brands/");
    setBrands(response.data);
  };
  useEffect(() => {
    fetchBrands();
  }, []);
  return (
    <div className=" bg-red-600 mx-[1rem] pt-10 mt-10 md:col-span-full">
      <div className=" text-center text-3xl text-white">تامین کنندگان</div>
      <div className=" flex items-center justify-around mt-4">
        {brands.map((brand) => {
          return (
            <Image
              width={300}
              height={300}
              key={brand.id}
              className=" w-20 md:w-36"
              src={brand.image_small}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Suppliers;
