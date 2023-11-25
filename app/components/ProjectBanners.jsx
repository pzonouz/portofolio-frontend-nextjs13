import ProjectBanner from "./ProjectBanner";
import Link from "next/link";

export const ProjectBanners = ({ projects }) => {
  return (
    <div className=" px-[1rem] py-[1rem] bg-gray-200  mt-10 text-center text-lg text-gray-700 cursor-pointer md:col-span-full ">
      <div className=" my-4">برخی پروژه های انجام شده توسط جاویدان صنعت</div>
      <div className=" flex flex-col gap-4 md:flex-row md:justify-around">
        {projects?.map((project) => {
          return <ProjectBanner project={project} />;
        })}
      </div>
      <Link
        href="/projects/"
        className=" hover:bg-black mt-10 block text-sm py-4 px-2 rounded-md bg-red-600 text-white cursor-pointer max-w-sm mx-auto"
      >
        مشاهده تمام پروژه ها
      </Link>
    </div>
  );
};
