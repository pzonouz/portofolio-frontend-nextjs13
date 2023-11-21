import Image from "next/image";
import Link from "next/link";

const ProjectBanner = ({ project }) => {
  return (
    <div className="group">
      <div className=" relative overflow-hidden transition-all duration-500 ease-in-out">
        <Link href={`/projects/by_id/${project.id}`}>
          <Image
            width={600}
            height={600}
            alt={project.image}
            src={project.image}
            className="group-hover:scale-110 transition-all duration-500 ease-in-out max-w-md"
          />
        </Link>
      </div>
      <div className=" py-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 ease-in-out ">
        {project.name}
      </div>
    </div>
  );
};
export default ProjectBanner;
