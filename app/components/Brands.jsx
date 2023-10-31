"use client";

import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axios";
import Link from "next/link";
import Loading from "./Loading";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      let response = await axiosClient.get(`/products/brands/`);
      setLoading(false);
      setBrands(response.data);
    };
    fetchBrands();
  }, []);
  return (
    <div className=" mt-24 flex flex-col">
      {loading ? <Loading /> : ""}
      <div className=" -mb-12 text-red-600 font-bold text-2xl text-center">
        جاویدان صنعت
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {brands?.map((item) => {
          return (
            <div key={item.id} className="flex flex-col mt-20 items-center">
              <div className=" mb-6">
                نماینده محصولات {item.name} در شمالغرب کشور
              </div>
              <Link
                href={`/products/by_brand/${item.id}`}
                className=" bg-black text-white px-4 py-2 rounded-md
             cursor-pointer hover:bg-red-600 transition-colors duration-500"
              >
                نمایش محصولات
              </Link>
              <img className="mt-6" src={`${item.image}`} alt="item.name" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
