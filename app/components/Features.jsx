import Image from "next/image";

const Features = () => {
  return (
    <div className=" flex flex-row h-16 gap-2 justify-around my-10 md:col-start-1 md:col-span-full md:h-36">
      <Image width={600} height={600} src="/24-7.png" alt="24-7" className="" />
      <Image width={600} height={600} src="/360.png" alt="360" className="" />
      <Image width={600} height={600} src="/cac.png" alt="cac" className="" />
      <Image width={600} height={600} src="/iso.png" alt="iso" className="" />
      <Image
        width={600}
        height={600}
        src="/naci-17025.png"
        alt="naci"
        className=""
      />
    </div>
  );
};
export default Features;
