"use client";

import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { axiosClient } from "../../utils/axios";
import Loading from "../../components/Loading";
import Products from "../../components/Products";

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/products/services/`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className=" mt-6">
      {loading ? <Loading /> : ""}
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        تمام خدمات
      </div>
      <Products products={products} />
    </div>
  );
};

export default page;
