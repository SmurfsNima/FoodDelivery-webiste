import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [itemsCart, setItemsCart] = useState({});
  const AddtoCart = (id) => {
    if (!itemsCart[id]) {
      setItemsCart((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setItemsCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };
  const removeFromCart = (id) => {
    setItemsCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const getTotalPrice = () => {
    let TotalPrice = 0;
    for (const item in itemsCart) {
      if (itemsCart[item] > 0) {
        let itemInfo = food_list.find((product) => product.id === item);
        TotalPrice += itemInfo.price * itemsCart[item];
      }
    }
    return TotalPrice;
  };
  const contextValue = {
    food_list,
    itemsCart,
    setItemsCart,
    AddtoCart,
    getTotalPrice,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
