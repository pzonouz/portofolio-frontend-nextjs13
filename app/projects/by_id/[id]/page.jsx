"use client";

import Loading from "@/app/components/Loading";
import Project from "@/app/components/Project";
import { axiosClient } from "@/app/utils/axios";
import axios from "axios";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  let { id } = params;
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/projects/by_id/${id}/`);
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchProject();
  }, []);

  return <Project loading={loading} project={project} />;
};

export default page;
