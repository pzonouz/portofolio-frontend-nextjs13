"use client";

import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axios";
import Loading from "../components/Loading";
import Projects from "../components/Projects";

const page = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/projects/`);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className=" mt-6">
      {loading ? <Loading /> : ""}
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        تمام پروژه ها
      </div>
      <div className=" my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 mx-3 items-stretch">
        <Projects projects={projects} />
      </div>
    </div>
  );
};

export default page;
