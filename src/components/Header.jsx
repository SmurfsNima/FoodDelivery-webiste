import React from "react";

export const Header = () => {
  return (
    <div className="bg-header-bg w-full h-[45vw] md:h-[40vw]  object-contain bg-no-repeat relative my-10 rounded-lg">
      <div
        id="header-banner"
        className="flex flex-col gap-6 absolute bottom-[10%] right-[7%]  "
      >
        <h2 className=" text-xl text-[#3A3D42] md:text-6xl font-semibold ">
          غذای مورد علاقه <br />خود را سفارش دهید
        </h2>
        <p className=" hidden md:block text-xl text-[#3A3D42]  max-w-xl leading-7">
        به دنیای طعم‌های فراموش‌نشدنی خوش آمدید - جایی که هر گاز از غذا، داستانی از شور و عشق به آشپزی را روایت می‌کند. در گوجه، ما به ارائه غذاهایی با مواد اولیه
        تازه و دستپخت‌های خانگی معطوف هستیم که هر وعده‌ای را به یک تجربه خاطره‌انگیز تبدیل می‌کند. از میان منوی متنوع ما دل‌خواه خود را انتخاب کنید و در کنار دکوری گرم و دعوت‌کننده، لذت ببرید. نوید طعم‌های اصیل و خدماتی بی‌نظیر را با ما تجربه کنید - جایی که هر وعده، بیش از یک وعده غذایی، جشنی از زندگی است."


        </p>
        <button className="bg-black text-white  text-sm rounded-full h-9 w-[110px] md:h-10 md:w-[130px]">
         مشاهده منو
        </button>
      </div>
    </div>
  );
};
