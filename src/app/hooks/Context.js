"use client";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  if (typeof window !== "undefined") {
    menu
      ? (window.document.querySelector("body").style.overflow = "hidden")
      : (window.document.querySelector("body").style.overflow = "scroll");
  }

  return (
    <Context.Provider value={{ menu, setMenu }}>{children}</Context.Provider>
  );
};
