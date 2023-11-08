const Achievements = () => {
  return (
    <div className=" text-gray-800 flex flex-col justify-center gap-6 mt-12">
      <div className=" text-gray-700 self-center">دستاوردهای جاویدان صنعت</div>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-around  text-[15px] text-center px-8">
        <div className="flex flex-col justify-center items-center">
          <div className=" text-3xl text-red-600 font-bold">300+</div>
          <div>
            مرکز خدمات خودرو که با مشاوره و خدمات جاویدان صنعت بالاترین امتیاز
            را از ISQI گرفته‌اند.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-3xl text-red-600 font-bold">3500+</div>
          <div>
            دستگاه که در نتیجه پشتیبانی جاویدان صنعت بدون وقفه کار میکنند
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-3xl text-red-600 font-bold">25%+</div>
          <div className="flex flex-col justify-center items-center">
            افزایش راندمان تجهیزات مشتریان در نتیجه استفاده از برنامه نگهداری
            جاویدان صنعت سرویس
          </div>
        </div>
      </div>
      <div className=" text-gray-700 self-center mt-10">
        تعهدات جاویدان صنعت
      </div>
      <div className=" flex flex-col md:flex-row gap-8 items-stretch justify-around px-8">
        <div className="flex items-center gap-3 border-2 border-gray-800 rounded-md p-2">
          <div className=" w-12 h-12 text-3xl font-bold rounded-full text-white bg-red-600 flex items-center justify-center">
            ۱۰
          </div>
          <div className=" text-2xl">سال خدمات پس از فروش</div>
        </div>
        <div className="flex items-center gap-3 border-2 border-gray-800 rounded-md p-2">
          <div className=" w-12 h-12 text-3xl font-bold rounded-full text-white bg-red-600 flex items-center justify-center">
            ۱
          </div>
          <div className=" text-2xl">سال گارانتی</div>
        </div>
        <div className="flex items-center gap-3 border-2 border-gray-800 rounded-md p-2">
          <div className=" w-12 h-12 text-3xl font-bold rounded-full text-white bg-red-600 flex items-center justify-center">
            <div className="fa fa-wrench"></div>
          </div>
          <div className=" text-2xl">نصب رایگان</div>
        </div>
      </div>
    </div>
  );
};
export default Achievements;
