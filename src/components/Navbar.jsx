import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Navbar = ({ setIsLogin }) => {
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  console.log(activeMenuItem);
  return (
    <nav className="flex justify-between items-center py-7">
      <div className="flex gap-6 items-center">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className="w-[10px] h-[10px] bg-[tomato] rounded-md absolute top-[-6px] right-[-6px]" />
        </div>

        <button
          onClick={() => setIsLogin(true)}
          className="border-[1px] text-sm px-5 py-[6px] md:px-7 md:py-2 rounded-full cursor-pointer md:text-lg border-[tomato] text-[#49557e] hover:bg-[#fff4f2] transition-[0.5s]"
        >
          ورود / ثبت نام
        </button>
      </div>
      <ul className=" hidden md:flex gap-7">
        <Link to="/">
          <li
            onClick={() => setActiveMenuItem("home")}
            className={`cursor-pointer ${
              activeMenuItem === "home"
                ? "border-b-[2px] border-[#49557e]  pb-2"
                : ""
            }`}
          >
            خانه
          </li>
        </Link>
        <a href="#menu">
          <li
            onClick={() => setActiveMenuItem("menu")}
            className={`cursor-pointer ${
              activeMenuItem === "menu"
                ? "border-b-[1px] border-[#49557e]  pb-2"
                : ""
            }`}
          >
            منو
          </li>
        </a>
        <a href="#mobile-app">
          <li
            onClick={() => setActiveMenuItem("mobile-app")}
            className={`cursor-pointer ${
              activeMenuItem === "mobile-app"
                ? "border-b-[1px] border-[#49557e]  pb-2"
                : ""
            }`}
          >
            اپلیکیشن موبایل
          </li>
        </a>
        <a href="#footer">
          <li
            onClick={() => setActiveMenuItem("contact-us")}
            className={`cursor-pointer ${
              activeMenuItem === "contact-us"
                ? "border-b-[1px] border-[#49557e]  pb-2"
                : ""
            }`}
          >
            ارتباط با ما
          </li>
        </a>
      </ul>

      <Link to="/">
        <h1 className="text-[44px] text-[tomato] font-bold">گوجه </h1>
      </Link>
    </nav>
  );
};
