import Products from "../../components/Products";

const page = async () => {
  const servicesRes = await fetch(
    `${process.env.BACKEND_URL}/products/services/`
  );
  const services = await servicesRes.json();
  return (
    <div className=" mt-6">
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        تمام خدمات
      </div>
      <Products products={services} />
    </div>
  );
};

export default page;
