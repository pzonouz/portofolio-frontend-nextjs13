import Link from "next/link";

const ProductBanner = ({ item }) => {
  return (
    <div className=" relative w-full h-full overflow-hidden border-[1px] border-gray-500">
      <Link href="/products/by_level1/1">
        <img
          className="  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out -z-10 "
          src={item.image}
        />
      </Link>
      {/* <div className=" absolute top-1/4 left-1/2 -translate-x-1/2  ">
        تجهیزات تعمیرگاهی
      </div> */}
    </div>
  );
};
export default ProductBanner;
