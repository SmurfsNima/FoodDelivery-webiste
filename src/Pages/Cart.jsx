import React from "react";
import { useContext } from "react";
import { food_list } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
export const Cart = () => {
  const { itemsCart, removeFromCart , getTotalPrice } = useContext(StoreContext);
  return (
    <div className="mt-20">
      <div>
        <div className="grid grid-cols-cart text-gray-600">
          <span>محصول</span>
          <span>نام محصول</span>
          <span>قیمت</span>
          <span>تعداد</span>
          <span>قیمت کل</span>
          <span>حذف از سبد خرید</span>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (itemsCart[item.id] > 0) {
            return (
              <div>
                <div key={i} className="grid grid-cols-cart my-6">
                  <img className="w-[50px]" src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{Number(item.price).toLocaleString('fa')} تومان</p>
                  <p>{itemsCart[item.id]}</p>
                  <p>{Number(item.price * itemsCart[item.id]).toLocaleString('fa')}</p>
                  <p onClick={() => removeFromCart(item.id)} className="cursor-pointer">X</p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="  flex flex-col-reverse md:flex-row justify-between gap-10  mt-[80px]">
        <div className=" flex-1 flex flex-col max-w-lg gap-5">
            <h2 className="text-3xl font-bold">سبد خرید</h2>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <p>قیمت محصول</p>
                    <p>{Number(getTotalPrice()).toLocaleString('fa')}</p>
                </div>
                <hr />
                <div  className="flex justify-between">
                    <p>هزینه ارسال</p>
                    <p>{Number(30000).toLocaleString('fa')} تومان</p>
                </div>
                <hr />
                <div  className="flex justify-between">
                    <p>جمع کل</p>
                    <p>{Number(getTotalPrice() + 30000).toLocaleString('fa')}</p>
                </div>
            </div>
            <button className="bg-[tomato] text-white px-6 py-3 rounded-md max-w-[265px] mt-6">ثبت سفارش</button>
        </div>
        <div className="flex items-center justify-start md:justify-center">
            <div>
                <p>کد تخفیف</p>
                <div className="mt-2 flex justify-between">
                    <input className="bg-[#e9e9e9] rounded-sm  pl-3" type="text" placeholder="کد تخفیف خود را وارد کنید" />
                    <button className="bg-black text-white w-[150px] rounded-md py-2 px-4" >ثبت کد تخفیف</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
