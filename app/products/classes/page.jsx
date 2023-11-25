import Card from "../../components/Card";
import Products from "../../components/Products";

const page = async () => {
  const classesRes = await fetch(
    `${process.env.BACKEND_URL}/products/classes/`
  );
  const classes = await classesRes.json();

  return (
    <div className=" mt-6">
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        آموزشگاه فنی حرفه ای
      </div>
      <div className=" my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 mx-3 items-stretch">
        <Products products={classes} />
      </div>
    </div>
  );
};

export default page;
