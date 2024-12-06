import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <MainContext.Provider value={{ cartCount }}>
      {children}
    </MainContext.Provider>
  );
};
