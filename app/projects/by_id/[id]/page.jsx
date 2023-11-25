import Project from "@/app/components/Project";

const page = async ({ params }) => {
  const { id } = params;
  const projectRes = await fetch(
    `${process.env.BACKEND_URL}/projects/by_id/${id}/`
  );
  const project = await projectRes.json();

  return <Project project={project} />;
};

export default page;
