"use client";

import Card from "@/app/components/Card";
import { axiosClient } from "@/app/utils/axios";
import axios from "axios";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  let { id } = params;
  const [products, setProducts] = useState([]);
  const [level2, setLevel2] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const fetchProductsAndLevel2 = async () => {
      try {
        let response = await axiosClient.get(`/products/by_level2/${id}/`);
        setProducts(response.data);
        response = await axiosClient.get(`/products/level2/${id}/`);
        setLevel2(response.data);
      } catch (error) {
        alert(error);
      }
    };
    fetchProductsAndLevel2();
  }, []);

  return (
    <div className=" mt-6">
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        {level2.name}
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
