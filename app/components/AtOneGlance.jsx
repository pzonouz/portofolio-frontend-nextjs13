import Image from "next/image";

const AtOneGlance = () => {
  return (
    <div className=" flex flex-col justify-between gap-12 md:flex-row md:col-span-full items-center md:px-20 md:mt-10">
      <div className="text-sm text-gray-700 text-center px-4 mt-10 max-w-sm flex flex-col md:justify-around gap-4 items-start md:h-full md:py-10">
        <div className=" text-4xl">جاویدان صنعت در یک نگاه</div>
        <div>
          جهت آشنایی بیشتر با تجهیزات قابل تامین توسط جاویدان صنعت، اطلاعات و
          روزمه شرکت، کاتالوگ جامع جاویدان در اختیار شماست.
        </div>
        <div className=" w-40 text-sm mx-auto py-2 px-1 bg-black text-white rounded-md text-center">
          نمایش کاتالوگ جاویدان
        </div>
      </div>
      <Image alt="catalog" src="/catalog.png" width={300} height={300} />
    </div>
  );
};
export default AtOneGlance;
