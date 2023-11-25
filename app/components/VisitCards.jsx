import Image from "next/image";

const VisitCards = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row-reverse bg-gray-300 md:justify-around  mt-10 mx-[1rem] p-[1rem] gap-[1rem] md:col-span-full">
      <Image width={600} height={300} src="/1-2-600x360.jpg" alt="VisitCard" />
      <Image width={600} height={300} src="/2-2-600x360.jpg" alt="VisitCard" />
    </div>
  );
};
export default VisitCards;
