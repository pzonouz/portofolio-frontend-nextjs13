import Image from "next/image";

const Suppliers = ({ suppliers }) => {
  return (
    <div className=" bg-red-600 mx-[1rem] pt-10 mt-10 md:col-span-full">
      <div className=" text-center text-3xl text-white">تامین کنندگان</div>
      <div className=" grid grid-cols-4 md:grid-cols-6 items-center justify-around mt-4 mx-4">
        {suppliers?.map((supply) => {
          return (
            <Image
              width={300}
              height={300}
              key={supply.id}
              className=" w-20 md:w-36 my-8"
              src={supply.image_small}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Suppliers;
