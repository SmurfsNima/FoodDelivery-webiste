import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { FoodItem } from "./FoodItem";
export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="p-4">
      <h2 className="text-4xl font-semibold text-center">
        
        پرطرفدار ها در نزدیکی شما
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
        {food_list.map((item, index) => {
          console.log(category);
          if (category === "ALL" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
