import "./Achievements.css";

const Achievements = () => {
  return (
    <div className=" text-gray-800 flex flex-col justify-center gap-6 mt-12">
      <div className=" text-gray-700 self-center">دستاوردهای جاویدان صنعت</div>
      <div className="flex gap-12  text-[10px] text-center px-8 items-baseline">
        <div className="flex flex-col justify-center items-center">
          <div className=" text-lg text-red-600 font-bold">300+</div>
          <div>
            مرکز خدمات خودرو که با مشاوره و خدمات رادمن بالاترین امتیاز را از
            ISQI گرفته‌اند.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-lg text-red-600 font-bold">3500+</div>
          <div>دستگاه که در نتیجه پشتیبانی رادمن بدون وقفه کار میکنند</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-lg text-red-600 font-bold">25%+</div>
          <div className="flex flex-col justify-center items-center">
            افزایش راندمان تجهیزات مشتریان در نتیجه استفاده از برنامه نگهداری
            رادمن سرویس
          </div>
        </div>
      </div>
      <div className=" text-gray-700 self-center">تعهدات جاویدان صنعت</div>
      <div className=" flex flex-row items-center justify-around">
        <div className="block">
          <div className="number">
            <div>۱۰</div>
          </div>
          <div>سال خدمات پس از فروش</div>
        </div>
        <div className="block">
          <div className="number">
            <div>۱</div>
          </div>
          <div>سال گارانتی</div>
        </div>
        <div className="block">
          <div className="number">
            <div className="fa fa-wrench"></div>
          </div>
          <div>نصب رایگان</div>
        </div>
      </div>
    </div>
  );
};
export default Achievements;
