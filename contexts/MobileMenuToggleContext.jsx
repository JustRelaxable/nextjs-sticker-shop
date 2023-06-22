"use client";

import { createContext, useContext, useState } from "react";

const context = createContext();
export default function MobileMenuToggleContext({ children }) {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  return (
    <context.Provider value={[mobileMenuActive, setMobileMenuActive]}>
      {children}
    </context.Provider>
  );
}
export function useMobileMenuToggleContext() {
  return useContext(context);
}
