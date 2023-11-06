import Image from "next/image";
import Rolling from "../../public/loading.svg";

const Loading = () => {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="fixed loading z-20 flex flex-row top-0 left-0"
    >
      <Image src={Rolling} className=" w-38 h-38 mx-auto z-20" />
    </div>
  );
};

export default Loading;
