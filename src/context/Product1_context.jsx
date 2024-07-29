import React, { createContext, useState } from 'react';
import  {FRAME}  from '../components/Frame';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < FRAME.length+1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const Product1Context = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = FRAME.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]  + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  
  const updatecartitem=(newamount,itemid)=>{
    setCartItems((prev)=>({...prev,[itemid]:newamount}))
  }

  const contextValue = { cartItems, addToCart, removeFromCart,updatecartitem,getTotalCartAmount };



  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};