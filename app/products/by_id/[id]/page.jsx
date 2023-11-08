"use client";

import Loading from "@/app/components/Loading";
import Product from "@/app/components/Product";
import { axiosClient } from "@/app/utils/axios";
import axios from "axios";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  let { id } = params;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/products/by_id/${id}/`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchProduct();
  }, []);

  return <Product loading={loading} product={product} />;
};

export default page;
