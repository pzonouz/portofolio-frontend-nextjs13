"use client";

import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axios";
import Loading from "./Loading";
import ProjectBanner from "./ProjectBanner";

export const ProjectBanners = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    const response = await axiosClient.get("/projects/");
    setLoading(false);
    setProjects(response.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className=" px-[1rem] py-[1rem] bg-gray-200  mt-10 text-center text-lg text-gray-700 cursor-pointer ">
      <div className=" my-4">برخی پروژه های انجام شده توسط جاویدان صنعت</div>
      {loading ? <Loading /> : ""}
      {projects.map((project, index) => {
        if (index > 2) return;
        return <ProjectBanner project={project} />;
      })}
      <div className=" mt-4 text-sm py-2 px-1 rounded-md bg-red-600 text-white cursor-pointer w-1/2 mx-auto">
        مشاهده تمام پروژه ها
      </div>
    </div>
  );
};
