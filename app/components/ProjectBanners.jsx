"use client";

import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axios";
import Loading from "./Loading";
import ProjectBanner from "./ProjectBanner";
import Link from "next/link";

export const ProjectBanners = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    const response = await axiosClient.get("/projects/banners/");
    setLoading(false);
    setProjects(response.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className=" px-[1rem] py-[1rem] bg-gray-200  mt-10 text-center text-lg text-gray-700 cursor-pointer ">
      <div className=" my-4">برخی پروژه های انجام شده توسط جاویدان صنعت</div>
      <div className=" flex flex-col gap-4">
        {loading ? <Loading /> : ""}
        {projects.map((project) => {
          return <ProjectBanner project={project} />;
        })}
      </div>
      <Link
        href="/projects/"
        className=" hover:bg-black mt-10 block text-sm py-4 px-2 rounded-md bg-red-600 text-white cursor-pointer w-1/2 mx-auto"
      >
        مشاهده تمام پروژه ها
      </Link>
    </div>
  );
};
