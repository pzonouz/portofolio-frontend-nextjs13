import Link from "next/link";

const ProductBanner = ({ item }) => {
  return (
    <div className=" relative w-full h-full overflow-hidden border-[1px] border-gray-500">
      <Link href={`/products/by_level1/${item.id}`}>
        <img
          className="  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out -z-10 "
          src={item.image}
          alt={item.name}
        />
      </Link>
    </div>
  );
};
export default ProductBanner;
