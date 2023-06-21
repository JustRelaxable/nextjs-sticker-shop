"use client";
import { createContext, useContext, useState } from "react";

const context = createContext();
export default function CartContext({ children }) {
  const [cartContent, setCartContent] = useState([]);
  return (
    <context.Provider value={[cartContent, setCartContent]}>
      {children}
    </context.Provider>
  );
}

export function useCartContext() {
  return useContext(context);
}
