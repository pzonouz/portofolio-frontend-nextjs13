const ProjectBanner = ({ project }) => {
  return (
    <div className="group">
      <div className=" relative overflow-hidden transition-all duration-500 ease-in-out">
        <img
          alt={project.images[0].name}
          src={project.images[0].image}
          className="group-hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className=" py-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 ease-in-out ">
        {project.name}
      </div>
    </div>
  );
};
export default ProjectBanner;
