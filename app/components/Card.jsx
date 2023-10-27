import { flushAllTraces } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line react/prop-types
const Card = ({ name, image, link }) => {
  return (
    <div className="bg-gray-200 tracking-wider text-lg hover:bg-white cursor-pointer rounded-xl w-44 flex flex-col gap-2 p-3">
      <Link href={link}>
        <img src={image} alt={name} />
      </Link>
      <Link href={link} className=" text-gray-800 text-center font-semibold">
        {name}
      </Link>
      <Link
        href={link}
        className="bg-red-600 mt-4 hover:bg-black text-center rounded-md py-2 text-lg text-white"
      >
        اطلاعات بیشتر
      </Link>
    </div>
  );
};

export default Card;
