"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import { axiosClient } from "../utils/axios";
import Loading from "../components/Loading";

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/products/`);
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
        تمام محصولات
      </div>
      <div className=" mt-6 grid grid-cols-2 md:grid-cols-4 mx-4 gap-6 md:px-12">
        {products?.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              image={item.image}
              link={`/products/by_id/${item.id}/`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
