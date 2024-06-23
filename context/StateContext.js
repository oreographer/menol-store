"use client";

import { useState, useContext, createContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={{
        showMenu,
        setShowMenu,
        showCart,
        setShowCart,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);