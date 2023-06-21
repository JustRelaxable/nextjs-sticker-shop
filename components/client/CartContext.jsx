"use client";
import { createContext, useContext, useState } from "react";

const context = createContext();

export default function CartContext({ children }) {
  const [cartContent, setCartContent] = useState([]);
  function addToCart(productID, quantity) {
    setCartContent((c) => {
      let changedEntry = false;
      for (const product of c) {
        if (product.productID === productID) {
          product.quantity += quantity;
          changedEntry = true;
        }
      }
      if (!changedEntry) {
        c.push({ productID: productID, quantity: quantity });
      }
      return [...c];
    });
  }
  function removeFromCart(productID) {
    setCartContent((c) => {
      const index = c.findIndex((p) => p.productID === productID);
      c.splice(index, 1);
      return [...c];
    });
  }
  return (
    <context.Provider
      value={[cartContent, setCartContent, addToCart, removeFromCart]}
    >
      {children}
    </context.Provider>
  );
}

export function useCartContext() {
  return useContext(context);
}
