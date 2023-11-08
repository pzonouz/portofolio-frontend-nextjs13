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

  return (
    // <div className="mt-6  items-center justify-center">
    //   {/* <div className=" flex w-full flex-col items-center justify-center bg-red-600 h-28 text-xl text-white text-center align-middle ">
    //     {product.name}
    //   </div> */}
    //   {loading ? <Loading /> : ""}
    //   <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
    //     <div>
    //       {product.images?.map((item) => {
    //         return <img src={item.image} alt={item.name} />;
    //       })}
    //     </div>
    //     <div className=" flex flex-col ga-10">
    //       <div className=" text-4xl mx-2 text-center"> {product.name}</div>
    //       <div id="preamble" className=" text-gray-600 px-4">
    //         {product.preamble}
    //       </div>
    //       <ul
    //         id="descriptions"
    //         className=" mt-8   tracking-wider w-full px-4 flex flex-col items-start justify-center"
    //       >
    //         <li className=" text-white bg-red-600 w-full py-2 px-2 rounded-t-lg">
    //           مشخصات فنی
    //         </li>
    //         {product.descriptions?.map((item) => {
    //           return (
    //             <li className=" odd:bg-gray-200 even:text-gray-800 px-2 py-2 w-full">
    //               {item.field}
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>

    //   <div className=" mt-16 p-2 bg-gray-200 w-full flex flex-col md:flex-row items-center justify-around gap-3">
    //     <i className=" mt-6 fa fa-phone fa-5x text-center"></i>
    //     <div>
    //       <div className=" mt-6"> نیاز به مشاوره دارید؟</div>
    //       <div className="mt-6 text-gray-600 ">
    //         جهت استعلام قیمت محصولات، مشاوره خرید و هر سوال دیگر میتوانید با ما
    //         بطور مستقیم در ارتباط دارید.
    //       </div>
    //     </div>
    //     <div>
    //       <div className=" text-center text-gray-600 text-2xl font-bold tracking-wide">
    //         09146160216
    //       </div>
    //       <div className=" text-center text-gray-600">
    //         آقای محمدنژاد-مدیر فروش
    //       </div>
    //       <div className=" mt-6 text-center text-2xl font-bold tracking-wide text-gray-600">
    //         09147868011
    //       </div>
    //       <div className=" text-center text-gray-600">آقای ساجدی -مدیر فنی</div>
    //     </div>
    //   </div>
    // </div>
    <Product loading={loading} product={product} />
  );
};

export default page;
