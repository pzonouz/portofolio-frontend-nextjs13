import React from "react";

const Footer = () => {
  return (
    <div className=" mx-[1rem] p-[1rem]">
      <div id="contact">
        <div>اطلاعات تماس:</div>
        <div>
          <span className=" text-red-600">دفتر مرکزی: </span>
          تبریز.چهاراه طالقانی به سمت ارتش. نرسیده به قنادی پاپا.طبقه بالای گل
          لیلیوم جاویدان صنعت
        </div>
        <div>
          <div>
            {" "}
            <span className=" text-red-600">تلفن: </span> 04135420988{" "}
          </div>
        </div>
      </div>
      <div className="mt-10 text-sm text-gray-700" id="copyright">
        این وب‌‌سایت متعلق به شرکت جاویدان صنعت می‌باشد و تمامی حقوق آن محفوظ
        است.
      </div>
      <div className=" text-sm w-full bottom-0 md:text-right">
        طراحی و اجرا:
        <a href="http://peyman-khalili.ir"> پیمان خلیلی</a>
      </div>
    </div>
  );
};

export default Footer;
