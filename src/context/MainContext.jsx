import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) ?? [],
  );
  const [isSideMobileMenuOpen, setIsSideMobileMenuOpen] = useState(false);
  const [isShopFilterOpen, setIsShopFilterOpen] = useState(false);
  const [isSideCartOpen, setIsSideCartOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [cartCount, setCartCount] = useState(cartItems.length);

  const toggleSideMobileMenu = () => {
    setIsSideMobileMenuOpen(!isSideMobileMenuOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };

  const toggleShopFilter = () => {
    setIsShopFilterOpen(!isShopFilterOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };

  const toggleSideCart = () => {
    setIsSideCartOpen(!isSideCartOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartCount(cartItems.length);
  }, [cartItems]);

  return (
    <MainContext.Provider
      value={{
        cartItems,
        setCartItems,
        isSideMobileMenuOpen,
        setIsSideMobileMenuOpen,
        toggleSideMobileMenu,
        isShopFilterOpen,
        setIsShopFilterOpen,
        toggleShopFilter,
        isSideCartOpen,
        setIsSideCartOpen,
        cartCount,
        setCartCount,
        toggleSideCart,
        isOverlayOpen,
        setIsOverlayOpen,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
