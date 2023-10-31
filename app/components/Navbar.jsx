"use client";
import { useState, useEffect } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import { axiosClient } from "../utils/axios";
import Loading from "./Loading";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({});

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get(`/products/classification/`);
      setProducts(response.data);
      setLoading(false);
      // setNavbarMenu({
      //   محصولات: items.data,
      //   "آموزشگاه فنی حرفه ای": {},
      //   "خدمات ۳۶۰": {},
      //   // "اطلاعات بیشتر": [{ مقالات: {}, "پروژه ها": {}, "سوالات متداول": {} }],
      //   // "جاویدان صنعت": [
      //   //   { id: 1, name: "تماس با ما", children: [{}] },
      //   //   { id: 2, name: "استخدام", children: [{}] },
      //   // ],
      // });
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div>
      {loading ? <Loading /> : ""}
      <TopBar />
      <DesktopMenu products={products} />
      <MobileMenu products={products} />
    </div>
  );
};

export default Navbar;
