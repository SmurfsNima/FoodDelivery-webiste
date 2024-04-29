import { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
export const FoodItem = ({ id, name, image, price, description }) => {
  const { 
    itemsCart,
    AddtoCart,
    removeFromCart,} = useContext(StoreContext)
  return (
    <div className="flex flex-col gap-4 rounded-lg cursor-pointer  shadow-xl">
      <div className="relative">
        <img className=" rounded-t-lg" src={image} alt="" />
        {!itemsCart[id] ? (
          <img
            className="absolute right-3 bottom-2 w-[35px] object-contain"
            onClick={() => AddtoCart(id)}
            src={assets.add_icon_white}
            alt="add"
          />
        ) : (
          <div className=" absolute right-3 bottom-2 flex items-center gap-2 bg-white rounded-full p-1 md:p-2">
            <img
              className=" w-[20px] md:w-[30px] object-contain"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p className="text-sm md:text-lg">{itemsCart[id]}</p>
            <img
              className=" w-[20px] md:w-[30px] object-contain"
              onClick={() => AddtoCart(id)}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>
      <div className=" p-[10px] md:p-[20px]">
        <div className="flex items-center justify-between ">
          <p className=" text-[11px] md:text-[18px] font-semibold">{name}</p>
          <img
            className=" w-[55px] md:w-[76px] object-contain"
            src={assets.rating_starts}
            alt=""
          />
        </div>
        <p className=" text-[14px] text-[#676767] mt-2 ">{description}</p>
        <h2 className="text-[tomato] text-[22px] font-medium my-[10px]">
          {Number(price).toLocaleString('fa')} تومان
        </h2>
      </div>
    </div>
  );
};
