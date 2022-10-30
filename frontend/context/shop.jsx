import React from "react";

const ShopContext = React.createContext({
  cartItems: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([])



  const value = {
    cartItems,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => React.useContext(ShopContext);
