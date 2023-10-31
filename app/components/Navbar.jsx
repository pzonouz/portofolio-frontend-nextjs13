"use client";
import { useState, useEffect } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import { axiosClient } from "../utils/axios";
import Loading from "./Loading";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState({});

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const items = await axiosClient.get(`/products/classification/`);
      setLoading(false);
      setNavbarMenu({
        محصولات: items.data,
        "آموزشگاه فنی حرفه ای": {},
        "خدمات ۳۶۰": {},
        // "اطلاعات بیشتر": [{ مقالات: {}, "پروژه ها": {}, "سوالات متداول": {} }],
        // "جاویدان صنعت": [
        //   { id: 1, name: "تماس با ما", children: [{}] },
        //   { id: 2, name: "استخدام", children: [{}] },
        // ],
      });
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
      {/* <DesktopMenu menu={navbarMenu} /> */}
      <MobileMenu menu={navbarMenu} />
    </div>
  );
};

export default Navbar;
