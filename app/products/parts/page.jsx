import Card from "../../components/Card";
import Products from "../../components/Products";

const page = async () => {
  const partsRes = await fetch(`${process.env.BACKEND_URL}/products/parts/`);
  const parts = await partsRes.json();

  return (
    <div className=" mt-6">
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        تمام محصولات
      </div>
      <Products products={parts} />
    </div>
  );
};

export default page;
