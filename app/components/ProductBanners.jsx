"use client";

import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axios";
import ProductBanner from "./ProductBanner";

const ProductBanners = () => {
  const [banners, setBanners] = useState([]);
  const fetchBanners = async () => {
    const response = await axiosClient("/products/banners/");
    setBanners(response.data);
  };
  useEffect(() => {
    fetchBanners();
  }, []);
  return (
    <div className="mx-[1rem] flex flex-col gap-6 mt-6">
      {banners.map((item) => {
        return <ProductBanner key={item.id} item={item} />;
      })}
    </div>
  );
};
export default ProductBanners;
