"use client";

import Card from "@/app/components/Card";
import Loading from "@/app/components/Loading";
import { axiosClient } from "@/app/utils/axios";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  let { id } = params;
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const fetchProductsByBrand = async () => {
      try {
        setLoading(true);
        let response = await axiosClient.get(`/products/by_brand/${id}/`);
        setProducts(response.data);
        response = await axiosClient.get(`/products/brand/${id}/`);
        setBrand(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchProductsByBrand();
  }, []);

  return (
    <div className=" mt-6">
      {loading ? <Loading /> : ""}
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        {brand.name}
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
