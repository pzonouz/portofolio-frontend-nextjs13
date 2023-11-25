import Card from "@/app/components/Card";

const page = async ({ params }) => {
  const { id } = params;
  const productsByLevel2Res = await fetch(
    `${process.env.BACKEND_URL}/products/by_level2/${id}/`
  );
  const productsByLevel2 = await productsByLevel2Res.json();

  const level2Res = await fetch(
    `${process.env.BACKEND_URL}/products/level2/${id}/`
  );
  const level2 = await level2Res.json();

  return (
    <div className=" mt-6">
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        {level2.name}
      </div>
      <div className=" my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 mx-3 items-stretch">
        {productsByLevel2?.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              image={item.image}
              link={`/products/by_id/${item.id}/`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
