import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data.js";
import { useUser } from "@clerk/clerk-react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { user } = useUser();
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  // Không dùng useEffect, load trực tiếp
  const [properties] = useState(dummyProperties);
  const [showAgencyReq, setShowAgencyReq] = useState(false);
  const value = {
    properties,
    navigate,
    user,
    currency,
    setShowAgencyReq,
    showAgencyReq,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
