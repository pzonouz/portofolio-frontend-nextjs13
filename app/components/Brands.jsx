import Link from "next/link";
import Image from "next/image";

const Brands = ({ brands }) => {
  return (
    <div className=" px-[1rem] py-12 flex flex-col bg-gray-200 md: col-span-full">
      <div className=" -mb-12 text-red-600 font-bold text-2xl text-center">
        جاویدان صنعت
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {brands?.map((item) => {
          return (
            <div key={item.id} className="flex flex-col mt-20 items-center">
              <div className=" mb-6">
                نماینده محصولات {item.name} در شمالغرب کشور
              </div>
              <Link
                href={`/products/by_brand/${item.id}`}
                className=" bg-black text-white px-4 py-2 rounded-md
             cursor-pointer hover:bg-red-600 transition-colors duration-500"
              >
                نمایش محصولات
              </Link>
              <Image
                width={400}
                height={400}
                className="mt-6"
                src={`${item.image_large}`}
                alt="item.name"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
