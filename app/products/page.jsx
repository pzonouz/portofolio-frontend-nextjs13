"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const page = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/products/`);
      } catch (error) {
        alert(error);
      }
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className=" mt-6">
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        تمام محصولات
      </div>
      <div className=" mt-6 grid grid-cols-2 md:grid-cols-4 mx-4 gap-6 md:px-12">
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              image={item.image}
              link={`/product/${item.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
