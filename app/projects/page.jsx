import Projects from "../components/Projects";

const page = async () => {
  const projectsRes = await fetch(`${process.env.BACKEND_URL}/projects/`);
  const projects = await projectsRes.json();
  return (
    <div className=" mt-6">
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
