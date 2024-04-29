import React from "react";
import { useState , useRef } from "react";
import { assets } from "../assets/assets";
export const LoginPopup = ({ setIsLogin }) => {
  const [Curr, setCurr] = useState("ثبت نام");
  const Login = useRef();
  const handleClick = () => {
    if (Curr === "ثبت نام") {
      setCurr("ورود");
    } else {
      setCurr("ثبت نام");
    }
  };
  const CloseLogin = (e)=>{
    if(e.target === Login.current){
      setIsLogin(false)
    }
  }
  return (
    <div onClick={CloseLogin} ref={Login} className="w-full h-[100vh] absolute z-10 bg-[#00000090] flex items-center justify-center ">
      <div className="bg-white flex flex-col gap-8 p-8 rounded-lg">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{Curr}</h2>
          <img
            className="object-contain cursor-pointer"
            onClick={() => setIsLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <form className="flex flex-col gap-5">
          {Curr === "ثبت نام" ? (
            <input
              className="border-[1px] border-gray-600 rounded-md p-2"
              type="text"
              required
              placeholder="نام حود را وارد کنید"
            />
          ) : (
            ""
          )}
          <input
            className="border-[1px] border-gray-600 rounded-md p-2"
            type="email"
            required
            placeholder="ایمیل "
          />
          <input
            className="border-[1px] border-gray-600 rounded-md p-2"
            type="password"
            required
            placeholder="کلمه عبور"
          />
          <button className="bg-red-500 rounded-md w-full py-2 text-lg text-white">
            {Curr}
          </button>
          <div className="flex gap-2 cursor-pointer">
            <input type="checkbox" />
            <p className="text-gray-700">موافقت با قوانین و حریم شخصی </p>
          </div>
        </form>
        <p>
          {Curr === "ثبت نام"
            ? "ورود "
            : "ثبت نام "}{" "}
          <span className="text-[tomato] cursor-pointer" onClick={handleClick}>
            کلیک کنید
          </span>
        </p>
      </div>
    </div>
  );
};
