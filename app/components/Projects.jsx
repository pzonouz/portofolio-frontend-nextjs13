import Card from "./Card";

const Projects = ({ projects }) => {
  return (
    <div className=" my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 mx-3 items-stretch">
      {projects?.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            link={`/projects/by_id/${item.id}/`}
          />
        );
      })}
    </div>
  );
};
export default Projects;
