"use client";

import Card from "@/app/components/Card";
import Loading from "@/app/components/Loading";
import { axiosClient } from "@/app/utils/axios";
import axios from "axios";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  let { id } = params;
  const [products, setProducts] = useState([]);
  const [level3, setLevel3] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const fetchProductsAndLevel3 = async () => {
      try {
        setLoading(true);
        let response = await axiosClient.get(`/products/by_level3/${id}/`);
        setProducts(response.data);
        response = await axiosClient.get(`/products/level3/${id}/`);
        setLevel3(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchProductsAndLevel3();
  }, []);

  return (
    <div className=" mt-6">
      {loading ? <Loading /> : ""}
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        {level3.name}
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
