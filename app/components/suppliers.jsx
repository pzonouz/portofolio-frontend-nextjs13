"use client";
import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axios";

const Suppliers = () => {
  const [brands, setBrands] = useState([]);
  const fetchBrands = async () => {
    const response = await axiosClient.get("/products/brands/");
    console.log(response.data);
    setBrands(response.data);
  };
  useEffect(() => {
    fetchBrands();
  }, []);
  return (
    <div className=" theme-main-color mx-[1rem] pt-10 mt-10">
      <div className=" text-center text-3xl text-white">تامین کنندگان</div>
      <div className=" flex items-center justify-around mt-4">
        {brands.map((brand) => {
          return <img className="  w-16" src={brand.image_small} />;
        })}
      </div>
    </div>
  );
};
export default Suppliers;
