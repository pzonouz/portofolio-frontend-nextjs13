import Card from "@/app/components/Card";
import Products from "@/app/components/Products";

const page = async ({ params }) => {
  const { id } = params;
  const productsByLevel1Res = await fetch(
    `${process.env.BACKEND_URL}/products/by_level1/${id}/`
  );
  const productsByLevel1 = await productsByLevel1Res.json();

  const level1Res = await fetch(
    `${process.env.BACKEND_URL}/products/level1/${id}/`
  );
  const level1 = await level1Res.json();

  return (
    <div className=" mt-6">
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        {level1.name}
      </div>
      <Products products={productsByLevel1} />
    </div>
  );
};

export default page;
