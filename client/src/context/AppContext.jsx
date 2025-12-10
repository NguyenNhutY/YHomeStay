import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data.js";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  // Không dùng useEffect, load trực tiếp
  const [properties] = useState(dummyProperties);

  const value = {
    properties,
    navigate,
    currency,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
