"use client";
import { useState, useEffect } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import { axiosClient } from "../utils/axios";
import Loading from "./Loading";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [classes, setCLasses] = useState([]);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      let response = await axiosClient.get(`/products/parts_classification/`);
      setProducts(response.data);
      response = await axiosClient.get(`/products/services_classification/`);
      setServices(response.data);
      response = await axiosClient.get(`/products/classes_classification/`);
      setCLasses(response.data);

      setLoading(false);
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
      <MobileMenu products={products} services={services} classes={classes} />
    </div>
  );
};

export default Navbar;
