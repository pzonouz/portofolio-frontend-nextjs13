"use client";

import Card from "@/app/components/Card";
import Loading from "@/app/components/Loading";
import { axiosClient } from "@/app/utils/axios";
import axios from "axios";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  let { id } = params;
  const [products, setProducts] = useState([]);
  const [level1, setLevel1] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const fetchProductsAndLevel1 = async () => {
      try {
        setLoading(true);
        let response = await axiosClient.get(`/products/by_level1/${id}/`);
        setProducts(response.data);
        response = await axiosClient.get(`/products/level1/${id}/`);
        setLevel1(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchProductsAndLevel1();
  }, []);

  return (
    <div className=" mt-6">
      {loading ? <Loading /> : ""}
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        {level1.name}
      </div>
      <div className=" my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 mx-3 items-stretch">
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
